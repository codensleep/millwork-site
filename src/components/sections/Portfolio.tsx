const projects = [
  {
    id: '01',
    title: 'Modern Walnut Kitchen',
    location: 'Silver Lake, CA',
    type: 'Kitchen',
    material: 'Solid Walnut',
    year: '2024',
    bg: '#2C1810',
    accent: '#8B5E34',
    description: 'Floor-to-ceiling walnut cabinetry with integrated refrigerator panels and a 14-ft quartz waterfall island.',
  },
  {
    id: '02',
    title: 'Minimal White Oak Closet',
    location: 'Los Feliz, CA',
    type: 'Closet',
    material: 'White Oak',
    year: '2024',
    bg: '#E8D4B8',
    accent: '#8B5E34',
    description: 'A walk-in wardrobe with open hanging, custom shoe storage, and a center island dresser in white oak veneer.',
  },
  {
    id: '03',
    title: 'Custom Home Office Built-In',
    location: 'Santa Monica, CA',
    type: 'Built-In',
    material: 'Painted MDF',
    year: '2023',
    bg: '#1C1C1C',
    accent: '#C4935A',
    description: 'Floor-to-ceiling library shelving with integrated desk, cable management, and integrated LED task lighting.',
  },
  {
    id: '04',
    title: 'ADU Compact Kitchen',
    location: 'Echo Park, CA',
    type: 'ADU Kitchen',
    material: 'Laminate + Plywood',
    year: '2024',
    bg: '#D4CFC6',
    accent: '#6B6560',
    description: 'A 9-ft compact kitchen for a 420 sqft ADU. Maximized storage, integrated appliances, and open shelving above.',
  },
  {
    id: '05',
    title: 'Floating Media Wall',
    location: 'Pasadena, CA',
    type: 'Built-In',
    material: 'White Oak + MDF',
    year: '2023',
    bg: '#F0EBE3',
    accent: '#8B5E34',
    description: 'A 16-ft media wall with floating credenza, integrated AV bay, and open bookcase wings. Clean shadow-gap reveals.',
  },
  {
    id: '06',
    title: 'Custom Dining Storage',
    location: 'Highland Park, CA',
    type: 'Furniture',
    material: 'Solid Walnut',
    year: '2023',
    bg: '#3A2518',
    accent: '#C4935A',
    description: 'Sideboard, dining bench, and integrated bar cabinet in matching solid walnut. Part of a full dining room commission.',
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 md:py-36" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
          <div className="flex-1">
            <p className="section-label">Selected Work</p>
            <h2 className="section-heading">
              Projects that speak<br />for themselves.
            </h2>
          </div>
          <p className="text-sm font-300 text-ink-muted max-w-xs">
            Every project is photographed after completion. Photography coming soon — see our process in the meantime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map(p => (
            <div
              key={p.id}
              className="group relative overflow-hidden cursor-pointer"
              style={{ background: p.bg, minHeight: 320 }}
            >
              {/* Placeholder visual — architectural composition */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg viewBox="0 0 200 160" className="w-3/4" fill="none">
                  <rect x="20" y="20" width="160" height="120" stroke={p.accent} strokeWidth="1" />
                  <line x1="20" y1="60" x2="180" y2="60" stroke={p.accent} strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke={p.accent} strokeWidth="0.5" />
                  <line x1="80" y1="20" x2="80" y2="140" stroke={p.accent} strokeWidth="0.5" />
                  <line x1="130" y1="20" x2="130" y2="140" stroke={p.accent} strokeWidth="0.5" />
                  <rect x="32" y="32" width="36" height="16" stroke={p.accent} strokeWidth="0.5" />
                  <rect x="32" y="72" width="36" height="16" stroke={p.accent} strokeWidth="0.5" />
                  <rect x="90" y="110" width="28" height="20" stroke={p.accent} strokeWidth="0.5" />
                </svg>
              </div>

              {/* Top label */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-500 tracking-widest uppercase" style={{ color: p.accent }}>{p.id}</span>
                <span className="text-xs font-300" style={{ color: `${p.accent}99` }}>{p.year}</span>
              </div>

              {/* Bottom info — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <div
                  className="text-xs font-500 tracking-widest uppercase mb-2"
                  style={{ color: p.accent }}
                >
                  {p.type} — {p.material}
                </div>
                <h3
                  className="font-display text-2xl font-light mb-1"
                  style={{ color: parseInt(p.bg.replace('#',''), 16) > 0x888888 ? '#111010' : '#F7F4EF' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs font-300 mb-3"
                  style={{ color: parseInt(p.bg.replace('#',''), 16) > 0x888888 ? '#6B6560' : 'rgba(247,244,239,0.6)' }}
                >
                  {p.location}
                </p>
                <p
                  className="text-sm font-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: parseInt(p.bg.replace('#',''), 16) > 0x888888 ? '#6B6560' : 'rgba(247,244,239,0.7)' }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
