/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * This codebase is protected under intellectual property laws.
 * Author: Mohammad Fazil Firojkhan Malek
 */

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Project = {
  icon: string;
  name: string;
  type: string;
  tech: string;
  note: string;
  status: string;
  station: string;
  problem: string;
  build: string;
  impact: string[];
  stack: string[];
  repo: string;
};

const projects: Project[] = [
  {
    icon: "✋", name: "Air Drawing & 3D Canvas", type: "Computer Vision", tech: "MediaPipe · OpenCV · Depth Estimation",
    note: "Gesture-to-drawing without hardware. Extended a 2D canvas into full 3D interactive space.", status: "Production", station: "Vision Junction",
    problem: "Digital drawing tools all need a stylus, tablet, or touchscreen. I wanted people to draw in the air using just a webcam — no hardware at all.",
    build: "Used MediaPipe hand-tracking + OpenCV to detect finger positions in real time, then mapped gestures to brush strokes. Added depth estimation to lift the 2D canvas into a rotatable 3D object you can manipulate with your hands.",
    impact: ["Zero extra hardware — just a webcam", "Real-time gesture-to-drawing pipeline", "2D sketches become interactive 3D objects"],
    stack: ["Python", "MediaPipe", "OpenCV", "NumPy"],
    repo: "https://github.com/fazilkhan0786/3D_Interractive_Air_Drawing.git",
  },
  {
    icon: "🩺", name: "Health Record Analyser", type: "NLP Clinical Engine", tech: "PyTorch · PDF Parsing",
    note: "Multi-visit clinical pattern detection with anomaly flagging across visits.", status: "Deployed", station: "Clinic Halt",
    problem: "Patients accumulate dozens of reports across visits, but no one connects the dots between them. Important trends get missed.",
    build: "Built an NLP pipeline that parses PDF health records, extracts clinical entities, and tracks them across multiple visits. It flags anomalies and surfaces multi-visit patterns doctors would otherwise miss.",
    impact: ["Cross-visit pattern detection", "Automatic anomaly flagging", "Turns scattered PDFs into a timeline"],
    stack: ["Python", "PyTorch", "NLP", "PDF Parsing"],
    repo: "https://github.com/fazilkhan0786/Nurocare_patient_FE.git",
  },
  {
    icon: "🔬", name: "AI Symptom Analyser", type: "Diagnostic AI", tech: "Medical Ontologies · Inference",
    note: "10,000+ disease patterns validated. Symptom co-occurrence modeling beyond keywords.", status: "Active", station: "Diagnose Central",
    problem: "Most symptom checkers just keyword-match, so they're noisy and unreliable. I wanted something that actually reasons about how symptoms co-occur.",
    build: "Modeled symptom co-occurrence using medical ontologies and contextual data, then validated against 10,000+ disease patterns. It weighs combinations of symptoms rather than matching single keywords.",
    impact: ["10,000+ disease patterns validated", "Co-occurrence modeling, not keyword matching", "Context-aware, personalized insights"],
    stack: ["Python", "PyTorch", "Medical Ontologies", "TypeScript"],
    repo: "https://github.com/fazilkhan0786/Context_Aware_Ai_Symptom_Analyser.git",
  },
  {
    icon: "🥗", name: "AI Diet Planner", type: "Nutrition AI", tech: "PyTorch · Personalization",
    note: "500+ dietary scenarios handled with context-aware, personalized recommendations.", status: "Shipped", station: "Nutri Stop",
    problem: "Generic diet plans ignore health conditions, lifestyle, and preferences — so people abandon them fast.",
    build: "Created a personalization engine that generates diet plans from a user's context: conditions, goals, lifestyle & preferences. Handles 500+ dietary scenarios with adaptive recommendations.",
    impact: ["500+ dietary scenarios handled", "Context-aware personalization", "Adapts to conditions & goals"],
    stack: ["Python", "PyTorch", "TypeScript", "React"],
    repo: "https://github.com/fazilkhan0786/Context_Aware_Ai_Diet_Planner.git",
  },
  {
    icon: "🧪", name: "Food Product Scanner", type: "NLP + OCR", tech: "NLP · OCR · Ingredient Graph",
    note: "Real-time, offline food label analysis right from your camera.", status: "Shipped", station: "Scanner Point",
    problem: "Reading and understanding food labels in the store is slow, and most apps need internet to do it.",
    build: "Combined OCR + NLP to read ingredient labels directly from the camera, then mapped them onto an ingredient graph for instant analysis — all working offline.",
    impact: ["Real-time label scanning", "Works fully offline", "Ingredient-graph powered analysis"],
    stack: ["Python", "OCR", "NLP", "Flutter"],
    repo: "https://github.com/fazilkhan0786",
  },
  {
    icon: "🤖", name: "MAVIS AI Assistant", type: "LLM Automation", tech: "LLM · Context Management",
    note: "A multi-intent automation engine with context-aware task handling.", status: "Active", station: "Assist Yard",
    problem: "Assistants break the moment you ask for more than one thing at once, or reference something you said earlier.",
    build: "Built a multi-intent automation engine on top of an LLM with a context-management layer, so MAVIS can chain tasks, remember context, and route intents intelligently.",
    impact: ["Handles multiple intents per request", "Context memory across the conversation", "Smart intent routing & automation"],
    stack: ["Python", "LLM", "TypeScript", "Node.js"],
    repo: "https://github.com/fazilkhan0786",
  },
  {
    icon: "📊", name: "Pharmacy Dashboard", type: "Operations", tech: "React · FastAPI · Supabase",
    note: "78% operational uplift for pharmacies that use it every single day.", status: "In Prod", station: "Terminus",
    problem: "Pharmacies were running operations on paper and spreadsheets — slow, error-prone, and impossible to scale.",
    build: "Shipped an end-to-end operations dashboard: inventory, billing, and analytics in one place. Built on React + FastAPI + Supabase and hardened through real daily use.",
    impact: ["78% operational uplift", "Used daily in production", "Inventory + billing + analytics unified"],
    stack: ["React", "FastAPI", "Supabase", "PostgreSQL"],
    repo: "https://github.com/fazilkhan0786",
  },
];

