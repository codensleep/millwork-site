const services = [
  {
    number: '01',
    title: 'Custom Kitchens',
    description: 'Full kitchen design and fabrication — shaker, flat-front, inset, or bespoke. European hardware, soft-close everything, and integrated appliance panels as standard.',
    details: ['Upper & lower cabinets', 'Island fabrication', 'Pantry systems', 'Appliance integration'],
  },
  {
    number: '02',
    title: 'Custom Cabinets',
    description: 'Standalone or integrated cabinet systems for any room. Built to exact dimensions with your choice of material, finish, and hardware.',
    details: ['Bathroom vanities', 'Laundry rooms', 'Mudrooms', 'Home bars'],
  },
  {
    number: '03',
    title: 'Custom Closets',
    description: 'Walk-in, reach-in, and wardrobe systems designed around your actual wardrobe — not a template. Every hang zone, shelf, and drawer configured for your needs.',
    details: ['Walk-in wardrobes', 'Reach-in closets', 'Shoe & bag storage', 'Island dressers'],
  },
  {
    number: '04',
    title: 'Custom Furniture',
    description: 'Tables, benches, shelving units, desks, and beds fabricated to your specifications in solid hardwood or premium panel goods.',
    details: ['Dining tables', 'Desks & credenzas', 'Platform beds', 'Coffee tables'],
  },
  {
    number: '05',
    title: 'Built-In Wall Systems',
    description: 'Floor-to-ceiling storage, entertainment walls, home offices, and library systems that look like they were always meant to be there.',
    details: ['Media walls', 'Bookcases', 'Murphy beds', 'Home offices'],
  },
  {
    number: '06',
    title: 'ADU / Small Space',
    description: 'Compact, smart millwork for accessory dwelling units and small apartments. Every inch planned. Maximum function, minimum footprint.',
    details: ['Compact kitchens', 'Multi-use storage', 'Murphy beds', 'Fold-down tables'],
  },
];

export default function Services() {
  return (
    <section className="py-28 md:py-36" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">What We Build</p>
          <h2 className="section-heading max-w-xl">
            Every service,<br />custom to you.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-canvas p-10 group hover:bg-surface transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-500 tracking-widest text-wood font-sans">{s.number}</span>
                <div
                  className="w-6 h-px mt-2 group-hover:w-12 transition-all duration-500"
                  style={{ background: 'var(--wood)' }}
                />
              </div>

              <h3 className="font-display text-2xl font-400 mb-4 group-hover:text-wood transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm font-300 text-ink-muted leading-relaxed mb-8 flex-1">
                {s.description}
              </p>

              <ul className="space-y-2">
                {s.details.map(d => (
                  <li key={d} className="flex items-center gap-3 text-xs font-500 tracking-wide text-ink-muted uppercase">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--wood)' }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-px bg-ink p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-canvas font-light">Not sure where to start?</p>
            <p className="text-sm font-300 text-canvas/60 mt-1">Use our estimator to get a ballpark in under a minute.</p>
          </div>
          <a href="#estimate" className="btn-wood flex-shrink-0">
            Get Your Estimate
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
