/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Comprehensive Security, Anti-XSS, Anti-Spam & Hardening Utilities
 */


export function sanitizeInput(input: string, maxLength = 1000): string {
  if (typeof input !== "string") return "";

  
  const truncated = input.slice(0, maxLength);

  
  return truncated
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/* Cooldown-based rate limiting for form submissions */
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

export function initSecurity() {
  // Production security hardening: ensure safe opener references on dynamic links
  if (typeof window === "undefined") return;
  try {
    if (window.opener && window.opener !== window) {
      window.opener = null;
    }
  } catch {
    // Ignore cross-origin access restriction
  }
}
