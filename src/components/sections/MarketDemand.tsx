const demands = [
  { icon: '⊞', title: 'Personalized Interiors',      body: 'Homeowners want spaces that reflect their lifestyle — not off-the-shelf solutions that sort of fit.' },
  { icon: '◫', title: 'Maximized Storage',           body: 'Better organization, smarter use of vertical space, and custom drawer configurations that big-box stores cannot deliver.' },
  { icon: '▣', title: 'Small-Space Efficiency',      body: 'Urban homes, condos, and ADUs demand clever built-ins that turn every inch into functional, beautiful storage.' },
  { icon: '◻', title: 'Premium Kitchen Design',      body: 'The kitchen is the heart of the home — and buyers expect European-style cabinetry, hidden appliances, and clean sightlines.' },
  { icon: '▤', title: 'Wardrobe & Closet Systems',   body: 'Walk-in and reach-in closets custom-fit to your wardrobe. No wasted vertical space. No awkward corner solutions.' },
  { icon: '▥', title: 'Built-In Furniture & Media',  body: 'Floor-to-ceiling shelving, built-in beds, and integrated media walls that feel intentional — not like furniture added after the fact.' },
  { icon: '▦', title: 'ADU-Ready Cabinetry',         body: 'Accessory dwelling units need compact, smart millwork. We design for maximum utility in minimum square footage.' },
  { icon: '▨', title: 'Modern Minimalist Aesthetic', body: 'Clean lines, flush faces, integrated handles, and warm wood tones — the look that defines elevated residential design today.' },
];

export default function MarketDemand() {
  return (
    <section className="py-28 md:py-36 bg-surface" id="why">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
          <div className="flex-1">
            <p className="section-label">Why Custom</p>
            <h2 className="section-heading">
              The demand for<br />
              custom is growing.
            </h2>
          </div>
          <p className="flex-1 text-base font-300 text-ink-muted leading-relaxed max-w-md">
            Mass-market cabinetry was designed for the average room. Your room isn't average. Increasingly, homeowners and designers are choosing custom millwork for spaces that actually work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {demands.map((d) => (
            <div
              key={d.title}
              className="bg-surface p-8 group hover:bg-canvas transition-colors duration-300"
            >
              <span className="block text-2xl mb-5 text-wood font-300">{d.icon}</span>
              <h3 className="font-display text-xl font-400 mb-3 group-hover:text-wood transition-colors duration-300">
                {d.title}
              </h3>
              <p className="text-sm font-300 text-ink-muted leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
