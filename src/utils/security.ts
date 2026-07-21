/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Comprehensive Security, Anti-XSS, Anti-Spam & Hardening Utilities
 */

/**
 * Sanitizes user input to prevent Cross-Site Scripting (XSS) and HTML injection.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (typeof input !== "string") return "";

  // 1. Truncate to maximum allowed length
  const truncated = input.slice(0, maxLength);

  // 2. Escape HTML entities
  return truncated
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Rate Limiter to prevent brute force or automated spam submissions.
 */
const rateLimitMap = new Map<string, number>();

export function checkRateLimit(actionKey: string, cooldownMs = 5000): boolean {
  const now = Date.now();
  const lastExecution = rateLimitMap.get(actionKey) || 0;

  if (now - lastExecution < cooldownMs) {
    return false; // Rate limit exceeded
  }

  rateLimitMap.set(actionKey, now);
  return true; // Allowed
}

/**
 * Main security initialization function for client protection.
 */
export function initSecurity() {
  if (typeof window === "undefined") return;

  // 1. Disable Context Menu (Right Click protection)
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, { passive: false });

  // 2. Disable DevTools & View Source Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I / Cmd+Opt+I (Inspect)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "i")) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+J / Cmd+Opt+J (Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "J" || e.key === "j")) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+C / Cmd+Opt+C (Inspect Element)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "C" || e.key === "c")) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U / Cmd+Opt+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === "U" || e.key === "u")) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S / Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === "S" || e.key === "s")) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });
}
