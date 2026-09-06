/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Dynamic SEO & Article Structured Data (JSON-LD) Utility
 */

import { Story } from "../data/stories";

const BASE_TITLE = "Mohammad Fazil Malek (Fazilkhan) — Founder @ Promacle | Computer Engineer & Systems Architect";
const BASE_DESC = "Mohammad Fazil Malek (Fazilkhan, Fazil, Fajil) is an Indian youngest entrepreneur, Computer Engineering student at GTU, founder and CEO of Promacle (NuroVed), software developer, AI/ML Developer, UI/UX Designer, Graphic Designer,footballer, and product architect based in Ahmedabad, Gujarat.";
const BASE_CANONICAL = "https://fazilportfolio.me/";
const BASE_IMAGE = "https://fazilportfolio.me/images/portrait.png";

function setOrCreateMeta(attrName: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrCreateCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function setStorySEO(story: Story) {
  const storyUrl = `https://fazilportfolio.me/#/stories/${story.slug}`;
  const fullTitle = `${story.title} — Fazil Malek`;

  // Page Title
  document.title = fullTitle;

  // Standard Meta
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
      "@id": "https://fazilportfolio.me/#person",
      "name": story.author,
      "url": story.authorUrl
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://fazilportfolio.me/#person",
      "name": story.author,
      "url": story.authorUrl
    }
  };

  scriptEl.text = JSON.stringify(structuredData);
}

export function resetBaseSEO() {
  document.title = BASE_TITLE;

  setOrCreateMeta("name", "description", BASE_DESC);
  setOrCreateMeta("name", "author", "Mohammad Fazil Malek");
  setOrCreateCanonical(BASE_CANONICAL);

  setOrCreateMeta("property", "og:type", "profile");
  setOrCreateMeta("property", "og:title", "Mohammad Fazil Malek (Fazilkhan) — Founder @ Promacle & Product Architect");
  setOrCreateMeta("property", "og:description", "Indian entrepreneur, Computer Engineer at GTU, founder of Promacle & NuroVed. Building healthcare AI, full-stack websites, UI/UX design, and scalable software in Ahmedabad.");
  setOrCreateMeta("property", "og:url", BASE_CANONICAL);
  setOrCreateMeta("property", "og:image", BASE_IMAGE);

  setOrCreateMeta("name", "twitter:title", "Mohammad Fazil Malek (Fazilkhan) — Founder @ Promacle & Product Architect");
  setOrCreateMeta("name", "twitter:description", "Founder @ Promacle (NuroVed), Computer Engineering student at GTU, footballer, and AI systems architect in Ahmedabad, India.");
  setOrCreateMeta("name", "twitter:image", BASE_IMAGE);

  // Remove Article Schema
  const scriptEl = document.getElementById("article-jsonld");
  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.removeChild(scriptEl);
  }
}
