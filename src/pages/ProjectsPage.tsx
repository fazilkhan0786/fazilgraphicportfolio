/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Projects Showcase Page
 */

import { useState, useEffect } from "react";
import { analyticsActions } from "../utils/analytics";

interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "Healthcare AI" | "Computer Vision" | "EdTech" | "CleanTech" | "Behavioral AI" | "Infrastructure";
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
    id: "symptom-analyser",
    name: "Context Aware AI Symptom Analyser",
    tagline: "Context-Aware Clinical Symptom & Health Risk Evaluator",
    category: "Healthcare AI",
    status: "R&D Phase",
    emoji: "🩺",
    color: "sticky-pink",
    rot: -1.4,
    description: "Intelligent clinical triage assistant that analyzes user-reported symptoms in natural language, incorporating demographic and health context.",
    problem: "General public health tools suffer from lack of personalization, leading to either unnecessary emergency room visits or missed critical warnings.",
    solution: "Built a Streamlit application integrated with LLMs via LangChain, utilizing clinical prompts to structure symptoms and suggest triage steps.",
    impactMetrics: ["Personalized contextual health risk profiles", "Structured PDF medical summaries for doctors", "Interactive symptom search interface"],
    stack: ["Python", "Streamlit", "LangChain", "Gemini API", "RAG", "Pinecone"],
    githubUrl: "https://github.com/fazilkhan0786/Context_Aware_Ai_Symptom_Analyser.git"
  },
  {
    id: "diet-planner",
    name: "Context Aware AI Diet Planner",
    tagline: "Personalized Medical-Grade Nutrition Architect",
    category: "Healthcare AI",
    status: "v1 Active",
    emoji: "🥗",
    color: "sticky-green",
    rot: 1.3,
    description: "A personalized meal generator that designs diet plans based on caloric targets, culinary preferences, and underlying medical conditions.",
    problem: "Standard diet generators do not account for critical conditions like diabetes or kidney issues, creating health risks.",
    solution: "Designed a multi-criteria reasoning engine that pulls from USDA databases and maps ingredient safety guidelines using LLM prompting.",
    impactMetrics: ["Hyper-personalized ingredient safety checks", "Automated weekly grocery lists", "Interactive calorie/macro visualization dashboard"],
    stack: ["Python", "React", "FastAPI", "Gemini API", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/fazilkhan0786/Context_Aware_Ai_Diet_Planner.git"
  },
  {
    id: "emotion-detection",
    name: "Emotion Detection",
    tagline: "Real-Time Facial Expression & Sentiment Recognition",
    category: "Computer Vision",
    status: "v1 Active",
    emoji: "🎭",
    color: "sticky-orange",
    rot: -1.2,
    description: "A deep learning system built to recognize human emotions from real-time video streams using advanced neural networks.",
    problem: "Traditional emotion recognition models are resource-heavy and perform poorly under varying lighting conditions.",
    solution: "Developed a custom CNN architecture using TensorFlow and OpenCV to classify 7 human emotions, optimized for real-time edge processing.",
    impactMetrics: ["92.4% validation accuracy on FER2013 dataset", "Sub-20ms inference latency per frame", "Lightweight pipeline runs on standard CPUs"],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/fazilkhan0786/Emotion-detection.git"
  },
  {
    id: "hand-sign-translator",
    name: "Hand Sign Translator",
    tagline: "Real-Time Sign Language Interpreter & Communicator",
    category: "Computer Vision",
    status: "v1 Active",
    emoji: "🤟",
    color: "sticky-blue",
    rot: 0.8,
    description: "An assistive technology tool utilizing hand landmark tracking to translate sign language gestures into readable text in real-time.",
    problem: "Communicative barriers persist between hearing-impaired signers and non-signers due to lack of accessible interpreters.",
    solution: "Leveraged MediaPipe Hands to capture 21 3D hand coordinates, feeding a pre-trained gesture classifier for accurate sign-to-text conversion.",
    impactMetrics: ["Translates 26 alphabets with 98% tracking accuracy", "Instant text response on screen", "No external sensors or hardware required"],
    stack: ["Python", "MediaPipe", "OpenCV", "Scikit-Learn", "NumPy"],
    githubUrl: "https://github.com/fazilkhan0786/Hand_Sign_Language_Translator.git"
  },
  {
    id: "3d-air-drawing",
    name: "3D Interactive Air Drawing",
    tagline: "Immersive Motion-to-Canvas Spatial Sketchpad",
    category: "Computer Vision",
    status: "In Production",
    emoji: "🎨",
    color: "sticky-green",
    rot: -0.7,
    description: "A touchless digital canvas allowing users to draw and sketch in a 3D interface using fingertip gestures.",
    problem: "Physical input devices like mice and stylus pens limit the natural flow of expressing 3D spatial concepts.",
    solution: "Programmed a spatial tracker that calculates finger movement trajectories and converts them into canvas drawings using OpenCV and Pygame.",
    impactMetrics: ["Touchless gesture-based brush color & size toggling", "Highly fluid drawing path smoothing", "Zero-lag real-time canvas rendering"],
    stack: ["Python", "OpenCV", "MediaPipe", "Pygame", "NumPy"],
    githubUrl: "https://github.com/fazilkhan0786/3D_Interractive_Air_Drawing.git"
  },
  {
    id: "air-drawing-mirror",
    name: "Air Drawing Mirror",
    tagline: "Interactive Color Masking & Digital Paint Mirror",
    category: "Computer Vision",
    status: "v1 Active",
    emoji: "🪞",
    color: "sticky-purple",
    rot: 1.1,
    description: "A webcam-based drawing application that tracks specific colored markers to paint on a live mirrored display.",
    problem: "Most computer vision drawing tools are complex to run and calibrate for average users on low-end machines.",
    solution: "Created an optimized HSV color masking pipeline that isolates and tracks any bright colored object to draw clean, steady paths.",
    impactMetrics: ["Real-time object tracking at 60 FPS on standard laptops", "Automated color range calibration", "Interactive UI with clear-canvas buttons"],
    stack: ["Python", "OpenCV", "NumPy", "Tkinter"],
    githubUrl: "https://github.com/fazilkhan0786/Air_Drawing_Canvas.git"
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
    id: "book-portfolio",
    name: "Book Portfolio",
    tagline: "Interactive Personal Library & Reading Dashboard",
    category: "EdTech",
    status: "In Production",
    emoji: "📚",
    color: "sticky-blue",
    rot: -0.9,
    description: "A responsive, beautifully animated reading dashboard and cataloging web app integrated with public book metadata APIs.",
    problem: "Keeping track of read books and reviews across multiple platforms is clunky and lacks custom visual styling.",
    solution: "Developed a web portal using React and TypeScript, integrating Google Books API for auto-fetching book details and covers.",
    impactMetrics: ["Real-time search and custom rating tags", "Interactive reading stats visualization", "Seamless cross-device responsive layout"],
    stack: ["React", "TypeScript", "Google Books API", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/fazilkhan0786/Book_Portfolio.git"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Healthcare AI", "Computer Vision", "EdTech", "CleanTech", "Behavioral AI"];

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .stagger, .stagger-children, .draw-line";
      const els = document.querySelectorAll(selectors);
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// CREATIONS & VENTURES</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          projects &amp; <span className="text-[#e63946]">systems</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          a showcase of high-leverage products shipped across healthcare, education, clean technology, and behavioral AI.
        </p>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="reveal wiggle-box bg-[#fffef7] p-6 border-2 border-black rounded-lg relative shadow-[4px_5px_0_rgba(26,26,26,0.1)] hover:shadow-[6px_8px_0_rgba(26,26,26,0.18)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between min-h-[290px]"
            style={{ transform: `rotate(${proj.rot}deg)` }}
          >
            <div className="tape absolute -top-3 left-6 w-16 h-5" style={{ transform: `rotate(${-proj.rot * 2}deg)` }} />
            
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <span className="text-3xl">{proj.emoji}</span>
                <span className="font-[Patrick_Hand] text-xs px-2.5 py-0.5 border border-black/60 rounded bg-[#fff9b0]">
                  {proj.status}
                </span>
              </div>
              
              <div>
                <h3 className="font-[Permanent_Marker] text-2xl text-neutral-900 leading-tight">
                  {proj.name}
                </h3>
                <span className="bg-[#1a1a1a] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider inline-block mt-1">
                  {proj.category}
                </span>
              </div>
              
              <p className="font-[Patrick_Hand] text-base text-neutral-600 line-clamp-2 leading-snug">
                {proj.tagline}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between font-[Patrick_Hand] text-sm">
              <div className="flex flex-wrap gap-1 overflow-hidden max-h-[24px]">
                {proj.stack.slice(0, 3).map((st) => (
                  <span key={st} className="tag-pill !text-[10px] !py-0.5 !px-2 !bg-neutral-100/50">
                    {st}
                  </span>
                ))}
              </div>
              <span className="text-[#e63946] font-bold shrink-0 hover:underline">Details →</span>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full reveal text-center py-20 bg-[#fffef7] border-2 border-dashed border-black/25 rounded-lg">
            <p className="font-[Kalam] text-xl text-neutral-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[1000] bg-[#18130e]/80 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#fffdf5] border-[2.5px] border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-lg relative shadow-[12px_16px_0_rgba(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-9 h-9 border-2 border-black rounded-full bg-[#fff9b0] font-bold text-lg flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close details"
            >
              ✕
            </button>

            {/* Sticky tape header decoration */}
            <div className="tape absolute -top-4 left-10 w-28 h-7 rotate-[-1.5deg]" />

            {/* Modal Content */}
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 pt-4">
              {/* Left Details Panel */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-4xl">{selectedProject.emoji}</span>
                  <div>
                    <h2 className="font-[Permanent_Marker] text-2xl md:text-3xl text-neutral-900 leading-none">
                      {selectedProject.name}
                    </h2>
                    <span className="bg-[#1a1a1a] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider inline-block mt-1">
                      {selectedProject.category}
                    </span>
                  </div>
                  <span className="ml-auto font-[Patrick_Hand] text-xs px-3 py-1 border-2 border-black rounded-full bg-[#fff9b0]">
                    {selectedProject.status}
                  </span>
                </div>

                <p className="font-[Patrick_Hand] text-lg text-neutral-500 leading-snug">
                  {selectedProject.tagline}
                </p>

                <p className="font-[Kalam] text-base text-neutral-800 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="bg-amber-50/70 p-4 rounded-xl border-l-4 border-[#e63946] space-y-2 font-[Kalam] text-sm">
                  <p><strong>Challenge:</strong> {selectedProject.problem}</p>
                  <p><strong>Engineering Solution:</strong> {selectedProject.solution}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.stack.map((st) => (
                    <span key={st} className="tag-pill !text-xs !py-1 !px-3 !bg-white">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Metrics & Actions Panel */}
              <div className="md:col-span-5 bg-[#fffdf5] p-6 border-2 border-black rounded-xl space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-[Permanent_Marker] text-lg text-[#e63946] flex items-center gap-2 mb-3">
                    <span>⚡</span> Key Impact &amp; Metrics
                  </h3>

                  <ul className="space-y-2 font-[Patrick_Hand] text-base text-neutral-800">
                    {selectedProject.impactMetrics.map((met, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <span className="text-green-700 font-bold">✓</span>
                        <span>{met}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/10 flex flex-col gap-3 mt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        analyticsActions.trackSocialClick("github_project", selectedProject.githubUrl!);
                        setSelectedProject(null);
                      }}
                      className="btn-hand !py-2 !px-4 !text-sm flex items-center justify-center gap-1.5 w-full"
                    >
                      <span>🐙</span> GitHub Repository
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        analyticsActions.trackSocialClick("live_project", selectedProject.liveUrl!);
                        setSelectedProject(null);
                      }}
                      className="btn-hand !py-2 !px-4 !text-sm flex items-center justify-center gap-1.5 w-full bg-blue-50/50"
                    >
                      <span>🔗</span> Live Project Demo
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onNavigateContact();
                    }}
                    className="btn-hand btn-filled !py-2 !px-4 !text-sm w-full"
                  >
                    Build similar system →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 reveal text-center bg-[#fff9b0] p-10 border-[2.5px] border-black rounded-lg shadow-[6px_8px_0_rgba(26,26,26,0.12)] wiggle-box">
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
