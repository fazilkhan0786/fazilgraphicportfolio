/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Vector Artwork & Brand Icons for Certificates & Achievements
 * Faithfully matches media_1793867824350.jpg
 */

import React from "react";

// =========================================================================
// 1. RETRO TROPHY & BOOKS ILLUSTRATION (Hero Centerpiece)
// Large golden trophy with star emblem, 2 handles, yellow pedestal stand,
// resting on stacked red and green books with spine lines and white page edges,
// surrounded by golden sparkle stars and radiant glow.
// =========================================================================
export const RetroTrophyIllustration = React.memo(function RetroTrophyIllustration({
  className = "w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] h-auto drop-shadow-[5px_5px_0px_#1a1a1a]"
}: {
  className?: string;
}) {
  return (
    <div className="relative inline-block select-none" aria-label="Golden Trophy on stacked books retro illustration">
      <svg
        viewBox="0 0 280 260"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="trophy-glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#ffd93d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#fbf8ef" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Warm Glow */}
        <circle cx="140" cy="115" r="95" fill="url(#trophy-glow)" />

        {/* Decorative Golden Sparkle Stars */}
        {/* Top-Left Sparkle */}
        <g transform="translate(48, 45)">
          <path
            d="M8 0L9.8 5.6L16 8L9.8 10.4L8 16L6.2 10.4L0 8L6.2 5.6L8 0Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </g>
        {/* Mid-Left Small Sparkle */}
        <g transform="translate(28, 110)">
          <path
            d="M6 0L7.3 4.2L12 6L7.3 7.8L6 12L4.7 7.8L0 6L4.7 4.2L6 0Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
        {/* Top-Right Sparkle */}
        <g transform="translate(225, 60)">
          <path
            d="M8 0L9.8 5.6L16 8L9.8 10.4L8 16L6.2 10.4L0 8L6.2 5.6L8 0Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </g>
        {/* Mid-Right Small Sparkle */}
        <g transform="translate(242, 125)">
          <path
            d="M5 0L6.1 3.5L10 5L6.1 6.5L5 10L3.9 6.5L0 5L3.9 3.5L5 0Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Action Sparks / Radiant Rays */}
        <g stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
          <path d="M140 18V6" />
          <path d="M102 24L94 12" />
          <path d="M178 24L186 12" />
        </g>

        {/* ==========================================
            STACKED BOOKS (Underneath Trophy)
            ========================================== */}
        {/* BOTTOM BOOK: Fresh Green */}
        <g id="bottom-green-book">
          {/* Main Book Body */}
          <rect
            x="32"
            y="214"
            width="216"
            height="26"
            rx="5"
            fill="#22c55e"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Page Edge Inset */}
          <rect
            x="40"
            y="219"
            width="198"
            height="15"
            rx="2"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="1.5"
          />
          {/* Page Line Texture */}
          <line x1="48" y1="224" x2="230" y2="224" stroke="#e5dfd3" strokeWidth="1.2" />
          <line x1="48" y1="228" x2="230" y2="228" stroke="#e5dfd3" strokeWidth="1.2" />
          {/* Spine Accent Stripe */}
          <line x1="60" y1="214" x2="60" y2="240" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="66" y1="214" x2="66" y2="240" stroke="#1a1a1a" strokeWidth="2" />
          {/* Bookmark Ribbon hanging off left */}
          <path
            d="M36 226H24L28 233L24 240H36V226Z"
            fill="#ffd93d"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>

        {/* TOP BOOK: Coral Red */}
        <g id="top-red-book">
          {/* Main Book Body */}
          <rect
            x="46"
            y="186"
            width="188"
            height="26"
            rx="5"
            fill="#e63946"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Page Edge Inset */}
          <rect
            x="54"
            y="191"
            width="170"
            height="15"
            rx="2"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="1.5"
          />
          {/* Page Line Texture */}
          <line x1="60" y1="196" x2="216" y2="196" stroke="#e5dfd3" strokeWidth="1.2" />
          <line x1="60" y1="200" x2="216" y2="200" stroke="#e5dfd3" strokeWidth="1.2" />
          {/* Spine Accent Stripe */}
          <line x1="72" y1="186" x2="72" y2="212" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="78" y1="186" x2="78" y2="212" stroke="#1a1a1a" strokeWidth="2" />
          {/* Bookmark Ribbon hanging off right */}
          <path
            d="M228 198H240L236 205L240 212H228V198Z"
            fill="#86efac"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>

        {/* ==========================================
            GOLDEN TROPHY
            ========================================== */}
        {/* Trophy Pedestal Base Stand */}
        <rect
          x="100"
          y="172"
          width="80"
          height="14"
          rx="3"
          fill="#d97706"
          stroke="#1a1a1a"
          strokeWidth="2.5"
        />
        <rect
          x="106"
          y="166"
          width="68"
          height="8"
          rx="2"
          fill="#ffd93d"
          stroke="#1a1a1a"
          strokeWidth="2.5"
        />

        {/* Trophy Stem */}
        <path
          d="M130 166V142H150V166H130Z"
          fill="#f59e0b"
          stroke="#1a1a1a"
          strokeWidth="2.5"
        />
        {/* Stem Ring Collar */}
        <ellipse cx="140" cy="144" rx="14" ry="4" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />

        {/* Trophy Left Handle */}
        <path
          d="M96 66C66 66 56 94 68 116C78 134 98 132 104 126"
          stroke="#1a1a1a"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M96 66C66 66 56 94 68 116C78 134 98 132 104 126"
          stroke="#ffd93d"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Trophy Right Handle */}
        <path
          d="M184 66C214 66 224 94 212 116C202 134 182 132 176 126"
          stroke="#1a1a1a"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M184 66C214 66 224 94 212 116C202 134 182 132 176 126"
          stroke="#ffd93d"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Main Trophy Cup Body */}
        <path
          d="M90 42H190V92C190 126 166 142 140 142C114 142 90 126 90 92V42Z"
          fill="#ffd93d"
          stroke="#1a1a1a"
          strokeWidth="2.5"
        />

        {/* Trophy Rim Inset & Inner Lip */}
        <ellipse cx="140" cy="42" rx="50" ry="8" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2.5" />
        <ellipse cx="140" cy="42" rx="42" ry="5.5" fill="#fde047" stroke="#1a1a1a" strokeWidth="1.5" />

        {/* Specular Highlight Sheen on Trophy Cup Left Side */}
        <path
          d="M102 52C98 70 100 96 110 110C104 98 102 80 104 52H102Z"
          fill="#ffffff"
          opacity="0.65"
        />

        {/* Center Star on Trophy Cup */}
        <g transform="translate(140, 90)">
          <path
            d="M0 -22L6.8 -6.8L23.2 -5.2L10.8 5.6L14.4 21.8L0 13.6L-14.4 21.8L-10.8 5.6L-23.2 -5.2L-6.8 -6.8L0 -22Z"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M0 -15L4.5 -4.5L15.5 -3.5L7.2 3.8L9.6 14.6L0 9.1L-9.6 14.6L-7.2 3.8L-15.5 -3.5L-4.5 -4.5L0 -15Z"
            fill="#ffd93d"
          />
        </g>
      </svg>
    </div>
  );
});

