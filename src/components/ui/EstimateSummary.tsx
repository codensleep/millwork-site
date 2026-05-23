import type { DetailedEstimate } from '../../types';
import { formatCurrency, exportEstimateAsText, exportEstimateAsJSON } from '../../utils/pricing';

interface Props {
  estimate: DetailedEstimate;
}

export default function EstimateSummary({ estimate }: Props) {
  const { breakdown, range, subtotal } = estimate;

  const lineItems = [
    { label: 'Base price',         value: breakdown.base },
    { label: 'Linear footage',     value: breakdown.linearFootage },
    { label: 'Material upcharge',  value: breakdown.materialAdder },
    { label: 'Finish upcharge',    value: breakdown.finishAdder },
    { label: 'Drawers',            value: breakdown.drawers },
    { label: 'Doors',              value: breakdown.doors },
    { label: 'Countertop',         value: breakdown.countertop },
    { label: 'LED lighting',       value: breakdown.ledLighting },
    { label: 'Installation',       value: breakdown.installation },
  ].filter(li => li.value > 0);

  const copyText = () => {
    navigator.clipboard.writeText(exportEstimateAsText(estimate));
  };

  const downloadText = () => {
    const blob = new Blob([exportEstimateAsText(estimate)], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'form-grain-estimate.txt';
    a.click();
  };

  const downloadJSON = () => {
    const blob = new Blob([exportEstimateAsJSON(estimate)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'form-grain-estimate.json';
    a.click();
  };

  return (
    <div className="border border-border bg-canvas">
      {/* Header */}
      <div className="bg-ink text-canvas px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-display text-xl font-light">Estimate Summary</p>
          <p className="text-xs font-300 mt-0.5" style={{ color: 'rgba(247,244,239,0.5)' }}>
            Preliminary only — not a final quote
          </p>
        </div>
        <p className="font-display text-2xl font-light" style={{ color: 'var(--wood)' }}>
          {formatCurrency(subtotal)}
        </p>
      </div>

      {/* Line items */}
      <div className="p-6 space-y-2 border-b border-border">
        {lineItems.map(li => (
          <div key={li.label} className="flex justify-between items-center py-1">
            <span className="text-sm font-300 text-ink-muted">{li.label}</span>
            <span className="text-sm font-400 text-ink tabular-nums">{formatCurrency(li.value)}</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-3 border-t border-border">
          <span className="text-xs font-500 tracking-widest uppercase">Mid Estimate</span>
          <span className="font-display text-lg font-400">{formatCurrency(subtotal)}</span>
        </div>
      </div>

      {/* Range */}
      <div className="p-6 border-b border-border">
        <p className="text-xs font-500 tracking-widest uppercase text-ink-muted mb-4">Estimate Range</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Low',  val: range.low,  note: '—15%' },
            { label: 'Mid',  val: range.mid,  note: 'typical' },
            { label: 'High', val: range.high, note: '+25%' },
          ].map(r => (
            <div
              key={r.label}
              className={`p-4 text-center border ${r.label === 'Mid' ? 'border-wood bg-wood/5' : 'border-border'}`}
            >
              <p className={`text-xs font-500 tracking-widest uppercase mb-1 ${r.label === 'Mid' ? 'text-wood' : 'text-ink-muted'}`}>
                {r.label}
              </p>
              <p className="font-display text-lg font-400">{formatCurrency(r.val)}</p>
              <p className="text-xs font-300 text-ink-muted mt-0.5">{r.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-6 py-4 bg-surface">
        <p className="text-xs font-300 text-ink-muted leading-relaxed">
          ⚠ This estimate is based on standard pricing guidelines and does not account for site conditions, structural requirements, or design complexity. Contact us for an accurate quote.
        </p>
      </div>

      {/* Export actions */}
      <div className="p-6 flex flex-wrap gap-3">
        <button onClick={copyText} className="btn-outline py-3 px-5 text-xs flex-1 justify-center">
          Copy Summary
        </button>
        <button onClick={downloadText} className="btn-outline py-3 px-5 text-xs flex-1 justify-center">
          Download .txt
        </button>
        <button onClick={downloadJSON} className="btn-outline py-3 px-5 text-xs flex-1 justify-center">
          Export JSON
        </button>
      </div>
    </div>
  );
}
