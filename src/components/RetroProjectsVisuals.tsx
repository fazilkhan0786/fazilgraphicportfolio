/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Vector SVG Illustrations & Visual Accents for Retro Projects & Systems Page
 * Faithfully matches media_1793870117910.jpg
 */

import React from "react";

/**
 * 1. Retro Desktop Computer Illustration
 * - Vintage beige CRT monitor with angled 3D bevel and drop shadow
 * - Dark charcoal CRT screen with yellow FAZIL 'F' logo monogram
 * - Front beige keyboard with individual keycaps
 * - Corded mouse to the right with coiled connecting wire
 * - Radiant comic action sparks and speed lines
 */
export const RetroProjectsComputerIllustration = React.memo(
  function RetroProjectsComputerIllustration({
    className = ""
  }: {
    className?: string;
  }) {
    return (
      <div
        className={`relative inline-block select-none ${className}`}
        aria-label="Retro desktop computer with keyboard and mouse illustration"
      >
        <svg
          viewBox="0 0 320 250"
          className="w-full h-auto max-w-[320px] drop-shadow-[5px_5px_0px_#1a1a1a]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Action Sparks / Speed Radiations */}
          <g stroke="#e63946" strokeWidth="2.5" strokeLinecap="round">
            <path d="M52 46L36 34" />
            <path d="M60 26L56 8" />
            <path d="M84 18L94 4" />
            <path d="M260 48L276 34" />
            <path d="M264 68L284 72" />
          </g>
          <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
            <path d="M42 64L26 72" />
            <path d="M250 28L266 16" />
          </g>

          {/* CRT Monitor Stand / Pedestal */}
          <path
            d="M136 156L126 182H198L188 156H136Z"
            fill="#e5dfd3"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          <rect
            x="110"
            y="180"
            width="104"
            height="12"
            rx="3"
            fill="#d6cebe"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />

          {/* CRT Monitor Outer Casing (Beige 3D angled box) */}
          {/* Right 3D Bevel / Depth */}
          <path
            d="M236 38L252 54V154L236 160V38Z"
            fill="#cfc6b5"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Top 3D Bevel / Depth */}
          <path
            d="M86 24L104 10H234L236 38H86Z"
            fill="#f0ebe0"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Main Front Face */}
          <rect
            x="80"
            y="24"
            width="156"
            height="136"
            rx="12"
            fill="#fbf8ef"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />

          {/* CRT Screen Outer Bezel */}
          <rect
            x="94"
            y="38"
            width="128"
            height="100"
            rx="9"
            fill="#e5dfd3"
            stroke="#1a1a1a"
            strokeWidth="2"
          />

          {/* CRT Screen Glass (Dark Charcoal with Glare) */}
          <rect
            x="100"
            y="44"
            width="116"
            height="88"
            rx="7"
            fill="#18181b"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          {/* CRT Glass Scanline / Glare Accent */}
          <path
            d="M104 48L148 48L110 128H104V48Z"
            fill="#ffffff"
            fillOpacity="0.08"
          />

          {/* Screen Center: Yellow FAZIL 'F' Logo Monogram */}
          <g id="screen-f-logo">
            <rect
              x="138"
              y="68"
              width="40"
              height="40"
              rx="6"
              fill="#ffd93d"
              stroke="#1a1a1a"
              strokeWidth="2.5"
            />
            {/* 'F' glyph */}
            <path
              d="M149 76H167V82H156V86H164V92H156V99H149V76Z"
              fill="#1a1a1a"
            />
          </g>

          {/* Keyboard (Beige casing with angled perspective) */}
          <g id="keyboard">
            <path
              d="M88 196L102 188H218L232 196L230 220H90L88 196Z"
              fill="#f5eed8"
              stroke="#1a1a1a"
              strokeWidth="2.5"
            />
            {/* Key Rows */}
            <g fill="#1a1a1a">
              {/* Row 1 */}
              <rect x="106" y="191" width="8" height="4" rx="1" />
              <rect x="117" y="191" width="8" height="4" rx="1" />
              <rect x="128" y="191" width="8" height="4" rx="1" />
              <rect x="139" y="191" width="8" height="4" rx="1" />
              <rect x="150" y="191" width="8" height="4" rx="1" />
              <rect x="161" y="191" width="8" height="4" rx="1" />
              <rect x="172" y="191" width="8" height="4" rx="1" />
              <rect x="183" y="191" width="8" height="4" rx="1" />
              <rect x="194" y="191" width="8" height="4" rx="1" />
              <rect x="205" y="191" width="10" height="4" rx="1" />
              {/* Row 2 */}
              <rect x="102" y="198" width="9" height="5" rx="1" />
              <rect x="114" y="198" width="9" height="5" rx="1" />
              <rect x="126" y="198" width="9" height="5" rx="1" />
              <rect x="138" y="198" width="9" height="5" rx="1" />
              <rect x="150" y="198" width="9" height="5" rx="1" />
              <rect x="162" y="198" width="9" height="5" rx="1" />
              <rect x="174" y="198" width="9" height="5" rx="1" />
              <rect x="186" y="198" width="9" height="5" rx="1" />
              <rect x="198" y="198" width="9" height="5" rx="1" />
              <rect x="210" y="198" width="10" height="5" rx="1" />
              {/* Row 3 Spacebar */}
              <rect x="98" y="206" width="12" height="6" rx="1" />
              <rect x="113" y="206" width="9" height="6" rx="1" />
              <rect x="125" y="206" width="60" height="6" rx="1" fill="#e63946" />
              <rect x="188" y="206" width="10" height="6" rx="1" />
              <rect x="201" y="206" width="10" height="6" rx="1" />
              <rect x="214" y="206" width="10" height="6" rx="1" />
            </g>
          </g>

          {/* Mouse & Wire */}
          <g id="mouse">
            {/* Coiled Wire from computer base to mouse */}
            <path
              d="M214 184C236 182 248 188 244 198C240 206 254 204 258 208"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mouse Body */}
            <rect
              x="250"
              y="204"
              width="24"
              height="30"
              rx="12"
              fill="#f5eed8"
              stroke="#1a1a1a"
              strokeWidth="2.5"
            />
            {/* Mouse Button Divider */}
            <line
              x1="262"
              y1="204"
              x2="262"
              y2="216"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
            <line
              x1="250"
              y1="216"
              x2="274"
              y2="216"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    );
  }
);

