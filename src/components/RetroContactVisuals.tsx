/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Vector SVG Illustrations & Visual Accents for Retro Contact Page
 * Faithfully matches media_1793866065586.jpg
 */

import React from "react";

/**
 * 1. Retro Contact Computer Illustration
 * - Vintage beige CRT monitor with top/side 3D bevels
 * - Pastel purple screen (#c8b6ff) with white envelope/mail icon
 * - Speech bubble with three dots (...) above monitor
 * - Stacked books (mint green top book, coral red bottom book)
 * - Retro keyboard in front with angled perspective and square key buttons
 * - Action radiating speed lines and yellow comic sparks
 */
export const RetroContactComputerIllustration = React.memo(function RetroContactComputerIllustration({
  className = ""
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      aria-label="Retro contact computer with mail icon on screen"
    >
      <svg
        viewBox="0 0 280 220"
        className="w-full h-auto max-w-[280px] drop-shadow-[5px_5px_0px_#1a1a1a]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Action Sparks / Speed Radiations (Yellow and Black) */}
        <g stroke="#ffd93d" strokeWidth="2.5" strokeLinecap="round">
          <path d="M42 46L28 36" />
          <path d="M48 26L44 10" />
          <path d="M68 18L76 6" />
        </g>
        <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
          <path d="M34 60L20 66" />
          <path d="M256 50L270 38" />
          <path d="M260 68L274 72" />
        </g>

        {/* Speech Bubble with 3 Dots (...) above right of monitor */}
        <g id="speech-bubble" transform="translate(195, 14)">
          {/* Bubble Tail */}
          <path
            d="M8 28L2 36L16 30"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Bubble Body */}
          <rect
            x="0"
            y="0"
            width="46"
            height="28"
            rx="6"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Three dots */}
          <circle cx="15" cy="14" r="2.5" fill="#1a1a1a" />
          <circle cx="23" cy="14" r="2.5" fill="#1a1a1a" />
          <circle cx="31" cy="14" r="2.5" fill="#1a1a1a" />
        </g>

        {/* Stacked Books under/behind the monitor stand */}
        {/* Bottom Book: Coral Red (#e63946) */}
        <g id="bottom-book">
          <rect x="180" y="148" width="80" height="15" rx="3" fill="#e63946" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="184" y="152" width="72" height="7" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="190" y1="148" x2="190" y2="163" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Top Book: Mint Green (#86efac) */}
        <g id="top-book">
          <rect x="182" y="132" width="76" height="15" rx="3" fill="#86efac" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="186" y="136" width="68" height="7" rx="1" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="192" y1="132" x2="192" y2="147" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* CRT Monitor Stand / Pedestal */}
        <path d="M104 150L96 168H160L152 150H104Z" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2.5" />
        <rect x="80" y="166" width="96" height="8" rx="2" fill="#d6cebe" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Monitor Outer Casing (Beige 3D angled box) */}
        {/* Right 3D Bevel / Depth */}
        <path d="M192 44L206 56V142L192 148V44Z" fill="#cfc6b5" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Top 3D Bevel / Depth */}
        <path d="M68 32L82 18H188L192 44H68Z" fill="#f0ebe0" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Main Front Face */}
        <rect x="62" y="32" width="130" height="116" rx="8" fill="#fbf8ef" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* CRT Screen Outer Bezel */}
        <rect x="72" y="44" width="110" height="84" rx="6" fill="#e5dfd3" stroke="#1a1a1a" strokeWidth="2" />

        {/* CRT Screen Glass: Pastel Purple (#c8b6ff) */}
        <rect x="78" y="50" width="98" height="72" rx="5" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />

        {/* Screen Scanline / Glare Accent */}
        <path d="M82 54L124 54L86 118H82V54Z" fill="#ffffff" fillOpacity="0.15" />

        {/* White Envelope / Mail Icon inside Screen */}
        <g id="screen-envelope-icon">
          {/* Envelope Body */}
          <rect
            x="97"
            y="66"
            width="60"
            height="40"
            rx="4"
            fill="#ffffff"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />
          {/* Folded Flap Lines */}
          <path
            d="M98 68L127 88L156 68"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bottom diagonal corner folds */}
          <line x1="98" y1="105" x2="116" y2="88" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
          <line x1="156" y1="105" x2="138" y2="88" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Monitor Controls (Bottom Bezel) */}
        <circle cx="86" cy="138" r="2.5" fill="#1a1a1a" />
        <circle cx="96" cy="138" r="2.5" fill="#1a1a1a" />
        {/* Power LED Indicator (Green) */}
        <circle cx="174" cy="138" r="2.5" fill="#86efac" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="154" y1="136" x2="164" y2="136" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Retro Keyboard in Front */}
        <g id="retro-keyboard">
          {/* Keyboard Base Chassis with 3D slant */}
          <polygon
            points="54,178 202,178 190,202 42,202"
            fill="#fbf8ef"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon
            points="42,202 190,202 190,208 42,208"
            fill="#d6cebe"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Row 1 Keys */}
          <g fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5">
            <rect x="58" y="182" width="12" height="6" rx="1" />
            <rect x="73" y="182" width="12" height="6" rx="1" />
            <rect x="88" y="182" width="12" height="6" rx="1" />
            <rect x="103" y="182" width="12" height="6" rx="1" />
            <rect x="118" y="182" width="12" height="6" rx="1" />
            <rect x="133" y="182" width="12" height="6" rx="1" />
            <rect x="148" y="182" width="12" height="6" rx="1" />
            <rect x="163" y="182" width="12" height="6" rx="1" />
            <rect x="178" y="182" width="14" height="6" rx="1" fill="#ffd93d" />
          </g>

          {/* Row 2 Keys & Spacebar */}
          <g fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5">
            <rect x="52" y="192" width="16" height="6" rx="1" />
            <rect x="71" y="192" width="12" height="6" rx="1" />
            {/* Spacebar */}
            <rect x="86" y="192" width="58" height="6" rx="1" fill="#ffffff" />
            <rect x="147" y="192" width="14" height="6" rx="1" />
            <rect x="164" y="192" width="16" height="6" rx="1" />
          </g>
        </g>
      </svg>
    </div>
  );
});