// =========================================================================
// 2. PROVIDER / ISSUER LOGOS (Clean, Authentic SVGs)
// =========================================================================

// Harvard University Crimson Shield
export const HarvardLogoIcon = React.memo(function HarvardLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Harvard University Shield">
      {/* Outer Crimson Shield */}
      <path
        d="M6 4C6 4 18 2 18 2C18 2 30 4 30 4V19C30 26 23 31 18 34C13 31 6 26 6 19V4Z"
        fill="#A51C30"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      {/* 3 Books Motif representing VE - RI - TAS */}
      {/* Top Left Book */}
      <rect x="10" y="8" width="6" height="5" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="11" y1="10" x2="15" y2="10" stroke="#A51C30" strokeWidth="0.75" />
      {/* Top Right Book */}
      <rect x="20" y="8" width="6" height="5" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="21" y1="10" x2="25" y2="10" stroke="#A51C30" strokeWidth="0.75" />
      {/* Bottom Center Book */}
      <rect x="15" y="16" width="6" height="5" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="16" y1="18" x2="20" y2="18" stroke="#A51C30" strokeWidth="0.75" />
    </svg>
  );
});

// Amazon Web Services (AWS)
export const AWSLogoIcon = React.memo(function AWSLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Amazon Web Services">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#232F3E" stroke="#1a1a1a" strokeWidth="2" />
      <text x="18" y="17" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
        aws
      </text>
      {/* Orange Arrow Smile */}
      <path
        d="M10 22C14 25 22 25 26 22"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24.5 21L27 22L25 24.5"
        fill="#FF9900"
        stroke="#FF9900"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
});