export default function TrainWork() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  // lock body scroll while modal is open + close on Escape
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const root = rootRef.current;

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        runCinematic: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const conditions = context.conditions || {};
        const reduceMotion = !!conditions.reduceMotion;

        if (reduceMotion) {
          root?.classList.add("tr-fallback");
        } else {
          root?.classList.remove("tr-fallback");

          const track = trackRef.current!;
          const train = trainRef.current!;
          const wheels = gsap.utils.toArray<HTMLElement>(".tr-wheel");
          const cards = gsap.utils.toArray<HTMLElement>(".tr-card");
          const signs = gsap.utils.toArray<HTMLElement>(".tr-sign");
          const smoke = smokeRef.current!;

          const totalShift = () => track.scrollWidth - window.innerWidth;

          // spin the wheels forever; speed follows scroll velocity
          const wheelSpin = gsap.to(wheels, { rotation: 360, repeat: -1, ease: "none", duration: 1.2, transformOrigin: "50% 50%" });

          gsap.set(cards, { autoAlpha: 0, y: 46, scale: 0.9 });
          gsap.set(signs, { autoAlpha: 0, y: -18 });
          gsap.set(smoke, { autoAlpha: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: () => "+=" + (totalShift() * 1.15 + window.innerHeight),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // move the whole world left
          tl.to(track, { x: () => -totalShift(), ease: "none", duration: projects.length }, 0);

          const segment = projects.length;
          projects.forEach((_, i) => {
            const arrive = (i / (projects.length - 1)) * (segment - 0.001);
            tl.to(signs[i], { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }, Math.max(0, arrive - 0.28));
            tl.to(cards[i], { autoAlpha: 1, y: 0, scale: 1, duration: 0.42, ease: "back.out(1.6)" }, arrive);
            tl.to(train, { y: -6, duration: 0.12, ease: "power1.out" }, arrive)
              .to(train, { y: 0, duration: 0.18, ease: "power1.in" }, arrive + 0.12);
            tl.fromTo(smoke, { autoAlpha: 0.75, y: 0, scale: 0.6 }, { autoAlpha: 0, y: -70, scale: 1.5, duration: 0.7, ease: "power1.out" }, arrive);
          });

          const velTrigger = ScrollTrigger.create({
            trigger: root,
            start: "top top",
            end: () => "+=" + (totalShift() * 1.15 + window.innerHeight),
            onUpdate: (self) => {
              const v = Math.min(Math.abs(self.getVelocity()) / 800, 4) + 0.35;
              gsap.to(wheelSpin, { timeScale: v, duration: 0.3, overwrite: true });
            },
          });

          ScrollTrigger.refresh();

          return () => {
            wheelSpin.kill();
            velTrigger.kill();
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      }
    );

    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => {
      clearTimeout(t);
      mm.revert();
    };
  }, []);

  return (
    <section id="work" ref={rootRef} className="dark-section relative overflow-hidden">
      {/* pinned viewport */}
      <div className="tr-viewport relative h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Section title */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 text-center px-4">
          <p className="font-[Gochi_Hand] text-[#e63946] text-lg">// all aboard</p>
          <h2 className="font-[Caveat] font-bold text-5xl md:text-6xl leading-none">shipped work</h2>
          <p className="font-[Architects_Daughter] text-neutral-400 text-sm mt-1">scroll to ride through every station →</p>
        </div>

        {/* backdrop */}
        <div className="tr-sky" />
        <div className="tr-hills" />

        {/* MOVING WORLD */}
        <div ref={trackRef} className="tr-track">
          {projects.map((p, i) => (
            <div key={p.name} className="tr-station" style={{ ["--i" as string]: i }}>
              {/* station sign */}
              <div className="tr-sign">
                <div className="tr-sign-board"><span className="font-[Permanent_Marker] text-sm">{p.station}</span></div>
                <div className="tr-sign-pole" />
              </div>

              {/* project card */}
              <div className="tr-card">
                <button type="button" className="tr-ticket tr-ticket-btn" onClick={() => setActive(p)} aria-label={`Read more about ${p.name}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl">{p.icon}</div>
                    <span className="font-[Patrick_Hand] text-[10px] px-2 py-0.5 border border-black/40 rounded-full bg-[#ffd93d] text-[#1a1a1a]">{p.status}</span>
                  </div>
                  <h3 className="font-[Permanent_Marker] text-xl leading-tight text-[#1a1a1a] text-left">{p.name}</h3>
                  <p className="font-[Architects_Daughter] text-sm text-neutral-600 italic text-left">{p.type}</p>
                  <p className="font-[Kalam] text-sm mt-3 leading-snug text-[#2a2118] text-left">{p.note}</p>
                  <div className="mt-3 pt-2 border-t-2 border-dashed border-neutral-400 flex items-center justify-between">
                    <p className="font-[Patrick_Hand] text-xs text-neutral-600 text-left">{p.tech}</p>
                  </div>
                  <span className="tr-tap font-[Patrick_Hand]">tap to read →</span>
                  <span className="tr-punch tr-punch-l" />
                  <span className="tr-punch tr-punch-r" />
                </button>
                <div className="tr-card-stem" />
              </div>

              {/* platform */}
              <div className="tr-platform"><div className="tr-station-num font-[Gochi_Hand]">{i + 1}</div></div>
            </div>
          ))}

          {/* RAILS */}
          <div className="tr-rails">
            <div className="tr-rail-line" />
            <div className="tr-rail-line tr-rail-line-2" />
            <div className="tr-sleepers" />
          </div>
        </div>

        {/* ===== THE MODERN TRAIN (fixed, world moves under it) ===== */}
        <div ref={trainRef} className="tr-train">
          <div ref={smokeRef} className="tr-smoke" />

          {/* consist: engine + 2 carriages, coupled */}
          <div className="tr-consist">
            {/* sleek locomotive */}
            <div className="tr-car tr-loco">
              <div className="tr-loco-nose" />
              <div className="tr-loco-body">
                <div className="tr-stripe" />
                <div className="tr-loco-window" />
                <div className="tr-headlight" />
                <span className="tr-loco-badge font-[Permanent_Marker]">F</span>
              </div>
              <div className="tr-bogie">
                <div className="tr-wheel" /><div className="tr-wheel" />
              </div>
            </div>

            <div className="tr-coupler" />

            {/* carriage 1 */}
            <div className="tr-car tr-coach">
              <div className="tr-coach-body">
                <div className="tr-stripe" />
                <div className="tr-win-row">
                  <span /><span /><span /><span />
                </div>
              </div>
              <div className="tr-bogie">
                <div className="tr-wheel" /><div className="tr-wheel" />
              </div>
            </div>

            <div className="tr-coupler" />

            {/* carriage 2 */}
            <div className="tr-car tr-coach">
              <div className="tr-coach-body">
                <div className="tr-stripe" />
                <div className="tr-win-row">
                  <span /><span /><span /><span />
                </div>
              </div>
              <div className="tr-bogie">
                <div className="tr-wheel" /><div className="tr-wheel" />
              </div>
            </div>
          </div>

          <p className="tr-train-label font-[Permanent_Marker]">F-Express · shipping since 2021</p>
        </div>
      </div>

      {/* FALLBACK grid (mobile / reduced motion) */}
      <div className="tr-fallback-grid mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-10">
          <p className="font-[Gochi_Hand] text-[#e63946] text-base">// shipped work 🚄</p>
          <h2 className="font-[Caveat] font-bold text-5xl">every station, a project</h2>
          <p className="font-[Architects_Daughter] text-neutral-400 mt-1">the stuff that actually left my laptop.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <button type="button" key={p.name} className="tr-ticket tr-ticket-btn !static text-left" onClick={() => setActive(p)}>
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl">{p.icon}</div>
                <span className="font-[Patrick_Hand] text-[10px] px-2 py-0.5 border border-black/40 rounded-full bg-[#ffd93d] text-[#1a1a1a]">{p.status}</span>
              </div>
              <h3 className="font-[Permanent_Marker] text-lg text-[#1a1a1a]">{p.name}</h3>
              <p className="font-[Architects_Daughter] text-sm text-neutral-600 italic">{p.type}</p>
              <p className="font-[Kalam] text-sm mt-2 text-[#2a2118]">{p.note}</p>
              <div className="mt-2 pt-2 border-t-2 border-dashed border-neutral-400 flex items-center justify-between">
                <p className="font-[Patrick_Hand] text-xs text-neutral-600">{p.tech}</p>
                <span className="tr-tap-static font-[Patrick_Hand] text-xs text-[#e63946]">tap →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ===== PROJECT MODAL ===== */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

/* =============== PROJECT MODAL =============== */
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  const p = project;
  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* tape + close */}
        <span className="pm-tape" />
        <button className="pm-close" onClick={onClose} aria-label="close">✕</button>

        {/* header */}
        <div className="flex items-start gap-4 pr-8">
          <div className="pm-icon">{p.icon}</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-[Patrick_Hand] text-[11px] px-2 py-0.5 border border-black/40 rounded-full bg-[#ffd93d] text-[#1a1a1a]">{p.status}</span>
              <span className="font-[Architects_Daughter] text-sm text-neutral-500 italic">{p.type}</span>
            </div>
            <h3 className="font-[Permanent_Marker] text-2xl md:text-3xl text-[#1a1a1a] leading-tight mt-1">{p.name}</h3>
          </div>
        </div>

        <div className="pm-divider" />

        {/* body */}
        <div className="pm-body">
          <div className="pm-block">
            <h4 className="pm-h">🎯 the problem</h4>
            <p className="pm-text">{p.problem}</p>
          </div>
          <div className="pm-block">
            <h4 className="pm-h">🔧 what i built</h4>
            <p className="pm-text">{p.build}</p>
          </div>
          <div className="pm-block">
            <h4 className="pm-h">🚀 impact</h4>
            <ul className="pm-list">
              {p.impact.map((it) => (
                <li key={it}><span className="pm-check">✓</span>{it}</li>
              ))}
            </ul>
          </div>
          <div className="pm-block">
            <h4 className="pm-h">🧰 built with</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {p.stack.map((s) => (<span key={s} className="pm-chip">{s}</span>))}
            </div>
          </div>
        </div>

        {/* footer */}
        <a href={p.repo} target="_blank" rel="me noopener noreferrer" className="pm-repo-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
          </svg>
          view on github
          <span className="pm-arrow">↗</span>
        </a>
        <p className="pm-hint font-[Architects_Daughter]">press <kbd>esc</kbd> or click outside to close</p>
      </div>
    </div>
  );
}
