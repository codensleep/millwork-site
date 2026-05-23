import { useState } from 'react';
import QuickEstimate from './QuickEstimate';
import DetailedPlanner from './DetailedPlanner';

type Mode = 'quick' | 'detailed';

export default function Constructor() {
  const [mode, setMode] = useState<Mode>('quick');

  return (
    <section className="py-28 md:py-36 bg-surface" id="estimate">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
          <div className="flex-1">
            <p className="section-label">Project Estimator</p>
            <h2 className="section-heading">
              Plan your project.<br />
              Know your budget.
            </h2>
          </div>
          <p className="flex-1 text-base font-300 text-ink-muted leading-relaxed max-w-md">
            Use the quick tool for a ballpark in seconds, or switch to the detailed planner for a full cost breakdown with materials, components, and installation.
          </p>
        </div>

        {/* Mode tabs */}
        <div className="flex border border-border mb-10 w-fit">
          <button
            onClick={() => setMode('quick')}
            className={`px-8 py-4 text-xs font-500 tracking-widest uppercase transition-all duration-200 ${
              mode === 'quick'
                ? 'bg-ink text-canvas'
                : 'bg-canvas text-ink-muted hover:text-ink'
            }`}
          >
            Quick Estimate
          </button>
          <button
            onClick={() => setMode('detailed')}
            className={`px-8 py-4 text-xs font-500 tracking-widest uppercase transition-all duration-200 ${
              mode === 'detailed'
                ? 'bg-ink text-canvas'
                : 'bg-canvas text-ink-muted hover:text-ink'
            }`}
          >
            Detailed Planner
          </button>
        </div>

        {/* Panels */}
        {mode === 'quick'
          ? <QuickEstimate onSwitchDetailed={() => setMode('detailed')} />
          : <DetailedPlanner onSwitchQuick={() => setMode('quick')} />
        }

        {/* Lead capture below estimator */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-display text-2xl font-light mb-2">Ready for a real quote?</p>
              <p className="text-sm font-300 text-ink-muted">
                Share your estimate with us and we'll follow up with a detailed proposal.
              </p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0">
              Send Us Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