// Google Cloud
export const GoogleCloudLogoIcon = React.memo(function GoogleCloudLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Cloud">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M19 11C16.8 11 15 12.8 15 15C15 15.3 15 15.6 15.1 15.9C13.3 16.2 12 17.7 12 19.5C12 21.4 13.6 23 15.5 23H22.5C24.4 23 26 21.4 26 19.5C26 17.6 24.5 16.1 22.7 16C22.4 13.2 20.9 11 19 11Z" fill="#4285F4" />
      <circle cx="16" cy="19" r="2.5" fill="#EA4335" />
      <circle cx="21" cy="18" r="2.5" fill="#FBBC05" />
      <circle cx="18.5" cy="21" r="2" fill="#34A853" />
    </svg>
  );
});

// GitHub Student Developer Pack / GitHub Mark
export const GitHubMarkIcon = React.memo(function GitHubMarkIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7C11.92 7 7 11.92 7 18C7 22.86 10.15 26.98 14.53 28.44C15.08 28.54 15.28 28.2 15.28 27.91C15.28 27.65 15.27 26.79 15.27 25.87C12.5 26.38 11.78 25.17 11.56 24.55C11.44 24.23 10.9 23.26 10.43 23C10.04 22.79 9.49 22.28 10.42 22.27C11.29 22.25 11.91 23.07 12.12 23.4C13.11 25.07 14.7 24.6 15.33 24.31C15.43 23.59 15.72 23.11 16.03 22.83C13.58 22.56 11.02 21.61 11.02 17.39C11.02 16.19 11.45 15.2 12.15 14.43C12.04 14.15 11.66 13.02 12.26 11.49C12.26 11.49 13.19 11.2 15.28 12.63C16.16 12.38 17.1 12.26 18.04 12.26C18.98 12.26 19.92 12.38 20.8 12.63C22.89 11.19 23.82 11.49 23.82 11.49C24.42 13.02 24.04 14.15 23.93 14.43C24.64 15.2 25.06 16.18 25.06 17.39C25.06 21.62 22.48 22.56 20.03 22.83C20.43 23.18 20.78 23.86 20.78 24.91C20.78 26.42 20.77 27.64 20.77 28.01C20.77 28.3 20.97 28.65 21.53 28.54C25.9 27.07 29.08 22.95 29.08 18.09C29.08 11.92 24.16 7 18 7Z"
        fill="#1a1a1a"
      />
    </svg>
  );
});

// Microsoft
export const MicrosoftLogoIcon = React.memo(function MicrosoftLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="9" y="9" width="8" height="8" fill="#F25022" />
      <rect x="19" y="9" width="8" height="8" fill="#7FBA00" />
      <rect x="9" y="19" width="8" height="8" fill="#00A4EF" />
      <rect x="19" y="19" width="8" height="8" fill="#FFB900" />
    </svg>
  );
});

// Dprofiz Tech / IoT Node
export const DprofizLogoIcon = React.memo(function DprofizLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dprofiz Ltd">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#0f766e" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="18" cy="18" r="6" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="18" y1="6" x2="18" y2="12" stroke="#ffffff" strokeWidth="2" />
      <line x1="18" y1="24" x2="18" y2="30" stroke="#ffffff" strokeWidth="2" />
      <line x1="6" y1="18" x2="12" y2="18" stroke="#ffffff" strokeWidth="2" />
      <line x1="24" y1="18" x2="30" y2="18" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
});

// GTU Computer Engineering Department
export const GTULogoIcon = React.memo(function GTULogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Gujarat Technological University">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2" />
      {/* Academic Gear */}
      <circle cx="18" cy="18" r="8" fill="#e63946" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="4" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* 4 Gear cogs */}
      <rect x="16.5" y="7" width="3" height="4" rx="0.5" fill="#e63946" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="16.5" y="25" width="3" height="4" rx="0.5" fill="#e63946" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="7" y="16.5" width="4" height="3" rx="0.5" fill="#e63946" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="25" y="16.5" width="4" height="3" rx="0.5" fill="#e63946" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  );
});

