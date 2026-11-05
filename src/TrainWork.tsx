/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Project Journey / Train Section — Shipped Work & Transit Track
 * Faithfully matches Reference Image 3 (media_1793872802620.png)
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { analyticsActions } from "./utils/analytics";
import { RetroPixelTrain, StationProjectVisual } from "./components/RetroHomeVisuals";
import {
  NuroVedIcon,
  NuroCareIcon,
  ActoraIcon,
  TechocoreIcon,
  TrasheeIcon,
  GoatIcon,
  FlutterLogoIcon,
  DartLogoIcon,
  SupabaseLogoIcon,
  PythonLogoIcon
} from "./components/RetroProjectsVisuals";

export type ProjectStation = {
  id: string;
  stationNum: string;
  name: string;
  fullName: string;
  category: string;
  status: "Live" | "In Development" | "Shipped" | "R&D Phase";
  tagline: string;
  problem: string;
  architecture: string;
  myContribution: string;
  stack: string[];
  fullStack: string[];
  metrics: string[];
  repoUrl: string;
  liveUrl?: string;
  iconComponent: React.ComponentType<{ className?: string }>;
};

// 6 Primary Stations (Matching Reference Image 3: Junction 01 to 06)
export const projectStations: ProjectStation[] = [
  {
    id: "nuroved",
    stationNum: "01",
    name: "NuroVed",
    fullName: "NuroVed Healthcare Infrastructure",
    category: "HEALTHCARE AI",
    status: "Live",
    tagline: "Patient-centric digital healthcare platform connecting patients, doctors and labs.",
    problem: "Clinical consultations suffer from fragmented paper records, unsearchable PDF lab reports, and administrative data entry burdens that pull clinician attention away from patients.",
    architecture: "Decoupled asynchronous architecture pairing a FastAPI microservice backend with reactive cross-platform Flutter applications. Features NLP entity extraction pipelines that parse lab PDFs into structured clinical timelines.",
    myContribution: "Architected the core FastAPI REST endpoints, implemented AES-256 encrypted health payload storage schemas in PostgreSQL, and engineered reactive state management in Flutter.",
    stack: ["Flutter", "Supabase", "Python"],
    fullStack: ["FastAPI", "Python", "Flutter", "Dart", "PostgreSQL", "Supabase", "Docker"],
    metrics: ["Async microservice pipeline for high concurrency", "AES-256 encrypted patient health records", "Unified cross-platform iOS, Android & Web codebase"],
    repoUrl: "https://github.com/fazilkhan0786/Nurocare_patient_FE.git",
    liveUrl: "https://fazilportfolio.me/stories/why-i-started-nuroved/",
    iconComponent: NuroVedIcon
  },
  {
    id: "nurocare",
    stationNum: "02",
    name: "NuroCare",
    fullName: "NuroCare Diabetes Management",
    category: "HEALTHCARE",
    status: "Live",
    tagline: "Diabetes-first chronic disease companion with continuous blood glucose logging and diet feedback.",
    problem: "Managing diabetes requires relentless daily vigilance across glucose monitoring, insulin timing, and dietary intake. Generic health trackers lack disease-specific contextual feedback.",
    architecture: "Mobile-first Flutter client paired with Google HealthKit and Firebase sync. Features automated glycemic excursion risk scoring and meal logging.",
    myContribution: "Designed the Flutter UI, implemented real-time glycemic data visualization, and configured secure encrypted cloud sync.",
    stack: ["Flutter", "Dart", "Firebase"],
    fullStack: ["Flutter", "Dart", "Firebase", "HealthKit", "REST API"],
    metrics: ["Sub-second offline glucose logging", "Automated HbA1c estimation analytics", "Emergency hypo alerts to caregivers"],
    repoUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/projects/",
    iconComponent: NuroCareIcon
  },
  {
    id: "actora",
    stationNum: "03",
    name: "Actora",
    fullName: "Actora Behavioral Focus Engine",
    category: "PRODUCTIVITY AI",
    status: "In Development",
    tagline: "Offline-first habit engineering and cognitive feedback loop tracker.",
    problem: "Most productivity applications act as passive checklists that fail to address the psychological triggers of procrastination and attention drift.",
    architecture: "Offline-first Flutter engine with SQLite persistence, Riverpod state management, and algorithmic friction interventions.",
    myContribution: "Architected local state machines, designed the behavioral progression algorithms, and built distraction-free UI components.",
    stack: ["Flutter", "SQLite", "Riverpod"],
    fullStack: ["Flutter", "SQLite", "Riverpod", "Local Notifications", "State Machines"],
    metrics: ["100% offline functionality with zero cloud dependency", "Sub-16ms frame render times", "Deterministic state recovery"],
    repoUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/projects/",
    iconComponent: ActoraIcon
  },
  {
    id: "techocore",
    stationNum: "04",
    name: "Techocore",
    fullName: "Techocore Systems & Engineering",
    category: "SYSTEMS & WEB",
    status: "Live",
    tagline: "Freelance systems engineering agency delivering high-velocity web platforms.",
    problem: "Small businesses and startups struggle with overpriced agencies and sluggish WordPress templates that fail on mobile devices.",
    architecture: "High-performance React & Vite architecture with Tailwind CSS, edge routing, and automated WebP asset pipelines.",
    myContribution: "Founded the development studio, architected client web systems, and configured automated Cloudflare edge deployment pipelines.",
    stack: ["React", "TypeScript", "Tailwind"],
    fullStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare"],
    metrics: ["100/100 Google Lighthouse performance score", "Sub-1s first contentful paint", "Zero-downtime CI/CD deployment"],
    repoUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/projects/",
    iconComponent: TechocoreIcon
  },
  {
    id: "trashee",
    stationNum: "05",
    name: "Trashee",
    fullName: "CleanTech IoT Telemetry & Dispatch",
    category: "SUSTAINABILITY & IOT",
    status: "Shipped",
    tagline: "Community-driven environmental reporting network with real-time geo-tagged IoT bin telemetry.",
    problem: "Municipal waste collection relies on rigid, scheduled routes that leave overflowing bins unattended for days, leading to hygiene hazards in dense urban pockets.",
    architecture: "Connected IoT telemetry sensors reporting fill-levels via MQTT to a Node.js/Express backend, dispatching real-time route optimization alerts to municipal collection trucks.",
    myContribution: "Developed the cross-platform Flutter dispatcher application, integrated Mapbox spatial routes, and engineered telemetry ingestion listeners.",
    stack: ["Flutter", "Node.js", "MongoDB"],
    fullStack: ["Flutter", "React", "Node.js", "Express", "MongoDB", "IoT Telemetry"],
    metrics: ["12+ monitored public disposal nodes in pilot", "35% faster municipal route response times", "Real-time fill-level alerting under 500ms"],
    repoUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/projects/",
    iconComponent: TrasheeIcon
  },
  {
    id: "goat",
    stationNum: "06",
    name: "G.O.A.T",
    fullName: "G.O.A.T Creative Agency Studio",
    category: "DESIGN & DEVELOPMENT",
    status: "Live",
    tagline: "Creative agency studio platform crafting identity systems and conversion engines.",
    problem: "Early-stage founders need distinctive digital brand presence and fast, accessible landing pages without bloated codebases.",
    architecture: "Modern Next.js application with Framer Motion physics, responsive typography, and semantic SEO schema markup.",
    myContribution: "Co-founded the agency branch, engineered the flagship portfolio web portal, and designed responsive interaction components.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    fullStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: ["Sub-800ms Time-to-Interactive", "Full responsive accessibility across mobile/desktop", "Over 10+ client MVPs shipped"],
    repoUrl: "https://github.com/fazilkhan0786",
    liveUrl: "https://fazilportfolio.me/projects/",
    iconComponent: GoatIcon
  }
];

