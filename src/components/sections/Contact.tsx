import { useState } from 'react';
import type { ContactFormData } from '../../types';

const defaultForm: ContactFormData = {
  name: '', email: '', phone: '',
  projectType: '', dimensions: '',
  budget: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof ContactFormData, val: string) =>
    setForm(f => ({ ...f, [key]: val }));

  // TODO: Replace with real form submission endpoint (e.g. Formspree, Netlify Forms, custom API)
  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section className="py-28 md:py-36 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading mb-8">
              Let's talk about<br />your space.
            </h2>
            <p className="text-base font-300 text-ink-muted leading-relaxed mb-12">
              Share what you're envisioning and we'll get back to you within one business day to schedule a free consultation.
            </p>

            {/* Info blocks */}
            <div className="space-y-8">
              {[
                { label: 'Location', value: 'Los Angeles, California' },
                { label: 'Email',    value: 'hello@formandgrain.com' },
                { label: 'Phone',    value: '(310) 555-0000' },
                { label: 'Hours',    value: 'Mon–Fri, 8am–6pm PT' },
              ].map(i => (
                <div key={i.label} className="flex items-start gap-6">
                  <div className="w-px h-8 mt-1 flex-shrink-0" style={{ background: 'var(--wood)' }} />
                  <div>
                    <p className="text-xs font-500 tracking-widest uppercase text-ink-muted mb-0.5">{i.label}</p>
                    <p className="text-base font-300">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="border border-wood bg-wood/5 p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 border border-wood flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="var(--wood)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-display text-3xl font-light mb-3">We'll be in touch.</p>
                <p className="text-sm font-300 text-ink-muted leading-relaxed max-w-xs">
                  Thank you, {form.name.split(' ')[0]}. Expect a reply within one business day.
                </p>
                <button
                  onClick={() => { setForm(defaultForm); setSubmitted(false); }}
                  className="mt-8 text-sm font-500 tracking-wide text-wood underline underline-offset-4"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">
                      Name <span style={{ color: 'var(--wood)' }}>*</span>
                    </label>
                    <input
                      className="input-field"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">
                      Email <span style={{ color: 'var(--wood)' }}>*</span>
                    </label>
                    <input
                      className="input-field"
                      type="email"
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Phone</label>
                  <input
                    className="input-field"
                    type="tel"
                    placeholder="(310) 555-0000"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                  />
                </div>

                {/* Project type */}
                <div>
                  <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Project Type</label>
                  <div className="relative">
                    <select
                      className="select-field"
                      value={form.projectType}
                      onChange={e => set('projectType', e.target.value)}
                    >
                      <option value="">Select a project type</option>
                      <option value="kitchen">Custom Kitchen</option>
                      <option value="cabinet">Custom Cabinets</option>
                      <option value="closet">Custom Closet</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="builtin">Built-In System</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-muted">↓</span>
                  </div>
                </div>

                {/* Dimensions */}
                <div>
                  <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">
                    Approximate Dimensions
                  </label>
                  <input
                    className="input-field"
                    placeholder='e.g. "Kitchen: 14 × 10 ft" or "Walk-in: 8 × 8 ft"'
                    value={form.dimensions}
                    onChange={e => set('dimensions', e.target.value)}
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Budget Range</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: 'under-10k', label: 'Under $10k' },
                      { value: '10k-25k',   label: '$10k–25k' },
                      { value: '25k-50k',   label: '$25k–50k' },
                      { value: '50k-plus',  label: '$50k+' },
                    ].map(b => (
                      <button
                        key={b.value}
                        onClick={() => set('budget', b.value)}
                        className={`py-3 text-xs font-500 tracking-wide border transition-all duration-200 ${
                          form.budget === b.value
                            ? 'border-wood bg-wood/10 text-ink'
                            : 'border-border text-ink-muted hover:border-ink'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-500 tracking-widest uppercase text-ink-muted block mb-2">Tell Us About Your Project</label>
                  <textarea
                    className="input-field resize-none"
                    rows={5}
                    placeholder="Describe your vision, timeline, any inspiration images you have, or questions you'd like answered..."
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email}
                  className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send Inquiry
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className="text-xs font-300 text-ink-muted text-center">
                  We respond within 1 business day. No spam, ever.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
