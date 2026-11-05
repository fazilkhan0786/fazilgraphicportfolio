/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Retro Visuals & Vector Illustrations for Home Page Redesign
 * Matching Reference Image 1 (Hero), Reference Image 2 (About Me) & Reference Image 3 (Train/Journey)
 */

import React from "react";

// ============================================================================
// 1. RETRO ABOUT COMPUTER ILLUSTRATION (Matching Reference Image 2)
// Desktop CRT monitor with yellow 'F' monogram on dark screen,
// resting on stacked red/coral and green books.
// ============================================================================
export const RetroAboutComputerIllustration = React.memo(({ className = "w-44 sm:w-52 h-auto" }: { className?: string }) => (
  <div className={`relative inline-block select-none ${className}`} aria-label="Vintage computer illustration with Fazil F monogram resting on stacked books">
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[4px_4px_0px_rgba(26,26,26,0.3)]">
      {/* Ground subtle shadow */}
      <ellipse cx="110" cy="208" rx="75" ry="8" fill="#1a1a1a" fillOpacity="0.12" />

      {/* --- STACKED BOOKS --- */}
      {/* Bottom Book: Mint Green */}
      <g id="bottom-book">
        {/* Shadow under bottom book */}
        <path d="M46 182 L174 182 L170 196 L42 196 Z" fill="#1a1a1a" fillOpacity="0.2" />
        {/* Book cover body */}
        <rect x="44" y="174" width="132" height="20" rx="3" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Book spine curve left */}
        <path d="M44 174 C41 174 38 177 38 184 C38 191 41 194 44 194 Z" fill="#4ade80" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* White pages block on right */}
        <rect x="68" y="178" width="104" height="12" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Book pages lines */}
        <line x1="72" y1="182" x2="168" y2="182" stroke="#d4d4d4" strokeWidth="1" />
        <line x1="72" y1="186" x2="168" y2="186" stroke="#d4d4d4" strokeWidth="1" />
        {/* White bookmark ribbon */}
        <path d="M142 190 L142 202 L146 198 L150 202 L150 190 Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
      </g>

      {/* Top Book: Coral Red */}
      <g id="top-book">
        {/* Book cover body */}
        <rect x="48" y="152" width="124" height="22" rx="3" fill="#fb7185" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Book spine curve left */}
        <path d="M48 152 C45 152 42 155 42 163 C42 171 45 174 48 174 Z" fill="#f43f5e" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* White pages block on right */}
        <rect x="70" y="156" width="98" height="14" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Book pages lines */}
        <line x1="74" y1="161" x2="164" y2="161" stroke="#d4d4d4" strokeWidth="1" />
        <line x1="74" y1="165" x2="164" y2="165" stroke="#d4d4d4" strokeWidth="1" />
        {/* Spine title detail */}
        <line x1="44" y1="158" x2="44" y2="168" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* --- COMPUTER PEDESTAL & BASE --- */}
      <g id="computer-base">
        {/* Base plate */}
        <path d="M72 152 L148 152 L154 144 L66 144 Z" fill="#e5e5d8" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Swivel neck */}
        <rect x="94" y="134" width="32" height="12" fill="#d4d4c4" stroke="#1a1a1a" strokeWidth="2.5" />
      </g>

      {/* --- CRT MONITOR CHASSIS --- */}
      <g id="crt-monitor">
        {/* Outer 3D Chassis shadow right/bottom */}
        <path d="M52 38 L168 38 C174 38 178 42 178 48 L178 126 C178 132 174 136 168 136 L52 136 C46 136 42 132 42 126 L42 48 C42 42 46 38 52 38 Z" fill="#ece8d9" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Top/Right 3D bevel bevel highlight */}
        <path d="M44 46 L52 40 L168 40 L176 46" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Screen Bezel Inset */}
        <rect x="52" y="48" width="116" height="78" rx="6" fill="#3a3935" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* Dark CRT Screen */}
        <rect x="58" y="54" width="104" height="66" rx="4" fill="#1f2421" />

        {/* CRT Glass Reflection Arc */}
        <path d="M62 58 L120 58 L80 116 L62 116 Z" fill="#ffffff" fillOpacity="0.06" />

        {/* Top-left Retro Status Bar on Screen */}
        <rect x="62" y="58" width="18" height="6" rx="1.5" fill="#10b981" />
        <rect x="82" y="58" width="8" height="6" rx="1.5" fill="#ef4444" />

        {/* Yellow FAZIL 'F' Monogram Logo in Screen Center */}
        <g id="fazil-f-logo" transform="translate(94, 68)">
          {/* Main F vertical stem */}
          <path d="M6 4 L14 4 L14 36 L6 36 Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Top horizontal bar */}
          <path d="M14 4 L28 4 L28 12 L14 12 Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Middle horizontal bar */}
          <path d="M14 18 L25 18 L25 25 L14 25 Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* 3D block shadow on F */}
          <path d="M28 8 L31 11 L31 15 L28 12 Z" fill="#ca8a04" stroke="#1a1a1a" strokeWidth="1" />
          <path d="M25 21 L28 24 L28 28 L25 25 Z" fill="#ca8a04" stroke="#1a1a1a" strokeWidth="1" />
        </g>

        {/* Front chassis details: Power button & LED */}
        <circle cx="158" cy="128" r="2.5" fill="#22c55e" stroke="#1a1a1a" strokeWidth="1" />
        <rect x="140" y="126" width="10" height="4" rx="1" fill="#1a1a1a" />
        <line x1="60" y1="128" x2="90" y2="128" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  </div>
));

