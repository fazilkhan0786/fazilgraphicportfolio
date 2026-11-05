/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Comprehensive Security, Anti-XSS, Anti-Spam & Hardening Utilities
 */


export function sanitizeInput(input: string, maxLength = 1000): string {
  if (typeof input !== "string") return "";

  // 1. Remove dangerous control characters and null bytes
  const cleaned = input
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // 2. Strip HTML tags to avoid tag injection while preserving legitimate punctuation
    .replace(/<[^>]*>/g, "")
    // 3. Normalize Unicode (canonical composition)
    .normalize("NFC");

  // 4. Enforce maximum length constraint and clean boundary whitespace
  return cleaned.slice(0, maxLength).trim();
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
