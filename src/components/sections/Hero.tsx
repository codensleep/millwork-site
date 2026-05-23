export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Wood accent bar — top right architectural detail */}
      <div className="absolute top-0 right-0 w-px h-48 md:h-72" style={{ background: 'var(--wood)' }} />
      <div className="absolute top-0 right-0 w-16 md:w-24 h-px" style={{ background: 'var(--wood)' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <p className="section-label mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Custom Millwork Studio — Los Angeles
          </p>

          {/* Main headline */}
          <h1
            className="font-display font-light leading-none mb-10 opacity-0 animate-fade-up"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              animationDelay: '0.2s',
              animationFillMode: 'forwards',
            }}
          >
            Kitchens,<br />
            Cabinets &<br />
            <span style={{ color: 'var(--wood)' }}>Closets</span><br />
            Built for You.
          </h1>

          {/* Subhead */}
          <p
            className="text-base md:text-lg font-300 text-ink-muted max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            We design and fabricate premium custom millwork using CNC precision and architectural-grade materials — fitted exactly to your space, your lifestyle, and your vision.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          >
            <a href="#estimate" className="btn-primary">
              Start Your Design
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#estimate" className="btn-outline">
              Get Estimate
            </a>
          </div>
        </div>

        {/* Bottom stat row */}
        <div
          className="mt-20 md:mt-28 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          {[
            { value: '200+',   label: 'Projects Completed' },
            { value: '14 yrs', label: 'In Business' },
            { value: '100%',   label: 'Custom-Built' },
            { value: '5★',     label: 'Client Rating' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-light mb-1">{s.value}</p>
              <p className="text-xs font-500 tracking-widest uppercase text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
