/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Projects Showcase Page
 */

import { useState } from "react";
import { analyticsActions } from "../utils/analytics";

interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "Healthcare AI" | "EdTech" | "CleanTech" | "Behavioral AI" | "Infrastructure";
  status: "v1 Active" | "In Production" | "Scaling" | "R&D Phase";
  emoji: string;
  color: string;
  rot: number;
  description: string;
  problem: string;
  solution: string;
  impactMetrics: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "nuroved",
    name: "NuroVed",
    tagline: "Healthcare Infrastructure & Clinical Workflow System",
    category: "Healthcare AI",
    status: "v1 Active",
    emoji: "🏥",
    color: "sticky-pink",
    rot: -1.5,
    description: "Unified healthcare infrastructure platform eliminating patient data fragmentation and operational bottlenecks across clinics and hospitals.",
    problem: "Patient care suffers from fragmented clinical records, manual administrative data entry, and communication gaps between practitioners.",
    solution: "Engineered an async FastAPI microservices backend paired with a Flutter cross-platform mobile suite and custom NLP transcription pipelines for instant clinical recording.",
    impactMetrics: ["60% reduction in doctor documentation time", "99.9% uptime on async microservices", "Zero-trust RBAC patient record security"],
    stack: ["FastAPI", "Python", "Flutter", "Dart", "NLP", "PostgreSQL", "Supabase", "Docker"],
    githubUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/#nuroved"
  },
  {
    id: "educle",
    name: "Educle",
    tagline: "EdTech Operations & AI Student Credibility System",
    category: "EdTech",
    status: "Scaling",
    emoji: "🎓",
    color: "sticky-blue",
    rot: 1.2,
    description: "End-to-end academic management system powered by AI credibility scoring to evaluate student growth beyond traditional exams.",
    problem: "Educational institutions struggle with fragmented student activity records and manual transcript verification.",
    solution: "Built a centralized web portal in React & TypeScript backed by real-time analytics to aggregate academic, co-curricular, and skill credentials.",
    impactMetrics: ["10,000+ student credential logs processed", "Automated academic verification in < 2 seconds"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "Analytics"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "trashee",
    name: "Trashee",
    tagline: "CleanTech IoT Community Waste Reporting Platform",
    category: "CleanTech",
    status: "In Production",
    emoji: "🌱",
    color: "sticky-green",
    rot: -1,
    description: "Community-driven environmental reporting network converting municipal citizens into active change-makers with geo-tagged IoT tracking.",
    problem: "Municipal waste management suffers from slow response times and lack of real-time community reporting.",
    solution: "Designed a mobile-first Flutter app integrated with Firebase GeoFire and IoT bin sensor telemetry for instant reporting and automated dispatch.",
    impactMetrics: ["78% operational uplift in waste collection dispatch", "Community reward gamification engine"],
    stack: ["Flutter", "Firebase", "Geo-mapping", "IoT Telemetry", "Gamification"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "actora",
    name: "Actora",
    tagline: "Behavioral Design AI & Focus Modification Engine",
    category: "Behavioral AI",
    status: "R&D Phase",
    emoji: "🧠",
    color: "sticky-purple",
    rot: 1.5,
    description: "Attacks the digital dopamine loop directly, rewiring psychological triggers that cause focus drift.",
    problem: "Modern notification algorithms exploit human dopamine loops, causing severe productivity drop-offs.",
    solution: "Constructed state-machine cognitive feedback loops in Python and React Native that detect drift triggers and deliver adaptive focus interventions.",
    impactMetrics: ["Tested across 1,000+ habit loops", "Behavioral intervention response < 100ms"],
    stack: ["Behavioral AI", "Python", "React Native", "PyTorch", "State Machines"],
    githubUrl: "https://github.com/fazilkhan0786"
  }
];

export default function ProjectsPage({ onNavigateContact }: { onNavigateContact: () => void }) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Healthcare AI", "EdTech", "CleanTech", "Behavioral AI"];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// CREATIONS & VENTURES</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          projects &amp; <span className="text-[#e63946]">systems</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          a showcase of high-leverage products shipped across healthcare, education, clean technology, and behavioral AI.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`tag-pill !text-base !px-5 !py-2 transition-all ${
              activeTab === cat
                ? "!bg-[#e63946] !text-white !border-[#e63946]"
                : "!bg-[#fffef7] text-black hover:!bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="reveal wiggle-box bg-[#fffef7] p-6 md:p-10 border-3 border-black rounded-2xl relative shadow-md hover:shadow-xl transition-all"
            style={{ transform: `rotate(${proj.rot}deg)` }}
          >
            <div className="tape absolute -top-4 left-10 w-24 h-7 rotate-[-2deg]" />
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Info */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-4xl">{proj.emoji}</span>
                  <div>
                    <h2 className="font-[Permanent_Marker] text-3xl md:text-4xl text-neutral-900">
                      {proj.name}
                    </h2>
                    <p className="font-[Patrick_Hand] text-lg text-neutral-500">{proj.tagline}</p>
                  </div>
                  <span className="ml-auto font-[Patrick_Hand] text-xs px-3 py-1 border-2 border-black rounded-full bg-[#fff9b0]">
                    {proj.status}
                  </span>
                </div>

                <p className="font-[Kalam] text-lg text-neutral-800 leading-relaxed pt-2">
                  {proj.description}
                </p>

                <div className="bg-amber-50/70 p-4 rounded-xl border-l-4 border-[#e63946] space-y-2 font-[Kalam] text-base">
                  <p><strong>Challenge:</strong> {proj.problem}</p>
                  <p><strong>Engineering Solution:</strong> {proj.solution}</p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.stack.map((st) => (
                    <span key={st} className="tag-pill !text-xs !py-1 !px-3 !bg-white">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Metrics & Actions */}
              <div className="md:col-span-5 bg-[#fffdf5] p-6 border-2 border-black rounded-xl space-y-4">
                <h3 className="font-[Permanent_Marker] text-xl text-[#e63946] flex items-center gap-2">
                  <span>⚡</span> Key Impact &amp; Metrics
                </h3>

                <ul className="space-y-2 font-[Patrick_Hand] text-base text-neutral-800">
                  {proj.impactMetrics.map((met, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2">
                      <span className="text-green-700 font-bold">✓</span>
                      <span>{met}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-black/10 flex flex-wrap gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => analyticsActions.trackSocialClick("github_project", proj.githubUrl!)}
                      className="btn-hand !py-2 !px-4 !text-sm flex items-center gap-1.5"
                    >
                      <span>🐙</span> GitHub Repository
                    </a>
                  )}
                  <button
                    onClick={onNavigateContact}
                    className="btn-hand btn-filled !py-2 !px-4 !text-sm"
                  >
                    Build similar system →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 reveal text-center bg-[#fff9b0] p-10 border-3 border-black rounded-2xl wiggle-box">
        <h2 className="font-[Caveat] font-bold text-4xl md:text-5xl mb-3">
          have a custom product idea in mind?
        </h2>
        <p className="font-[Kalam] text-lg max-w-xl mx-auto mb-6 text-neutral-800">
          from zero-to-one prototyping to complex healthcare microservices, let's architect software that works.
        </p>
        <button onClick={onNavigateContact} className="btn-hand btn-red text-xl">
          discuss project requirements →
        </button>
      </div>
    </div>
  );
}