/**
 * 2. Authentic Technology Brand Logos for tech_stack.exe Window
 */

// Flutter Bird/Wing Logo
export const FlutterLogoIcon = React.memo(function FlutterLogoIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Flutter logo">
      <path d="M14.314 0L2.3 12.014l3.714 3.714L21.743 0h-7.429z" fill="#02569B" />
      <path d="M14.286 11.457L8.571 17.171l3.715 3.715 3.714-3.715 5.714 5.715H29.17l-9.428-9.429h-5.457z" fill="#0175C2" />
      <path d="M12.286 20.886l3.714 3.114h7.429l-7.429-7.429-3.714 4.315z" fill="#29B6F6" />
    </svg>
  );
});

// Dart Polygon Logo
export const DartLogoIcon = React.memo(function DartLogoIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Dart logo">
      <path d="M4.108 4.108A4.865 4.865 0 0 1 7.548 2.68h8.904L4.108 15.024V4.108z" fill="#0081C6" />
      <path d="M7.548 2.68H2.68v14.772l4.868-4.868V2.68z" fill="#00B4AB" />
      <path d="M16.452 2.68l4.868 4.868v8.904a4.865 4.865 0 0 1-1.428 3.44l-8.308-8.308 4.868-8.904z" fill="#0081C6" />
      <path d="M19.892 19.892L15.024 21.32H7.548l12.344-12.344v10.916z" fill="#00B4AB" />
      <path d="M7.548 21.32l-4.868-4.868 8.904-4.868 4.868 4.868-8.904 4.868z" fill="#00A2C6" />
    </svg>
  );
});

// Supabase Emerald Lightning Bolt Logo
export const SupabaseLogoIcon = React.memo(function SupabaseLogoIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Supabase logo">
      <path
        d="M13.4 23.3c-.6.8-1.9.4-1.9-.6v-8.8H2.4c-1 0-1.5-1.2-.8-1.9L12.7.4c.6-.8 1.9-.4 1.9.6v8.8h9.1c1 0 1.5 1.2.8 1.9L13.4 23.3z"
        fill="#3ECF8E"
      />
    </svg>
  );
});

// Python Dual Snake Logo
export const PythonLogoIcon = React.memo(function PythonLogoIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Python logo">
      <path
        d="M11.9 2c-3.1 0-5.1.7-5.1 2.5v2.6h5.2v.8H4.6C2.5 7.9 1 9.6 1 12.3c0 2.8 1.5 4.4 3.6 4.4h1.7v-2.3c0-2.3 2-4.1 4.3-4.1h5.1c1.9 0 3.4-1.5 3.4-3.4V4.5C19.1 2.7 15 2 11.9 2zm-2.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
        fill="#387EB8"
      />
      <path
        d="M12.1 22c3.1 0 5.1-.7 5.1-2.5v-2.6H12v-.8h7.4c2.1 0 3.6-1.7 3.6-4.4 0-2.8-1.5-4.4-3.6-4.4h-1.7v2.3c0 2.3-2 4.1-4.3 4.1H8.3c-1.9 0-3.4 1.5-3.4 3.4v2.4c0 1.8 4.1 2.5 7.2 2.5zm2.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        fill="#FFE052"
      />
    </svg>
  );
});

// Figma 5-color Logo
export const FigmaLogoIcon = React.memo(function FigmaLogoIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Figma logo">
      <path d="M8 12a4 4 0 1 0 4 4V12H8z" fill="#0ACF83" />
      <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E" />
      <path d="M12 4h4a4 4 0 1 1 0 8h-4V4z" fill="#FF7262" />
      <path d="M12 12h4a4 4 0 1 1 0 8h-4v-8z" fill="#1ABCFE" />
      <circle cx="8" cy="16" r="4" fill="#A259FF" />
    </svg>
  );
});

