/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Dynamic SEO, Metadata & Structured Data (JSON-LD) Utility
 */

import { Story } from "../data/stories";
import { findRouteConfig } from "../routes";

const BASE_URL = "https://fazilportfolio.me";
const BASE_IMAGE = `${BASE_URL}/images/portrait.png`;

function setOrCreateMeta(attrName: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[${attrName}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrCreateCanonical(href: string) {
  if (typeof document === "undefined") return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function updatePageSEO(path: string) {
  if (typeof document === "undefined") return;

  const config = findRouteConfig(path);
  document.title = config.title;

  setOrCreateMeta("name", "title", config.title);
  setOrCreateMeta("name", "description", config.description);
  setOrCreateCanonical(config.canonical);

  // Open Graph
  setOrCreateMeta("property", "og:title", config.title);
  setOrCreateMeta("property", "og:description", config.description);
  setOrCreateMeta("property", "og:url", config.canonical);
  setOrCreateMeta("property", "og:type", config.ogType);
  setOrCreateMeta("property", "og:image", config.ogImage);

  // Twitter
  setOrCreateMeta("name", "twitter:title", config.title);
  setOrCreateMeta("name", "twitter:description", config.description);
  setOrCreateMeta("name", "twitter:image", config.ogImage);

  // Remove article schema if navigating away from a story
  if (!path.startsWith("/stories/") || path === "/stories/") {
    const scriptEl = document.getElementById("article-jsonld");
    if (scriptEl && scriptEl.parentNode) {
      scriptEl.parentNode.removeChild(scriptEl);
    }
  }
}

export function setStorySEO(story: Story) {
  if (typeof document === "undefined") return;

  const storyUrl = `${BASE_URL}/stories/${story.slug}/`;
  const fullTitle = `${story.title} | Fazil Malek`;

  // Page Title
  document.title = fullTitle;

  // Standard Meta
  setOrCreateMeta("name", "title", fullTitle);
  setOrCreateMeta("name", "description", story.excerpt);
  setOrCreateMeta("name", "author", story.author);
  setOrCreateCanonical(storyUrl);

  // Open Graph
  setOrCreateMeta("property", "og:type", "article");
  setOrCreateMeta("property", "og:title", fullTitle);
  setOrCreateMeta("property", "og:description", story.excerpt);
  setOrCreateMeta("property", "og:url", storyUrl);
  setOrCreateMeta("property", "og:image", BASE_IMAGE);
  setOrCreateMeta("property", "article:published_time", story.isoDate);
  if (story.modifiedDate) {
    setOrCreateMeta("property", "article:modified_time", story.modifiedDate);
  }
  setOrCreateMeta("property", "article:author", story.authorUrl);
  setOrCreateMeta("property", "article:section", story.category);

  // Twitter / X
  setOrCreateMeta("name", "twitter:card", "summary_large_image");
  setOrCreateMeta("name", "twitter:title", fullTitle);
  setOrCreateMeta("name", "twitter:description", story.excerpt);
  setOrCreateMeta("name", "twitter:image", BASE_IMAGE);

  // Inject Article JSON-LD Schema
  let scriptEl = document.getElementById("article-jsonld") as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.id = "article-jsonld";
    scriptEl.type = "application/ld+json";
    document.head.appendChild(scriptEl);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${storyUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": storyUrl
    },
    "headline": story.title,
    "description": story.excerpt,
    "datePublished": story.isoDate,
    "dateModified": story.modifiedDate || story.isoDate,
    "inLanguage": "en",
    "articleSection": story.category,
    "keywords": story.tags.join(", "),
    "image": BASE_IMAGE,
    "author": {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      "name": story.author,
      "url": story.authorUrl
    },
    "publisher": {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      "name": story.author,
      "url": story.authorUrl
    }
  };

  scriptEl.text = JSON.stringify(structuredData);
}

export function resetBaseSEO() {
  updatePageSEO("/");
}