// SSIP Gujarat (Student Start-up & Innovation Policy)
export const GovGujaratEmblem = React.memo(function GovGujaratEmblem({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Government of Gujarat SSIP">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#fed7aa" stroke="#1a1a1a" strokeWidth="2" />
      {/* Innovation Leaf & Lamp */}
      <path
        d="M18 8C13 13 12 18 18 26C24 18 23 13 18 8Z"
        fill="#ea580c"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <circle cx="18" cy="16" r="3" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  );
});

// Hackathon Terminal Code Brackets
export const HackathonBadgeIcon = React.memo(function HackathonBadgeIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hackathon Committee">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <text x="18" y="23" fill="#86efac" fontSize="13" fontWeight="900" fontFamily="monospace" textAnchor="middle">
        &lt;/&gt;
      </text>
    </svg>
  );
});

// PitchCraft Startup Hub
export const PitchCraftLogoIcon = React.memo(function PitchCraftLogoIcon({ className = "w-8 h-8 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PitchCraft Startup Hub">
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />
      <path
        d="M18 9L23 15H13L18 9Z"
        fill="#e63946"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <rect x="15" y="15" width="6" height="10" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M14 22L11 25M22 22L25 25" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
});

// Helper component that returns the correct SVG icon for any issuer
export const CertificateIssuerIcon = React.memo(function CertificateIssuerIcon({
  issuer,
  className = "w-9 h-9 shrink-0"
}: {
  issuer: string;
  className?: string;
}) {
  const norm = issuer.toLowerCase();
  if (norm.includes("harvard")) return <HarvardLogoIcon className={className} />;
  if (norm.includes("amazon") || norm.includes("aws")) return <AWSLogoIcon className={className} />;
  if (norm.includes("google")) return <GoogleCloudLogoIcon className={className} />;
  if (norm.includes("microsoft") || norm.includes("azure")) return <MicrosoftLogoIcon className={className} />;
  if (norm.includes("github")) return <GitHubMarkIcon className={className} />;
  if (norm.includes("dprofiz")) return <DprofizLogoIcon className={className} />;
  if (norm.includes("gtu") || norm.includes("programming relay")) return <GTULogoIcon className={className} />;
  if (norm.includes("ssip") || norm.includes("gujarat")) return <GovGujaratEmblem className={className} />;
  if (norm.includes("hack-x") || norm.includes("unplugged")) return <HackathonBadgeIcon className={className} />;
  if (norm.includes("pitchcraft")) return <PitchCraftLogoIcon className={className} />;
  return <MedalRibbonIcon className={className} />;
});

// =========================================================================
// 3. SECTION HEADER PILL ICONS
// =========================================================================

// Medal Ribbon Icon for Featured Certificates Pill
export const MedalRibbonIcon = React.memo(function MedalRibbonIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="9" r="6" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="12" cy="9" r="3.5" fill="#fde047" stroke="#1a1a1a" strokeWidth="1.2" />
      <path
        d="M8.5 13.5L6 22L12 19L18 22L15.5 13.5"
        fill="#e63946"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

// Purple Trophy Icon for Key Achievements Pill
export const TrophyHeaderIcon = React.memo(function TrophyHeaderIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M7 4H17V9C17 12 14.8 14 12 14C9.2 14 7 12 7 9V4Z"
        fill="#ffd93d"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M7 6H4C4 8.5 5.5 10 7 10" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 6H20C20 8.5 18.5 10 17 10" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="18" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="8" y="18" width="8" height="3" rx="1" fill="#f59e0b" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
});

// =========================================================================
// 4. HIGHLIGHTS WINDOW METRIC ICONS
// =========================================================================

// Col 1: Competitions Won (Laurel Cup)
export const HighlightTrophyIcon = React.memo(function HighlightTrophyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2" />
      <path
        d="M11 9H21V15C21 17.8 18.8 20 16 20C13.2 20 11 17.8 11 15V9Z"
        fill="#ffd93d"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <path d="M11 11H8C8 13 9 14 11 14" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M21 11H24C24 13 23 14 21 14" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="16" y1="20" x2="16" y2="23" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="12" y="23" width="8" height="2.5" rx="0.5" fill="#f59e0b" stroke="#1a1a1a" strokeWidth="1.5" />
    </svg>
  );
});

