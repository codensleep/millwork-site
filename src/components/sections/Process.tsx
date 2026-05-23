const steps = [
  {
    number: '01',
    title: 'Measure',
    description: 'We visit your space and take precise measurements — walls, corners, plumbing, electrical — everything that affects the build.',
    duration: '1–2 hrs on site',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our designers create a 3D model and material specification. You review, revise, and approve before anything is cut.',
    duration: '1–2 weeks',
  },
  {
    number: '03',
    title: 'Estimate',
    description: 'You receive a detailed, itemized quote — no surprises. We walk you through every line item before you commit.',
    duration: '3–5 business days',
  },
  {
    number: '04',
    title: 'Fabricate',
    description: 'Our shop CNC-cuts your panels to exact tolerances, assembles the carcasses, applies finish, and performs a full quality check.',
    duration: '3–8 weeks',
  },
  {
    number: '05',
    title: 'Install',
    description: 'Our install crew delivers and fits everything on site. We level, scribe, and detail until it\'s perfect. You sign off. Done.',
    duration: '1–5 days on site',
  },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 bg-ink text-canvas" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
          <div className="flex-1">
            <p className="section-label" style={{ color: 'var(--wood)' }}>How It Works</p>
            <h2 className="section-heading text-canvas">
              A process built for<br />no surprises.
            </h2>
          </div>
          <p className="flex-1 text-base font-300 max-w-md" style={{ color: 'rgba(247,244,239,0.6)' }}>
            From first measurement to final install, we keep you informed at every stage. Most projects are complete in 6–12 weeks from contract signing.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-px">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 border-t border-canvas/10 hover:bg-canvas/5 transition-colors duration-300 px-2"
            >
              {/* Number */}
              <div className="flex items-center gap-6 md:w-48 flex-shrink-0">
                <span
                  className="font-display text-5xl font-light transition-colors duration-300"
                  style={{ color: i === 0 ? 'var(--wood)' : 'rgba(247,244,239,0.2)' }}
                >
                  {step.number}
                </span>
                <div className="w-px h-10 bg-canvas/10 hidden md:block" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-3xl font-light mb-2 group-hover:text-wood transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base font-300 leading-relaxed" style={{ color: 'rgba(247,244,239,0.6)' }}>
                  {step.description}
                </p>
              </div>

              {/* Duration */}
              <div className="flex-shrink-0 md:w-40 md:text-right">
                <span className="text-xs font-500 tracking-widest uppercase" style={{ color: 'var(--wood)' }}>
                  {step.duration}
                </span>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-10 text-canvas/10 text-lg">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-canvas/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-3xl font-light text-canvas">
            Ready to get started?
          </p>
          <a href="#contact" className="btn-wood">
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
