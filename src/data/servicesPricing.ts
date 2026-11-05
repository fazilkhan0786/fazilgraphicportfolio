/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Centralized Service Offerings & Indicative Pricing Configuration
 * Configurable in INR (₹) with tier specifications.
 */

export interface PricingTier {
  tierName: "Starter" | "Standard" | "Advanced";
  scope: string;
  estimatedPrice: string; // "Custom Quote" (editable with specific INR figures if approved)
  timeline: string;
  deliverables: string[];
}

export interface ServiceOffering {
  id: string;
  titleLine1: string;
  titleLine2: string;
  categoryTitle: string; // Full single-line name used for inquiry form pre-selection
  description: string;
  shortIntro: string;
  bgClass: string;
  shadowColor: string;
  iconType: "product-dev" | "uiux-design" | "aiml-solutions" | "technical-consulting" | "graphic-design" | "website-dev" | "flutter-mobile" | "startup-collab";
  deliverables: string[];
  badges: { icon: string; label: string }[];
  whatsIncluded: string[];
  pricingTiers: [PricingTier, PricingTier, PricingTier];
}

export const servicesOfferings: ServiceOffering[] = [
  {
    id: "product-development",
    titleLine1: "Product",
    titleLine2: "Development",
    categoryTitle: "Product Development",
    description: "Build scalable, real-world web and mobile products from idea to launch.",
    shortIntro: "End-to-end engineering of production software systems, combining resilient backend architecture with intuitive user experiences.",
    bgClass: "bg-[#bbf7d0]", // Mint green
    shadowColor: "#059669", // Emerald green
    iconType: "product-dev",
    deliverables: [
      "Web / Mobile Application",
      "Backend & Database Setup",
      "Deployment & Maintenance"
    ],
    badges: [
      { icon: "flutter", label: "Flutter" },
      { icon: "react", label: "React" },
      { icon: "node", label: "Node.js" },
      { icon: "fastapi", label: "FastAPI" }
    ],
    whatsIncluded: [
      "Complete product architecture and planning",
      "Scalable API and microservice backend",
      "Clean relational database schema (PostgreSQL / Supabase)",
      "Continuous deployment pipeline and production hosting setup",
      "Post-launch technical maintenance and monitoring"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Single Core Flow MVP or prototype validation",
        estimatedPrice: "Custom Quote",
        timeline: "1-2 Weeks",
        deliverables: ["Core API flow", "Basic responsive UI", "Database schema", "Staging deployment"]
      },
      {
        tierName: "Standard",
        scope: "Full-Stack Web/Mobile Application with authentication",
        estimatedPrice: "Custom Quote",
        timeline: "3-5 Weeks",
        deliverables: ["Multi-page UI", "Role-based access", "Third-party APIs", "Production deployment"]
      },
      {
        tierName: "Advanced",
        scope: "End-to-End Enterprise / Startup Platform",
        estimatedPrice: "Custom Quote",
        timeline: "6-10 Weeks",
        deliverables: ["Microservices", "Real-time sync", "Analytics telemetry", "99.9% uptime SLA setup"]
      }
    ]
  },
  {
    id: "uiux-design",
    titleLine1: "UI/UX",
    titleLine2: "& Design",
    categoryTitle: "UI/UX Design",
    description: "User-centered, modern and conversion-focused design for digital products.",
    shortIntro: "Intuitive user experience research, design system creation, and high-fidelity interactive prototyping in Figma.",
    bgClass: "bg-[#fbcfe8]", // Pastel pink
    shadowColor: "#e11d48", // Coral pink
    iconType: "uiux-design",
    deliverables: [
      "UI/UX (Web & Mobile)",
      "Design Systems & Components",
      "Prototypes (Figma)"
    ],
    badges: [
      { icon: "figma", label: "Figma" },
      { icon: "ps", label: "Ps" },
      { icon: "ai", label: "Ai" }
    ],
    whatsIncluded: [
      "User journey mapping and friction audits",
      "Wireframing and structural page layouts",
      "Full design system tokens (colors, typography, grid)",
      "Clickable interactive prototypes for user testing",
      "Developer-ready Figma asset export and documentation"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Single High-Converting Landing Page or Core User Flow",
        estimatedPrice: "Custom Quote",
        timeline: "3-5 Days",
        deliverables: ["Wireframes", "High-fidelity Figma mockups", "Mobile layout", "Component specs"]
      },
      {
        tierName: "Standard",
        scope: "Complete Web App or Mobile Application UI/UX",
        estimatedPrice: "Custom Quote",
        timeline: "2-3 Weeks",
        deliverables: ["8-15 custom screens", "Interactive Figma prototype", "Design system tokens", "User testing"]
      },
      {
        tierName: "Advanced",
        scope: "Multi-Platform Design System & SaaS Suite",
        estimatedPrice: "Custom Quote",
        timeline: "4-6 Weeks",
        deliverables: ["Comprehensive component library", "Dark/Light themes", "Cross-device responsiveness", "Design handoff tokens"]
      }
    ]
  },
  {
    id: "aiml-solutions",
    titleLine1: "AI/ML",
    titleLine2: "Solutions",
    categoryTitle: "AI/ML Solutions",
    description: "Practical AI integrations that add real value — from automation to decision support.",
    shortIntro: "Applied machine learning, open-source LLM pipelines, context-aware RAG, and computer vision systems designed for real business workflows.",
    bgClass: "bg-[#bae6fd]", // Sky blue
    shadowColor: "#0284c7", // Blue
    iconType: "aiml-solutions",
    deliverables: [
      "AI Feature Development",
      "Data Processing & RAG",
      "Model Integration (Open Source)"
    ],
    badges: [
      { icon: "python", label: "Python" },
      { icon: "llm", label: "LLM" },
      { icon: "langchain", label: "LangChain" },
      { icon: "pytorch", label: "PyTorch" }
    ],
    whatsIncluded: [
      "Context-aware Retrieval-Augmented Generation (RAG)",
      "Automated prompt engineering & evaluation frameworks",
      "Local and cloud LLM inference APIs (Gemini, OpenAI, Hugging Face)",
      "Computer vision pipelines (OpenCV, MediaPipe)",
      "Data preprocessing, embeddings, and vector database indexing"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "AI API Integration or Smart Assistant Prototype",
        estimatedPrice: "Custom Quote",
        timeline: "1-2 Weeks",
        deliverables: ["API endpoint integration", "Prompt engineering", "Structured JSON outputs", "Basic error handling"]
      },
      {
        tierName: "Standard",
        scope: "Custom RAG Pipeline with Document Knowledge Base",
        estimatedPrice: "Custom Quote",
        timeline: "3-4 Weeks",
        deliverables: ["Vector database setup", "Document parsing pipeline", "Semantic search retrieval", "Interactive demo UI"]
      },
      {
        tierName: "Advanced",
        scope: "Custom Edge Vision or Complex Multi-Agent Architecture",
        estimatedPrice: "Custom Quote",
        timeline: "5-8 Weeks",
        deliverables: ["Custom model fine-tuning / OpenCV pipeline", "Sub-50ms inference optimization", "Real-time telemetry", "Production scaling"]
      }
    ]
  },
  {
    id: "technical-consulting",
    titleLine1: "Technical",
    titleLine2: "Consulting",
    categoryTitle: "Technical Consulting",
    description: "Transform ideas into feasible, scalable and business-ready technology solutions.",
    shortIntro: "First-principles engineering advisory, software architecture blueprinting, technology selection, and roadmap guidance for early-stage founders.",
    bgClass: "bg-[#e9d5ff]", // Lavender / purple
    shadowColor: "#7c3aed", // Purple
    iconType: "technical-consulting",
    deliverables: [
      "Product & Architecture Planning",
      "Tech Stack & System Design",
      "MVP & Go-to-Market Guidance"
    ],
    badges: [
      { icon: "architecture", label: "Architecture" },
      { icon: "cloud", label: "Cloud" },
      { icon: "strategy", label: "Strategy" }
    ],
    whatsIncluded: [
      "Technical feasibility and risk assessment",
      "Cost-optimized technology stack evaluation",
      "Data modeling and database schema blueprints",
      "System security and compliance guidelines (e.g. healthcare data)",
      "MVP sprint planning and go-to-market milestone roadmaps"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Architecture Audit & Feasibility Review",
        estimatedPrice: "Custom Quote",
        timeline: "2-4 Days",
        deliverables: ["Codebase or idea audit", "Tech stack recommendation", "Written advisory memo", "Q&A consultation session"]
      },
      {
        tierName: "Standard",
        scope: "Full System Architecture & Technical Specification",
        estimatedPrice: "Custom Quote",
        timeline: "1-2 Weeks",
        deliverables: ["Complete ERD data model", "API contract specifications", "Cloud infrastructure diagram", "Engineering sprint backlog"]
      },
      {
        tierName: "Advanced",
        scope: "Ongoing Fractional CTO & Strategic Engineering Advisory",
        estimatedPrice: "Custom Quote",
        timeline: "Monthly Retainer",
        deliverables: ["Weekly architecture sprints", "Technical hiring evaluation", "Code review governance", "Investor pitch technical deck"]
      }
    ]
  },
  {
    id: "graphic-design",
    titleLine1: "Graphic",
    titleLine2: "Design",
    categoryTitle: "Graphic Design",
    description: "Distinctive brand identities, logos, marketing collateral and digital visual assets.",
    shortIntro: "Crafting memorable visual languages that communicate credibility, authority, and creative distinctiveness across physical and digital mediums.",
    bgClass: "bg-[#fef08a]", // Pastel yellow
    shadowColor: "#ca8a04", // Amber shadow
    iconType: "graphic-design",
    deliverables: [
      "Brand Identity & Vector Logos",
      "Social Media Creative Packs",
      "Marketing Materials & Banners"
    ],
    badges: [
      { icon: "branding", label: "Branding" },
      { icon: "ai", label: "Illustrator" },
      { icon: "ps", label: "Photoshop" }
    ],
    whatsIncluded: [
      "Vector logo marks with full monochrome and color variations",
      "Color palettes, typography systems, and brand guidelines",
      "Pitch deck graphics, product illustrations, and presentation decks",
      "Social media templates and high-resolution marketing banners",
      "Print-ready vectors and SVG source deliverables"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Vector Logo Mark & Essential Brand Palette",
        estimatedPrice: "Custom Quote",
        timeline: "3-5 Days",
        deliverables: ["3 initial logo concepts", "Vector SVG/PNG files", "Color palette specification", "Typography guide"]
      },
      {
        tierName: "Standard",
        scope: "Complete Brand Identity Kit & Marketing Pack",
        estimatedPrice: "Custom Quote",
        timeline: "1-2 Weeks",
        deliverables: ["Complete brand guidelines document", "Social media banner templates", "Product pitch deck graphics", "Favicon & app icons"]
      },
      {
        tierName: "Advanced",
        scope: "Full Comprehensive Visual Identity & Asset System",
        estimatedPrice: "Custom Quote",
        timeline: "2-3 Weeks",
        deliverables: ["Multi-channel creative assets", "Custom vector illustrations", "Marketing print collateral", "Ongoing monthly asset support"]
      }
    ]
  },
  {
    id: "website-development",
    titleLine1: "Website",
    titleLine2: "Development",
    categoryTitle: "Website Development",
    description: "High-speed, responsive, SEO-optimized business websites and landing pages.",
    shortIntro: "Engineering ultra-fast websites using modern React, TypeScript, and Tailwind CSS with sub-second page loads and technical SEO built-in.",
    bgClass: "bg-[#fed7aa]", // Soft peach / orange
    shadowColor: "#ea580c", // Deep orange shadow
    iconType: "website-dev",
    deliverables: [
      "High-Converting Landing Pages",
      "Responsive Business Portals",
      "Technical SEO & Speed Optimization"
    ],
    badges: [
      { icon: "react", label: "React" },
      { icon: "next", label: "Next.js" },
      { icon: "tailwind", label: "Tailwind" },
      { icon: "seo", label: "SEO" }
    ],
    whatsIncluded: [
      "Responsive layout for mobile, tablet, and desktop viewports",
      "Micro-animations and smooth scroll interactions",
      "Static Site Generation (SSG) for instantaneous load times",
      "Full technical SEO (Schema.org, Open Graph, meta tags)",
      "Contact form integration with anti-spam honeypot security"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Single High-Converting Product Landing Page",
        estimatedPrice: "Custom Quote",
        timeline: "4-7 Days",
        deliverables: ["Responsive React/Tailwind landing page", "Speed optimization (95+ Lighthouse)", "Contact form", "Domain hosting setup"]
      },
      {
        tierName: "Standard",
        scope: "Multi-Page Corporate / Business Website",
        estimatedPrice: "Custom Quote",
        timeline: "2-3 Weeks",
        deliverables: ["Up to 6 custom pages", "Blog / Stories architecture", "Technical SEO metadata", "Interactive showcase sections"]
      },
      {
        tierName: "Advanced",
        scope: "Custom Dynamic Web Platform with CMS",
        estimatedPrice: "Custom Quote",
        timeline: "4-6 Weeks",
        deliverables: ["Headless CMS integration", "Dynamic routing & search", "Localization support", "Custom interactive widgets"]
      }
    ]
  },
  {
    id: "flutter-mobile",
    titleLine1: "Flutter & Mobile",
    titleLine2: "App Development",
    categoryTitle: "Flutter & Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android with single-codebase efficiency.",
    shortIntro: "Native-feel mobile apps built with Flutter and Dart, supporting real-time database sync, offline storage, and responsive mobile UX.",
    bgClass: "bg-[#99f6e4]", // Aquamarine / mint-teal
    shadowColor: "#0d9488", // Teal shadow
    iconType: "flutter-mobile",
    deliverables: [
      "iOS & Android Dual Deployment",
      "Offline Storage & Real-Time Sync",
      "API & Authentication Integration"
    ],
    badges: [
      { icon: "flutter", label: "Flutter" },
      { icon: "dart", label: "Dart" },
      { icon: "firebase", label: "Firebase" },
      { icon: "mobile", label: "Mobile UX" }
    ],
    whatsIncluded: [
      "Single codebase deployment to Apple App Store & Google Play",
      "Clean architectural state management (Provider / Bloc / Riverpod)",
      "Secure authentication (OAuth, phone OTP, biometric)",
      "Real-time database integration (Firebase, Supabase, PostgreSQL)",
      "Push notification pipelines and offline caching"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "Single-Flow Mobile Prototype or MVP Feature",
        estimatedPrice: "Custom Quote",
        timeline: "2-3 Weeks",
        deliverables: ["Flutter app for Android & iOS", "Core user authentication", "Cloud database connection", "TestFlight / APK delivery"]
      },
      {
        tierName: "Standard",
        scope: "Complete Cross-Platform Mobile Application",
        estimatedPrice: "Custom Quote",
        timeline: "4-6 Weeks",
        deliverables: ["Multi-screen reactive UX", "Push notification setup", "Offline sync cache", "App Store submission assistance"]
      },
      {
        tierName: "Advanced",
        scope: "Enterprise Mobile Infrastructure with IoT / Real-Time Telemetry",
        estimatedPrice: "Custom Quote",
        timeline: "8-12 Weeks",
        deliverables: ["Background location / IoT telemetry", "Complex payment gateways", "Real-time socket streams", "Comprehensive QA test suite"]
      }
    ]
  },
  {
    id: "startup-collaboration",
    titleLine1: "Startup",
    titleLine2: "Collaboration",
    categoryTitle: "Startup Collaboration",
    description: "Early-stage technical co-building, MVP planning and product strategy partnerships.",
    shortIntro: "Hands-on engineering partnership for early-stage founders to turn raw hypotheses into deployed, user-tested software with high velocity.",
    bgClass: "bg-[#fce7f3]", // Pastel rose
    shadowColor: "#be185d", // Rose shadow
    iconType: "startup-collab",
    deliverables: [
      "0-to-1 MVP Scoping & Build",
      "Technical Co-Building Partnership",
      "Product Validation & Strategy"
    ],
    badges: [
      { icon: "startup", label: "0-to-1 Build" },
      { icon: "mvp", label: "MVP Sprint" },
      { icon: "strategy", label: "Product Strategy" }
    ],
    whatsIncluded: [
      "First-principles problem breakdown and technical feasibility validation",
      "Rapid prototyping sprints to get products into user hands quickly",
      "Technical co-founding perspective and data model design",
      "Weekly sprint cadence with transparent staging deployments",
      "Investor demo preparation and technical pitch documentation"
    ],
    pricingTiers: [
      {
        tierName: "Starter",
        scope: "MVP Scoping Sprint & Technical Roadmap",
        estimatedPrice: "Custom Quote",
        timeline: "1 Week",
        deliverables: ["Interactive paper/wireframe prototype", "System architecture spec", "Sprint backlog breakdown", "Cost estimation model"]
      },
      {
        tierName: "Standard",
        scope: "0-to-1 Production MVP Build & Launch",
        estimatedPrice: "Custom Quote",
        timeline: "4-6 Weeks",
        deliverables: ["Working web or mobile MVP", "Core database & auth", "Live production deployment", "First user feedback loop instrumentation"]
      },
      {
        tierName: "Advanced",
        scope: "Long-Term Technical Co-Building & Iterative Scaling",
        estimatedPrice: "Custom Quote",
        timeline: "Milestone-based",
        deliverables: ["Bi-weekly feature release sprints", "Infrastructure scaling", "Technical debt minimization", "Dedicated engineering partnership"]
      }
    ]
  }
];

export const marqueeItems = [
  "PRODUCT DEVELOPMENT",
  "UI/UX DESIGN",
  "AI/ML SOLUTIONS",
  "TECHNICAL CONSULTING",
  "GRAPHIC DESIGN",
  "WEBSITE DEVELOPMENT",
  "FLUTTER & MOBILE APPS",
  "STARTUP COLLABORATION"
];
