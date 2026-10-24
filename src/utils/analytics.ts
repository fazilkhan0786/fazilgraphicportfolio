/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Analytics & Event Tracking Utility (GA4 & Custom Analytics)
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    GA_MEASUREMENT_ID?: string;
  }
}

let gaInitialized = false;

export function getMeasurementId(): string | undefined {
  const envId = import.meta.env?.VITE_GA_MEASUREMENT_ID;
  if (envId && /^G-[A-Z0-9]+$/i.test(envId) && envId !== "G-MEASUREMENT_ID") {
    return envId;
  }

  if (typeof window !== "undefined" && window.GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/i.test(window.GA_MEASUREMENT_ID) && window.GA_MEASUREMENT_ID !== "G-MEASUREMENT_ID") {
    return window.GA_MEASUREMENT_ID;
  }

  return undefined;
}

export function initAnalytics() {
  if (typeof window === "undefined" || gaInitialized) return;

  const measurementId = getMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  // Only inject script if not already present
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false // Managed manually for accurate SPA route navigation
  });

  gaInitialized = true;
}

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    if (typeof window.clarity === "function") {
      window.clarity("set", eventName, JSON.stringify(params));
    }
  } catch {
    // Gracefully handle analytics unavailability
  }
}

export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === "undefined") return;

  const measurementId = getMeasurementId();
  if (measurementId && typeof window.gtag === "function") {
    window.gtag("config", measurementId, {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }

  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== "undefined" ? document.title : "")
  });
}

export const analyticsActions = {
  trackPageView,

  trackVentureClick: (ventureName: string) => {
    trackEvent("venture_click", { venture_name: ventureName });
  },

  trackArticleRead: (articleId: string, articleTitle: string) => {
    trackEvent("article_view", { article_id: articleId, article_title: articleTitle });
  },

  trackCopyEmail: () => {
    trackEvent("copy_email", { category: "contact", action: "copy" });
  },

  trackSendEmail: () => {
    trackEvent("send_email", { category: "contact", action: "mailto" });
  },

  trackPhoneCall: () => {
    trackEvent("phone_call", { category: "contact", action: "tel" });
  },

  trackWhatsAppClick: () => {
    trackEvent("whatsapp_click", { category: "contact", action: "whatsapp" });
  },

  trackFormSubmissionSuccess: (serviceRequired: string, budgetRange: string) => {
    // Purposefully exclude PII (no names, no emails, no message content)
    trackEvent("form_submit_success", {
      category: "lead",
      service_required: serviceRequired,
      budget_range: budgetRange
    });
  },

  trackSocialClick: (platform: string, url: string) => {
    trackEvent("social_click", { platform, url });
  },

  trackFAQToggle: (questionId: string) => {
    trackEvent("faq_toggle", { question_id: questionId });
  }
};