// Col 2: Certifications Earned (Diploma Scroll)
export const HighlightDiplomaIcon = React.memo(function HighlightDiplomaIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#e9d5ff" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="8" y="10" width="16" height="12" rx="2" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="11" y1="14" x2="21" y2="14" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="17" x2="17" y2="17" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="17" r="1.5" fill="#e63946" />
    </svg>
  );
});

// Col 3: Major Projects (Rocket)
export const HighlightRocketIcon = React.memo(function HighlightRocketIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#fed7aa" stroke="#1a1a1a" strokeWidth="2" />
      <path
        d="M21 9C21 9 18 10 15 13C12 16 11 19 11 19L13 21L19 15C22 12 23 9 21 9Z"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <circle cx="17.5" cy="13.5" r="1.5" fill="#0284c7" />
      <path d="M12 20L8 23L11 19" fill="#e63946" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M19 13L23 9L20 12" fill="#e63946" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M9 22L7 25L10 24" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
});

// Col 4: CGPA (Bar Chart)
export const HighlightChartIcon = React.memo(function HighlightChartIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#bbf7d0" stroke="#1a1a1a" strokeWidth="2" />
      {/* 3 Bars */}
      <rect x="9" y="18" width="3.5" height="6" rx="1" fill="#22c55e" stroke="#1a1a1a" strokeWidth="1.2" />
      <rect x="14.25" y="14" width="3.5" height="10" rx="1" fill="#38bdf8" stroke="#1a1a1a" strokeWidth="1.2" />
      <rect x="19.5" y="9" width="3.5" height="15" rx="1" fill="#a855f7" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
});

// =========================================================================
// 5. KEY ACHIEVEMENT CARD ICONS (Exact Reference Match)
// =========================================================================

// Card 1: Ideathon 2026 Winner (Wreath + Trophy)
export const LaurelTrophyIcon = React.memo(function LaurelTrophyIcon({ className = "w-10 h-10 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Laurel Leaves on Left */}
      <path
        d="M8 26C6 22 7 15 11 11M8 20C10 19 12 21 11 23M7 15C9 14 11 16 10 18M10 11C12 11 13 13 12 15"
        stroke="#ca8a04"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Laurel Leaves on Right */}
      <path
        d="M32 26C34 22 33 15 29 11M32 20C30 19 28 21 29 23M33 15C31 14 29 16 30 18M30 11C28 11 27 13 28 15"
        stroke="#ca8a04"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Golden Center Cup */}
      <path
        d="M14 12H26V18C26 21.3 23.3 24 20 24C16.7 24 14 21.3 14 18V12Z"
        fill="#ffd93d"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <circle cx="20" cy="17" r="2.5" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="20" y1="24" x2="20" y2="28" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="15" y="28" width="10" height="3" rx="1" fill="#f59e0b" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
});

// Card 2: Hack.X Winner (Terminal Code Brackets)
export const CodeTerminalIcon = React.memo(function CodeTerminalIcon({ className = "w-10 h-10 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M13 14L6 20L13 26"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 14L34 20L27 26"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="12"
        x2="18"
        y2="28"
        stroke="#e63946"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

// Card 3: SIH 2025 Finalist (Cup Trophy)
export const CupTrophyIcon = React.memo(function CupTrophyIcon({ className = "w-10 h-10 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M13 10H27V18C27 21.8 23.8 25 20 25C16.2 25 13 21.8 13 18V10Z"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="2.5"
      />
      <path
        d="M13 13H8C8 17 10 19 13 19"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M27 13H32C32 17 30 19 27 19"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="20" y1="25" x2="20" y2="30" stroke="#1a1a1a" strokeWidth="2.5" />
      <rect x="13" y="30" width="14" height="4" rx="1.5" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
      <circle cx="20" cy="16" r="2.5" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  );
});

// Card 4: ISTE Core Member (3 People Community)
export const CommunityPeopleIcon = React.memo(function CommunityPeopleIcon({ className = "w-10 h-10 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Center Person */}
      <circle cx="20" cy="14" r="4" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />
      <path
        d="M13 28C13 24 16 22 20 22C24 22 27 24 27 28"
        fill="#c8b6ff"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      {/* Left Person */}
      <circle cx="10" cy="16" r="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.8" />
      <path
        d="M5 28C5 25 8 23 11 23"
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Right Person */}
      <circle cx="30" cy="16" r="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.8" />
      <path
        d="M29 23C32 23 35 25 35 28"
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
});
