/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * The Engineering Journal — Architect's Field Book & Technical Notes
 */

import React, { useState } from "react";

export default function Notebook({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section id="notebook" className="relative py-24 md:py-32 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      {/* Decorative Corner Accents */}
      <div className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute right-8 top-12 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="section-tag">
              // CREATIVE SIGNATURE 01
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight comic-sparks">
            THE ENGINEERING <span className="badge-word-yellow">JOURNAL.</span>
          </h2>
          <p className="font-body text-[#3e3832] text-base md:text-lg mt-3 leading-relaxed">
            Systems must survive on paper before committing code. Here are field notes, architecture schemas, and reflections from building in Ahmedabad.
          </p>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btn-retro-secondary !text-xs !py-2 !px-4 inline-flex items-center gap-2"
            >
              <span>{isOpen ? "Close Journal Cover" : "Open Journal Spread"}</span>
              <span>{isOpen ? "📕" : "📖"}</span>
            </button>
          </div>
        </div>

        {/* The Journal Physical Container */}
        <div className="relative mx-auto transition-all duration-500 max-w-5xl">
          {!isOpen ? (
            /* =========================================================================
               CLOSED JOURNAL VIEW: Retro Field Notebook
               ========================================================================= */
            <div
              onClick={() => setIsOpen(true)}
              className="group cursor-pointer mx-auto max-w-md bg-[#1a1a1a] border-[3px] border-[#1a1a1a] rounded-2xl p-10 sm:p-14 shadow-[8px_8px_0px_#ffd93d] relative overflow-hidden transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_#ffd93d]"
            >
              {/* Spine Stitching & Metallic Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#ffd93d] border-r-2 border-[#1a1a1a] flex items-center justify-center">
                <div className="h-full w-[2px] border-r-2 border-dashed border-[#1a1a1a]/60" />
              </div>

              {/* Cover Tape / Bookmark Ribbon */}
              <div className="absolute right-8 -top-2 w-6 h-16 bg-[#e63946] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]" />

              <div className="pl-6 space-y-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#ffd93d] bg-[#2a2421] flex items-center justify-center font-mono text-2xl font-bold text-[#ffd93d] shadow-[3px_3px_0px_#ffd93d]">
                  FM
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-2xl tracking-wider text-white uppercase">
                    FIELD JOURNAL
                  </h3>
                  <p className="font-mono text-xs text-[#ffd93d] font-bold tracking-widest mt-1">
                    VOL. 2026 // SYSTEMS &amp; ARCHITECTURE
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#333] text-[#c8b6ff] font-mono text-xs space-y-1">
                  <p className="font-bold">FAZIL MALEK — GTU COMPUTER ENG.</p>
                  <p className="text-stone-400">⚡ Click to open engineering spread ⚡</p>
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================================
               OPEN JOURNAL SPREAD: 2-Page Architectural Engineering Notebook
               ========================================================================= */
            <div className="relative bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#1a1a1a] overflow-hidden">
              {/* Book Spine Center Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-6 bg-[#ffd93d]/30 border-x-2 border-[#1a1a1a]/20 pointer-events-none z-10" />

              <div className="grid lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#1a1a1a]">
                {/* -------------------------------------------------------------------
                    LEFT PAGE: Origin & Philosophy
                    ------------------------------------------------------------------- */}
                <div className="p-8 sm:p-12 space-y-6 relative bg-[#fbf8ef]">
                  {/* Header / Chapter */}
                  <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-3">
                    <span className="font-mono text-xs font-bold text-[#1a1a1a] bg-[#ffd93d] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a] uppercase tracking-wider">
                      Chapter 01 // Foundations
                    </span>
                    <span className="font-mono text-xs font-bold text-[#6b635b]">
                      PAGE 04
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
                      The Paper-First Discipline
                    </h3>

                    <p className="font-body text-[#3e3832] text-sm sm:text-base leading-relaxed">
                      My rule for every system at Promacle—whether it is NuroVed, hospital sync pipelines, or client platforms—is that nothing touches code until it has survived on paper.
                    </p>

                    <p className="font-body text-[#3e3832] text-sm sm:text-base leading-relaxed">
                      Paper is unforgiving of ambiguity. If drawing the path from a patient's consultation to their decrypted medical record takes multiple messy arrows and conflicting margin notes, the system design is flawed. You do not need three weeks of frontend coding to discover what ink on grid paper reveals in ten minutes.
                    </p>

                    {/* Technical Monospace Heuristic Box */}
                    <div className="bg-white border-2 border-[#1a1a1a] rounded-xl p-4 font-mono text-xs text-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] space-y-2">
                      <div className="font-bold text-[#e63946] uppercase tracking-wider text-[11px]">
                        // THE 4-STAGE EXECUTION LOOP
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap text-[#1a1a1a]">
                        <span className="px-2 py-0.5 bg-[#86efac] border border-[#1a1a1a] rounded font-bold">01. Paper Spec</span>
                        <span>→</span>
                        <span className="px-2 py-0.5 bg-[#93c5fd] border border-[#1a1a1a] rounded font-bold">02. Data Contract</span>
                        <span>→</span>
                        <span className="px-2 py-0.5 bg-[#c8b6ff] border border-[#1a1a1a] rounded font-bold">03. Async Prototype</span>
                        <span>→</span>
                        <span className="px-2 py-0.5 bg-[#ffd93d] border border-[#1a1a1a] rounded font-bold">04. Production Hardening</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="border-l-4 border-[#e63946] pl-3 py-1 bg-white border border-[#1a1a1a]/20 rounded-r-lg">
                        <p className="font-sans text-xs italic text-[#1a1a1a] font-medium">
                          "Measure software by human outcomes, not vanity dwell time. If a doctor finishes documenting faster and looks their patient in the eye, the software has succeeded."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* -------------------------------------------------------------------
                    RIGHT PAGE: Research Logs & Technical Writing Entries
                    ------------------------------------------------------------------- */}
                <div className="p-8 sm:p-12 space-y-6 relative bg-[#fbf8ef]">
                  {/* Header / Chapter */}
                  <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] pb-3">
                    <span className="font-mono text-xs font-bold text-[#1a1a1a] bg-[#c8b6ff] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a] uppercase tracking-wider">
                      Chapter 02 // Field Notes
                    </span>
                    <span className="font-mono text-xs font-bold text-[#6b635b]">
                      PAGE 05
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
                      Selected Architecture Essays
                    </h3>

                    <p className="font-body text-[#3e3832] text-sm leading-relaxed">
                      Written deep-dives on systems engineering, startup reflections, and building technical products while studying at GTU:
                    </p>

                    {/* Story / Architecture Links List */}
                    <div className="space-y-3 pt-1">
                      <a
                        href="/stories/why-i-started-nuroved/"
                        onClick={(e) => handleLinkClick(e, "/stories/why-i-started-nuroved/")}
                        className="group block bg-white border-2 border-[#1a1a1a] rounded-xl p-3.5 shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#e63946] transition-all"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-[#6b635b] mb-1 font-bold">
                          <span className="bg-[#86efac] text-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#1a1a1a]">CASE REF: MED-01</span>
                          <span className="text-[#e63946] group-hover:translate-x-0.5 transition-transform font-bold">Read Entry →</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                          Why I Started NuroVed: Fixing Healthcare Fragmentation
                        </h4>
                        <p className="font-body text-xs text-[#3e3832] mt-1 line-clamp-2">
                          Why Promacle chose patient-centric clinical infrastructure over easy consumer apps. Lessons from observing clinics in Ahmedabad.
                        </p>
                      </a>

                      <a
                        href="/stories/architecting-nuroved/"
                        onClick={(e) => handleLinkClick(e, "/stories/architecting-nuroved/")}
                        className="group block bg-white border-2 border-[#1a1a1a] rounded-xl p-3.5 shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#e63946] transition-all"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-[#6b635b] mb-1 font-bold">
                          <span className="bg-[#93c5fd] text-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#1a1a1a]">ARCH REF: SYS-04</span>
                          <span className="text-[#e63946] group-hover:translate-x-0.5 transition-transform font-bold">Read Entry →</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                          Architecting NuroVed: FastAPI &amp; Flutter Microservices
                        </h4>
                        <p className="font-body text-xs text-[#3e3832] mt-1 line-clamp-2">
                          Technical walkthrough of our asynchronous Python backend, Pydantic type safety contracts, and reactive Flutter cross-platform synchronization.
                        </p>
                      </a>

                      <a
                        href="/stories/building-while-being-a-student/"
                        onClick={(e) => handleLinkClick(e, "/stories/building-while-being-a-student/")}
                        className="group block bg-white border-2 border-[#1a1a1a] rounded-xl p-3.5 shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#e63946] transition-all"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-[#6b635b] mb-1 font-bold">
                          <span className="bg-[#ffd93d] text-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#1a1a1a]">STUDENT REF: ENG-02</span>
                          <span className="text-[#e63946] group-hover:translate-x-0.5 transition-transform font-bold">Read Entry →</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                          Building While Being a Student at GTU
                        </h4>
                        <p className="font-body text-xs text-[#3e3832] mt-1 line-clamp-2">
                          Managing classes, engineering labs, and production commits under real constraints. Why time limits force high-leverage clarity.
                        </p>
                      </a>
                    </div>

                    <div className="pt-2 text-center">
                      <a
                        href="/stories/"
                        onClick={(e) => handleLinkClick(e, "/stories/")}
                        className="btn-retro-yellow !text-xs !py-2 !px-4 inline-block font-mono font-bold"
                      >
                        View Complete Notebook Archive (5 Entries) →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
