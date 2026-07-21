/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Freelancing & Services Page (Updated with All Requested Offerings)
 */

import { useState } from "react";

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  stack: string[];
  recommendedFor: string;
}

const services: Service[] = [
  {
    icon: "🎨",
    title: "UI/UX Designing",
    subtitle: "User-centered interface design, wireframing, interactive prototypes & design systems.",
    deliverables: [
      "User journey mapping & UX friction audits",
      "High-fidelity Figma wireframes & interactive prototypes",
      "Design systems, typography & color token specification",
      "Responsive layout design for web, mobile & tablet"
    ],
    stack: ["Figma", "UI/UX", "User Research", "Wireframing", "Design Systems"],
    recommendedFor: "Startups & apps seeking intuitive, accessible, and high-converting interfaces."
  },
  {
    icon: "🖌️",
    title: "Graphic Designing",
    subtitle: "Brand identity, logo design, marketing collateral & visual storytelling assets.",
    deliverables: [
      "Brand identity guidelines & vector logo design",
      "Product showcase banners, pitch deck visuals & graphics",
      "Social media design packs & vector illustrations",
      "Print-ready & digital marketing assets"
    ],
    stack: ["Graphic Design", "Vector Illustration", "Branding", "Visual Identity"],
    recommendedFor: "Brands needing distinct, memorable, and premium visual identities."
  },
  {
    icon: "🌐",
    title: "Website Building",
    subtitle: "Custom, ultra-fast, responsive websites built with modern web technologies & SEO.",
    deliverables: [
      "Full-stack React, Vite & Tailwind CSS website engineering",
      "Rich micro-animations using GSAP & smooth transitions",
      "Full Technical, On-Page & Schema SEO implementation",
      "Mobile-responsive, accessible & high-performance load times"
    ],
    stack: ["React", "Vite", "Tailwind CSS", "GSAP", "TypeScript", "SEO"],
    recommendedFor: "Businesses, founders, and creators needing high-impact, wowed web presence."
  },
  {
    icon: "🤝",
    title: "Startup Collaboration",
    subtitle: "Technical co-founding, MVP execution blueprinting & product architecture partnership.",
    deliverables: [
      "0-to-1 MVP architecture blueprinting & data modeling",
      "Technical co-founder / CTO advisory support",
      "Rapid sprint execution from concept to live deployment",
      "Investor pitch deck technical documentation & demo prep"
    ],
    stack: ["Startup Advisory", "Product Architecture", "0-to-1 Engineering", "Strategy"],
    recommendedFor: "Early-stage founders needing technical leadership & rapid execution."
  },
  {
    icon: "🎬",
    title: "Video Editing",
    subtitle: "Product demo trailers, motion graphics, video storytelling & promotional edits.",
    deliverables: [
      "Product launch trailers & feature walkthrough videos",
      "Motion graphics & animated text/logo reveals",
      "Reel / Short video editing for social engagement",
      "Color grading, audio cleaning & sound design"
    ],
    stack: ["Video Editing", "Motion Graphics", "Storytelling", "Audio Design"],
    recommendedFor: "Products launching campaigns or needing compelling video demos."
  },
  {
    icon: "🏥",
    title: "Healthcare Systems & Clinical AI",
    subtitle: "End-to-end clinical management, async microservices & patient data infrastructure.",
    deliverables: [
      "FastAPI microservices & async REST APIs (NuroVed architecture)",
      "Flutter cross-platform iOS/Android/Web applications",
      "Automated NLP transcription & medical record parsing",
      "Zero-Trust role-based patient access control (RBAC)"
    ],
    stack: ["FastAPI", "Python", "Flutter", "PostgreSQL", "Supabase", "NLP"],
    recommendedFor: "HealthTech founders, clinics, hospitals & medical automation startups."
  },
  {
    icon: "🚀",
    title: "Flutter & Mobile App Development",
    subtitle: "Cross-platform mobile apps for iOS and Android with single codebase efficiency.",
    deliverables: [
      "Native-feel cross-platform Flutter mobile applications",
      "Real-time offline database sync & push notifications",
      "Custom state management (Provider / Bloc / Riverpod)",
      "App Store & Google Play Store release deployment"
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile Design"],
    recommendedFor: "Founders needing iOS & Android apps without double budget."
  }
];

const methodologySteps = [
  {
    num: "01",
    name: "Friction Audit & Blueprint",
    desc: "We analyze user needs, map core data entities, and define brand & UI goals before writing a single line of code."
  },
  {
    num: "02",
    name: "Architecture & Visual Design",
    desc: "We craft high-fidelity UI/UX wireframes, design systems, data schemas, and API routes for seamless execution."
  },
  {
    num: "03",
    name: "Rapid 0-to-1 Production Build",
    desc: "We code clean, secure TypeScript, Python, Dart, and CSS with daily staging previews and complete design fidelity."
  },
  {
    num: "04",
    name: "Polishing & Scaling",
    desc: "We optimize load speeds, verify security headers, refine animations, and ensure 10x scalability."
  }
];

export default function ServicesPage({ onNavigateContact }: { onNavigateContact: () => void }) {
  const [projectType, setProjectType] = useState<string>("Website Building & UI/UX");
  const [timeline, setTimeline] = useState<string>("1-3 Weeks");

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// FREELANCE &amp; CONSULTING</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          services &amp; <span className="text-[#e63946]">offerings</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          from UI/UX design &amp; graphic branding to full-stack website building, Flutter mobile apps, video editing, and startup collaboration.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((srv, idx) => (
          <div
            key={srv.title}
            className="reveal wiggle-box bg-[#fffef7] p-6 border-3 border-black rounded-2xl relative flex flex-col justify-between"
            style={{ transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)` }}
          >
            <div className="tape absolute -top-4 right-6 w-20 h-6 rotate-[3deg]" />
            <div>
              <div className="text-4xl mb-3">{srv.icon}</div>
              <h2 className="font-[Permanent_Marker] text-2xl text-neutral-900 mb-1">
                {srv.title}
              </h2>
              <p className="font-[Patrick_Hand] text-sm text-neutral-600 mb-4">{srv.subtitle}</p>

              <div className="space-y-2 mb-6 font-[Kalam] text-sm">
                <p className="font-[Permanent_Marker] text-xs uppercase text-[#e63946] tracking-wider">
                  Key Deliverables:
                </p>
                <ul className="space-y-1">
                  {srv.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-[#e63946] font-bold">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="p-2.5 bg-amber-50 rounded-xl border border-black/10 text-xs font-[Patrick_Hand] text-neutral-700 mb-3">
                <strong>Ideal for:</strong> {srv.recommendedFor}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {srv.stack.map((st) => (
                  <span key={st} className="tag-pill !text-xs !py-0.5 !px-2">
                    {st}
                  </span>
                ))}
              </div>

              <button
                onClick={onNavigateContact}
                className="btn-hand btn-filled w-full !py-2 !text-sm text-center"
              >
                Inquire about this service →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How I Work Methodology */}
      <div className="reveal mb-20 bg-[#fffdf5] p-8 md:p-12 border-3 border-black rounded-2xl crosshatch-bg">
        <div className="text-center mb-10">
          <span className="font-[Patrick_Hand] text-base text-[#e63946] uppercase tracking-widest">// THE BLUEPRINT</span>
          <h2 className="font-[Caveat] font-bold text-4xl md:text-6xl mt-1">
            how i <span className="text-[#e63946]">work</span>
          </h2>
          <p className="font-[Patrick_Hand] text-lg text-neutral-600 mt-1">
            four structured steps for zero friction, high security, and maximum build speed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((st) => (
            <div key={st.num} className="sketch-card !p-6 relative">
              <span className="font-[Permanent_Marker] text-4xl text-[#e63946]/30 block mb-2">{st.num}</span>
              <h3 className="font-[Permanent_Marker] text-xl mb-2">{st.name}</h3>
              <p className="font-[Kalam] text-sm text-neutral-700 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Scope & Time Estimator */}
      <div className="reveal bg-[#fffef7] p-8 md:p-10 border-3 border-black rounded-2xl wiggle-box mb-16">
        <h2 className="font-[Caveat] font-bold text-4xl text-center mb-2">
          project timeline <span className="text-[#e63946]">estimator</span>
        </h2>
        <p className="font-[Patrick_Hand] text-center text-neutral-600 mb-8">
          select your requirement to see typical sprint execution windows.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-3xl mx-auto">
          <div>
            <label className="font-[Permanent_Marker] text-sm block mb-2">Select Project Scope:</label>
            <select
              value={projectType}
              onChange={(e) => {
                setProjectType(e.target.value);
                if (e.target.value === "Healthcare Architecture") setTimeline("4-8 Weeks");
                else if (e.target.value === "Website Building & UI/UX") setTimeline("1-3 Weeks");
                else if (e.target.value === "Graphic Design & Branding") setTimeline("3-7 Days");
                else if (e.target.value === "Video Editing") setTimeline("3-5 Days");
                else setTimeline("2-4 Weeks");
              }}
              className="w-full p-3 border-2 border-black rounded-xl font-[Patrick_Hand] text-lg bg-white"
            >
              <option value="Website Building & UI/UX">Website Building &amp; UI/UX Design</option>
              <option value="Graphic Design & Branding">Graphic Design &amp; Branding</option>
              <option value="Video Editing">Video Editing &amp; Motion Graphics</option>
              <option value="Startup Collaboration">Startup Collaboration &amp; MVP Build</option>
              <option value="Healthcare Architecture">Healthcare System &amp; Microservices</option>
            </select>
          </div>

          <div className="bg-amber-100/80 p-6 border-2 border-black rounded-xl text-center">
            <span className="font-[Patrick_Hand] text-sm text-neutral-600 block">Estimated Delivery Window:</span>
            <span className="font-[Permanent_Marker] text-3xl text-[#e63946] block my-1">{timeline}</span>
            <span className="font-[Kalam] text-xs text-neutral-700 block">Direct sprint execution from Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <button onClick={onNavigateContact} className="btn-hand btn-red text-xl">
            get an exact project quote →
          </button>
        </div>
      </div>
    </div>
  );
}
