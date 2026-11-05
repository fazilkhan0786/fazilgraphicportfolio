/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Projects & Systems Page — Retro Block-Style Engineering Showcase
 * Faithfully matches media_1793870117910.jpg
 */

import { useState, useEffect, useMemo } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  RetroProjectsComputerIllustration,
  FlutterLogoIcon,
  DartLogoIcon,
  SupabaseLogoIcon,
  PythonLogoIcon,
  FigmaLogoIcon,
  ProjectIconDispatcher
} from "../components/RetroProjectsVisuals";
import { ProjectDetailsModal, ProjectDetailItem } from "../components/ProjectDetailsModal";

interface ProjectsPageProps {
  onNavigateContact?: () => void;
  onNavigate?: (path: string) => void;
}

type CategoryKey =
  | "All"
  | "Healthcare"
  | "AI/ML"
  | "Productivity"
  | "EdTech"
  | "Sustainability"
  | "Design & Development";

interface Project extends ProjectDetailItem {
  rot?: number;
}

// Complete inventory of 14 verified projects
const ALL_PROJECTS: Project[] = [
  {
    id: "nuroved",
    name: "NuroVed",
    tagline: "Healthcare Infrastructure & Clinical Workflow System",
    category: "Healthcare",
    status: "Active",
    description: "Patient-centric digital healthcare platform connecting patients, doctors, hospitals, labs and pharmacies.",
    problem: "Patient care suffers from fragmented clinical records, manual administrative data entry, and communication gaps between practitioners.",
    solution: "Engineered an async FastAPI microservices backend paired with a Flutter cross-platform mobile suite and custom NLP transcription pipelines for instant clinical recording.",
    impactMetrics: [
      "60% reduction in doctor documentation time",
      "99.9% uptime on async microservices",
      "Zero-trust RBAC patient record security"
    ],
    stack: ["Flutter", "Supabase", "AI/ML", "RAG"],
    githubUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/#nuroved"
  },
  {
    id: "nurocare",
    name: "NuroCare",
    tagline: "Diabetes-First Chronic Health Management",
    category: "Healthcare",
    status: "In Development",
    description: "Diabetes-first health management with insights, diet, routine and long-term tracking.",
    problem: "Chronic diabetes patients lack continuous glucose and lifestyle tracking that integrates directly into clinical feedback loops.",
    solution: "Developing predictive glycemic excursion models in Python integrated into a reactive Flutter mobile app with personalized diet alerts.",
    impactMetrics: [
      "Automated glycemic trend visualization",
      "Context-aware meal and insulin logging",
      "Cross-sync with doctor portals"
    ],
    stack: ["Flutter", "Python", "AI", "HealthTech"],
    githubUrl: "https://github.com/fazilkhan0786/Nurocare_patient_FE.git",
    liveUrl: "https://fazilportfolio.me/stories/why-i-started-nuroved/"
  },
  {
    id: "actora",
    name: "Actora",
    tagline: "Behavioral Design AI & Focus Modification Engine",
    category: "Productivity",
    status: "Active",
    description: "A minimal, offline-first daily task tracker to plan, track and build better habits.",
    problem: "Modern notification algorithms exploit human dopamine loops, causing severe productivity drop-offs.",
    solution: "Constructed state-machine cognitive feedback loops in Python and Flutter that detect drift triggers and deliver adaptive focus interventions.",
    impactMetrics: [
      "Tested across 1,000+ habit loops",
      "Behavioral intervention response < 100ms",
      "Local-first encrypted persistence"
    ],
    stack: ["Flutter", "Local DB", "Productivity"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "trashee",
    name: "Trashee",
    tagline: "CleanTech IoT Community Waste Reporting Platform",
    category: "Sustainability",
    status: "Planning",
    description: "A sustainability platform for waste tracking, collection and responsible disposal.",
    problem: "Municipal waste management suffers from slow response times and lack of real-time community reporting.",
    solution: "Designed a mobile-first Flutter app integrated with Firebase GeoFire and IoT bin sensor telemetry for instant reporting and automated dispatch.",
    impactMetrics: [
      "Real-time geo-tagged IoT bin telemetry",
      "Automated municipal dispatch alerts",
      "Community reward gamification engine"
    ],
    stack: ["Flutter", "Maps API", "Sustainability"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "techocore",
    name: "Techocore",
    tagline: "Freelance Engineering & Systems Development Branch",
    category: "Design & Development",
    status: "Active",
    description: "My freelancing & development branch for building products, websites and custom solutions.",
    problem: "Businesses require reliable, modern digital infrastructure built with fast turnaround, strict security, and maintainable codebases.",
    solution: "Engineered scalable web platforms, high-performance responsive interfaces, and custom REST API integrations for local businesses and startups.",
    impactMetrics: [
      "Production web architectures deployed",
      "Zero-downtime static builds with SSG",
      "100% mobile-responsive user experiences"
    ],
    stack: ["Web", "Flutter", "System Design"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "goat",
    name: "G.O.A.T",
    tagline: "Creative Agency for Startup Product & Digital Solutions",
    category: "Design & Development",
    status: "Active",
    description: "A creative freelancing agency for product, design and digital solutions with a focus on startups.",
    problem: "Early-stage founders struggle with disjointed visual branding, lackluster user interfaces, and delayed MVP deployments.",
    solution: "Delivered complete end-to-end design systems, brand identities, and agile MVP frontends optimized for venture showcases.",
    impactMetrics: [
      "Full-brand identity design systems",
      "High-conversion landing architectures",
      "Rapid MVP turnaround"
    ],
    stack: ["Branding", "UI/UX", "DevOps"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "symptom-analyser",
    name: "Context Aware AI Symptom Analyser",
    tagline: "Context-Aware Clinical Symptom & Health Risk Evaluator",
    category: "Healthcare",
    status: "R&D Phase",
    description: "Intelligent clinical triage assistant that analyzes user-reported symptoms in natural language, incorporating demographic and health context.",
    problem: "General public health tools suffer from lack of personalization, leading to either unnecessary emergency room visits or missed critical warnings.",
    solution: "Built a Streamlit application integrated with LLMs via LangChain, utilizing clinical prompts to structure symptoms and suggest triage steps.",
    impactMetrics: [
      "Personalized contextual health risk profiles",
      "Structured PDF medical summaries for doctors",
      "Interactive symptom search interface"
    ],
    stack: ["Python", "Streamlit", "LangChain", "Gemini API", "RAG"],
    githubUrl: "https://github.com/fazilkhan0786/Context_Aware_Ai_Symptom_Analyser.git"
  },
  {
    id: "diet-planner",
    name: "Context Aware AI Diet Planner",
    tagline: "Personalized Medical-Grade Nutrition Architect",
    category: "Healthcare",
    status: "Active",
    description: "A personalized meal generator that designs diet plans based on caloric targets, culinary preferences, and underlying medical conditions.",
    problem: "Standard diet generators do not account for critical conditions like diabetes or kidney issues, creating health risks.",
    solution: "Designed a multi-criteria reasoning engine that pulls from USDA databases and maps ingredient safety guidelines using LLM prompting.",
    impactMetrics: [
      "Hyper-personalized ingredient safety checks",
      "Automated weekly grocery lists",
      "Interactive calorie/macro visualization dashboard"
    ],
    stack: ["Python", "React", "FastAPI", "Gemini API", "PostgreSQL"],
    githubUrl: "https://github.com/fazilkhan0786/Context_Aware_Ai_Diet_Planner.git"
  },
  {
    id: "emotion-detection",
    name: "Emotion Detection",
    tagline: "Real-Time Facial Expression & Sentiment Recognition",
    category: "AI/ML",
    status: "Active",
    description: "A deep learning system built to recognize human emotions from real-time video streams using advanced neural networks.",
    problem: "Traditional emotion recognition models are resource-heavy and perform poorly under varying lighting conditions.",
    solution: "Developed a custom CNN architecture using TensorFlow and OpenCV to classify 7 human emotions, optimized for real-time edge processing.",
    impactMetrics: [
      "92.4% validation accuracy on FER2013 dataset",
      "Sub-20ms inference latency per frame",
      "Lightweight pipeline runs on standard CPUs"
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/fazilkhan0786/Emotion-detection.git"
  },
  {
    id: "hand-sign-translator",
    name: "Hand Sign Translator",
    tagline: "Real-Time Sign Language Interpreter & Communicator",
    category: "AI/ML",
    status: "Active",
    description: "An assistive technology tool utilizing hand landmark tracking to translate sign language gestures into readable text in real-time.",
    problem: "Communicative barriers persist between hearing-impaired signers and non-signers due to lack of accessible interpreters.",
    solution: "Used MediaPipe Hands to capture 21 3D hand coordinates, feeding a pre-trained gesture classifier for accurate sign-to-text conversion.",
    impactMetrics: [
      "Translates 26 alphabets with 98% tracking accuracy",
      "Instant text response on screen",
      "No external sensors or hardware required"
    ],
    stack: ["Python", "MediaPipe", "OpenCV", "Scikit-Learn"],
    githubUrl: "https://github.com/fazilkhan0786/Hand_Sign_Language_Translator.git"
  },
  {
    id: "3d-air-drawing",
    name: "3D Interactive Air Drawing",
    tagline: "Immersive Motion-to-Canvas Spatial Sketchpad",
    category: "AI/ML",
    status: "Active",
    description: "A touchless digital canvas allowing users to draw and sketch in a 3D interface using fingertip gestures.",
    problem: "Physical input devices like mice and stylus pens limit the natural flow of expressing 3D spatial concepts.",
    solution: "Programmed a spatial tracker that calculates finger movement trajectories and converts them into canvas drawings using OpenCV and Pygame.",
    impactMetrics: [
      "Touchless gesture-based brush color & size toggling",
      "Highly fluid drawing path smoothing",
      "Zero-lag real-time canvas rendering"
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    githubUrl: "https://github.com/fazilkhan0786/3D_Interractive_Air_Drawing.git"
  },
  {
    id: "air-drawing-mirror",
    name: "Air Drawing Mirror",
    tagline: "Interactive Color Masking & Digital Paint Mirror",
    category: "AI/ML",
    status: "Active",
    description: "A webcam-based drawing application that tracks specific colored markers to paint on a live mirrored display.",
    problem: "Most computer vision drawing tools are complex to run and calibrate for average users on low-end machines.",
    solution: "Created an optimized HSV color masking pipeline that isolates and tracks any bright colored object to draw clean, steady paths.",
    impactMetrics: [
      "Real-time object tracking at 60 FPS on standard laptops",
      "Automated color range calibration",
      "Interactive UI with clear-canvas buttons"
    ],
    stack: ["Python", "OpenCV", "NumPy", "Tkinter"],
    githubUrl: "https://github.com/fazilkhan0786/Air_Drawing_Canvas.git"
  },
  {
    id: "educle",
    name: "Educle",
    tagline: "EdTech Operations & AI Student Credibility System",
    category: "EdTech",
    status: "Scaling",
    description: "End-to-end academic management system powered by AI credibility scoring to evaluate student growth beyond traditional exams.",
    problem: "Educational institutions struggle with fragmented student activity records and manual transcript verification.",
    solution: "Built a centralized web portal in React & TypeScript backed by real-time analytics to aggregate academic, co-curricular, and skill credentials.",
    impactMetrics: [
      "10,000+ student credential logs processed",
      "Automated academic verification in < 2 seconds"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/fazilkhan0786"
  },
  {
    id: "book-portfolio",
    name: "Book Portfolio",
    tagline: "Interactive Personal Library & Reading Dashboard",
    category: "EdTech",
    status: "Active",
    description: "A responsive, beautifully animated reading dashboard and cataloging web app integrated with public book metadata APIs.",
    problem: "Keeping track of read books and reviews across multiple platforms is clunky and lacks custom visual styling.",
    solution: "Developed a web portal using React and TypeScript, integrating Google Books API for auto-fetching book details and covers.",
    impactMetrics: [
      "Real-time search and custom rating tags",
      "Interactive reading stats visualization",
      "Cross-device responsive layout"
    ],
    stack: ["React", "TypeScript", "Google Books API", "Tailwind CSS"],
    githubUrl: "https://github.com/fazilkhan0786/Book_Portfolio.git"
  }
];

// 6 Harmonic pastel card styles cycling through the grid
const CARD_COLOR_STYLES = [
  {
    bgClass: "bg-[#dcfce7]",
    shadowClass: "shadow-[6px_6px_0px_#86efac]"
  },
  {
    bgClass: "bg-[#fce7f3]",
    shadowClass: "shadow-[6px_6px_0px_#f472b6]"
  },
  {
    bgClass: "bg-[#f3e8ff]",
    shadowClass: "shadow-[6px_6px_0px_#c8b6ff]"
  },
  {
    bgClass: "bg-[#fef9c3]",
    shadowClass: "shadow-[6px_6px_0px_#facc15]"
  },
  {
    bgClass: "bg-[#e0f2fe]",
    shadowClass: "shadow-[6px_6px_0px_#38bdf8]"
  },
  {
    bgClass: "bg-[#dcfce7]",
    shadowClass: "shadow-[6px_6px_0px_#86efac]"
  }
];

export default function ProjectsPage({
  onNavigateContact,
  onNavigate
}: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => {
      if (selectedCategory === "Healthcare") {
        return p.category === "Healthcare" || p.id === "symptom-analyser" || p.id === "diet-planner";
      }
      if (selectedCategory === "AI/ML") {
        return (
          p.category === "AI/ML" ||
          p.id === "symptom-analyser" ||
          p.id === "diet-planner" ||
          p.id === "nuroved"
        );
      }
      return p.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Categories list with dynamic item counts
  const categoryFilters: { key: CategoryKey; label: string; count: number }[] = useMemo(() => {
    return [
      { key: "All", label: "All", count: ALL_PROJECTS.length },
      {
        key: "Healthcare",
        label: "Healthcare",
        count: ALL_PROJECTS.filter(
          (p) => p.category === "Healthcare" || p.id === "symptom-analyser" || p.id === "diet-planner"
        ).length
      },
      {
        key: "AI/ML",
        label: "AI/ML",
        count: ALL_PROJECTS.filter(
          (p) =>
            p.category === "AI/ML" ||
            p.id === "symptom-analyser" ||
            p.id === "diet-planner" ||
            p.id === "nuroved"
        ).length
      },
      {
        key: "Productivity",
        label: "Productivity",
        count: ALL_PROJECTS.filter((p) => p.category === "Productivity").length
      },
      {
        key: "EdTech",
        label: "EdTech",
        count: ALL_PROJECTS.filter((p) => p.category === "EdTech").length
      },
      {
        key: "Sustainability",
        label: "Sustainability",
        count: ALL_PROJECTS.filter((p) => p.category === "Sustainability").length
      },
      {
        key: "Design & Development",
        label: "Design & Development",
        count: ALL_PROJECTS.filter((p) => p.category === "Design & Development").length
      }
    ];
  }, []);

  return (
    <div className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative select-none">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Projects & Systems", path: "/projects/" }
        ]}
        onNavigate={onNavigate}
      />

      {/* Decorative Pixel Checkerboard Elements */}
      <div
        className="hidden lg:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] absolute top-28 left-8 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
      </div>

      <div
        className="hidden lg:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] absolute bottom-36 left-8 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
      </div>

      {/* =========================================================================
          HERO SECTION — EXACT THREE-PART REFERENCE COMPOSITION
          Left: Typography & Headlines | Center: Vintage Computer | Right: tech_stack.exe Window
         ========================================================================= */}
      <section className="mb-12 lg:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#e9d5ff] border-2 border-[#1a1a1a] rounded-full px-3.5 py-1 font-mono font-bold text-xs text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] mb-3">
              <span>// PROJECTS &amp; SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.15rem] text-[#1a1a1a] uppercase tracking-tight leading-[1.08] mb-4">
              MY WORK &amp; <br />
              <span className="relative bg-[#fb7185] border-[2.5px] border-[#1a1a1a] px-3 py-0.5 rounded-lg shadow-[3px_3px_0px_#1a1a1a] inline-block mt-1">
                CREATIONS.
                {/* Comic Action Sparks radiating out */}
                <span
                  className="absolute -top-3.5 -right-4 flex gap-0.5 pointer-events-none select-none text-[#e63946]"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M4 18L1 14" />
                    <path d="M10 10L14 3" />
                    <path d="M16 16L22 14" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description with Vertical Red Accent Bar */}
            <div className="flex items-start gap-3 max-w-md mt-1">
              <span
                className="w-1.5 h-12 bg-[#e63946] rounded-full shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="font-body text-xs sm:text-sm md:text-base text-[#3e3832] leading-relaxed">
                A collection of products, systems and experiments across healthcare, AI, education and productivity.
              </p>
            </div>
          </div>

          {/* Middle Column: Vintage Desktop Computer with FAZIL 'F' Monogram */}
          <div className="lg:col-span-3 flex justify-center py-2 lg:py-0">
            <RetroProjectsComputerIllustration className="w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[310px]" />
          </div>

          {/* Right Column: tech_stack.exe Window */}
          <div className="lg:col-span-4">
            <div className="bg-[#18181b] border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#7c3aed] overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-4 py-2.5 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b] border border-[#1a1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981] border border-[#1a1a1a]" />
                </div>
                <span className="font-mono font-black text-xs text-[#1a1a1a] tracking-wide">
                  tech_stack.exe
                </span>
                <div className="flex items-center gap-1 font-mono text-[10px] text-[#1a1a1a]/70" aria-hidden="true">
                  <span>_</span>
                  <span>□</span>
                  <span>✕</span>
                </div>
              </div>

              {/* Window Interior: Terminal Header & 5 Outlined Technology Tiles */}
              <div className="p-4 bg-[#111827]">
                <div className="font-mono text-xs font-bold text-[#4ade80] mb-3 flex items-center gap-1.5">
                  <span className="animate-pulse">&gt;</span>
                  <span>What I work with</span>
                </div>

                {/* Technology Tiles Row */}
                <div className="grid grid-cols-5 gap-2">
                  {/* 1. Flutter */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#38bdf8] transition-all cursor-default group">
                    <FlutterLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white mt-1.5 truncate">
                      Flutter
                    </span>
                  </div>

                  {/* 2. Dart */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#0081C6] transition-all cursor-default group">
                    <DartLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white mt-1.5 truncate">
                      Dart
                    </span>
                  </div>

                  {/* 3. Supabase */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#3ECF8E] transition-all cursor-default group">
                    <SupabaseLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white mt-1.5 truncate">
                      Supabase
                    </span>
                  </div>

                  {/* 4. Python */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#FFE052] transition-all cursor-default group">
                    <PythonLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white mt-1.5 truncate">
                      Python
                    </span>
                  </div>

                  {/* 5. Figma */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#A259FF] transition-all cursor-default group">
                    <FigmaLogoIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white mt-1.5 truncate">
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL CATEGORY FILTERS
          Block-style buttons with dynamic project counts matching reference
         ========================================================================= */}
      <section className="mb-8 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 sm:gap-2.5 flex-nowrap sm:flex-wrap">
          {categoryFilters.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl border-2 border-[#1a1a1a] font-mono font-bold text-xs transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#ffd93d] text-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] -translate-y-0.5"
                    : "bg-white text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#fbf8ef] hover:-translate-y-0.5"
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat.label}</span>
                <span className="ml-1 opacity-80">({cat.count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          PROJECT CARDS GRID
          3 Columns on desktop matching the reference layout
         ========================================================================= */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const colorStyle = CARD_COLOR_STYLES[index % CARD_COLOR_STYLES.length];
            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colorStyle.bgClass} border-[2.5px] border-[#1a1a1a] rounded-2xl ${colorStyle.shadowClass} hover:shadow-[8px_8px_0px_#1a1a1a] hover:-translate-y-1 transition-all p-5 sm:p-6 flex flex-col justify-between group cursor-pointer min-h-[260px]`}
              >
                <div>
                  {/* Card Top: Project Icon, Title, and Status Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <ProjectIconDispatcher projectId={project.id} className="w-11 h-11 shrink-0" />
                      <div>
                        <h2 className="font-display font-black text-xl text-[#1a1a1a] leading-tight group-hover:text-[#e63946] transition-colors inline-flex items-center gap-1">
                          <span>{project.name}</span>
                          <span className="text-sm">↗</span>
                        </h2>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0">
                      <span
                        className={`font-mono text-[11px] font-bold border border-[#1a1a1a] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-[1px_1px_0px_#1a1a1a] ${
                          project.status === "Active"
                            ? "bg-[#86efac] text-[#1a1a1a]"
                            : project.status === "In Development"
                            ? "bg-[#fef08a] text-[#1a1a1a]"
                            : "bg-[#e9d5ff] text-[#1a1a1a]"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                        <span>{project.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technology Badges in White Rounded Capsules */}
                <div className="pt-3 border-t border-[#1a1a1a]/15 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-white border border-[#1a1a1a] font-mono text-[10px] sm:text-[11px] font-bold text-[#1a1a1a] px-2.5 py-0.5 rounded-lg shadow-[1px_1px_0px_#1a1a1a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#ffd93d] p-8 max-w-md mx-auto">
            <p className="font-display font-bold text-lg text-[#1a1a1a] mb-3">
              No projects found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="btn-retro-primary !text-xs !py-2 !px-4"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          BOTTOM CTA BANNER
          Retro window banner connecting visitors to Contact page
         ========================================================================= */}
      <section className="bg-[#ffd93d] border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#f472b6] p-6 sm:p-10 text-center relative overflow-hidden">
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] uppercase tracking-tight mb-2">
          HAVE A CUSTOM PRODUCT IDEA IN MIND?
        </h2>
        <p className="font-body text-xs sm:text-sm md:text-base text-[#1a1a1a] max-w-xl mx-auto mb-6 leading-relaxed">
          From zero-to-one prototyping to complex healthcare microservices, let's architect software that works.
        </p>
        <button
          onClick={onNavigateContact}
          className="bg-[#1a1a1a] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5 rounded-xl px-6 py-3 cursor-pointer transition-all inline-flex items-center gap-2 uppercase tracking-wide"
        >
          <span>Discuss Project Requirements</span>
          <span>→</span>
        </button>
      </section>

      {/* Project Details Window Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigateContact={onNavigateContact}
        />
      )}
    </div>
  );
}
