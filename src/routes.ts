/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Canonical Route Catalog, Metadata & Breadcrumbs Registry
 */

import { stories } from "./data/stories";

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface RouteConfig {
  path: string;
  cleanPath: string;
  title: string;
  description: string;
  canonical: string;
  ogType: "profile" | "website" | "article";
  ogImage: string;
  breadcrumbs: BreadcrumbItem[];
  isIndexable: boolean;
  lastmod?: string;
}

const BASE_URL = "https://fazilportfolio.me";
const DEFAULT_IMAGE = `${BASE_URL}/images/portrait.png`;

export const STATIC_ROUTES: RouteConfig[] = [
  {
    path: "/",
    cleanPath: "/",
    title: "Fazil Malek | Web Developer for Local Businesses, Ahmedabad & Gujarat",
    description: "Computer Engineering student at GTU building fast, mobile-friendly websites and full-stack apps for clinics, cafes, gyms and shops in Gujarat. Free sample design before you pay.",
    canonical: `${BASE_URL}/`,
    ogType: "profile",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [{ label: "Home", path: "/" }],
    isIndexable: true,
    lastmod: "2026-07-21"
  },
  {
    path: "/projects/",
    cleanPath: "/projects/",
    title: "Projects & Systems Architecture | Fazil Malek",
    description: "Production software systems, healthcare platforms (NuroVed), AI symptom analyzers, clean-tech tools, and real-world web applications built by Fazil Malek.",
    canonical: `${BASE_URL}/projects/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Projects", path: "/projects/" }
    ],
    isIndexable: true,
    lastmod: "2026-07-21"
  },
  {
    path: "/services/",
    cleanPath: "/services/",
    title: "Freelance Web Development & Design Services | Fazil Malek",
    description: "Custom website building, UI/UX design, brand identity, healthcare AI microservices, and startup MVP technical collaborations by Fazil Malek in Ahmedabad.",
    canonical: `${BASE_URL}/services/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services/" }
    ],
    isIndexable: true,
    lastmod: "2026-07-21"
  },
  {
    path: "/stories/",
    cleanPath: "/stories/",
    title: "Notebook & Engineering Stories | Fazil Malek",
    description: "First-person writings, startup reflections, and technical deep-dives on founding Promacle, building NuroVed, and engineering systems while studying at GTU.",
    canonical: `${BASE_URL}/stories/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Stories", path: "/stories/" }
    ],
    isIndexable: true,
    lastmod: "2026-07-22"
  },
  {
    path: "/certificates/",
    cleanPath: "/certificates/",
    title: "Certifications & Proof of Work | Fazil Malek",
    description: "Verified computer science and AI credentials: Harvard CS50x, Harvard CS50 Python, AWS Machine Learning Academy, Hackathon awards, and software engineering internships.",
    canonical: `${BASE_URL}/certificates/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Certificates", path: "/certificates/" }
    ],
    isIndexable: true,
    lastmod: "2026-07-21"
  },
  {
    path: "/contact/",
    cleanPath: "/contact/",
    title: "Get in Touch & Project Inquiries | Fazil Malek",
    description: "Direct contact and project inquiry form for Fazil Malek in Ahmedabad, Gujarat. Reach out for website development, UI/UX design, and technical partnerships.",
    canonical: `${BASE_URL}/contact/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Contact", path: "/contact/" }
    ],
    isIndexable: true,
    lastmod: "2026-07-21"
  },
  {
    path: "/privacy-policy/",
    cleanPath: "/privacy-policy/",
    title: "Privacy Policy & Data Disclosures | Fazil Malek",
    description: "Transparent privacy policy and data handling disclosures for fazilportfolio.me: analytics, contact form submissions via Web3Forms, cookies, and user rights.",
    canonical: `${BASE_URL}/privacy-policy/`,
    ogType: "website",
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Privacy Policy", path: "/privacy-policy/" }
    ],
    isIndexable: true,
    lastmod: "2026-10-24"
  }
];

export const STORY_ROUTES: RouteConfig[] = stories.map((story) => ({
  path: `/stories/${story.slug}/`,
  cleanPath: `/stories/${story.slug}/`,
  title: `${story.title} | Fazil Malek`,
  description: story.excerpt,
  canonical: `${BASE_URL}/stories/${story.slug}/`,
  ogType: "article",
  ogImage: DEFAULT_IMAGE,
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Stories", path: "/stories/" },
    { label: story.title, path: `/stories/${story.slug}/` }
  ],
  isIndexable: true,
  lastmod: story.modifiedDate || story.isoDate
}));

export const NOT_FOUND_ROUTE: RouteConfig = {
  path: "/404",
  cleanPath: "/404.html",
  title: "404 - Page Lost in Margins | Fazil Malek",
  description: "The page you are looking for got sketched out or was never written in our notebook.",
  canonical: `${BASE_URL}/404.html`,
  ogType: "website",
  ogImage: DEFAULT_IMAGE,
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Page Not Found", path: "/404" }
  ],
  isIndexable: false
};

export const ALL_CANONICAL_ROUTES: RouteConfig[] = [
  ...STATIC_ROUTES,
  ...STORY_ROUTES
];

export function normalizeRoutePath(rawPath: string): string {
  if (!rawPath || rawPath === "/" || rawPath === "#/" || rawPath === "#") {
    return "/";
  }

  // Remove leading hash and trim whitespace
  let clean = rawPath.replace(/^#\/?/, "/").trim();

  // Remove query and hash fragment if any
  clean = clean.split("?")[0].split("#")[0];

  // Ensure leading slash
  if (!clean.startsWith("/")) {
    clean = `/${clean}`;
  }

  // Normalize trailing slash (except for file extensions like 404.html)
  if (!clean.endsWith("/") && !clean.includes(".")) {
    clean = `${clean}/`;
  }

  return clean;
}

export function findRouteConfig(pathname: string): RouteConfig {
  const normalized = normalizeRoutePath(pathname);
  const found = ALL_CANONICAL_ROUTES.find(
    (r) => r.path === normalized || r.path === `${normalized}/` || `${r.path}/` === normalized
  );

  return found || NOT_FOUND_ROUTE;
}
