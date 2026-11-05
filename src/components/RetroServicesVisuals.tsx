/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Vector SVG Illustrations & Visual Accents for Retro Services Page
 * Faithfully matches media_1793862794281.jpg
 */


import React from "react";

/**
 * 1. Retro Desktop Computer Illustration
 * - Vintage beige CRT monitor with golden 'F' monogram on dark screen
 * - Stacked pink and mint green books underneath/beside
 * - Retro white coffee mug with '</>' imprint and rising steam
 * - Comic sparks and action lines
 */
export const RetroComputerIllustration = React.memo(function RetroComputerIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block select-none ${className}`} aria-label="Retro computer illustration">
      <svg
        viewBox="0 0 280 210"
        className="w-full h-auto max-w-[280px] drop-shadow-[4px_4px_0px_#1a1a1a]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Action Sparks / Speed Radiations */}
        <g stroke="#e63946" strokeWidth="2.5" strokeLinecap="round">
          <path d="M42 42L28 32" />
          <path d="M48 24L44 8" />
          <path d="M68 18L76 6" />
          <path d="M236 62L252 54" />
          <path d="M238 78L256 82" />
        </g>
        <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
          <path d="M32 58L18 64" />
          <path d="M228 44L242 32" />
        </g>

        {/* Stacked Books under/behind the monitor */}
        {/* Bottom Book: Mint Green */}
        <g id="bottom-book">
          <rect x="22" y="152" width="94" height="18" rx="3" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="26" y="156" width="86" height="10" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="32" y1="152" x2="32" y2="170" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Top Book: Pink */}
        <g id="top-book">
          <rect x="26" y="132" width="84" height="18" rx="3" fill="#f472b6" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="30" y="136" width="76" height="10" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="36" y1="132" x2="36" y2="150" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Coffee Mug with '</>' Code Brackets */}
        <g id="coffee-mug">
          {/* Steam Swirls */}
          <path d="M228 128C225 120 231 114 227 106" stroke="#6b635b" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M238 126C235 116 241 110 237 100" stroke="#6b635b" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />

          {/* Handle */}
          <path d="M246 142C256 142 258 162 246 164" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />

          {/* Mug Body */}
          <rect x="210" y="132" width="38" height="42" rx="5" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />

          {/* Mug Code Symbol '</>' */}
          <text x="229" y="158" fontFamily="monospace" fontSize="13" fontWeight="900" fill="#1a1a1a" textAnchor="middle">
            &lt;/&gt;
          </text>
        </g>

        {/* CRT Monitor Stand / Pedestal */}
        <path d="M124 150L114 172H182L172 150H124Z" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2.5" />
        <rect x="98" y="170" width="100" height="10" rx="3" fill="#d6cebe" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Monitor Outer Casing (Beige 3D angled box) */}
        {/* Right 3D Bevel / Depth */}
        <path d="M214 44L228 58V146L214 152V44Z" fill="#cfc6b5" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Top 3D Bevel / Depth */}
        <path d="M72 32L88 18H206L214 44H72Z" fill="#f0ebe0" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Main Front Face */}
        <rect x="66" y="32" width="150" height="120" rx="10" fill="#fbf8ef" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Screen Outer Bezel */}
        <rect x="78" y="44" width="124" height="88" rx="8" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2" />

        {/* CRT Screen Glass (Dark Charcoal) */}
        <rect x="84" y="50" width="112" height="76" rx="6" fill="#1f1d1d" stroke="#1a1a1a" strokeWidth="2" />

        {/* CRT Glass Scanline / Glare Accent */}
        <path d="M88 54L136 54L94 122H88V54Z" fill="#ffffff" fillOpacity="0.08" />

        {/* The Golden-Yellow "F" Logo Monogram on Screen */}
        <g id="screen-f-logo">
          {/* Glowing Shadow */}
          <path
            d="M120 66H158V78H136V88H152V100H136V114H120V66Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Highlight Bar */}
          <path d="M124 70H154V74H124V70Z" fill="#fff9c4" />
        </g>

        {/* Monitor Controls (Bottom Bezel) */}
        <circle cx="92" cy="142" r="3" fill="#1a1a1a" />
        <circle cx="104" cy="142" r="3" fill="#1a1a1a" />
        {/* Power LED Indicator */}
        <circle cx="196" cy="142" r="2.5" fill="#86efac" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="174" y1="140" x2="186" y2="140" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="174" y1="144" x2="186" y2="144" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
});

/**
 * 2. Card 1 Icon: Browser with Code Prompt '</>'
 * Vintage green header with 3 window dots and clean code prompt
 */
export function BrowserCodeIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="52" height="42" rx="6" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M2 8C2 4.68629 4.68629 2 8 2H48C51.3137 2 54 4.68629 54 8V14H2V8Z" fill="#86efac" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="8" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="14" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="20" cy="8" r="1.5" fill="#1a1a1a" />
      <text x="28" y="34" fontFamily="monospace" fontSize="16" fontWeight="900" fill="#1a1a1a" textAnchor="middle">
        &lt;/&gt;
      </text>
    </svg>
  );
}

/**
 * 3. Card 2 Icon: Browser with Drawing Pencil
 * Vintage pink header with 3 window dots and drawing pencil
 */
export function BrowserDesignIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="52" height="42" rx="6" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M2 8C2 4.68629 4.68629 2 8 2H48C51.3137 2 54 4.68629 54 8V14H2V8Z" fill="#f472b6" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="8" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="14" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="20" cy="8" r="1.5" fill="#1a1a1a" />
      {/* Canvas stroke line */}
      <line x1="12" y1="32" x2="24" y2="32" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pencil */}
      <g transform="translate(26, 18) rotate(45)">
        <rect x="0" y="0" width="8" height="18" rx="1" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
        <polygon points="0,18 8,18 4,24" fill="#f472b6" stroke="#1a1a1a" strokeWidth="1.5" />
        <polygon points="2,22 6,22 4,24" fill="#1a1a1a" />
        <rect x="0" y="0" width="8" height="4" fill="#e63946" stroke="#1a1a1a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/**
 * 4. Card 3 Icon: AI Microchip Processor
 * Purple square chip with pins and 'AI' label
 */
export function MicrochipAiIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top and Bottom Pins */}
      <line x1="16" y1="2" x2="16" y2="7" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="2" x2="28" y2="7" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="2" x2="40" y2="7" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="39" x2="16" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="39" x2="28" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="39" x2="40" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left and Right Pins */}
      <line x1="4" y1="16" x2="9" y2="16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="23" x2="9" y2="23" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="30" x2="9" y2="30" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="16" x2="52" y2="16" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="23" x2="52" y2="23" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="30" x2="52" y2="30" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* Main Chip Body */}
      <rect x="9" y="7" width="38" height="32" rx="5" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Inner Chip Frame */}
      <rect x="15" y="12" width="26" height="22" rx="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="28" y="28" fontFamily="monospace" fontSize="13" fontWeight="900" fill="#1a1a1a" textAnchor="middle">
        AI
      </text>
    </svg>
  );
}

/**
 * 5. Card 4 Icon: Retro Launching Rocket
 * Angled rocket with propulsion exhaust flame and sparkles
 */
export function RocketConsultingIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Exhaust Flame */}
      <polygon points="12,38 18,34 22,42 16,40" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="8,42 14,37 18,44" fill="#e63946" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Sparkle Points */}
      <circle cx="38" cy="8" r="1.5" fill="#ffd93d" />
      <circle cx="48" cy="18" r="1.5" fill="#ffd93d" />
      {/* Rocket Main Group */}
      <g transform="translate(14, 4) rotate(15)">
        {/* Left Fin */}
        <path d="M6 24L0 30L6 32V24Z" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />
        {/* Right Fin */}
        <path d="M22 24L28 30L22 32V24Z" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />
        {/* Fuselage Body */}
        <path d="M14 2C9 9 7 18 7 30H21C21 18 19 9 14 2Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Rocket Nosecone */}
        <path d="M14 2C11 7 9 12 9 12H19C19 12 17 7 14 2Z" fill="#e63946" stroke="#1a1a1a" strokeWidth="2" />
        {/* Round Port Window */}
        <circle cx="14" cy="20" r="3.5" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="2" />
      </g>
    </svg>
  );
}

/**
 * 6. Card 5 Icon: Painter's Color Palette with Brush (Graphic Design)
 * Pastel yellow palette with colorful pigment spots and angled artist's brush
 */
export function PaletteDesignIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Palette Body */}
      <path
        d="M26 6C13.85 6 4 15.85 4 28C4 35.5 10 39 16 39C19 39 21 37 23 35C24.5 33.5 26.5 33 29 34C32.5 35.5 36 39 42 39C48.5 39 52 33 52 26C52 15 40 6 26 6Z"
        fill="#fef08a"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Palette Grip Hole */}
      <circle cx="16" cy="27" r="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      {/* Paint Color Spots */}
      <circle cx="17" cy="14" r="3" fill="#f472b6" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="27" cy="12" r="3" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="37" cy="16" r="3" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="43" cy="25" r="3" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Paintbrush dipping in */}
      <g transform="translate(30, 20) rotate(35)">
        <rect x="0" y="0" width="5" height="18" rx="1" fill="#fed7aa" stroke="#1a1a1a" strokeWidth="1.5" />
        <rect x="0" y="0" width="5" height="4" fill="#1a1a1a" />
        <polygon points="0,18 5,18 2.5,23" fill="#e11d48" stroke="#1a1a1a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/**
 * 7. Card 6 Icon: Retro Browser with Globe & URL (Website Development)
 * Browser frame with URL pill bar and wireframe globe
 */
export function GlobeWebIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Window Body */}
      <rect x="2" y="2" width="52" height="42" rx="6" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Header Bar */}
      <path d="M2 8C2 4.68629 4.68629 2 8 2H48C51.3137 2 54 4.68629 54 8V14H2V8Z" fill="#fed7aa" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="7" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="12" cy="8" r="1.5" fill="#1a1a1a" />
      <circle cx="17" cy="8" r="1.5" fill="#1a1a1a" />
      {/* URL address bar */}
      <rect x="22" y="5" width="28" height="6" rx="2" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
      {/* Globe Circle */}
      <circle cx="28" cy="28" r="11" fill="#bae6fd" stroke="#1a1a1a" strokeWidth="2" />
      {/* Globe Latitudes & Longitudes */}
      <ellipse cx="28" cy="28" rx="5.5" ry="11" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="17" y1="28" x2="39" y2="28" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="20" y1="23" x2="36" y2="23" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="20" y1="33" x2="36" y2="33" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="1 1" />
    </svg>
  );
}

/**
 * 8. Card 7 Icon: Retro Smartphone with App Grid (Flutter & Mobile)
 * Phone chassis with notch and colorful 2x2 app icons
 */
export function MobileAppIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone Body */}
      <rect x="15" y="2" width="26" height="42" rx="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Top Speaker / Camera */}
      <line x1="25" y1="5" x2="31" y2="5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Screen Area */}
      <rect x="18" y="8" width="20" height="29" rx="1.5" fill="#99f6e4" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* App Grid inside Screen */}
      <rect x="20" y="11" width="6" height="6" rx="1" fill="#f472b6" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="29" y="11" width="6" height="6" rx="1" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="20" y="20" width="6" height="6" rx="1" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="29" y="20" width="6" height="6" rx="1" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="1" />
      {/* Mobile signal / waves */}
      <path d="M45 10C47 13 47 17 45 20" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M48 7C51 12 51 19 48 23" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Home Navigation Line */}
      <line x1="24" y1="40" x2="32" y2="40" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 9. Card 8 Icon: Co-Building Rocket & Seedling (Startup Collaboration)
 * Collaborative startup seed sprouting with rising rocket
 */
export function StartupHandshakeIcon({ className = "w-14 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 46" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Window Body */}
      <rect x="2" y="2" width="52" height="42" rx="6" fill="#fce7f3" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Fast forward partnership arrows */}
      <path d="M8 23L16 16V30L8 23Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 23L24 16V30L16 23Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      {/* Rising Rocket / Seedling badge */}
      <g transform="translate(28, 6)">
        <rect x="0" y="0" width="22" height="30" rx="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
        {/* Sprouting Seedling */}
        <path d="M11 26V15" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 19C7 19 6 15 6 13C9 13 11 16 11 19Z" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M11 16C15 16 16 12 16 10C13 10 11 13 11 16Z" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Star */}
        <polygon points="11,3 12.5,7 16.5,7 13.5,9.5 14.5,13.5 11,11 7.5,13.5 8.5,9.5 5.5,7 9.5,7" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1" />
      </g>
    </svg>
  );
}

/**
 * 10. Retro Handshake Icon for Bottom CTA Banner
 */
export function RetroHandshakeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 38" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Sleeve (Cyan/Green) */}
      <path d="M2 14L10 10L14 18L6 22L2 14Z" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Right Sleeve (Purple/Blue) */}
      <path d="M46 14L38 10L34 18L42 22L46 14Z" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Clasping Hands (Yellow & Peach) */}
      <path
        d="M10 10L18 16L24 12L30 16L38 10L34 18L30 22L24 28L18 22L14 18L10 10Z"
        fill="#fde047"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Finger Clasps */}
      <path d="M19 19L23 23M23 17L27 21M27 15L31 19" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 11. Green Checkbox Icon for Why Work With Me Checklist
 */
export function GreenCheckIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="17" height="17" rx="4" fill="#86efac" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M5.5 10.5L8.5 13.5L14.5 6.5" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 12. Component to render vector icon for any Service Offering
 */
export const ServiceCategoryIcon = React.memo(function ServiceCategoryIcon({
  iconType,
  className = "w-14 h-12"
}: {
  iconType: string;
  className?: string;
}) {
  switch (iconType) {
    case "product-dev":
      return <BrowserCodeIcon className={className} />;
    case "uiux-design":
      return <BrowserDesignIcon className={className} />;
    case "aiml-solutions":
      return <MicrochipAiIcon className={className} />;
    case "technical-consulting":
      return <RocketConsultingIcon className={className} />;
    case "graphic-design":
      return <PaletteDesignIcon className={className} />;
    case "website-dev":
      return <GlobeWebIcon className={className} />;
    case "flutter-mobile":
      return <MobileAppIcon className={className} />;
    case "startup-collab":
      return <StartupHandshakeIcon className={className} />;
    default:
      return <BrowserCodeIcon className={className} />;
  }
});

export function renderServiceIcon(iconType: string, className = "w-14 h-12") {
  return <ServiceCategoryIcon iconType={iconType} className={className} />;
}

/**
 * 13. Tech Badges with Logos / Icons
 */
export const TechBadge = React.memo(function TechBadge({ icon, label }: { icon: string; label: string }) {
  const renderIcon = () => {
    switch (icon) {
      case "flutter":
        return <span className="text-[#02569b] font-bold text-xs">🪽</span>;
      case "react":
        return <span className="text-[#087ea4] font-bold text-xs">⚛</span>;
      case "node":
        return <span className="text-[#22c55e] font-bold text-xs">🟢</span>;
      case "fastapi":
        return <span className="text-[#009688] font-bold text-xs">⚡</span>;
      case "figma":
        return <span className="text-[#a259ff] font-bold text-xs">❖</span>;
      case "ps":
        return <span className="bg-[#001e36] text-[#31a8ff] text-[9px] px-1 rounded font-mono font-bold">Ps</span>;
      case "ai":
        return <span className="bg-[#330000] text-[#ff9a00] text-[9px] px-1 rounded font-mono font-bold">Ai</span>;
      case "branding":
        return <span className="text-[#e11d48] font-bold text-xs">🏷️</span>;
      case "python":
        return <span className="text-[#3b82f6] font-bold text-xs">🐍</span>;
      case "llm":
        return <span className="text-[#e11d48] font-bold text-xs">🤖</span>;
      case "langchain":
        return <span className="text-[#ca8a04] font-bold text-xs">⚡</span>;
      case "pytorch":
        return <span className="text-[#ee4c2c] font-bold text-xs">🔥</span>;
      case "architecture":
        return <span className="text-[#1a1a1a] font-bold text-xs">🧊</span>;
      case "cloud":
        return <span className="text-[#0284c7] font-bold text-xs">☁️</span>;
      case "strategy":
        return <span className="text-[#059669] font-bold text-xs">📈</span>;
      case "next":
        return <span className="bg-black text-white text-[9px] px-1 rounded font-mono font-bold">▲</span>;
      case "tailwind":
        return <span className="text-[#38bdf8] font-bold text-xs">🎨</span>;
      case "seo":
        return <span className="text-[#ca8a04] font-bold text-xs">🔍</span>;
      case "dart":
        return <span className="text-[#0175c2] font-bold text-xs">🎯</span>;
      case "firebase":
        return <span className="text-[#f58220] font-bold text-xs">🔥</span>;
      case "mobile":
        return <span className="text-[#6366f1] font-bold text-xs">📱</span>;
      case "startup":
        return <span className="text-[#be185d] font-bold text-xs">🚀</span>;
      case "mvp":
        return <span className="text-[#059669] font-bold text-xs">⚡</span>;
      default:
        return <span className="text-[#1a1a1a] text-xs">▸</span>;
    }
  };

  return (
    <div className="inline-flex items-center gap-1.5 bg-white border-2 border-[#1a1a1a] rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2.5px_2.5px_0px_#1a1a1a] transition-all cursor-default select-none">
      {renderIcon()}
      <span>{label}</span>
    </div>
  );
});
