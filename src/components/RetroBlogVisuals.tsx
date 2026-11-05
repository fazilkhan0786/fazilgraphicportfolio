/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Vector SVG Illustrations & Visual Accents for Retro Stories & Blog Page
 * Faithfully matches media_1793868784164.jpg
 */

import React from "react";

/**
 * 1. Retro Blog Computer Illustration (BLOG.EXE)
 * - Vintage beige CRT monitor with 3D angled bevel and drop shadow
 * - Vibrant purple CRT display screen (#9333ea / #7c3aed)
 * - White folded document icon with horizontal text lines
 * - Bold retro badge text "BLOG.EXE"
 * - Stacked hardbound books underneath: mint green bottom book, coral red top book, cream book under right corner
 * - White ceramic coffee mug with yellow 'F' logo monogram and rising steam wisps (~)
 * - Radiant comic action sparks (coral/red and dark action lines)
 */
export const RetroBlogComputerIllustration = React.memo(function RetroBlogComputerIllustration({
  className = ""
}: {
  className?: string;
}) {
  return (
    <div className={`relative inline-block select-none ${className}`} aria-label="Retro blog computer illustration">
      <svg
        viewBox="0 0 320 250"
        className="w-full h-auto max-w-[320px] drop-shadow-[5px_5px_0px_#1a1a1a]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Action Sparks / Speed Radiations */}
        <g stroke="#e63946" strokeWidth="2.5" strokeLinecap="round">
          <path d="M46 50L30 38" />
          <path d="M54 30L50 12" />
          <path d="M78 22L88 8" />
          <path d="M268 70L286 60" />
          <path d="M272 88L292 92" />
        </g>
        <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
          <path d="M36 68L20 76" />
          <path d="M258 50L274 36" />
        </g>

        {/* Stacked Books under/behind the monitor */}
        {/* Bottom Book: Mint Green */}
        <g id="bottom-book">
          <rect x="24" y="180" width="108" height="20" rx="3" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="28" y="184" width="98" height="12" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Spine vertical ribbing */}
          <line x1="36" y1="180" x2="36" y2="200" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="42" y1="180" x2="42" y2="200" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Bookmark Ribbon */}
          <path d="M110 196L116 206L122 196" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1.5" />
        </g>

        {/* Top Book: Coral Red */}
        <g id="top-book">
          <rect x="30" y="156" width="96" height="22" rx="3" fill="#fb7185" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="34" y="160" width="86" height="14" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          {/* Spine vertical ribbing */}
          <line x1="42" y1="156" x2="42" y2="178" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="48" y1="156" x2="48" y2="178" stroke="#1a1a1a" strokeWidth="1.5" />
        </g>

        {/* Support Book under right side: Cream */}
        <g id="right-book">
          <rect x="180" y="176" width="76" height="18" rx="2" fill="#fef9c3" stroke="#1a1a1a" strokeWidth="2" />
          <rect x="184" y="180" width="68" height="10" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
        </g>

        {/* Ceramic Coffee Mug with FAZIL 'F' Monogram */}
        <g id="coffee-mug">
          {/* Steam Swirls */}
          <path d="M258 148C254 138 262 130 256 120" stroke="#6b635b" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M268 144C264 132 272 124 266 112" stroke="#6b635b" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />

          {/* Handle */}
          <path d="M278 160C290 160 292 184 278 186" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />

          {/* Mug Body */}
          <rect x="236" y="150" width="44" height="48" rx="6" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="240" y="154" width="36" height="6" rx="2" fill="#f5eed8" stroke="#1a1a1a" strokeWidth="1" />

          {/* FAZIL Yellow 'F' Logo on Mug */}
          <rect x="248" y="166" width="20" height="20" rx="3" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />
          <path
            d="M253 171H263V174H256V176H261V179H256V183H253V171Z"
            fill="#1a1a1a"
          />
        </g>

        {/* CRT Monitor Stand / Pedestal */}
        <path d="M140 174L130 196H204L194 174H140Z" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2.5" />
        <rect x="114" y="194" width="108" height="12" rx="3" fill="#d6cebe" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Monitor Outer Casing (Beige 3D angled box) */}
        {/* Right 3D Bevel / Depth */}
        <path d="M242 52L258 68V170L242 176V52Z" fill="#cfc6b5" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Top 3D Bevel / Depth */}
        <path d="M82 38L100 22H236L242 52H82Z" fill="#f0ebe0" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Main Front Face */}
        <rect x="76" y="38" width="168" height="136" rx="12" fill="#fbf8ef" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Screen Outer Bezel */}
        <rect x="90" y="52" width="140" height="102" rx="9" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2" />

        {/* CRT Screen Glass (Vibrant Retro Purple matching reference) */}
        <rect x="96" y="58" width="128" height="90" rx="7" fill="#7c3aed" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Glass Scanline / Glare Accent */}
        <path d="M100 62L152 62L106 142H100V62Z" fill="#ffffff" fillOpacity="0.12" />

        {/* Screen Content: Folded Document Icon */}
        <g id="screen-doc-icon">
          {/* Main Paper Body */}
          <path
            d="M144 68H168L178 78V114H144V68Z"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Folded Corner */}
          <path
            d="M168 68V78H178"
            fill="#e5dfd3"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Document Content Text Lines */}
          <line x1="150" y1="84" x2="172" y2="84" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="90" x2="172" y2="90" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="96" x2="166" y2="96" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="102" x2="170" y2="102" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Screen Text Badge: BLOG.EXE */}
        <g id="screen-blog-badge">
          <rect x="130" y="122" width="60" height="18" rx="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
          <text
            x="160"
            y="135"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="900"
            fill="#1a1a1a"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            BLOG.EXE
          </text>
        </g>
      </svg>
    </div>
  );
});

