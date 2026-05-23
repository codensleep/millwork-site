import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services',  href: '#services' },
    { label: 'Estimate',  href: '#estimate' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process',   href: '#process' },
    { label: 'Contact',   href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="font-display text-2xl font-light tracking-wide text-ink">
          Form <span className="text-wood">&</span> Grain
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-sans font-500 tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="#estimate" className="btn-primary py-3 px-6 text-xs">
            Get Estimate
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'}`}>
        <nav className="bg-canvas px-6 py-6 flex flex-col gap-6">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-sans font-500 tracking-widest uppercase text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#estimate" onClick={() => setMenuOpen(false)} className="btn-primary justify-center">
            Get Estimate
          </a>
        </nav>
      </div>
    </header>
  );
}
