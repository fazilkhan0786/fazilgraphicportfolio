/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Services & Offerings Page
 * Faithfully preserves media_1793862794281.jpg retro aesthetic
 * Optimized for 60fps rendering, memoized cards, zero layout reflows, and hardware acceleration
 */

import React, { useState, useCallback } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  RetroComputerIllustration,
  RetroHandshakeIcon,
  GreenCheckIcon,
  TechBadge,
  ServiceCategoryIcon
} from "../components/RetroServicesVisuals";
import ServicePricingModal from "../components/ServicePricingModal";
import {
  servicesOfferings,
  marqueeItems,
  ServiceOffering
} from "../data/servicesPricing";

interface ServicesPageProps {
  onNavigateContact?: () => void;
  onNavigate?: (path: string) => void;
}

/**
 * Memoized Single Service Card
 * Prevents re-rendering all 8 cards when modal opens/closes
 */
interface ServiceCardItemProps {
  card: ServiceOffering;
  onSelect: (card: ServiceOffering) => void;
}

const ServiceCardItem = React.memo(function ServiceCardItem({
  card,
  onSelect
}: ServiceCardItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(card);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(card);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="relative group transition-all duration-200 hover:-translate-y-1.5 flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffd93d] rounded-xl"
      style={{ filter: `drop-shadow(6px 6px 0px ${card.shadowColor})` }}
      aria-label={`View pricing and scope for ${card.categoryTitle}`}
    >
      {/* Black Border Outer Shell with Chamfered Top-Left & Top-Right Corners */}
      <div
        className="bg-[#1a1a1a] p-[2.5px] rounded-b-xl flex flex-col h-full"
        style={{
          clipPath: "polygon(18px 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%, 0 18px)"
        }}
      >
        {/* Pastel Card Surface with Matching Chamfered Silhouette */}
        <div
          className={`${card.bgClass} p-5 sm:p-6 rounded-b-[10px] flex flex-col justify-between h-full`}
          style={{
            clipPath: "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%, 0 16px)"
          }}
        >
          <div>
            {/* Large Illustrative Icon */}
            <div className="mb-4">
              <ServiceCategoryIcon iconType={card.iconType} />
            </div>

            {/* Bold Two-Line Heading */}
            <h3 className="font-display font-extrabold text-2xl text-[#1a1a1a] leading-tight mb-2 tracking-tight">
              {card.titleLine1}
              <br />
              {card.titleLine2}
            </h3>

            {/* Supporting Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#3e3832] font-bold leading-relaxed mb-4">
              {card.description}
            </p>

            {/* Dashed Divider Line */}
            <div className="border-t-2 border-dashed border-[#1a1a1a]/30 my-3.5" />

            {/* Deliverables Section with Yellow Badge & Red Square Bullets */}
            <div className="mb-4">
              <span className="inline-block bg-[#ffd93d] border-2 border-[#1a1a1a] text-[#1a1a1a] text-[11px] font-display font-extrabold px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a] mb-2.5">
                Deliverables:
              </span>
              <ul className="space-y-1.5">
                {card.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-[#e63946] border border-[#1a1a1a] shrink-0 inline-block mt-0.5" />
                    <span className="font-sans text-xs font-bold text-[#1a1a1a] leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Badges & Interactive Action Pill */}
          <div className="mt-auto pt-3.5 border-t-2 border-[#1a1a1a]/20 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {card.badges.map((b) => (
                <TechBadge key={b.label} icon={b.icon} label={b.label} />
              ))}
            </div>

            {/* View Scope & Pricing Button */}
            <button
              type="button"
              onClick={handleClick}
              className="w-full py-2 bg-white group-hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] group-hover:shadow-[3px_3px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View Scope &amp; Pricing</span>
              <span className="text-sm">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

/**
 * Memoized Continuous Retro Marquee Ticker
 */
const ServicesMarqueeTicker = React.memo(function ServicesMarqueeTicker() {
  return (
    <section className="mb-12 border-[2.5px] border-[#1a1a1a] rounded-xl bg-[#ffd93d] shadow-[4px_4px_0px_#1a1a1a] overflow-hidden select-none">
      <div className="flex items-center overflow-hidden py-2.5 sm:py-3">
        <div className="marquee-track flex shrink-0 items-center gap-6 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-6 font-mono text-xs sm:text-sm font-black text-[#1a1a1a] tracking-wider"
            >
              <span>{item}</span>
              <span className="text-[#e63946] text-base" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </div>
        <div
          className="marquee-track flex shrink-0 items-center gap-6 whitespace-nowrap"
          aria-hidden="true"
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={`dup-${idx}`}
              className="flex items-center gap-6 font-mono text-xs sm:text-sm font-black text-[#1a1a1a] tracking-wider"
            >
              <span>{item}</span>
              <span className="text-[#e63946] text-base" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

export default function ServicesPage({ onNavigateContact, onNavigate }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);

  const handleOpenModal = useCallback((card: ServiceOffering) => {
    setSelectedService(card);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (onNavigateContact) {
        onNavigateContact();
      } else if (onNavigate) {
        onNavigate("/contact/");
      } else {
        window.location.assign("/contact/");
      }
    },
    [onNavigate, onNavigateContact]
  );

  const handleModalContact = useCallback(
    (serviceTitle: string) => {
      setSelectedService(null);
      const target = `/contact/?service=${encodeURIComponent(serviceTitle)}`;
      if (onNavigate) {
        onNavigate(target);
      } else if (onNavigateContact) {
        onNavigateContact();
      } else {
        window.location.assign(target);
      }
    },
    [onNavigate, onNavigateContact]
  );

  const checklistItems = [
    "Product-focused & user-centric",
    "Clean, scalable & maintainable code",
    "Design + Development (end-to-end)",
    "Clear communication & on-time delivery"
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Pixel Checkerboard Accents in Corner */}
      <div
        className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute right-6 top-28 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block w-10 h-8 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute left-6 top-64 pointer-events-none"
        aria-hidden="true"
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services/" }
        ]}
        onNavigate={onNavigate}
        className="mb-8"
      />

      {/* =========================================================================
          HERO SECTION — 2-Column Exact Composition matching Reference
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-12">
        {/* Left Column: Heading, Purple Tag, Red Block, and Description */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          <span className="inline-block bg-[#c8b6ff] border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono text-xs font-extrabold px-3 py-1 rounded shadow-[2px_2px_0px_#1a1a1a] uppercase mb-4 tracking-wider">
            // SERVICES &amp; OFFERINGS
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.15] mb-5 comic-sparks">
            WHAT I CAN{" "}
            <span className="inline-block bg-[#e63946] text-white px-2.5 py-0.5 border-2 border-[#1a1a1a] shadow-[2.5px_2.5px_0px_#1a1a1a]">
              BUILD FOR YOU.
            </span>
          </h1>

          <div className="border-l-4 border-[#e63946] pl-3.5 py-1 max-w-xl">
            <p className="font-body text-base sm:text-lg text-[#3e3832] font-bold leading-relaxed">
              Product design, development and AI-driven solutions — from idea validation to real-world deployment.
            </p>
          </div>
        </div>

        {/* Right Column: Illustrated Retro Computer + Why Work With Me Window */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-end gap-5 z-10">
          {/* Vintage Computer Illustration */}
          <div className="shrink-0 flex items-center justify-center">
            <RetroComputerIllustration className="max-w-[210px] sm:max-w-[230px]" />
          </div>

          {/* Window Panel: // Why Work With Me? */}
          <div className="retro-window w-full sm:max-w-[280px] md:max-w-[300px] shadow-[6px_6px_0px_#7c3aed] bg-white shrink-0">
            <div className="retro-window-header header-yellow !py-1.5 !px-3">
              <div className="flex items-center gap-1.5 mr-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e63946] border border-[#1a1a1a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d] border border-[#1a1a1a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#86efac] border border-[#1a1a1a]" />
              </div>
              <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a] truncate">
                <span>// Why Work With Me?</span>
              </div>
              <div className="retro-window-controls ml-auto">
                <span className="win-btn win-btn-min">−</span>
                <span className="win-btn win-btn-max">□</span>
                <span className="win-btn win-btn-close">✕</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-white space-y-2.5">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <GreenCheckIcon className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="font-display font-bold text-xs text-[#1a1a1a] leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ANIMATED SERVICES MARQUEE — Continuous Retro Ticker (Memoized)
          ========================================================================= */}
      <ServicesMarqueeTicker />

      {/* =========================================================================
          SECTION HEADER & INTERACTIVE HINT
          ========================================================================= */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
        <div>
          <span className="font-mono text-xs font-bold text-[#e63946] uppercase tracking-wider block mb-1">
            // 08 CORE CAPABILITIES
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
            Explore Services &amp; Interactive Pricing
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 bg-white border-2 border-[#1a1a1a] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#1a1a1a]">
          <span className="text-sm">💡</span>
          <span className="font-mono text-xs font-bold text-[#1a1a1a]">
            Click any card to open Scope &amp; Pricing Spec
          </span>
        </div>
      </div>

      {/* =========================================================================
          SERVICE CARDS — 4-Column × 2-Row Grid (8 Offerings, Memoized Items)
          ========================================================================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {servicesOfferings.map((card) => (
          <ServiceCardItem
            key={card.id}
            card={card}
            onSelect={handleOpenModal}
          />
        ))}
      </section>

      {/* =========================================================================
          BOTTOM CTA BANNER — 3-Segment Composition with Pink Offset Shadow
          ========================================================================= */}
      <section className="relative mt-8 mb-6">
        <div className="border-[3px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#f472b6] bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Segment: Yellow with Handshake */}
          <div className="lg:col-span-4 bg-[#ffd93d] border-b-2 lg:border-b-0 lg:border-r-[3px] border-[#1a1a1a] p-5 sm:p-6 flex items-center gap-3.5">
            <RetroHandshakeIcon className="w-12 h-10 shrink-0" />
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#1a1a1a] leading-tight">
              Have a Project in Mind?
            </h3>
          </div>

          {/* Middle Segment: Cream/White with Description */}
          <div className="lg:col-span-5 bg-[#fbf8ef] sm:bg-white border-b-2 lg:border-b-0 lg:border-r-[3px] border-[#1a1a1a] p-5 sm:p-6 flex items-center">
            <p className="font-body text-xs sm:text-sm font-bold text-[#3e3832] leading-relaxed">
              Let's discuss your idea and turn it into a reliable, high-impact product.
            </p>
          </div>

          {/* Right Segment: Red 'Get in Touch ↗' Button */}
          <div className="lg:col-span-3 bg-white p-5 sm:p-6 flex items-center justify-center lg:justify-end">
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#d90429] text-white border-2 border-[#1a1a1a] rounded-xl px-6 py-3 font-display font-extrabold text-sm shadow-[2px_2px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              <span className="text-base">✉️</span>
              <span>Get in Touch</span>
              <span className="text-base">↗</span>
            </button>
          </div>
        </div>

        {/* Decorative Pixel Checkerboard Motif outside bottom-right */}
        <div
          className="hidden md:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] overflow-hidden absolute -bottom-7 right-2"
          aria-hidden="true"
        >
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
          <span className="bg-transparent" />
          <span className="bg-[#c8b6ff]" />
        </div>
      </section>

      {/* Floating Interactive Scope & Pricing Spec Modal */}
      <ServicePricingModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={handleCloseModal}
        onContact={handleModalContact}
      />
    </div>
  );
}