/**
 * 2. Topic Filter Vector Icons
 */

// Product: 3D Isometric Cube
export const ProductCubeIcon = React.memo(function ProductCubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
});

// AI/ML: Microchip with AI text
export const AIMicrochipIcon = React.memo(function AIMicrochipIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  );
});

// Healthcare: Heart with medical cross
export const HealthcareCrossIcon = React.memo(function HealthcareCrossIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <line x1="12" y1="8" x2="12" y2="14" strokeWidth="2.5" />
      <line x1="9" y1="11" x2="15" y2="11" strokeWidth="2.5" />
    </svg>
  );
});

// Design: Drafting Pencil
export const DesignPencilIcon = React.memo(function DesignPencilIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
});

// Founder Life: User silhouette badge
export const FounderUserIcon = React.memo(function FounderUserIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
});

// Dev & Tech: Code brackets </>
export const DevCodeIcon = React.memo(function DevCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" strokeWidth="2" />
    </svg>
  );
});

/**
 * 3. Card Badges & Utility Icons
 */

// Featured Star Icon
export const FeaturedStarIcon = React.memo(function FeaturedStarIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
});

// Healthcare Badge: Red plus in rounded box
export const HealthBadgeIcon = React.memo(function HealthBadgeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </div>
  );
});

// AI Chip Badge: Microchip with AI core
export const ChipBadgeIcon = React.memo(function ChipBadgeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <span className="font-mono font-black text-xs text-[#7c3aed] tracking-wider leading-none">AI</span>
        <div className="flex gap-0.5 mt-0.5">
          <span className="w-1 h-1 bg-[#1a1a1a] rounded-full" />
          <span className="w-1 h-1 bg-[#1a1a1a] rounded-full" />
        </div>
      </div>
    </div>
  );
});

// Figma/Design Badge: Vibrant design icon
export const FigmaBadgeIcon = React.memo(function FigmaBadgeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 12a4 4 0 1 0 4 4V12H8z" fill="#0acf83" />
        <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#f24e1e" />
        <path d="M12 4h4a4 4 0 1 1 0 8h-4V4z" fill="#ff7262" />
        <path d="M12 12h4a4 4 0 1 1 0 8h-4v-8z" fill="#1abcfe" />
        <circle cx="8" cy="16" r="4" fill="#a259ff" />
      </svg>
    </div>
  );
});

// Rocket Badge: Launch ship for startup milestones
export const RocketBadgeIcon = React.memo(function RocketBadgeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    </div>
  );
});

/**
 * 4. Scalable Vector Retro Pixel Art Cover Artwork
 * Faithfully matches the sunset skyline & student founder silhouette in media_1793868784164.jpg
 */
