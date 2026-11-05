/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Hardware-Accelerated Retro Window Modal for Service Scope, Deliverables & Interactive Pricing Specs
 */

import React, { useEffect, useState, useRef, useCallback } from "react";
import { ServiceOffering } from "../data/servicesPricing";
import { ServiceCategoryIcon, GreenCheckIcon, TechBadge } from "./RetroServicesVisuals";

interface ServicePricingModalProps {
  service: ServiceOffering | null;
  isOpen: boolean;
  onClose: () => void;
  onContact: (serviceTitle: string) => void;
}

function ServicePricingModalComponent({
  service,
  isOpen,
  onClose,
  onContact
}: ServicePricingModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Trigger smooth exit animation before notifying parent to unmount
  const handleInitiateClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 150);
  }, [isClosing, onClose]);

  // Handle contact navigation with clean exit
  const handleContactAction = useCallback(
    (serviceCategory: string) => {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onContact(serviceCategory);
      }, 80);
    },
    [onContact]
  );

  // Focus trap, Escape listener, and body scroll lock with scrollbar compensation
  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element for focus restoration
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;

    // Compensate scrollbar width to prevent horizontal page layout reflows
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.classList.add("modal-open");

    // Automatically focus the close button for instant keyboard accessibility
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleInitiateClose();
        return;
      }

      // Keyboard Focus Trap inside modal
      if (e.key === "Tab" && modalContainerRef.current) {
        const focusable = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";
      if (previousActiveElementRef.current && previousActiveElementRef.current.focus) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, handleInitiateClose]);

  if (!isOpen || !service) return null;

  const backdropAnimClass = isClosing ? "retro-modal-backdrop-out" : "retro-modal-backdrop-in";
  const windowAnimClass = isClosing ? "retro-modal-window-out" : "retro-modal-window-in";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#1a1a1a]/70 ${backdropAnimClass}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={handleInitiateClose}
    >
      {/* Retro Window Container */}
      <div
        ref={modalContainerRef}
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fbf8ef] border-[2.5px] border-[#1a1a1a] rounded-xl shadow-[8px_8px_0px_#1a1a1a] overflow-hidden ${windowAnimClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] select-none shrink-0">
          <div className="flex items-center gap-2 overflow-hidden pr-2">
            <span className="font-mono text-sm" aria-hidden="true">
              💾
            </span>
            <span
              id="service-modal-title"
              className="font-mono text-xs md:text-sm font-bold text-[#1a1a1a] truncate tracking-wide"
            >
              service_spec.exe — {service.categoryTitle}
            </span>
          </div>

          {/* Window Control Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="w-4 h-4 bg-white border border-[#1a1a1a] rounded-sm text-[9px] font-mono font-bold flex items-center justify-center text-neutral-600 shadow-[1px_1px_0px_#1a1a1a]"
              aria-hidden="true"
            >
              _
            </span>
            <span
              className="w-4 h-4 bg-white border border-[#1a1a1a] rounded-sm text-[9px] font-mono font-bold flex items-center justify-center text-neutral-600 shadow-[1px_1px_0px_#1a1a1a]"
              aria-hidden="true"
            >
              □
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleInitiateClose}
              className="w-5 h-5 bg-[#ff4d6d] hover:bg-[#e63946] border border-[#1a1a1a] rounded-sm text-xs font-mono font-black flex items-center justify-center text-white shadow-[1.5px_1.5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
              aria-label="Close window"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Window Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* Top Hero Banner */}
          <div
            className={`p-5 md:p-6 rounded-xl border-2 border-[#1a1a1a] ${service.bgClass} shadow-[4px_4px_0px_#1a1a1a] relative overflow-hidden`}
          >
            {/* Corner Decorative Pixel Pattern */}
            <div className="absolute top-2 right-2 text-neutral-400/40 text-xs font-mono pointer-events-none select-none hidden sm:block">
              [SPEC://{service.id.toUpperCase()}]
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0px_#1a1a1a] shrink-0">
                <ServiceCategoryIcon iconType={service.iconType} className="w-12 h-10 md:w-14 md:h-12" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-white border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                    Verified Service Scope
                  </span>
                </div>
                <h2 className="font-[Cabinet_Grotesk] font-black text-2xl md:text-3xl text-[#1a1a1a] tracking-tight leading-tight">
                  {service.titleLine1} {service.titleLine2}
                </h2>
                <p className="font-sans text-sm md:text-base text-neutral-800 max-w-2xl font-medium">
                  {service.shortIntro}
                </p>
              </div>
            </div>

            {/* Badges Row */}
            <div className="mt-4 pt-4 border-t border-[#1a1a1a]/20 flex flex-wrap gap-2">
              {service.badges.map((badge, idx) => (
                <TechBadge key={idx} icon={badge.icon} label={badge.label} />
              ))}
            </div>
          </div>

          {/* What's Included Deliverables Section */}
          <div className="bg-white border-2 border-[#1a1a1a] rounded-xl p-5 md:p-6 shadow-[3px_3px_0px_#1a1a1a]">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-[#e63946] bg-[#fbf8ef] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                // WHAT'S INCLUDED
              </span>
              <h3 className="font-[Cabinet_Grotesk] font-bold text-lg text-[#1a1a1a]">
                Core Architecture &amp; Delivery Standards
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-800 font-sans">
              {service.whatsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <GreenCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Project Scope Matrix (3 Tiers) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#059669] bg-[#fbf8ef] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                  // PRICING TIERS
                </span>
                <h3 className="font-[Cabinet_Grotesk] font-bold text-lg text-[#1a1a1a]">
                  Structured Engagement Options
                </h3>
              </div>
              <span className="font-mono text-[11px] text-neutral-600 bg-neutral-100 border border-neutral-300 px-2 py-0.5 rounded">
                Configurable in INR (₹)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {service.pricingTiers.map((tier, idx) => {
                const isRecommended = tier.tierName === "Standard";
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between p-4 rounded-xl border-2 border-[#1a1a1a] ${
                      isRecommended
                        ? "bg-[#fffbeb] shadow-[4px_4px_0px_#1a1a1a] ring-2 ring-[#ffd93d]"
                        : "bg-white shadow-[2px_2px_0px_#1a1a1a]"
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3 right-3 bg-[#ffd93d] border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#1a1a1a]">
                        ★ Most Popular
                      </div>
                    )}

                    <div>
                      {/* Tier Name */}
                      <div className="font-[Cabinet_Grotesk] font-black text-xl text-[#1a1a1a] tracking-tight">
                        {tier.tierName}
                      </div>

                      {/* Scope Summary */}
                      <p className="font-sans text-xs text-neutral-600 min-h-[36px] mt-1 line-clamp-2">
                        {tier.scope}
                      </p>

                      {/* Pricing Box */}
                      <div className="my-3 p-2.5 bg-[#fbf8ef] border border-[#1a1a1a] rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase font-bold text-neutral-500">
                            Estimate
                          </span>
                          <span className="font-mono text-xs font-bold text-[#e63946] bg-white border border-[#1a1a1a] px-1.5 py-0.5 rounded">
                            ⏱ {tier.timeline}
                          </span>
                        </div>
                        <div className="font-mono font-black text-base md:text-lg text-[#1a1a1a] mt-1">
                          {tier.estimatedPrice}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 mt-0.5">
                          Tailored to scope &amp; milestones
                        </div>
                      </div>

                      {/* Deliverables list */}
                      <div className="space-y-1.5 pt-1">
                        <span className="font-mono text-[10px] font-bold text-neutral-600 uppercase block">
                          Included Milestones:
                        </span>
                        {tier.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5 text-xs text-neutral-700">
                            <span className="text-[#059669] font-bold shrink-0">✓</span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tier Contact Button */}
                    <button
                      type="button"
                      onClick={() => handleContactAction(service.categoryTitle)}
                      className="mt-4 w-full py-2 bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg font-mono text-xs font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffd93d]"
                    >
                      Inquire for {tier.tierName} ↗
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicative Note Callout */}
          <div className="p-4 bg-[#fbf8ef] border-2 border-dashed border-[#1a1a1a] rounded-xl flex items-start gap-3">
            <span className="text-xl shrink-0" aria-hidden="true">
              ℹ️
            </span>
            <div className="text-xs text-neutral-700 font-sans leading-relaxed">
              <span className="font-bold text-[#1a1a1a] font-mono">Scope &amp; Pricing Transparency: </span>
              All delivery timelines and project fees are indicative estimates determined by your product requirements, third-party API dependencies, and complexity. Every engagement starts with a clear, written scope specification and milestone agreements.
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t-[2.5px] border-[#1a1a1a] flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleInitiateClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#fbf8ef] hover:bg-neutral-200 border-2 border-[#1a1a1a] rounded-lg font-mono text-xs font-bold text-neutral-700 shadow-[2px_2px_0px_#1a1a1a] transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
          >
            ← Close Spec
          </button>

          <button
            type="button"
            onClick={() => handleContactAction(service.categoryTitle)}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#ffd93d] hover:bg-[#ffea79] border-[2.5px] border-[#1a1a1a] rounded-lg font-mono text-xs sm:text-sm font-black text-[#1a1a1a] shadow-[3.5px_3.5px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
          >
            <span>Contact Now for {service.categoryTitle}</span>
            <span className="text-base" aria-hidden="true">
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ServicePricingModalComponent);
