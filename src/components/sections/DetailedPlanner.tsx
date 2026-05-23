import { useState } from 'react';
import type {
  DetailedPlannerInput,
  ProjectType, MaterialType, FinishType, CountertopType,
} from '../../types';
import { detailedEstimate } from '../../utils/pricing';
import DimensionCard from '../ui/DimensionCard';
import EstimateSummary from '../ui/EstimateSummary';

const defaultInput: DetailedPlannerInput = {
  widthFt: 10,
  heightFt: 8,
  depthFt: 2,
  projectType: 'kitchen',
  material: 'plywood',
  finish: 'paint',
  numDrawers: 4,
  numDoors: 4,
  countertop: 'quartz',
  ledLighting: false,
  installation: true,
};

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">{label}</label>
      <div className="relative">
        <select className="select-field pr-10 w-full" value={value} onChange={e => onChange(e.target.value)}>
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-muted text-sm">↓</span>
      </div>
    </div>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  suffix?: string;
}

function NumberField({ label, value, min = 0, max = 999, onChange, suffix }: NumberFieldProps) {
  return (
    <div>
      <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">{label}</label>
      <div className="flex items-center border border-border">
        <button
          className="px-4 py-3 text-ink-muted hover:text-ink hover:bg-surface transition-colors text-lg"
          onClick={() => onChange(Math.max(min, value - 1))}
        >−</button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={e => onChange(Math.max(min, Math.min(max, Number(e.target.value))))}
          className="flex-1 text-center bg-transparent py-3 text-sm font-400 focus:outline-none"
        />
        {suffix && <span className="text-xs text-ink-muted pr-3">{suffix}</span>}
        <button
          className="px-4 py-3 text-ink-muted hover:text-ink hover:bg-surface transition-colors text-lg"
          onClick={() => onChange(Math.min(max, value + 1))}
        >+</button>
      </div>
    </div>
  );
}

interface Props {
  onSwitchQuick: () => void;
}

export default function DetailedPlanner({ onSwitchQuick }: Props) {
  const [form, setForm] = useState<DetailedPlannerInput>(defaultInput);
  const [estimate, setEstimate] = useState<ReturnType<typeof detailedEstimate> | null>(null);

  const set = <K extends keyof DetailedPlannerInput>(key: K, val: DetailedPlannerInput[K]) =>
    setForm(f => ({ ...f, [key]: val }));

  const compute = () => setEstimate(detailedEstimate(form));

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 flex-shrink-0" style={{ background: 'var(--wood)' }} />
        <p className="font-display text-2xl font-light">Detailed Project Planner</p>
        <button
          onClick={onSwitchQuick}
          className="ml-auto text-xs font-500 tracking-wide text-ink-muted hover:text-ink transition-colors underline underline-offset-4"
        >
          ← Quick Estimate
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Form ─────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Section: Dimensions */}
          <div className="border border-border p-6">
            <p className="text-xs font-500 tracking-widest uppercase text-wood mb-5">Room Dimensions</p>
            <div className="grid grid-cols-3 gap-4">
              <NumberField label="Width (ft)"  value={form.widthFt}  min={2} max={60} onChange={v => set('widthFt', v)} />
              <NumberField label="Height (ft)" value={form.heightFt} min={2} max={16} onChange={v => set('heightFt', v)} />
              <NumberField label="Depth (ft)"  value={form.depthFt}  min={1} max={6}  onChange={v => set('depthFt', v)} />
            </div>
          </div>

          {/* Section: Project */}
          <div className="border border-border p-6">
            <p className="text-xs font-500 tracking-widest uppercase text-wood mb-5">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField
                label="Project Type"
                value={form.projectType}
                onChange={v => set('projectType', v as ProjectType)}
                options={[
                  { value: 'kitchen',   label: 'Custom Kitchen' },
                  { value: 'cabinet',   label: 'Custom Cabinets' },
                  { value: 'closet',    label: 'Custom Closet' },
                  { value: 'furniture', label: 'Custom Furniture' },
                  { value: 'builtin',   label: 'Built-In System' },
                ]}
              />
              <SelectField
                label="Material"
                value={form.material}
                onChange={v => set('material', v as MaterialType)}
                options={[
                  { value: 'laminate',    label: 'Laminate' },
                  { value: 'mdf',         label: 'MDF' },
                  { value: 'plywood',     label: 'Plywood (Premium)' },
                  { value: 'white-oak',   label: 'White Oak (Solid)' },
                  { value: 'walnut',      label: 'Walnut (Solid)' },
                ]}
              />
              <SelectField
                label="Finish"
                value={form.finish}
                onChange={v => set('finish', v as FinishType)}
                options={[
                  { value: 'natural',   label: 'Natural / Clear Coat' },
                  { value: 'paint',     label: 'Painted' },
                  { value: 'stain',     label: 'Stained' },
                  { value: 'two-tone',  label: 'Two-Tone' },
                ]}
              />
              <SelectField
                label="Countertop"
                value={form.countertop}
                onChange={v => set('countertop', v as CountertopType)}
                options={[
                  { value: 'none',     label: 'No Countertop' },
                  { value: 'laminate', label: 'Laminate' },
                  { value: 'quartz',   label: 'Quartz' },
                  { value: 'marble',   label: 'Marble / Stone' },
                ]}
              />
            </div>
          </div>

          {/* Section: Components */}
          <div className="border border-border p-6">
            <p className="text-xs font-500 tracking-widest uppercase text-wood mb-5">Components</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <NumberField label="Drawers" value={form.numDrawers} min={0} max={30} onChange={v => set('numDrawers', v)} />
              <NumberField label="Doors"   value={form.numDoors}   min={0} max={30} onChange={v => set('numDoors', v)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* LED toggle */}
              <button
                onClick={() => set('ledLighting', !form.ledLighting)}
                className={`p-4 border flex items-center gap-3 text-left transition-all duration-200 ${
                  form.ledLighting ? 'border-wood bg-wood/5' : 'border-border'
                }`}
              >
                <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${
                  form.ledLighting ? 'border-wood bg-wood' : 'border-border'
                }`}>
                  {form.ledLighting && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <div>
                  <p className="text-sm font-400">LED Lighting</p>
                  <p className="text-xs text-ink-muted font-300">Under-cabinet strips</p>
                </div>
              </button>

              {/* Installation toggle */}
              <button
                onClick={() => set('installation', !form.installation)}
                className={`p-4 border flex items-center gap-3 text-left transition-all duration-200 ${
                  form.installation ? 'border-wood bg-wood/5' : 'border-border'
                }`}
              >
                <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${
                  form.installation ? 'border-wood bg-wood' : 'border-border'
                }`}>
                  {form.installation && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <div>
                  <p className="text-sm font-400">Installation</p>
                  <p className="text-xs text-ink-muted font-300">Professional install (+15%)</p>
                </div>
              </button>
            </div>
          </div>

          {/* Compute button */}
          <button onClick={compute} className="btn-wood w-full justify-center py-5 text-base">
            Calculate Detailed Estimate
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ── Preview & Results ─────────────────────────────── */}
        <div className="space-y-6">
          <DimensionCard input={form} />
          {estimate && <EstimateSummary estimate={estimate} />}
          {!estimate && (
            <div className="border border-dashed border-border p-8 text-center">
              <p className="text-sm font-300 text-ink-muted">
                Fill in your project details and click<br />
                <span className="font-400 text-ink">Calculate</span> to see your estimate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
