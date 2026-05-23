/**
 * pricing.ts
 * ──────────────────────────────────────────────────────────────────────────────
 * All cost estimation logic lives here.
 * To connect a real backend later, swap these functions for API calls.
 * ──────────────────────────────────────────────────────────────────────────────
 */

import type {
  ProjectType,
  MaterialType,
  FinishType,
  CountertopType,
  QuickEstimateInput,
  DetailedPlannerInput,
  EstimateRange,
  DetailedEstimate,
} from '../types';

// ─── Base Prices ──────────────────────────────────────────────────────────────

const BASE_PRICE: Record<ProjectType, number> = {
  kitchen:   8_000,
  cabinet:   2_500,
  closet:    3_500,
  furniture: 4_000,
  builtin:   5_000,
};

const PRICE_PER_LINEAR_FT: Record<ProjectType, number> = {
  kitchen:   350,
  cabinet:   200,
  closet:    150,
  furniture: 250,
  builtin:   280,
};

// ─── Multipliers ──────────────────────────────────────────────────────────────

const MATERIAL_MULTIPLIER: Record<MaterialType, number> = {
  laminate:    0.75,
  mdf:         0.85,
  plywood:     1.00,
  'white-oak': 1.60,
  walnut:      1.90,
};

const FINISH_ADDER: Record<FinishType, number> = {
  natural:    0,
  paint:      400,
  stain:      600,
  'two-tone': 1_100,
};

// ─── Component Costs ──────────────────────────────────────────────────────────

const DRAWER_COST    = 150;
const DOOR_COST      = 120;
const LED_COST       = 450;
const INSTALL_RATE   = 0.15; // 15% of pre-install subtotal

const COUNTERTOP_COST: Record<CountertopType, number> = {
  none:     0,
  laminate: 800,
  quartz:   1_800,
  marble:   3_200,
};

// ─── Quick Estimate ───────────────────────────────────────────────────────────

export function quickEstimate(input: QuickEstimateInput): EstimateRange {
  const base = BASE_PRICE[input.projectType];
  const linear = PRICE_PER_LINEAR_FT[input.projectType] * input.linearFeet;
  const multiplier = MATERIAL_MULTIPLIER[input.material];
  const mid = (base + linear) * multiplier;

  return {
    low:  Math.round(mid * 0.80),
    mid:  Math.round(mid),
    high: Math.round(mid * 1.35),
  };
}

// ─── Detailed Estimate ────────────────────────────────────────────────────────

export function detailedEstimate(input: DetailedPlannerInput): DetailedEstimate {
  const linearFt = input.widthFt; // primary dimension for linear pricing
  const sqft = input.widthFt * input.heightFt;

  const base           = BASE_PRICE[input.projectType];
  const linearFootage  = PRICE_PER_LINEAR_FT[input.projectType] * linearFt;
  const subtotalBefore = (base + linearFootage);
  const materialAdder  = subtotalBefore * (MATERIAL_MULTIPLIER[input.material] - 1);
  const finishAdder    = FINISH_ADDER[input.finish];
  const drawers        = DRAWER_COST * input.numDrawers;
  const doors          = DOOR_COST * input.numDoors;
  const countertop     = COUNTERTOP_COST[input.countertop];
  const ledLighting    = input.ledLighting ? LED_COST : 0;

  const preInstall = subtotalBefore + materialAdder + finishAdder + drawers + doors + countertop + ledLighting;
  const installation = input.installation ? Math.round(preInstall * INSTALL_RATE) : 0;

  const subtotal = Math.round(preInstall + installation);

  return {
    input,
    breakdown: {
      base,
      linearFootage:  Math.round(linearFootage),
      materialAdder:  Math.round(materialAdder),
      finishAdder,
      drawers,
      doors,
      countertop,
      ledLighting,
      installation,
    },
    subtotal,
    range: {
      low:  Math.round(subtotal * 0.85),
      mid:  subtotal,
      high: Math.round(subtotal * 1.25),
    },
    sqft:     Math.round(sqft * 10) / 10,
    linearFt: Math.round(linearFt * 10) / 10,
  };
}

// ─── Formatters ───────────────────────────────────────────────────────────────

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function exportEstimateAsText(estimate: DetailedEstimate): string {
  const { input, breakdown, range, sqft, linearFt } = estimate;
  const lines = [
    '═══════════════════════════════════════════',
    '  FORM & GRAIN — PROJECT ESTIMATE SUMMARY',
    '═══════════════════════════════════════════',
    '',
    `  Project Type : ${input.projectType.toUpperCase()}`,
    `  Dimensions   : ${input.widthFt}W × ${input.heightFt}H × ${input.depthFt}D (ft)`,
    `  Linear Ft    : ${linearFt} lf`,
    `  Sq Ft        : ${sqft} sf`,
    `  Material     : ${input.material}`,
    `  Finish       : ${input.finish}`,
    '',
    '  ── COST BREAKDOWN ──',
    `  Base price          : ${formatCurrency(breakdown.base)}`,
    `  Linear footage      : ${formatCurrency(breakdown.linearFootage)}`,
    `  Material upcharge   : ${formatCurrency(breakdown.materialAdder)}`,
    `  Finish upcharge     : ${formatCurrency(breakdown.finishAdder)}`,
    `  Drawers (${input.numDrawers})        : ${formatCurrency(breakdown.drawers)}`,
    `  Doors   (${input.numDoors})        : ${formatCurrency(breakdown.doors)}`,
    `  Countertop          : ${formatCurrency(breakdown.countertop)}`,
    `  LED lighting        : ${formatCurrency(breakdown.ledLighting)}`,
    `  Installation        : ${formatCurrency(breakdown.installation)}`,
    '',
    '  ── ESTIMATE RANGE ──',
    `  Low  : ${formatCurrency(range.low)}`,
    `  Mid  : ${formatCurrency(range.mid)}`,
    `  High : ${formatCurrency(range.high)}`,
    '',
    '  ⚠ This is a preliminary estimate only.',
    '  Final pricing requires an on-site consultation.',
    '',
    `  Generated: ${new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}`,
    '  form-and-grain.com | hello@formandgrain.com',
    '═══════════════════════════════════════════',
  ];
  return lines.join('\n');
}

export function exportEstimateAsJSON(estimate: DetailedEstimate): string {
  return JSON.stringify(
    {
      generated: new Date().toISOString(),
      ...estimate,
    },
    null,
    2
  );
}