export const FeaturedStoryPixelCover = React.memo(function FeaturedStoryPixelCover({
  className = ""
}: {
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden select-none relative ${className}`} aria-label="Sunset city skyline with student founder illustration">
      <svg
        viewBox="0 0 480 260"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunset-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="30%" stopColor="#c084fc" />
            <stop offset="65%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <radialGradient id="sun-glow" cx="40%" cy="65%" r="35%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky Background */}
        <rect width="480" height="260" fill="url(#sunset-sky)" />

        {/* Pixel Stars in Twilight Sky */}
        <g fill="#ffffff" fillOpacity="0.8">
          <rect x="36" y="24" width="3" height="3" />
          <rect x="84" y="42" width="2" height="2" />
          <rect x="142" y="18" width="3" height="3" />
          <rect x="220" y="32" width="2" height="2" />
          <rect x="340" y="20" width="3" height="3" />
          <rect x="420" y="48" width="2" height="2" />
          <rect x="450" y="26" width="3" height="3" />
        </g>

        {/* Setting Sun */}
        <circle cx="180" cy="165" r="46" fill="url(#sun-glow)" />
        <circle cx="180" cy="165" r="32" fill="#fef08a" />

        {/* Distant City Skyline Silhouettes */}
        {/* Layer 1: Midtone Silhouette */}
        <g fill="#7e22ce" fillOpacity="0.35">
          <rect x="10" y="160" width="28" height="100" />
          <rect x="46" y="140" width="34" height="120" />
          <rect x="88" y="170" width="22" height="90" />
          <rect x="118" y="152" width="40" height="108" />
          <rect x="220" y="145" width="36" height="115" />
          <rect x="264" y="162" width="30" height="98" />
          <rect x="302" y="138" width="44" height="122" />
          <rect x="354" y="150" width="38" height="110" />
          <rect x="400" y="130" width="50" height="130" />
        </g>

        {/* Layer 2: Foreground Purple Skyline */}
        <g fill="#4c1d95" fillOpacity="0.85">
          {/* Building Left with Antenna */}
          <rect x="30" y="150" width="20" height="110" />
          <line x1="40" y1="134" x2="40" y2="150" stroke="#4c1d95" strokeWidth="2" />
          <rect x="58" y="175" width="26" height="85" />

          {/* Building Right tall skyscrapers with illuminated windows */}
          <rect x="360" y="125" width="42" height="135" />
          <line x1="381" y1="110" x2="381" y2="125" stroke="#4c1d95" strokeWidth="2.5" />
          {/* Lit Windows */}
          <g fill="#fde047" fillOpacity="0.75">
            <rect x="368" y="136" width="3" height="4" />
            <rect x="376" y="136" width="3" height="4" />
            <rect x="384" y="136" width="3" height="4" />
            <rect x="392" y="136" width="3" height="4" />
            <rect x="368" y="148" width="3" height="4" />
            <rect x="384" y="148" width="3" height="4" />
            <rect x="376" y="160" width="3" height="4" />
            <rect x="392" y="160" width="3" height="4" />
          </g>

          <rect x="410" y="140" width="50" height="120" />
          <g fill="#fde047" fillOpacity="0.6">
            <rect x="420" y="152" width="3" height="4" />
            <rect x="430" y="152" width="3" height="4" />
            <rect x="440" y="164" width="3" height="4" />
          </g>
        </g>

        {/* Student Founder Silhouette Looking at Skyline */}
        <g id="founder-silhouette">
          {/* Torso & Backpack */}
          <path
            d="M230 260C230 220 236 195 255 180C274 195 280 220 280 260H230Z"
            fill="#1e1b4b"
          />
          {/* Backpack Straps & Pack Body */}
          <path
            d="M242 195C234 205 232 230 234 260H276C278 230 276 205 268 195"
            stroke="#312e81"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M246 208H264"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Head & Hair */}
          <circle cx="255" cy="155" r="16" fill="#1e1b4b" />
          {/* Hair spikes / silhouette profile */}
          <path
            d="M242 150C240 142 248 138 255 138C262 138 270 142 268 150C271 146 274 152 270 158"
            fill="#0f172a"
          />
          {/* Glasses profile glint */}
          <rect x="264" y="150" width="4" height="2" fill="#ffffff" fillOpacity="0.8" />
          {/* Jacket Collar */}
          <path
            d="M244 174L255 186L266 174"
            stroke="#4338ca"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
});
