const comparisons = [
  {
    attribute: 'Fit',
    custom: 'Designed to exact room dimensions — zero gaps, no fillers, no fudge',
    bigbox: 'Standard sizes that never quite fit; filler strips hide the gaps',
  },
  {
    attribute: 'Storage',
    custom: 'Every drawer, shelf, and zone configured around how you actually live',
    bigbox: 'Fixed interior options; you adapt to the cabinet, not the other way around',
  },
  {
    attribute: 'Material',
    custom: 'Solid hardwood, premium plywood, or quality panel goods — your choice',
    bigbox: 'Particleboard core with thin veneer; swells, chips, and sags over time',
  },
  {
    attribute: 'Appearance',
    custom: 'Architectural-grade reveals, shadow gaps, integrated handles, flush faces',
    bigbox: 'Generic door profiles; visible hinges; bulky face frames',
  },
  {
    attribute: 'Home Value',
    custom: 'Premium millwork is one of the top ROI investments in residential real estate',
    bigbox: 'Appraisers and buyers know the difference — it shows in the offer price',
  },
  {
    attribute: 'Lifestyle',
    custom: 'Built for how you cook, dress, work, and live — a space that makes daily life better',
    bigbox: 'Designed for the average buyer — which means it\'s perfect for no one',
  },
];

export default function WhyCustom() {
  return (
    <section className="py-28 md:py-36 bg-canvas" id="why-custom">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Custom vs Big-Box</p>
          <h2 className="section-heading max-w-2xl">
            The difference is visible<br />the moment you open the door.
          </h2>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-3 gap-px bg-border mb-px">
          <div className="bg-canvas py-4 px-6">
            <p className="text-xs font-500 tracking-widest uppercase text-ink-muted">Attribute</p>
          </div>
          <div className="bg-ink text-canvas py-4 px-6">
            <p className="text-xs font-500 tracking-widest uppercase" style={{ color: 'var(--wood)' }}>Custom Millwork</p>
          </div>
          <div className="bg-surface py-4 px-6">
            <p className="text-xs font-500 tracking-widest uppercase text-ink-muted">Big-Box Cabinets</p>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-px">
          {comparisons.map((c, i) => (
            <div key={c.attribute} className="grid grid-cols-3 gap-px bg-border">
              <div className={`py-6 px-6 flex items-center ${i % 2 === 0 ? 'bg-canvas' : 'bg-surface'}`}>
                <p className="text-sm font-500 tracking-wide">{c.attribute}</p>
              </div>
              <div className="bg-ink text-canvas py-6 px-6">
                <p className="text-sm font-300 leading-relaxed" style={{ color: 'rgba(247,244,239,0.85)' }}>
                  {c.custom}
                </p>
              </div>
              <div className={`py-6 px-6 ${i % 2 === 0 ? 'bg-canvas' : 'bg-surface'}`}>
                <p className="text-sm font-300 leading-relaxed text-ink-muted">{c.bigbox}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 border border-wood/30 bg-wood/5 p-8">
          <div className="flex-1">
            <p className="font-display text-2xl font-light mb-2">Custom isn't always more expensive than you think.</p>
            <p className="text-sm font-300 text-ink-muted leading-relaxed">
              When you factor in longevity, resale value, and the cost of replacing inferior cabinetry in 5–10 years, custom millwork often costs less over time.
            </p>
          </div>
          <a href="#estimate" className="btn-primary flex-shrink-0">
            Get Your Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
