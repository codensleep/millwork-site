import { useState } from 'react';
import type { QuickEstimateInput, ProjectType, MaterialType } from '../../types';
import { quickEstimate, formatCurrency } from '../../utils/pricing';

const PROJECT_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'kitchen',   label: 'Custom Kitchen' },
  { value: 'cabinet',   label: 'Custom Cabinets' },
  { value: 'closet',    label: 'Custom Closet' },
  { value: 'furniture', label: 'Custom Furniture' },
  { value: 'builtin',   label: 'Built-In System' },
];

const MATERIAL_OPTIONS: { value: MaterialType; label: string; note: string }[] = [
  { value: 'laminate',    label: 'Laminate',     note: 'Budget-friendly' },
  { value: 'mdf',         label: 'MDF',          note: 'Smooth, paintable' },
  { value: 'plywood',     label: 'Plywood',      note: 'Premium substrate' },
  { value: 'white-oak',   label: 'White Oak',    note: 'Solid hardwood' },
  { value: 'walnut',      label: 'Walnut',       note: 'Luxury hardwood' },
];

interface Props {
  onSwitchDetailed: () => void;
}

export default function QuickEstimate({ onSwitchDetailed }: Props) {
  const [form, setForm] = useState<QuickEstimateInput>({
    projectType: 'kitchen',
    linearFeet: 10,
    material: 'plywood',
  });
  const [result, setResult] = useState<ReturnType<typeof quickEstimate> | null>(null);

  const compute = () => setResult(quickEstimate(form));

  return (
    <div className="bg-canvas border border-border p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--wood)' }} />
        <p className="font-display text-2xl font-light">Quick Ballpark</p>
        <span className="ml-auto text-xs font-500 tracking-widest uppercase text-ink-muted">3 fields · under 30 sec</span>
      </div>

      <div className="space-y-5 mb-8">
        {/* Project type */}
        <div>
          <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Project Type</label>
          <div className="relative">
            <select
              className="select-field pr-10"
              value={form.projectType}
              onChange={e => setForm(f => ({ ...f, projectType: e.target.value as ProjectType }))}
            >
              {PROJECT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-muted">↓</span>
          </div>
        </div>

        {/* Linear feet */}
        <div>
          <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">
            Approximate Width / Linear Feet
            <span className="ml-2 font-300 normal-case">({form.linearFeet} ft)</span>
          </label>
          <input
            type="range"
            min={4} max={40} step={1}
            value={form.linearFeet}
            onChange={e => setForm(f => ({ ...f, linearFeet: Number(e.target.value) }))}
            className="w-full accent-wood h-1 cursor-pointer"
            style={{ accentColor: 'var(--wood)' }}
          />
          <div className="flex justify-between text-xs text-ink-muted mt-1">
            <span>4 ft</span><span>40 ft</span>
          </div>
        </div>

        {/* Material */}
        <div>
          <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Material</label>
          <div className="grid grid-cols-5 gap-1">
            {MATERIAL_OPTIONS.map(o => (
              <button
                key={o.value}
                onClick={() => setForm(f => ({ ...f, material: o.value }))}
                className={`py-3 px-2 text-center border transition-all duration-200 ${
                  form.material === o.value
                    ? 'border-wood bg-wood/10 text-ink'
                    : 'border-border text-ink-muted hover:border-ink'
                }`}
              >
                <p className="text-xs font-500">{o.label}</p>
                <p className="text-xs font-300 text-ink-muted hidden sm:block mt-0.5">{o.note}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Compute button */}
      <button onClick={compute} className="btn-primary w-full justify-center mb-6">
        Get Ballpark Estimate
      </button>

      {/* Result */}
      {result && (
        <div className="border border-wood bg-wood/5 p-6">
          <p className="text-xs font-500 tracking-widest uppercase text-wood mb-4">Estimate Range</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Low',  val: result.low },
              { label: 'Mid',  val: result.mid },
              { label: 'High', val: result.high },
            ].map(r => (
              <div key={r.label} className="text-center">
                <p className="text-xs uppercase tracking-widest text-ink-muted mb-1">{r.label}</p>
                <p className="font-display text-2xl font-light">{formatCurrency(r.val)}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-300 text-ink-muted text-center">
            Preliminary estimate only. Not a final quote.
          </p>
        </div>
      )}

      {/* Switch to detailed */}
      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm font-300 text-ink-muted mb-3">
          Want a detailed breakdown with materials, drawers, and installation?
        </p>
        <button
          onClick={onSwitchDetailed}
          className="text-sm font-500 tracking-wide text-wood hover:text-wood-dark transition-colors underline underline-offset-4"
        >
          Open Detailed Planner →
        </button>
      </div>
    </div>
  );
}