/**
 * 2. Document Inquiry Icon (Purple container with document folded corner)
 */
export const DocumentInquiryIcon = React.memo(function DocumentInquiryIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 4C5 2.89543 5.89543 2 7 2H14L19 7V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4Z"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M14 2V7H19" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      <line x1="8" y1="11" x2="16" y2="11" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="16" y2="14" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
});

/**
 * 3. Direct Contact Chat Icon (Purple speech bubble with 3 dots)
 */
export const DirectContactChatIcon = React.memo(function DirectContactChatIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V15C20 16.1046 19.1046 17 18 17H8L4 21V5Z"
        fill="#c8b6ff"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="1.5" fill="#1a1a1a" />
      <circle cx="12" cy="10" r="1.5" fill="#1a1a1a" />
      <circle cx="15" cy="10" r="1.5" fill="#1a1a1a" />
    </svg>
  );
});

/**
 * 4. Online Network Share Icon
 */
export const OnlineNetworkIcon = React.memo(function OnlineNetworkIcon({
  className = "w-6 h-6"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="5" r="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="6" cy="12" r="3" fill="#c8b6ff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="18" cy="19" r="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="8.6" y1="10.7" x2="15.4" y2="6.3" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="8.6" y1="13.3" x2="15.4" y2="17.7" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
});

/**
 * 5. Clean Email Mail Icon
 */
export const MailOutlineIcon = React.memo(function MailOutlineIcon({
  className = "w-4 h-4"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 20 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="18" height="14" rx="2" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M2 2L10 9L18 2" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

/**
 * 6. WhatsApp Brand Icon
 */
export const WhatsAppBrandIcon = React.memo(function WhatsAppBrandIcon({
  className = "w-4 h-4"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#25D366" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.28 15.1 13.68 14.88 13.6C14.65 13.52 14.49 13.48 14.32 13.73C14.15 13.98 13.68 14.54 13.54 14.7C13.4 14.87 13.26 14.89 13.01 14.76C12.76 14.63 11.97 14.37 11.03 13.54C10.3 12.89 9.8 12.08 9.66 11.83C9.52 11.58 9.64 11.45 9.77 11.32C9.88 11.21 10.02 11.03 10.16 10.87C10.3 10.71 10.35 10.58 10.44 10.42C10.53 10.25 10.49 10.11 10.42 9.98C10.35 9.86 9.77 8.44 9.53 7.86C9.3 7.3 9.06 7.37 8.89 7.37C8.73 7.36 8.54 7.36 8.35 7.36C8.16 7.36 7.85 7.43 7.6 7.71C7.35 7.98 6.64 8.65 6.64 10.02C6.64 11.39 7.64 12.71 7.78 12.89C7.92 13.08 9.75 15.89 12.54 17.1C13.2 17.39 13.72 17.56 14.12 17.69C14.79 17.9 15.4 17.87 15.88 17.8C16.42 17.72 17.54 17.12 17.77 16.47C18.01 15.83 18.01 15.28 17.94 15.16C17.87 15.04 17.71 14.97 17.46 14.84L16.57 14.41Z" />
    </svg>
  );
});

/**
 * 7. Copy / Clipboard Icon
 */
export const CopyClipboardIcon = React.memo(function CopyClipboardIcon({
  className = "w-4 h-4"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="11" height="11" rx="2" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M4 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
});

/**
 * 8. LinkedIn Brand Icon
 */
export const LinkedInBrandIcon = React.memo(function LinkedInBrandIcon({
  className = "w-5 h-5"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2C18.5 10.92 17.3 9.87 15.68 9.87C14.37 9.87 13.79 10.6 13.46 11.11V10.05H10.9V18.5H13.46V13.92C13.46 12.71 14.15 12.18 14.94 12.18C15.71 12.18 16 12.74 16 13.92V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.16 18.5V10.05H5.6V18.5H8.16Z" />
    </svg>
  );
});

/**
 * 9. GitHub Brand Icon
 */
export const GitHubBrandIcon = React.memo(function GitHubBrandIcon({
  className = "w-5 h-5"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1a1a1a" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
});

/**
 * 10. Instagram Brand Icon
 */
export const InstagramBrandIcon = React.memo(function InstagramBrandIcon({
  className = "w-5 h-5"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="4.5" stroke="#E1306C" strokeWidth="2.5" />
      <circle cx="18" cy="6" r="1.5" fill="#E1306C" />
    </svg>
  );
});

/**
 * 11. Location Pin Marker Icon
 */
export const LocationPinMarkerIcon = React.memo(function LocationPinMarkerIcon({
  className = "w-5 h-5"
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z"
        fill="#e63946"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="3" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
    </svg>
  );
});
