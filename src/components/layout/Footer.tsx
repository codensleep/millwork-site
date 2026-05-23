export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display text-3xl font-light mb-4">
              Form <span style={{ color: 'var(--wood)' }}>&</span> Grain
            </p>
            <p className="text-sm font-300 text-canvas/60 leading-relaxed">
              Premium custom millwork for homes, ADUs, and residential spaces. Designed precisely. Built to last.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-500 tracking-widest uppercase mb-6" style={{ color: 'var(--wood)' }}>Services</p>
            <ul className="space-y-3">
              {['Custom Kitchens', 'Custom Cabinets', 'Custom Closets', 'Custom Furniture', 'Built-In Systems', 'ADU Cabinetry'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm font-300 text-canvas/60 hover:text-canvas transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-500 tracking-widest uppercase mb-6" style={{ color: 'var(--wood)' }}>Company</p>
            <ul className="space-y-3">
              {['Our Process', 'Portfolio', 'Why Custom', 'Get Estimate', 'Contact'].map(s => (
                <li key={s}>
                  <a href="#process" className="text-sm font-300 text-canvas/60 hover:text-canvas transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-500 tracking-widest uppercase mb-6" style={{ color: 'var(--wood)' }}>Contact</p>
            <ul className="space-y-3 text-sm font-300 text-canvas/60">
              <li>Los Angeles, CA</li>
              <li>
                <a href="mailto:hello@formandgrain.com" className="hover:text-canvas transition-colors duration-200">
                  hello@formandgrain.com
                </a>
              </li>
              <li>
                <a href="tel:+13105550000" className="hover:text-canvas transition-colors duration-200">
                  (310) 555-0000
                </a>
              </li>
            </ul>
            {/* Social placeholders */}
            <div className="flex gap-4 mt-6">
              {['IG', 'HZ', 'LI'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-canvas/20 flex items-center justify-center text-xs font-500 text-canvas/40 hover:border-wood hover:text-canvas transition-all duration-200"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-canvas/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-300 text-canvas/40">
            © {year} Form & Grain Millwork. All rights reserved.
          </p>
          <p className="text-xs font-300 text-canvas/30">
            Estimates are preliminary and do not constitute a final quote.
          </p>
        </div>
      </div>
    </footer>
  );
}
