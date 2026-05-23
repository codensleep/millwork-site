import type { DetailedPlannerInput } from '../../types';
import { PROJECT_LABELS, MATERIAL_LABELS, FINISH_LABELS, COUNTERTOP_LABELS } from '../../types';

interface Props {
  input: DetailedPlannerInput;
}

export default function DimensionCard({ input }: Props) {
  const { widthFt, heightFt, depthFt } = input;
  const svgW = 320;
  const svgH = 200;
  const pad  = 40;

  const scale = Math.min((svgW - pad * 2) / Math.max(widthFt, 1), (svgH - pad * 2) / Math.max(heightFt, 1));
  const rW = widthFt * scale;
  const rH = heightFt * scale;
  const rx = (svgW - rW) / 2;
  const ry = (svgH - rH) / 2;

  const drawerCount = Math.min(input.numDrawers, 5);
  const doorCount   = Math.min(input.numDoors,   4);
  const totalSlots  = Math.max(drawerCount + doorCount + 1, 1);

  return (
    <div className="border border-border bg-canvas p-6">
      <p className="section-label mb-4">Dimension Preview</p>

      <div className="bg-surface border border-border mb-6" style={{ padding: '16px' }}>
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ maxHeight: 220 }}>
          <rect x={rx} y={ry} width={rW} height={rH} fill="#F7F4EF" stroke="#C4935A" strokeWidth="1.5" />

          {Array.from({ length: drawerCount }).map((_, i) => {
            const dH = rH / totalSlots;
            const dy = ry + dH * i;
            return (
              <g key={`drawer-${i}`}>
                <line x1={rx + 4} y1={dy + dH} x2={rx + rW - 4} y2={dy + dH} stroke="#D4CFC6" strokeWidth="1" strokeDasharray="2,3" />
                <rect x={rx + rW / 2 - 12} y={dy + dH * 0.4} width={24} height={3} fill="none" stroke="#C4935A" strokeWidth="1" rx="1" />
              </g>
            );
          })}

          {Array.from({ length: doorCount }).map((_, i) => {
            const slotH = rH / totalSlots;
            const doorW = doorCount > 0 ? rW / doorCount : rW;
            const dy = ry + slotH * drawerCount;
            const dx = rx + doorW * i;
            return (
              <g key={`door-${i}`}>
                <rect x={dx + 2} y={dy + 2} width={doorW - 4} height={slotH * (totalSlots - drawerCount) - 4} fill="none" stroke="#D4CFC6" strokeWidth="1" />
                <rect x={dx + doorW - 10} y={dy + slotH * 0.35} width={2} height={slotH * 0.3} fill="#C4935A" rx="1" />
              </g>
            );
          })}

          <line x1={rx} y1={ry - 12} x2={rx + rW} y2={ry - 12} stroke="#6B6560" strokeWidth="0.75" />
          <line x1={rx} y1={ry - 16} x2={rx} y2={ry - 8} stroke="#6B6560" strokeWidth="0.75" />
          <line x1={rx + rW} y1={ry - 16} x2={rx + rW} y2={ry - 8} stroke="#6B6560" strokeWidth="0.75" />
          <text x={rx + rW / 2} y={ry - 18} textAnchor="middle" fill="#6B6560" fontSize="8" fontFamily="Jost, sans-serif">{widthFt} ft</text>

          <line x1={rx + rW + 12} y1={ry} x2={rx + rW + 12} y2={ry + rH} stroke="#6B6560" strokeWidth="0.75" />
          <line x1={rx + rW + 8} y1={ry} x2={rx + rW + 16} y2={ry} stroke="#6B6560" strokeWidth="0.75" />
          <line x1={rx + rW + 8} y1={ry + rH} x2={rx + rW + 16} y2={ry + rH} stroke="#6B6560" strokeWidth="0.75" />
          <text x={rx + rW + 22} y={ry + rH / 2 + 4} fill="#6B6560" fontSize="8" fontFamily="Jost, sans-serif">{heightFt} ft</text>

          {input.ledLighting && <rect x={rx + 2} y={ry + 2} width={rW - 4} height={3} fill="#FFD580" opacity="0.7" rx="1" />}
          {input.countertop !== 'none' && <rect x={rx - 2} y={ry - 6} width={rW + 4} height={6} fill="#C4935A" opacity="0.3" />}
        </svg>
      </div>

      <div>
        {([
          ['Dimensions', `${widthFt}W \u00d7 ${heightFt}H \u00d7 ${depthFt}D ft`],
          ['Type',       PROJECT_LABELS[input.projectType]],
          ['Material',   MATERIAL_LABELS[input.material]],
          ['Finish',     FINISH_LABELS[input.finish]],
          ['Drawers',    String(input.numDrawers)],
          ['Doors',      String(input.numDoors)],
          ['Countertop', COUNTERTOP_LABELS[input.countertop]],
          ['LED Lighting', input.ledLighting ? 'Yes' : 'No'],
          ['Installation', input.installation ? 'Included' : 'Self-install'],
        ] as [string, string][]).map(([label, val]) => (
          <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <span className="text-xs font-500 tracking-wide uppercase text-ink-muted">{label}</span>
            <span className="text-sm font-400 text-ink">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