// ============================================================================
// 2. RETRO PIXEL TRAIN & TRACK ILLUSTRATION (Matching Reference Image 3)
// Pixel-art red locomotive with yellow 'F' monogram, puffing smoke clouds,
// passenger carriage with yellow windows, railway track, and green bushes.
// ============================================================================
export const RetroPixelTrain = React.memo(({
  className = "w-64 sm:w-72 h-auto"
}: {
  className?: string;
}) => (
  <div className={`relative inline-block select-none ${className}`} aria-label="Pixel art train with Fazil F marking and passenger carriage">
    <svg viewBox="0 0 280 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* --- PUFFING SMOKE CLOUDS --- */}
      <g id="smoke-clouds" className="animate-pulse">
        {/* Small puff */}
        <circle cx="106" cy="12" r="6" fill="#f5f5f4" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Medium puff */}
        <circle cx="100" cy="8" r="8" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.8" />
        {/* Large puff behind */}
        <circle cx="90" cy="14" r="9" fill="#f5f5f4" stroke="#1a1a1a" strokeWidth="1.8" />
      </g>

      {/* --- LOCOMOTIVE ENGINE (RED) --- */}
      <g id="locomotive">
        {/* Smokestack */}
        <rect x="106" y="20" width="8" height="14" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M103 20 L117 20 L115 17 L105 17 Z" fill="#1a1a1a" />

        {/* Engine Cab (Back tall part) */}
        <rect x="52" y="24" width="46" height="34" rx="2" fill="#ef4444" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Cab Roof overhang */}
        <rect x="49" y="21" width="52" height="5" rx="1.5" fill="#dc2626" stroke="#1a1a1a" strokeWidth="2" />
        {/* Cab Windows (Yellow) */}
        <rect x="58" y="28" width="12" height="14" rx="1.5" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="76" y="28" width="12" height="14" rx="1.5" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2" />

        {/* Engine Boiler (Front lower part) */}
        <rect x="98" y="32" width="28" height="26" rx="2" fill="#ef4444" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Cowcatcher / Front wedge */}
        <path d="M126 44 L134 58 L126 58 Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Front Headlight */}
        <rect x="126" y="36" width="5" height="7" rx="1" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M131 38 L138 35 L138 45 L131 42 Z" fill="#ffd93d" fillOpacity="0.4" />

        {/* Bold Yellow 'F' Logo on Engine Side */}
        <rect x="62" y="45" width="26" height="11" rx="1" fill="#1a1a1a" />
        <text x="71" y="54" fontFamily="monospace" fontWeight="900" fontSize="10" fill="#ffd93d">
          F
        </text>

        {/* Locomotive Wheels */}
        <circle cx="62" cy="62" r="7" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="62" cy="62" r="2.5" fill="#ffd93d" />
        <circle cx="84" cy="62" r="7" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="84" cy="62" r="2.5" fill="#ffd93d" />
        <circle cx="112" cy="62" r="7" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="112" cy="62" r="2.5" fill="#ffd93d" />
        {/* Connecting Rod */}
        <line x1="62" y1="62" x2="112" y2="62" stroke="#1a1a1a" strokeWidth="2" />
      </g>

      {/* --- COUPLER --- */}
      <rect x="134" y="50" width="8" height="4" fill="#1a1a1a" />

      {/* --- PASSENGER CARRIAGE (CREAM / WHITE) --- */}
      <g id="passenger-carriage">
        {/* Carriage Body */}
        <rect x="142" y="28" width="118" height="30" rx="3" fill="#fdfcf7" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Carriage Roof Overhang */}
        <rect x="140" y="25" width="122" height="5" rx="1.5" fill="#e5e5d8" stroke="#1a1a1a" strokeWidth="2" />

        {/* Row of 6 Yellow Windows */}
        {[0, 1, 2, 3, 4, 5].map((wIdx) => (
          <rect
            key={wIdx}
            x={148 + wIdx * 18}
            y="32"
            width="12"
            height="12"
            rx="1.5"
            fill="#fef08a"
            stroke="#1a1a1a"
            strokeWidth="1.8"
          />
        ))}

        {/* Magenta / Purple bottom decorative stripe */}
        <rect x="143" y="50" width="116" height="5" fill="#f43f5e" />

        {/* Carriage Wheels */}
        <circle cx="158" cy="62" r="6" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="158" cy="62" r="2" fill="#ffd93d" />
        <circle cx="176" cy="62" r="6" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="176" cy="62" r="2" fill="#ffd93d" />

        <circle cx="224" cy="62" r="6" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="224" cy="62" r="2" fill="#ffd93d" />
        <circle cx="242" cy="62" r="6" fill="#374151" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="242" cy="62" r="2" fill="#ffd93d" />
      </g>
    </svg>
  </div>
));

