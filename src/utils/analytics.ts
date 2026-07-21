/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Analytics & Event Tracking Utility (GA4 & Custom Analytics)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  // Log locally during dev or fallback
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }

  // Google Analytics 4 (GA4) event call
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Microsoft Clarity custom tag
  if (typeof window.clarity === "function") {
    window.clarity("set", eventName, JSON.stringify(params));
  }
}

// Track key portfolio conversion actions
export const analyticsActions = {
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

  trackSocialClick: (platform: string, url: string) => {
    trackEvent("social_click", { platform, url });
  },

  trackFAQToggle: (questionId: string) => {
    trackEvent("faq_toggle", { question_id: questionId });
  }
};
