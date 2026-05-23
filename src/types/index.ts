// ─── Project Types ────────────────────────────────────────────────────────────

export type ProjectType =
  | 'kitchen'
  | 'cabinet'
  | 'closet'
  | 'furniture'
  | 'builtin';

export type MaterialType =
  | 'plywood'
  | 'mdf'
  | 'white-oak'
  | 'walnut'
  | 'laminate';

export type FinishType =
  | 'paint'
  | 'stain'
  | 'natural'
  | 'two-tone';

export type CountertopType =
  | 'none'
  | 'laminate'
  | 'quartz'
  | 'marble';

export type BudgetRange =
  | 'under-10k'
  | '10k-25k'
  | '25k-50k'
  | '50k-plus';

// ─── Quick Estimate ───────────────────────────────────────────────────────────

export interface QuickEstimateInput {
  projectType: ProjectType;
  linearFeet: number;
  material: MaterialType;
}

export interface EstimateRange {
  low: number;
  mid: number;
  high: number;
}

// ─── Detailed Planner ─────────────────────────────────────────────────────────

export interface DetailedPlannerInput {
  // Room dimensions
  widthFt: number;
  heightFt: number;
  depthFt: number;

  // Project
  projectType: ProjectType;
  material: MaterialType;
  finish: FinishType;

  // Components
  numDrawers: number;
  numDoors: number;
  countertop: CountertopType;
  ledLighting: boolean;
  installation: boolean;
}

export interface DetailedEstimate {
  input: DetailedPlannerInput;
  breakdown: {
    base: number;
    linearFootage: number;
    materialAdder: number;
    finishAdder: number;
    drawers: number;
    doors: number;
    countertop: number;
    ledLighting: number;
    installation: number;
  };
  subtotal: number;
  range: EstimateRange;
  sqft: number;
  linearFt: number;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectType | '';
  dimensions: string;
  budget: BudgetRange | '';
  message: string;
}

// ─── Label Maps ───────────────────────────────────────────────────────────────

export const PROJECT_LABELS: Record<ProjectType, string> = {
  kitchen:   'Custom Kitchen',
  cabinet:   'Custom Cabinets',
  closet:    'Custom Closet',
  furniture: 'Custom Furniture',
  builtin:   'Built-In System',
};

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  plywood:    'Plywood (Premium)',
  mdf:        'MDF',
  'white-oak': 'White Oak (Solid)',
  walnut:     'Walnut (Solid)',
  laminate:   'Laminate',
};

export const FINISH_LABELS: Record<FinishType, string> = {
  paint:    'Painted',
  stain:    'Stained',
  natural:  'Natural / Clear Coat',
  'two-tone': 'Two-Tone',
};

export const COUNTERTOP_LABELS: Record<CountertopType, string> = {
  none:     'No Countertop',
  laminate: 'Laminate',
  quartz:   'Quartz',
  marble:   'Marble / Stone',
};