// ============================================================================
// 3. PROJECT STATION CARD ILLUSTRATION DISPATCHER
// Renders the specific artwork for each station shown in the station card right area
// e.g. for NuroVed: CRT monitor with ECG heartbeat line and red heart on purple screen!
// ============================================================================
export const StationProjectVisual = React.memo(({ stationId }: { stationId: string }) => {
  switch (stationId) {
    case "nuroved":
    case "nuroved-health":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="NuroVed diagnostic monitor with ECG heartbeat and heart">
          {/* Action sparks radiating around monitor */}
          <div className="absolute -top-3 -left-2 text-yellow-500 font-bold text-xl animate-pulse">⚡</div>
          <div className="absolute -top-2 right-4 text-yellow-500 font-bold text-sm">✦</div>
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            {/* Monitor Chassis */}
            <rect x="30" y="16" width="118" height="82" rx="8" fill="#fdfbf7" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M34 20 L40 18 L142 18 L144 20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            {/* Purple CRT Screen */}
            <rect x="38" y="24" width="102" height="66" rx="4" fill="#a855f7" stroke="#1a1a1a" strokeWidth="2" />
            {/* Screen Inner Glare */}
            <path d="M40 26 L80 26 L50 88 L40 88 Z" fill="#ffffff" fillOpacity="0.1" />
            {/* Lifeline ECG Wave */}
            <path d="M44 60 L64 60 L70 46 L76 74 L82 54 L88 62 L98 62" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Red Heart on Screen */}
            <path d="M118 48 C114 42 106 44 106 50 C106 58 118 66 118 66 C118 66 130 58 130 50 C130 44 122 42 118 48 Z" fill="#ef4444" stroke="#1a1a1a" strokeWidth="1.5" />
            {/* Monitor Pedestal & Stand */}
            <rect x="76" y="98" width="26" height="12" fill="#d4d4c4" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M56 110 L122 110 L126 116 L52 116 Z" fill="#e5e5d8" stroke="#1a1a1a" strokeWidth="2.5" />
            {/* Stacked books under left side of monitor */}
            <rect x="12" y="112" width="60" height="10" rx="2" fill="#86efac" stroke="#1a1a1a" strokeWidth="2" />
            <rect x="14" y="102" width="56" height="10" rx="2" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />
          </svg>
        </div>
      );

    case "nurocare":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="NuroCare mobile health telemetry preview">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            <rect x="48" y="12" width="84" height="114" rx="10" fill="#fdfbf7" stroke="#1a1a1a" strokeWidth="2.5" />
            <rect x="54" y="22" width="72" height="92" rx="4" fill="#38bdf8" stroke="#1a1a1a" strokeWidth="2" />
            {/* Telemetry charts */}
            <rect x="60" y="30" width="60" height="24" rx="2" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
            <path d="M64 42 L72 38 L80 44 L90 36 L102 42 L114 36" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <rect x="60" y="60" width="28" height="20" rx="2" fill="#fef08a" stroke="#1a1a1a" strokeWidth="1.5" />
            <rect x="92" y="60" width="28" height="20" rx="2" fill="#bbf7d0" stroke="#1a1a1a" strokeWidth="1.5" />
            <circle cx="90" cy="120" r="3" fill="#1a1a1a" />
          </svg>
        </div>
      );

    case "actora":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="Actora behavioral feedback isometric engine">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            {/* Isometric stacked plates */}
            <path d="M90 20 L140 46 L90 72 L40 46 Z" fill="#c084fc" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M40 46 L90 72 L90 80 L40 54 Z" fill="#9333ea" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M140 46 L90 72 L90 80 L140 54 Z" fill="#7e22ce" stroke="#1a1a1a" strokeWidth="2.5" />

            <path d="M90 52 L140 78 L90 104 L40 78 Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M40 78 L90 104 L90 112 L40 86 Z" fill="#eab308" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M140 78 L90 104 L90 112 L140 86 Z" fill="#ca8a04" stroke="#1a1a1a" strokeWidth="2.5" />

            {/* Target icon on top */}
            <circle cx="90" cy="46" r="10" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
            <circle cx="90" cy="46" r="5" fill="#ef4444" />
          </svg>
        </div>
      );

    case "techocore":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="Techocore systems terminal preview">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            <rect x="32" y="20" width="116" height="88" rx="8" fill="#111827" stroke="#1a1a1a" strokeWidth="2.5" />
            <rect x="32" y="20" width="116" height="18" fill="#374151" stroke="#1a1a1a" strokeWidth="2" />
            <circle cx="42" cy="29" r="2.5" fill="#ef4444" />
            <circle cx="50" cy="29" r="2.5" fill="#f59e0b" />
            <circle cx="58" cy="29" r="2.5" fill="#10b981" />
            <text x="44" y="60" fontFamily="monospace" fontSize="12" fill="#86efac" fontWeight="bold">&gt; system.run()</text>
            <text x="44" y="76" fontFamily="monospace" fontSize="10" fill="#fef08a">&gt; 100% compiled</text>
            <text x="44" y="92" fontFamily="monospace" fontSize="10" fill="#93c5fd">&gt; status: active</text>
          </svg>
        </div>
      );

    case "trashee":
    case "dprofiz-iot":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="Trashee IoT CleanTech telemetry preview">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            {/* IoT sensor bin with telemetry waves */}
            <rect x="62" y="44" width="56" height="68" rx="6" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
            <path d="M56 44 L124 44 L120 34 L60 34 Z" fill="#4ade80" stroke="#1a1a1a" strokeWidth="2" />
            {/* Telemetry WiFi arcs */}
            <path d="M74 22 C82 16 98 16 106 22" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M80 27 C86 22 94 22 100 27" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            {/* Bin eco leaf */}
            <path d="M90 62 C80 62 76 72 76 80 C84 80 94 76 94 62 Z" fill="#15803d" stroke="#1a1a1a" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case "goat":
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none" aria-label="G.O.A.T creative agency studio gamepad preview">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            {/* Retro Gamepad */}
            <path d="M50 42 C40 42 32 50 32 64 C32 82 44 100 58 100 C66 100 74 92 84 84 L96 84 C106 92 114 100 122 100 C136 100 148 82 148 64 C148 50 140 42 130 42 Z" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2.5" />
            {/* D-Pad Left */}
            <path d="M52 56 H60 V48 H66 V56 H74 V62 H66 V70 H60 V62 H52 Z" fill="#1a1a1a" />
            {/* Action Buttons Right */}
            <circle cx="116" cy="54" r="4.5" fill="#ef4444" stroke="#1a1a1a" strokeWidth="1.5" />
            <circle cx="126" cy="64" r="4.5" fill="#38bdf8" stroke="#1a1a1a" strokeWidth="1.5" />
            <circle cx="106" cy="64" r="4.5" fill="#22c55e" stroke="#1a1a1a" strokeWidth="1.5" />
            <circle cx="116" cy="74" r="4.5" fill="#a855f7" stroke="#1a1a1a" strokeWidth="1.5" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="relative w-44 sm:w-56 h-auto select-none">
          <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[3px_3px_0px_rgba(26,26,26,0.3)]">
            <rect x="36" y="22" width="108" height="82" rx="8" fill="#fdfbf7" stroke="#1a1a1a" strokeWidth="2.5" />
            <rect x="44" y="30" width="92" height="66" rx="4" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />
            <text x="90" y="68" textAnchor="middle" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="#1a1a1a">
              ENGINEERING
            </text>
          </svg>
        </div>
      );
  }
});