export default function TrainWork({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStation, setSelectedStation] = useState<ProjectStation | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalStations = projectStations.length;
  const activeStation = projectStations[activeIndex];
  const nextStationIndex = (activeIndex + 1) % totalStations;
  const nextStation = projectStations[nextStationIndex];

  // Calculate train position percentage along the railway track (from ~2% at start to ~62% at end)
  const trainTranslatePercent = (activeIndex / (totalStations - 1)) * 58 + 2;

  const navigateToStation = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    analyticsActions.trackProjectView(projectStations[newIndex].name, projectStations[newIndex].category);
    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % totalStations;
    navigateToStation(nextIdx);
  }, [activeIndex, totalStations, navigateToStation]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + totalStations) % totalStations;
    navigateToStation(prevIdx);
  }, [activeIndex, totalStations, navigateToStation]);

  // Keyboard accessibility: Left / Right arrows
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedStation) {
        if (e.key === "Escape") setSelectedStation(null);
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext, handlePrev, selectedStation]);

  const handleProjectLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/") && onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const IconComp = activeStation.iconComponent;

  return (
    <section id="work" className="relative py-20 md:py-28 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a] overflow-hidden">
      {/* Decorative Corner Checkerboards */}
      <div className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute left-6 top-10 pointer-events-none" aria-hidden="true" />
      <div className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute right-6 bottom-16 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* =====================================================================
            1. SECTION HEADING (Matching Reference Image 3)
            Lavender tag pill + Shipped [Work] with comic sparks on both sides
            ===================================================================== */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#e9d5ff] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] mb-3">
            <span className="font-mono text-xs font-bold text-[#1a1a1a] tracking-wider uppercase">
              // PROJECT JOURNEY
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* Left comic action sparks */}
            <div className="text-[#ffd93d] font-black text-2xl sm:text-3xl select-none" aria-hidden="true">
              ⚡
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] tracking-tight">
              Shipped{" "}
              <span className="inline-block bg-[#e63946] text-white px-3 sm:px-4 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
                Work
              </span>
            </h2>

            {/* Right comic action sparks */}
            <div className="text-[#ffd93d] font-black text-2xl sm:text-3xl select-none" aria-hidden="true">
              ⚡
            </div>
          </div>

          <p className="font-body text-[#3e3832] text-sm sm:text-base mt-2.5 font-bold">
            A track of the projects I've built — one station at a time.
          </p>
        </div>

        {/* =====================================================================
            2. MAIN STATION CARD & NAVIGATION ARROWS COMPOSITION
            Left arrow + Window-Style Junction Station Card + Right arrow
            ===================================================================== */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 mb-8">
          {/* Left Arrow Button (Lavender/Pink) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Project Station"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#ede9fe] border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center text-xl sm:text-2xl font-black text-[#1a1a1a] cursor-pointer hover:bg-[#ddd6fe] hover:translate-x-[-2px] active:translate-x-0 transition-all shrink-0"
          >
            ←
          </button>

          {/* Central Station Card (Window Frame) */}
          <div className="w-full max-w-3xl retro-window bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#7c3aed] overflow-hidden transition-all duration-300">
            {/* Window Title Bar */}
            <div className="retro-window-header header-yellow !px-4 !py-2.5 flex items-center justify-between border-b-[2.5px] border-[#1a1a1a]">
              <div className="retro-window-title font-mono font-bold text-xs sm:text-sm text-[#1a1a1a]">
                <span>Junction {activeStation.stationNum} / 0{totalStations}</span>
              </div>
              <div className="retro-window-controls flex items-center gap-1.5">
                <span className="win-btn win-btn-min">−</span>
                <span className="win-btn win-btn-max">□</span>
                <span className="win-btn win-btn-close">✕</span>
              </div>
            </div>

            {/* Window Content Grid */}
            <div className="p-5 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Project Details */}
              <div className="md:col-span-7 flex flex-col items-start space-y-3">
                <div className="flex items-center gap-3.5">
                  {/* Large Project Icon with Pink Offset Shadow */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#f472b6] flex items-center justify-center shrink-0">
                    <IconComp className="w-10 h-10" />
                  </div>

                  <div>
                    {/* Project Title with External Arrow */}
                    <div className="flex items-center gap-1.5">
                      <a
                        href={activeStation.liveUrl || activeStation.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleProjectLinkClick(e, activeStation.liveUrl || activeStation.repoUrl)}
                        className="font-display font-black text-2xl sm:text-3xl text-[#1a1a1a] hover:text-[#e63946] transition-colors"
                      >
                        {activeStation.name}
                      </a>
                      <span className="font-mono text-xl font-bold text-[#1a1a1a]">↗</span>
                    </div>

                    {/* Category Capsule Badge */}
                    <div className="mt-1">
                      <span className="inline-block bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded">
                        {activeStation.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Short Project Description */}
                <p className="font-body text-[#3e3832] text-xs sm:text-sm leading-relaxed font-bold pt-1">
                  {activeStation.tagline}
                </p>

                {/* Technology Badges with Vector Logos */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {activeStation.stack.map((tech) => (
                    <div
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center gap-1.5 text-xs font-mono font-bold text-[#1a1a1a]"
                    >
                      {tech === "Flutter" && <FlutterLogoIcon className="w-3.5 h-3.5" />}
                      {tech === "Dart" && <DartLogoIcon className="w-3.5 h-3.5" />}
                      {tech === "Supabase" && <SupabaseLogoIcon className="w-3.5 h-3.5" />}
                      {tech === "Python" && <PythonLogoIcon className="w-3.5 h-3.5" />}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Status & Project Illustration */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center border-t-2 md:border-t-0 md:border-l-2 border-dashed border-[#1a1a1a]/20 pt-4 md:pt-0 md:pl-6">
                {/* Live Status Badge */}
                <div className="mb-2 self-center md:self-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#dcfce7] text-[#15803d] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] font-mono text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                    <span>{activeStation.status}</span>
                  </span>
                </div>

                {/* Project-Specific Vector Artwork */}
                <div className="w-full flex justify-center md:justify-end">
                  <StationProjectVisual stationId={activeStation.id} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button (Yellow) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Project Station"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#ffd93d] border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center text-xl sm:text-2xl font-black text-[#1a1a1a] cursor-pointer hover:bg-[#facc15] hover:translate-x-[2px] active:translate-x-0 transition-all shrink-0"
          >
            →
          </button>
        </div>

        {/* =====================================================================
            3. RAILWAY TRACK, PIXEL TRAIN & NEXT STOP STATION SIGN
            Horizontal track with wooden sleepers, moving pixel train,
            and Next Stop roadsign matching Reference Image 3
            ===================================================================== */}
        <div className="relative mt-8 mb-6 py-6" ref={trackRef}>
          {/* Decorative Green Bushes behind track */}
          <div className="absolute left-2 bottom-6 z-0 select-none pointer-events-none opacity-90" aria-hidden="true">
            <svg viewBox="0 0 100 40" className="w-24 h-10 fill-[#22c55e] stroke-[#1a1a1a] stroke-[2.5]">
              <path d="M10 38 C4 30 14 18 26 22 C34 10 52 10 60 20 C70 14 86 18 90 38 Z" />
            </svg>
          </div>
          <div className="absolute right-6 bottom-6 z-0 select-none pointer-events-none opacity-90" aria-hidden="true">
            <svg viewBox="0 0 100 40" className="w-24 h-10 fill-[#22c55e] stroke-[#1a1a1a] stroke-[2.5]">
              <path d="M10 38 C4 30 14 18 26 22 C34 10 52 10 60 20 C70 14 86 18 90 38 Z" />
            </svg>
          </div>

          {/* "NEXT STOP" Station Sign on Twin Posts */}
          <div className="absolute right-14 sm:right-28 bottom-9 z-10 select-none">
            {/* Twin support posts */}
            <div className="absolute left-3 top-8 w-1.5 h-6 bg-[#7c3aed] border border-[#1a1a1a]" />
            <div className="absolute right-3 top-8 w-1.5 h-6 bg-[#7c3aed] border border-[#1a1a1a]" />
            {/* Signboard */}
            <div className="relative bg-[#fdfcf7] border-2 border-[#1a1a1a] rounded-lg px-3 py-1 shadow-[2px_2px_0px_#1a1a1a] text-center min-w-[110px]">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#6b635b] font-bold">
                NEXT STOP
              </div>
              <div className="font-display font-black text-xs text-[#1a1a1a] flex items-center justify-center gap-1">
                <span>{nextStation.name}</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Moving Pixel-Art Train */}
          <div
            className="relative z-10 transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(${trainTranslatePercent}%)`
            }}
          >
            <RetroPixelTrain className="w-56 sm:w-64 h-auto" />
          </div>

          {/* Railway Track Ground Base */}
          <div className="relative w-full h-7 mt-[-10px] z-20">
            {/* Upper Rail */}
            <div className="w-full h-1.5 bg-[#404040] border-y border-[#1a1a1a]" />
            {/* Wooden Sleepers / Cross Ties */}
            <div
              className="w-full h-3 border-y border-[#1a1a1a] opacity-90"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, #5c4033 0px, #5c4033 10px, transparent 10px, transparent 24px)"
              }}
            />
            {/* Lower Rail */}
            <div className="w-full h-1.5 bg-[#404040] border-y border-[#1a1a1a]" />
          </div>
        </div>

        {/* =====================================================================
            4. NUMBERED PROJECT TIMELINE (Matching Reference Image 3)
            Cream container, connecting rail, active yellow marker, stop labels
            ===================================================================== */}
        <div className="mt-4 bg-[#fdfbf7] border-[2.5px] border-[#1a1a1a] rounded-2xl p-4 sm:p-5 shadow-[6px_6px_0px_#f472b6] overflow-x-auto">
          <div className="min-w-[620px] relative px-6 py-2">
            {/* Connecting Horizontal Rail Line */}
            <div className="absolute top-[22px] left-10 right-10 h-1 bg-[#1a1a1a]" />

            {/* Stops Grid */}
            <div className="relative flex justify-between items-center z-10">
              {projectStations.map((station, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={station.id}
                    type="button"
                    onClick={() => navigateToStation(idx)}
                    className="flex flex-col items-center focus:outline-none cursor-pointer group"
                    aria-label={`Jump to Station ${station.stationNum}: ${station.name}`}
                  >
                    {/* Stop Circle Marker */}
                    <div
                      className={`w-7 h-7 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#ffd93d] shadow-[2px_2px_0px_#1a1a1a] scale-125"
                          : "bg-white group-hover:bg-[#fef08a]"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          isActive ? "bg-[#1a1a1a]" : "bg-[#1a1a1a]/60"
                        }`}
                      />
                    </div>

                    {/* Station Number & Name Badge */}
                    <div className="mt-2 text-center">
                      {isActive ? (
                        <div className="bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-md px-2 py-0.5 shadow-[2px_2px_0px_#1a1a1a] font-display font-extrabold text-xs text-[#1a1a1a]">
                          {station.stationNum} {station.name}
                        </div>
                      ) : (
                        <div className="font-mono text-xs font-bold text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">
                          <div className="text-[11px] text-[#6b635b]">{station.stationNum}</div>
                          <div>{station.name}</div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* View All Projects Deep-Dive Link */}
        <div className="mt-10 text-center">
          <a
            href="/projects/"
            onClick={(e) => {
              if (onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                e.preventDefault();
                onNavigate("/projects/");
              }
            }}
            className="btn-retro-primary !text-sm !py-3 !px-4 sm:!px-8 inline-flex items-center justify-center text-center max-w-full whitespace-normal sm:whitespace-nowrap gap-2"
          >
            <span>Explore All 14 Projects &amp; Extended Case Studies</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Station Technical Specification Modal (Accessible if required) */}
      {selectedStation && (
        <StationModal
          station={selectedStation}
          onClose={() => setSelectedStation(null)}
        />
      )}
    </section>
  );
}

function StationModal({ station, onClose }: { station: ProjectStation; onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-[#1a1a1a]/70 backdrop-blur-xs animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl retro-window retro-window-yellow shadow-[10px_10px_0px_#1a1a1a] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="retro-window-header header-yellow">
          <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a]">
            <span>station_spec.exe — STN {station.stationNum}: {station.name.toUpperCase()}</span>
          </div>
          <div className="retro-window-controls">
            <button
              type="button"
              onClick={onClose}
              className="win-btn win-btn-close cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white overflow-y-auto space-y-5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#ffd93d] text-[#1a1a1a] font-bold border border-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]">
              STATION {station.stationNum}
            </span>
            <span className="font-mono text-xs text-[#6b635b] font-bold">
              {station.category}
            </span>
            <span className="badge-retro-live">
              {station.status}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1a1a]">
            {station.fullName}
          </h3>
          <p className="font-body text-base text-[#3e3832] font-bold border-l-4 border-[#ffd93d] pl-3 py-1">
            {station.tagline}
          </p>

          <div className="my-3 border-t-2 border-[#1a1a1a]" />

          <div className="space-y-4 font-body text-sm text-[#3e3832]">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#e63946] font-bold mb-1">
                // Problem &amp; Context
              </h4>
              <p className="leading-relaxed">{station.problem}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#059669] font-bold mb-1">
                // Architecture &amp; Implementation
              </h4>
              <p className="leading-relaxed">{station.architecture}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#7c3aed] font-bold mb-1">
                // My Engineering Role
              </h4>
              <p className="leading-relaxed">{station.myContribution}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#1a1a1a] font-bold mb-2">
                // Verified Technical Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {station.fullStack.map((t) => (
                  <span key={t} className="badge-retro-tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#1a1a1a] font-bold mb-2">
                // Outcomes &amp; Performance Benchmarks
              </h4>
              <ul className="space-y-1.5 text-xs text-[#3e3832]">
                {station.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a] flex flex-wrap items-center justify-between gap-3">
            <a
              href={station.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro-primary !text-xs !py-2 !px-4 inline-flex items-center gap-2"
            >
              <span>View Source Code (GitHub) ↗</span>
            </a>

            <p className="font-mono text-xs text-[#6b635b] font-bold">
              press <kbd className="px-1 py-0.5 rounded bg-white border border-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]">esc</kbd> to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
