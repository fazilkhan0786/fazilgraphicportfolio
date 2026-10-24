/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Static Site Generation (SSG Prerendering Pipeline)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildBreadcrumbSchema(items) {
  if (!items || items.length <= 1) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.path === "/" ? "https://fazilportfolio.me/" : `https://fazilportfolio.me${item.path}`
    }))
  };
}

async function prerender() {
  console.log("🚀 Starting Static Site Generation (SSG Prerender)...");

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client template not found at ${templatePath}. Run vite build first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8");

  // Dynamically import SSR bundle built by Vite
  const serverEntryPath = path.resolve(ssrDir, "entry-server.js");
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR bundle not found at ${serverEntryPath}. Run vite build --ssr first.`);
  }

  const { render, ALL_CANONICAL_ROUTES, NOT_FOUND_ROUTE, stories } = await import(pathToFileURL(serverEntryPath).href);

  const routesToRender = [...ALL_CANONICAL_ROUTES, NOT_FOUND_ROUTE];
  console.log(`📦 Prerendering ${routesToRender.length} routes...`);

  let renderedCount = 0;

  for (const route of routesToRender) {
    const { appHtml, config } = render(route.path);

    let html = rawTemplate;

    // 1. Inject rendered HTML into root
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 2. Replace title & meta title
    html = html.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(config.title)}</title>`
    );
    html = html.replace(
      /<meta\s+name="title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="title" content="${escapeHtml(config.title)}" />`
    );

    // 3. Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(config.description)}" />`
    );

    // 4. Replace canonical link
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
      `<link rel="canonical" href="${config.canonical}" />`
    );

    // 5. Replace Open Graph tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(config.title)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(config.description)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:url" content="${config.canonical}" />`
    );
    html = html.replace(
      /<meta\s+property="og:type"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:type" content="${config.ogType}" />`
    );

    // 6. Replace Twitter tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(config.title)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(config.description)}" />`
    );

    // 7. Inject Google Search Console verification token if provided in environment
    const gscToken = process.env.VITE_GSC_VERIFICATION_TOKEN;
    if (gscToken && !html.includes("google-site-verification")) {
      html = html.replace(
        "</head>",
        `  <meta name="google-site-verification" content="${escapeHtml(gscToken)}" />\n  </head>`
      );
    }

    // 8a. Inject breadcrumbs schema on nested routes
    if (config.breadcrumbs && config.breadcrumbs.length > 1) {
      const breadcrumbSchema = buildBreadcrumbSchema(config.breadcrumbs);
      if (breadcrumbSchema) {
        html = html.replace(
          "</head>",
          `  <script type="application/ld+json">\n  ${JSON.stringify(breadcrumbSchema, null, 2)}\n  </script>\n  </head>`
        );
      }
    }

    // 8b. Inject BlogPosting schema on story routes
    if (route.path.startsWith("/stories/") && route.path !== "/stories/") {
      const slug = route.path.replace(/^\/stories\//, "").replace(/\/$/, "");
      const story = stories ? stories.find((s) => s.slug === slug) : null;
      if (story) {
        const storyUrl = `https://fazilportfolio.me/stories/${story.slug}/`;
        const articleSchema = {
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
          "keywords": Array.isArray(story.tags) ? story.tags.join(", ") : "",
          "image": "https://fazilportfolio.me/images/portrait.png",
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
        html = html.replace(
          "</head>",
          `  <script id="article-jsonld" type="application/ld+json">\n  ${JSON.stringify(articleSchema, null, 2)}\n  </script>\n  </head>`
        );
      }
    }

    // 9. Determine output file path
    if (route.path === "/") {
      fs.writeFileSync(path.resolve(distDir, "index.html"), html, "utf-8");
      console.log(`  ✓ Prerendered / -> dist/index.html`);
    } else if (route.path === "/404") {
      fs.writeFileSync(path.resolve(distDir, "404.html"), html, "utf-8");
      console.log(`  ✓ Prerendered /404 -> dist/404.html`);
    } else {
      // E.g., /projects/ or /stories/why-i-started-nuroved/
      const cleanSubPath = route.path.replace(/^\//, "").replace(/\/$/, "");
      const targetDir = path.resolve(distDir, cleanSubPath);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Write targetDir/index.html (standard for static hosts and GitHub Pages)
      fs.writeFileSync(path.resolve(targetDir, "index.html"), html, "utf-8");

      // Also write dist/subpath.html (supports cleanUrls on Vercel without trailing slash)
      const parentDir = path.dirname(path.resolve(distDir, `${cleanSubPath}.html`));
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }
      fs.writeFileSync(path.resolve(distDir, `${cleanSubPath}.html`), html, "utf-8");

      console.log(`  ✓ Prerendered ${route.path} -> dist/${cleanSubPath}/index.html`);
    }

    renderedCount++;
  }

  // Clean up temporary SSR bundle directory
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log(`\n🎉 Successfully prerendered all ${renderedCount} routes into dist!`);
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