/**
 * 3. 14 Authentic Project-Specific Vector Icons
 */

// 1. NuroVed: Medical Health Cross Badge
export const NuroVedIcon = React.memo(function NuroVedIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#dcfce7" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M12 7V17M7 12H17" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
});

// 2. NuroCare: Heart with ECG Lifeline Wave
export const NuroCareIcon = React.memo(function NuroCareIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#fee2e2"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <path d="M5 11H8L10 8L13 15L15 11H19" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
});

// 3. Actora: Stacked Isometric Task Layers
export const ActoraIcon = React.memo(function ActoraIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" fill="#ede9fe" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    </div>
  );
});

// 4. Trashee: Sustainability Green Leaf
export const TrasheeIcon = React.memo(function TrasheeIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
          fill="#fef08a"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
});

// 5. Techocore: Terminal Code Brackets </>
export const TechocoreIcon = React.memo(function TechocoreIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>
  );
});

// 6. G.O.A.T: Retro Console Gamepad Controller
export const GoatIcon = React.memo(function GoatIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="6" fill="#fbcfe8" />
        <line x1="6" y1="12" x2="10" y2="12" stroke="#1a1a1a" strokeWidth="2.5" />
        <line x1="8" y1="10" x2="8" y2="14" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="16" cy="10" r="1" fill="#7c3aed" />
        <circle cx="18" cy="12" r="1" fill="#7c3aed" />
      </svg>
    </div>
  );
});

// 7. Symptom Analyser: Stethoscope with AI Neural Spark
export const SymptomAnalyserIcon = React.memo(function SymptomAnalyserIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" fill="#38bdf8" />
      </svg>
    </div>
  );
});

// 8. Diet Planner: Nutrition Apple with Health Checklist
export const DietPlannerIcon = React.memo(function DietPlannerIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" fill="#dcfce7" />
        <path d="M10 2c1 .5 2 2 2 5" stroke="#15803d" />
      </svg>
    </div>
  );
});

// 9. Emotion Detection: Facial Recognition Scan Frame with Expression
export const EmotionDetectionIcon = React.memo(function EmotionDetectionIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="4" fill="#ffedd5" />
        <path d="M10 13c.5 1 2 1 2.5 0" />
      </svg>
    </div>
  );
});

// 10. Hand Sign Translator: Hand Silhouette with Gesture Motion Arcs
export const HandSignIcon = React.memo(function HandSignIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" fill="#f3e8ff" />
      </svg>
    </div>
  );
});

// 11. 3D Air Drawing: Spatial Cube with Motion Stylus
export const AirDrawing3DIcon = React.memo(function AirDrawing3DIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="#d1fae5" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </div>
  );
});

// 12. Air Drawing Mirror: Mirror Frame with Color Paintbrush
export const AirDrawingMirrorIcon = React.memo(function AirDrawingMirrorIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#fae8ff" />
        <path d="M7 17l4-4 4 4" />
        <circle cx="15" cy="9" r="2" fill="#c026d3" />
      </svg>
    </div>
  );
});

// 13. Educle: Graduation Cap with Verified Diploma Shield
export const EducleIcon = React.memo(function EducleIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="#dbeafe" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    </div>
  );
});

// 14. Book Portfolio: Open Hardbound Book with Bookmark Ribbon
export const BookPortfolioIcon = React.memo(function BookPortfolioIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0px_#1a1a1a] ${className}`}>
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#fef9c3" />
        <polyline points="10 2 10 10 13 7 16 10 16 2" fill="#eab308" />
      </svg>
    </div>
  );
});

/**
 * Project Icon Dispatcher
 * Maps any project ID to its authentic purpose-crafted vector icon
 */
export const ProjectIconDispatcher = React.memo(function ProjectIconDispatcher({
  projectId,
  className = "w-11 h-11"
}: {
  projectId: string;
  className?: string;
}) {
  switch (projectId) {
    case "nuroved":
      return <NuroVedIcon className={className} />;
    case "nurocare":
      return <NuroCareIcon className={className} />;
    case "actora":
      return <ActoraIcon className={className} />;
    case "trashee":
      return <TrasheeIcon className={className} />;
    case "techocore":
      return <TechocoreIcon className={className} />;
    case "goat":
      return <GoatIcon className={className} />;
    case "symptom-analyser":
      return <SymptomAnalyserIcon className={className} />;
    case "diet-planner":
      return <DietPlannerIcon className={className} />;
    case "emotion-detection":
      return <EmotionDetectionIcon className={className} />;
    case "hand-sign-translator":
      return <HandSignIcon className={className} />;
    case "3d-air-drawing":
      return <AirDrawing3DIcon className={className} />;
    case "air-drawing-mirror":
      return <AirDrawingMirrorIcon className={className} />;
    case "educle":
      return <EducleIcon className={className} />;
    case "book-portfolio":
      return <BookPortfolioIcon className={className} />;
    default:
      return <TechocoreIcon className={className} />;
  }
});