// ============================================================================
// 4. ROLE STRIP VECTOR ICONS (Matching Reference Image 1)
// Product Builder, Full-Stack Developer, UI/UX Designer, AI/ML Explorer
// ============================================================================
export const ProductBuilderIcon = React.memo(({ className = "w-5 h-5" }: { className?: string }) => (
  <div className="w-6 h-6 rounded bg-white border border-[#1a1a1a] flex items-center justify-center shadow-[1px_1px_0px_#1a1a1a] shrink-0">
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  </div>
));

export const FullStackIcon = React.memo(({ className = "w-5 h-5" }: { className?: string }) => (
  <div className="w-6 h-6 rounded bg-[#ffd93d] border border-[#1a1a1a] flex items-center justify-center shadow-[1px_1px_0px_#1a1a1a] shrink-0">
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  </div>
));

export const DesignerIcon = React.memo(({ className = "w-5 h-5" }: { className?: string }) => (
  <div className="w-6 h-6 rounded bg-white border border-[#1a1a1a] flex items-center justify-center shadow-[1px_1px_0px_#1a1a1a] shrink-0">
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  </div>
));

export const AIExplorerIcon = React.memo(({ className = "w-5 h-5" }: { className?: string }) => (
  <div className="w-6 h-6 rounded bg-white border border-[#1a1a1a] flex items-center justify-center shadow-[1px_1px_0px_#1a1a1a] shrink-0">
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  </div>
));

// ============================================================================
// 5. "WHAT I DO" ICONS (Matching Reference Image 2)
// 6 Areas: Product Development, UI/UX & Design, AI/ML Solutions,
// Full-Stack Development, Problem Solving, Startup Building
// ============================================================================
export const WhatIDoMobileIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" fill="#ffd93d" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
  </svg>
));

export const WhatIDoDesignIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" fill="#ffd93d" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
));

export const WhatIDoAIIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a5 5 0 0 1 5 5v1a4 4 0 0 1 3 4 4 4 0 0 1-2 3.5V17a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-1.5A4 4 0 0 1 4 12a4 4 0 0 1 3-4V7a5 5 0 0 1 5-5z" fill="#c084fc" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="#ffffff" strokeWidth="1.5" />
  </svg>
));

export const WhatIDoFullStackIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="13" rx="2" fill="#86efac" />
    <path d="M7 10 L9 12 L7 14" stroke="#1a1a1a" strokeWidth="2" />
    <line x1="11" y1="14" x2="14" y2="14" stroke="#1a1a1a" strokeWidth="2" />
    <line x1="8" y1="21" x2="16" y2="21" stroke="#1a1a1a" strokeWidth="2.5" />
    <line x1="12" y1="17" x2="12" y2="21" stroke="#1a1a1a" strokeWidth="2.5" />
  </svg>
));

export const WhatIDoProblemSolvingIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" fill="#fecdd3" />
    <circle cx="12" cy="12" r="6" fill="#fb7185" />
    <circle cx="12" cy="12" r="2" fill="#e11d48" />
  </svg>
));

export const WhatIDoStartupIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="#bae6fd" />
    <circle cx="9" cy="7" r="4" fill="#38bdf8" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
));

// ============================================================================
// 6. "BEYOND WORK" ICONS (Matching Reference Image 2)
// 4 Interests: Football, Music, Game Dev, Learning
// ============================================================================
export const BeyondFootballIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
    <polygon points="12 7 8 10 9.5 15 14.5 15 16 10" fill="#1a1a1a" />
    <line x1="12" y1="2" x2="12" y2="7" stroke="#1a1a1a" strokeWidth="1.5" />
    <line x1="4" y1="8" x2="8" y2="10" stroke="#1a1a1a" strokeWidth="1.5" />
    <line x1="20" y1="8" x2="16" y2="10" stroke="#1a1a1a" strokeWidth="1.5" />
    <line x1="6" y1="18" x2="9.5" y2="15" stroke="#1a1a1a" strokeWidth="1.5" />
    <line x1="18" y1="18" x2="14.5" y2="15" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
));

export const BeyondMusicIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" fill="#ffd93d" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="#ffd93d" />
  </svg>
));

export const BeyondGameDevIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="6" fill="#c084fc" />
    <line x1="6" y1="12" x2="10" y2="12" stroke="#1a1a1a" strokeWidth="2" />
    <line x1="8" y1="10" x2="8" y2="14" stroke="#1a1a1a" strokeWidth="2" />
    <circle cx="15" cy="11" r="1.5" fill="#1a1a1a" />
    <circle cx="18" cy="13" r="1.5" fill="#1a1a1a" />
  </svg>
));

export const BeyondLearningIcon = React.memo(({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#fef08a" />
    <line x1="9" y1="7" x2="16" y2="7" stroke="#1a1a1a" strokeWidth="1.5" />
    <line x1="9" y1="11" x2="16" y2="11" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
));
