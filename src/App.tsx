/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * This codebase is protected under intellectual property laws.
 * Author: Mohammad Fazil Firojkhan Malek
 */

import { useEffect, useState, useCallback } from "react";
import {
  useReveal,
  useScrollProgress,
  useMouse,
  useMagnetic,
} from "./hooks";
import portrait from "./assets/portrait.png";
import Notebook from "./Notebook";
import TrainWork from "./TrainWork";
import { techLogos } from "./TechLogos";
import FAQ from "./FAQ";
import Articles from "./Articles";
import { analyticsActions } from "./utils/analytics";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import StoriesPage from "./pages/StoriesPage";
import StoryDetailPage from "./pages/StoryDetailPage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { normalizeRoutePath } from "./routes";
import { updatePageSEO } from "./utils/seo";


const Wavy = ({ color = "#e63946", w = "100%", h = "8px", className = "" }: { color?: string; w?: string; h?: string; className?: string }) => (
  <svg viewBox="0 0 300 12" style={{ width: w, height: h }} className={className} fill="none" preserveAspectRatio="none">
    <path d="M2 7 Q 40 2, 80 7 T 160 6 T 240 8 T 298 5" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </svg>
);

const Star = ({ className = "", color = "#f4a261" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 50 50" className={className} fill={color} stroke="#1a1a1a" strokeWidth={1.5}>
    <path d="M25 2 L 31 18 L 48 19 L 35 30 L 39 47 L 25 38 L 11 47 L 15 30 L 2 19 L 19 18 Z" />
  </svg>
);

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 30" className={className} fill="currentColor">
    <path d="M15 2 L 17 13 L 28 15 L 17 17 L 15 28 L 13 17 L 2 15 L 13 13 Z" />
  </svg>
);

const Scribble = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={className} fill="none" stroke="#1a1a1a" strokeWidth={2} strokeLinecap="round">
    <path d="M2 10 Q 15 2, 25 10 T 50 10 T 75 10 T 98 10" />
  </svg>
);

const DoodleArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 10 C 15 35, 25 50, 50 50" />
    <path d="M40 44 L 50 50 L 42 55" />
  </svg>
);

const CheckMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12 L 10 18 L 20 6" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.41C16.32 14.28 15.1 13.68 14.88 13.6C14.65 13.52 14.49 13.48 14.32 13.73C14.15 13.98 13.68 14.54 13.54 14.7C13.4 14.87 13.26 14.89 13.01 14.76C12.76 14.63 11.97 14.37 11.03 13.54C10.3 12.89 9.8 12.08 9.66 11.83C9.52 11.58 9.64 11.45 9.77 11.32C9.88 11.21 10.02 11.03 10.16 10.87C10.3 10.71 10.35 10.58 10.44 10.42C10.53 10.25 10.49 10.11 10.42 9.98C10.35 9.86 9.77 8.44 9.53 7.86C9.3 7.3 9.06 7.37 8.89 7.37C8.73 7.36 8.54 7.36 8.35 7.36C8.16 7.36 7.85 7.43 7.6 7.71C7.35 7.98 6.64 8.65 6.64 10.02C6.64 11.39 7.64 12.71 7.78 12.89C7.92 13.08 9.75 15.89 12.54 17.1C13.2 17.39 13.72 17.56 14.12 17.69C14.79 17.9 15.4 17.87 15.88 17.8C16.42 17.72 17.54 17.12 17.77 16.47C18.01 15.83 18.01 15.28 17.94 15.16C17.87 15.04 17.71 14.97 17.46 14.84L16.57 14.41Z" />
  </svg>
);


function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const end = 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          setTimeout(() => setExit(true), 60);
          setTimeout(onDone, 320);
          return end;
        }
        const increment = Math.floor(Math.random() * 3) + 4;
        const next = prev + increment;
        if (next >= end) {
          clearInterval(timer);
          setTimeout(() => setExit(true), 60);
          setTimeout(onDone, 320);
          return end;
        }
        return next;
      });
    }, 12);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div className={`loader-screen ${exit ? "loader-exit" : ""}`}>
      <div className="loader-card">
        <div className="loader-progress-num">{progress}%</div>
        <p className="loader-name">
          Fazil Malek<span className="text-[#e63946]">.</span>
        </p>
        <div className="loader-bar-bg">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-subtitle">
          unfolding the story...
        </p>
        <div className="loader-tags">
          <span>systems</span>
          <span>products</span>
          <span>AI</span>
        </div>
      </div>
    </div>
  );
}


function CustomCursor() {
  const mouse = useMouse();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, .btn-hand, .sketch-card, .tag-pill, .nav-link, .photo-frame"));
    };
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => window.removeEventListener("mouseover", onOver);
  }, []);
  return (
    <>
      <div className="cursor-dot" style={{ left: mouse.x - 4, top: mouse.y - 4, transform: hover ? "scale(2.4)" : "scale(1)", background: hover ? "#e63946" : "#1a1a1a" }} />
      <div className="cursor-ring" style={{ left: mouse.x - 17, top: mouse.y - 17, transform: hover ? "scale(1.5)" : "scale(1)", borderColor: hover ? "#e63946" : "rgba(26,26,26,0.35)" }} />
    </>
  );
}


function Nav({ currentRoute, onNavigate }: { currentRoute: string; onNavigate?: (path: string) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navPages = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects/" },
    { label: "services", href: "/services/" },
    { label: "stories & blog", href: "/stories/" },
    { label: "certificates", href: "/certificates/" },
    { label: "contact me", href: "/contact/" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      onNavigate(href);
      setOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 px-4 py-3 md:px-8 transition-all duration-300 ${scrolled ? "bg-[#faf6ee] shadow-[0_2px_10px_rgba(26,26,26,0.06)] border-b-2 border-dashed border-black/15" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-[2.5px] border-black bg-[#fffef7] font-[Permanent_Marker] text-lg group-hover:bg-[#e63946] group-hover:text-white group-hover:border-[#e63946] transition-all duration-300" style={{ transform: "rotate(-4deg)" }}>F</span>
          <span className="hidden md:block font-[Caveat] font-bold text-2xl group-hover:text-[#e63946] transition-colors">fazil.</span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {navPages.map((p) => {
            const isActive = (currentRoute === "/" && p.href === "/") || (p.href !== "/" && currentRoute.startsWith(p.href));
            return (
              <a
                key={p.href}
                href={p.href}
                onClick={(e) => handleNavClick(e, p.href)}
                className={`nav-link ${isActive ? "!text-[#e63946] font-bold underline decoration-[#e63946]" : ""}`}
              >
                {p.label}
              </a>
            );
          })}
          <a
            href="https://github.com/fazilkhan0786"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-hand btn-filled !py-1.5 !px-5 !text-sm"
          >
            github
          </a>
        </div>
        <button className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] border-2 border-black rounded-lg bg-[#fffef7] flex flex-col items-center justify-center gap-1.5" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
          <span className={`w-5 h-[2.5px] bg-black rounded transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-5 h-[2.5px] bg-black rounded transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-[2.5px] bg-black rounded transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden mt-3 mx-auto max-w-7xl wiggle-box bg-[#fffef7] p-5 space-y-1">
          {navPages.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="block font-[Patrick_Hand] text-xl px-3 py-2 hover:text-[#e63946] transition-colors min-h-[44px] flex items-center"
              onClick={(e) => handleNavClick(e, p.href)}
            >
              {p.label}
            </a>
          ))}
          <a href="https://github.com/fazilkhan0786" target="_blank" rel="me noopener noreferrer" className="block font-[Patrick_Hand] text-xl px-3 py-2 text-[#e63946] font-bold min-h-[44px] flex items-center">github</a>
        </div>
      )}
    </nav>
  );
}



function Hero({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const mag = useMagnetic(0.22);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workEl = document.getElementById("work") || document.getElementById("projects") || document.getElementById("ventures");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (onNavigate) {
      onNavigate("/projects/");
    } else {
      window.location.assign("/projects/");
    }
  };

  return (
    <section id="top" className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 md:px-10 flex items-center overflow-hidden">
      <Star className="absolute top-24 right-[12%] w-8 h-8 float-slow opacity-35 hidden md:block" color="#ffd93d" />
      <Sparkle className="absolute top-36 left-[8%] w-6 h-6 text-[#f4a261] float-fast opacity-35 hidden md:block" />
      <Sparkle className="absolute bottom-28 right-[20%] w-5 h-5 text-[#2a9d8f] float-slow opacity-30 hidden md:block" />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content: order-2 on mobile (under image), order-1 on desktop (left side) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            <div className="hero-enter inline-flex items-center gap-2 mb-4 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full border border-emerald-300 font-[Patrick_Hand] text-sm sm:text-base">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" aria-hidden="true" />
              <span>Available for websites in Gujarat &amp; Remote</span>
            </div>

            <h1 className="hero-enter font-[Caveat] font-bold leading-[1.08] tracking-tight text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="relative inline-block text-[#e63946]">
                <span className="relative z-10">Fazil</span>
                <Wavy className="absolute left-0 right-0 -bottom-1 z-0" h="8px" />
              </span>
              . I build fast, modern websites for local businesses.
            </h1>

            <p className="hero-enter hero-enter-delay-1 mt-5 font-[Kalam] text-lg sm:text-xl text-neutral-800 max-w-2xl leading-relaxed">
              Computer Engineering student at <span className="font-semibold text-neutral-900">GTU</span>. I help{" "}
              <span className="hl-yellow font-medium">clinics, cafes, gyms and shops</span> get more customers with clean, mobile-friendly websites, plus full-stack apps with{" "}
              <span className="font-medium text-neutral-900">React, Next.js and AI</span>.
            </p>

            <div className="hero-enter hero-enter-delay-2 mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/917990632170?text=Hi%20Fazil%2C%20I%20saw%20your%20portfolio%20and%20want%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg font-[Patrick_Hand] text-lg sm:text-xl font-bold cursor-pointer"
                aria-label="Chat with Fazil on WhatsApp (opens in new tab)"
                ref={mag.ref as React.RefObject<HTMLAnchorElement>}
                onMouseMove={mag.onMove as React.MouseEventHandler<HTMLAnchorElement>}
                onMouseLeave={mag.onLeave}
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" fill="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="btn-hand inline-flex items-center justify-center gap-1.5 px-6 py-3 font-[Patrick_Hand] text-lg sm:text-xl font-bold"
              >
                <span>View my work</span>
              </a>
            </div>

            <div className="hero-enter hero-enter-delay-3 mt-7 pt-5 border-t-2 border-dashed border-neutral-300 w-full flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm sm:text-base font-[Patrick_Hand] text-neutral-700">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
                <span className="font-semibold text-neutral-900">5+ live projects</span>
              </div>
              <span className="hidden sm:inline text-neutral-300 font-sans" aria-hidden="true">|</span>
              <div className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
                <span>Reply within 24 hours</span>
              </div>
              <span className="hidden sm:inline text-neutral-300 font-sans" aria-hidden="true">|</span>
              <div className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" aria-hidden="true" />
                <span>Free sample design before you pay</span>
              </div>
            </div>

            <div className="hero-enter hero-enter-delay-4 mt-5 flex flex-wrap items-center gap-4 sm:gap-5 font-[Patrick_Hand] text-base text-neutral-600">
              <span className="text-neutral-500 font-medium">Direct links:</span>
              <a
                href="https://github.com/fazilkhan0786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#e63946] underline decoration-neutral-400 hover:decoration-[#e63946] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
                aria-label="GitHub profile (opens in new tab)"
              >
                <span>GitHub</span>
              </a>
              <span className="text-neutral-300 font-sans" aria-hidden="true">•</span>
              <a
                href="https://www.linkedin.com/in/fazilkhan-malek-392082377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#e63946] underline decoration-neutral-400 hover:decoration-[#e63946] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <span>LinkedIn</span>
              </a>
              <span className="text-neutral-300 font-sans" aria-hidden="true">•</span>
              <a
                href="mailto:malekfazilkhan07@gmail.com"
                className="inline-flex items-center gap-1 hover:text-[#e63946] underline decoration-neutral-400 hover:decoration-[#e63946] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a1a]"
                aria-label="Email Fazil Malek"
              >
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="hero-enter relative">
              <div className="hero-portrait-frame w-[220px] sm:w-[260px] md:w-[290px] lg:w-[330px] xl:w-[360px]">
                <img
                  src={portrait}
                  alt="Fazil Malek — Web Developer for local businesses"
                  className="w-full aspect-[4/5] object-cover block"
                  loading="eager"
                  // @ts-ignore
                  fetchPriority="high"
                  width="360"
                  height="450"
                />
                <div className="py-2.5 px-4 bg-[#fffdf5] border-t-2 border-[#1a1a1a] flex items-center justify-between font-[Patrick_Hand] text-sm text-neutral-700">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    Fazil Malek
                  </span>
                  <span className="text-neutral-500">Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917990632170?text=Hi%20Fazil%2C%20I%20saw%20your%20portfolio%20and%20want%20a%20website"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fazil on WhatsApp"
      className="floating-wa-btn md:hidden"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" fill="#ffffff" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}


function Marquee() {
  const items = ["healthcare AI", "★", "system design", "★", "behavioral design", "★", "product architecture", "★", "FastAPI", "★", "Flutter", "★", "React", "★", "PyTorch", "★", "computer vision", "★", "NLP", "★"];
  return (
    <div className="overflow-hidden border-y-[2.5px] border-black py-3 bg-[#fffdf5]">
      <div className="flex marquee-track whitespace-nowrap gap-6 font-[Permanent_Marker] text-xl md:text-2xl uppercase">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-6 items-center shrink-0">
            {items.map((item, j) => (<span key={j} className={item === "★" ? "text-[#e63946]" : ""}>{item}</span>))}
          </div>
        ))}
      </div>
    </div>
  );
}


function SectionHeader({ num, label, note, dark = false }: { num: string; label: string; note?: string; dark?: boolean }) {
  return (
    <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
      <div className="flex items-end gap-4">
        <span className="section-num">{num}</span>
        <h2 className="font-[Caveat] font-bold text-5xl md:text-7xl leading-none relative inline-block">
          {label}
          <Wavy className="absolute left-0 right-0 -bottom-2" color={dark ? "#e63946" : "#1a1a1a"} h="8px" />
        </h2>
      </div>
      {note && (<p className={`font-[Architects_Daughter] md:text-right max-w-sm ${dark ? "text-neutral-400" : "text-neutral-500"}`}><span className="text-[#e63946]">//</span> {note}</p>)}
    </div>
  );
}


function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-10">
      <div className="absolute top-6 left-6 ghost-num text-[16rem] hidden lg:block">01</div>
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="01" label="about me" note="the unfiltered version." />

        <div className="grid md:grid-cols-12 gap-12 mt-10 items-start">
          <div className="md:col-span-5 space-y-8">
            <div className="reveal-left photo-wrap mx-auto md:mx-0 block w-fit">
              <div className="photo-frame w-[260px] sm:w-[300px]" style={{ transform: "rotate(2deg)" }}>
                <div className="tape absolute -top-4 right-6 w-20 h-6 rotate-[4deg]" />
                <img src={portrait} alt="Fazilkhan Malek" className="w-full aspect-square object-cover object-top" />
                <div className="photo-inner-border" />
                <p className="photo-caption">the builder behind the commits</p>
              </div>
              <DoodleArrow className="absolute -bottom-8 -right-10 w-16 h-16 text-neutral-400 hidden md:block" />
            </div>

            <div className="reveal-left wiggle-box bg-[#fffef7] p-5 relative" style={{ transform: "rotate(-1deg)" }}>
              <div className="tape absolute -top-3 left-8 w-16 h-5 rotate-[-3deg]" />
              <p className="font-[Shadows_Into_Light] text-2xl md:text-3xl text-center leading-snug">
                "build systems that change<br /><span className="text-[#e63946]">behavior</span>, not just screens."
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5 font-[Kalam] text-lg md:text-xl leading-relaxed">
            <p className="reveal">
              i'm <span className="font-bold">Fazil Malek</span> — a Computer Engineering student at GTU, software developer, and founder based in <span className="hl-yellow font-bold">Ahmedabad, Gujarat</span>.
            </p>
            <p className="reveal">
              born to <b>Malek Firojkhan Anvarkhan</b> and <b>Malek Hasinabibi Firojkhan</b>, i'm pursuing my <b>B.E. in Computer Engineering</b> at <b>Gujarat Technological University (GTU)</b> while founding <span className="hl-pink font-bold">Promacle</span> and building <b>NuroVed</b> (patient-centric digital healthcare platform).
            </p>
            <p className="reveal">
              my technical craft spans <span className="hl-blue">Full-Stack Web</span>, <span className="hl-blue">Flutter Mobile</span>, <span className="hl-blue">UI/UX &amp; Graphic Design</span>, <span className="hl-blue">Website Building</span>, <span className="hl-blue">Video Editing</span>, and <span className="hl-blue">Startup Collaboration</span>. Sports taught me that discipline, teamwork, and resilience win championships — and the same applies to software.
            </p>

            <div className="reveal sketch-card !mt-8" style={{ transform: "rotate(-1deg)" }}>
              <h3 className="font-[Permanent_Marker] text-lg mb-3 flex items-center gap-2"><Sparkle className="w-5 h-5 text-[#f4a261]" /> core philosophy &amp; focus</h3>
              <ul className="grid sm:grid-cols-2 gap-2 stagger font-[Patrick_Hand] text-base">
                {[["real-world outcomes", "demo polish"], ["daily active usage", "vanity downloads"], ["resilient architecture", "over-engineering"], ["teamwork & leadership", "solo silos"]].map(([g, b]) => (
                  <li key={g} className="flex items-start gap-2"><CheckMark className="w-4 h-4 text-green-700 shrink-0 mt-1" /><span><b className="text-green-800">{g}</b> <span className="text-neutral-400 line-through">{b}</span></span></li>
                ))}
              </ul>
            </div>

            <div className="reveal sticky-note sticky-orange !p-4 !mt-4" style={{ transform: "rotate(1.5deg)" }}>
              <p className="font-[Gochi_Hand] text-lg">GTU Computer Engineering + Founder Mode:</p>
              <p className="font-[Kalam] text-sm mt-1">building NuroVed healthcare systems · hackathons &amp; innovation programs · football discipline</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function Ventures() {
  const ventures = [
    { name: "NuroVed", tagline: "Healthcare Infrastructure", status: "v1 Active", color: "sticky-pink", rot: -1.0, desc: "Eliminates fragmentation in patient experience, clinical workflows, and accessibility.", stack: ["FastAPI", "Flutter", "NLP", "AI/ML"] },
    { name: "Educle", tagline: "EdTech + AI Credibility", status: "Building", color: "sticky-blue", rot: 1.2, desc: "End-to-end operations management with AI-driven student credibility systems.", stack: ["React", "Supabase", "Analytics", "AI"] },
    { name: "Trashee", tagline: "CleanTech Community", status: "Building", color: "sticky-green", rot: -0.8, desc: "Community-driven environmental reporting at scale. Turns citizens into change-makers.", stack: ["IoT", "Geo-mapping", "Firebase", "Gamification"] },
    { name: "Actora", tagline: "Behavioral Design AI", status: "Building", color: "sticky-purple", rot: 1.0, desc: "Attacks the dopamine loop directly. Rewires triggers that cause drift.", stack: ["Behavioral AI", "React Native", "Habit Loops"] },
  ];
  return (
    <section id="ventures" className="relative py-28 px-6 md:px-10 crosshatch-bg">
      <div className="absolute top-6 right-6 ghost-num text-[16rem] hidden lg:block">03</div>
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="03" label="active ventures" note="real products for real problems." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {ventures.map((v, i) => (
            <div
              key={v.name}
              className={`reveal ${i === 0 ? "md:col-span-3" : "md:col-span-1"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={`sticky-note ${v.color} !p-6 relative min-h-[260px] card-3d glow-hover`} style={{ transform: `rotate(${v.rot}deg)` }}>
                <div className="tape absolute -top-3 left-6 w-16 h-5" style={{ transform: `rotate(${-v.rot * 2}deg)` }} />
                
                <div className={i === 0 ? "md:grid md:grid-cols-12 md:gap-8 items-center" : ""}>
                  <div className={i === 0 ? "md:col-span-7" : ""}>
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-[Patrick_Hand] text-xs px-3 py-1 border-2 border-black rounded-full bg-black text-[#fff9b0]">{v.status}</span>
                    </div>
                    <h3 className="font-[Permanent_Marker] text-3xl leading-none">{v.name}</h3>
                    <p className="font-[Patrick_Hand] text-base text-neutral-600 mt-1">{v.tagline}</p>
                    <div className="mt-4 flex flex-wrap">{v.stack.map((t) => (<span key={t} className="tag-pill !text-xs !py-0.5 !px-2 !m-0.5 !bg-white/60">{t}</span>))}</div>
                  </div>
                  
                  <div className={i === 0 ? "md:col-span-5 mt-4 md:mt-0 flex flex-col justify-between h-full" : ""}>
                    <p className="font-[Kalam] text-base leading-snug">{v.desc}</p>
                  </div>
                </div>

                <div className="absolute bottom-3 right-4 font-[Caveat] text-3xl font-bold text-black/10">0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Skills() {
  const groups = [
    { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "Dart", "SQL"], color: "#e63946" },
    { title: "Frontend & Mobile", items: ["React", "React Native", "Flutter", "Tailwind"], color: "#2a9d8f" },
    { title: "Backend & Cloud", items: ["FastAPI", "Node.js", "Supabase", "Firebase", "PostgreSQL"], color: "#264653" },
    { title: "AI / ML / Data", items: ["PyTorch", "NLP", "Computer Vision", "MediaPipe", "OpenCV"], color: "#6a4c93" },
    { title: "DevOps & Tools", items: ["Git", "Docker", "AWS", "GCP", "Linux"], color: "#f4a261" },
  ];
  return (
    <section id="skills" className="relative py-28 px-6 md:px-10">
      <div className="absolute bottom-6 right-6 ghost-num text-[16rem] hidden lg:block">05</div>
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="05" label="tech i wield" note="tools and frameworks in active use." />

        <div className="reveal mt-10 relative overflow-hidden border-y-2 border-dashed border-black/25 py-5">
          <div className="flex logo-marquee whitespace-nowrap gap-10 items-center">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-10 items-center shrink-0">
                {techLogos.map(({ name, C }) => (
                  <div key={name + dup} className="flex flex-col items-center gap-1 group shrink-0">
                    <C className="w-11 h-11 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
                    <span className="font-[Patrick_Hand] text-xs text-neutral-500 group-hover:text-[#e63946] transition-colors">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {groups.map((g, i) => (
            <div key={g.title} className="reveal wiggle-box bg-[#fffef7] p-5 relative card-3d" style={{ transitionDelay: `${i * 70}ms`, transform: `rotate(${i % 2 ? -0.8 : 0.8}deg)` }}>
              <div className="flex items-center gap-2 mb-3"><span className="w-3 h-3 rounded-full" style={{ background: g.color }} /><h3 className="font-[Permanent_Marker] text-base leading-none">{g.title}</h3></div>
              <ul className="space-y-1.5 font-[Patrick_Hand] text-base">
                {g.items.map((it) => (<li key={it} className="flex items-center gap-2 group"><span className="text-[#e63946] text-xs group-hover:translate-x-1 transition-transform">▸</span><span className="group-hover:text-[#e63946] transition-colors">{it}</span></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal">
          <p className="font-[Gochi_Hand] text-2xl mb-3 flex items-center gap-2"><Sparkle className="w-5 h-5 text-[#f4a261]" /> also experienced with:</p>
          <div className="flex flex-wrap stagger">
            {["system design", "product strategy", "behavioral design", "rapid prototyping", "production shipping", "team leadership", "technical writing", "Figma", "user research", "debugging"].map((t) => (<span key={t} className="tag-pill">{t}</span>))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Journey() {
  const timeline = [
    { year: "Present", role: "Founder & Product Architect", company: "Promacle", desc: "Full lifecycle ownership — ideation, system design, AI integration to production. Building 4 ventures simultaneously.", tags: ["Leadership", "System Design", "AI/ML"], note: "founder mode: ON", highlight: true },
    { year: "2023", role: "Lead Developer", company: "Dprofiz Ltd", desc: "IoT waste management + community reward architecture. Scaled operations for real-world impact.", tags: ["IoT", "Firebase", "Gamification"] },
    { year: "2022", role: "AI/ML Engineer", company: "MiroFish AI", desc: "End-to-end AI pipelines. Context-aware automation systems. Learned to ship ML in production.", tags: ["Python", "ML Pipelines"] },
    { year: "2021", role: "Started Coding", company: "Self-taught", desc: "Began the journey. Python first, then everything else. Built things nobody asked for — and learned everything.", tags: ["Python", "Learning"], note: "where it all began" },
  ];
  return (
    <section id="journey" className="relative py-28 px-6 md:px-10 crosshatch-bg">
      <div className="absolute top-6 left-6 ghost-num text-[16rem] hidden lg:block">06</div>
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="06" label="the journey" note="career path and background." />
        <div className="mt-12 relative">
          <div className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-[3px] bg-black/20 rounded-full" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={t.company} className="reveal relative pl-14 md:pl-16" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="timeline-dot absolute left-[9px] md:left-[13px] top-3" />
                <div className={`sketch-card !p-6 ${t.highlight ? "!border-[#e63946] !border-[2.5px]" : ""}`} style={{ transform: `rotate(${i % 2 ? -1 : 0.5}deg)` }}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-[Gochi_Hand] text-2xl text-[#e63946]">{t.year}</span>
                    <h3 className="font-[Permanent_Marker] text-xl md:text-2xl">{t.role}</h3>
                    <span className="font-[Patrick_Hand] text-lg text-neutral-500">@ {t.company}</span>
                  </div>
                  <p className="font-[Kalam] text-base md:text-lg leading-snug">{t.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1">{t.tags.map((tag) => (<span key={tag} className="tag-pill !text-xs !py-0 !px-2">{tag}</span>))}</div>
                  {t.note && (<div className="mt-3 inline-block font-[Architects_Daughter] text-sm italic bg-[#fff9b0] px-2 py-0.5 rotate-[-1deg]">{t.note}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Currently() {
  const focuses = [
    { label: "NuroVed v1", desc: "real-world usability as the benchmark", progress: 82, tag: "shipping", color: "#e63946" },
    { label: "Educle", desc: "AI-driven student credibility layer", progress: 55, tag: "building", color: "#2a9d8f" },
    { label: "Actora", desc: "behavioral design that sticks", progress: 40, tag: "building", color: "#6a4c93" },
    { label: "AI behavior loops", desc: "how model outputs shape retention", progress: 65, tag: "researching", color: "#f4a261" },
    { label: "System design", desc: "distributed architecture & failure modes", progress: 70, tag: "learning", color: "#3178c6" },
  ];
  const ticker = [
    "3rd coffee of the day", "lo-fi on repeat", "debugging NuroVed sync", "reading retention curves",
    "sketching Actora's habit loop", "it's late, still building", "shipping > perfecting",
  ];
  return (
    <section className="relative py-28 px-6 md:px-10 dark-section overflow-hidden">
      <div className="absolute top-6 right-6 ghost-num text-[16rem] !text-white/[0.03] hidden lg:block">09</div>
      <Sparkle className="absolute top-24 right-[15%] w-6 h-6 text-[#f4a261]/50 float-slow hidden md:block" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="reveal text-center mb-4">
          <span className="inline-flex items-center gap-2 font-[Patrick_Hand] text-sm bg-white/10 border border-white/15 px-4 py-1.5 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            live · working right now
          </span>
        </div>
        <div className="reveal text-center mb-3">
          <h2 className="font-[Caveat] font-bold text-5xl md:text-7xl">right <span className="text-[#e63946]">now</span></h2>
          <p className="font-[Architects_Daughter] text-neutral-400 mt-1">the current build queue, live from my desk.</p>
        </div>

        <div className="reveal mt-6 overflow-hidden border-y border-white/10 py-2.5">
          <div className="flex marquee-track whitespace-nowrap gap-8 font-[Patrick_Hand] text-sm text-neutral-400">
            {[0, 1].map((d) => (
              <div key={d} className="flex gap-8 shrink-0">
                {ticker.map((t, j) => (<span key={j} className="flex items-center gap-8">{t}<span className="text-[#e63946]">•</span></span>))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {focuses.map((f, i) => (
            <div key={f.label} className="reveal now-card group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between">
                <h3 className="font-[Permanent_Marker] text-base">{f.label}</h3>
                <span className="now-tag" style={{ borderColor: f.color, color: f.color }}>{f.tag}</span>
              </div>
              <p className="font-[Patrick_Hand] text-sm text-neutral-400 mt-2 leading-snug">{f.desc}</p>
              <div className="mt-4">
                <div className="flex justify-between font-[Patrick_Hand] text-[11px] text-neutral-500 mb-1">
                  <span>progress</span><span style={{ color: f.color }}>{f.progress}%</span>
                </div>
                <div className="now-bar">
                  <div className="now-bar-fill" style={{ ["--w" as string]: `${f.progress}%`, background: f.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mt-12 items-stretch">
          <div className="reveal lg:col-span-3">
            <div className="bg-black/60 border border-white/10 rounded-lg p-6 font-mono text-sm h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#e63946]" /><span className="w-3 h-3 rounded-full bg-[#ffd93d]" /><span className="w-3 h-3 rounded-full bg-[#2a9d8f]" />
                <span className="ml-2 text-neutral-500 font-[Patrick_Hand] text-xs">fazil@promacle:~</span>
              </div>
              <div className="space-y-1 text-neutral-300">
                <p><span className="text-[#2a9d8f]">$</span> cat status.txt</p>
                <p><span className="text-[#ffd93d]">role</span>       = <span className="text-[#e63946]">"Founder @ Promacle"</span></p>
                <p><span className="text-[#ffd93d]">building</span>   = <span className="text-[#e63946]">["NuroVed", "Educle", "Actora"]</span></p>
                <p><span className="text-[#ffd93d]">philosophy</span> = <span className="text-[#e63946]">"outcome &gt; output"</span></p>
                <p><span className="text-[#ffd93d]">open_to</span>    = <span className="text-[#e63946]">"serious builders"</span></p>
                <p className="mt-2"><span className="text-[#2a9d8f]">$</span> <span className="tw-cursor !bg-white" /></p>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-2 space-y-6" style={{ transitionDelay: "120ms" }}>
            <div className="now-vibe">
              <div className="flex items-center gap-3">
                <div className="now-eq">
                  <span /><span /><span /><span />
                </div>
                <div>
                  <p className="font-[Patrick_Hand] text-xs text-neutral-400">now playing</p>
                  <p className="font-[Permanent_Marker] text-base">deep focus — lo-fi beats</p>
                </div>
              </div>
              <div className="mt-4 now-bar"><div className="now-bar-fill" style={{ ["--w" as string]: "45%", background: "#2a9d8f" }} /></div>
              <div className="flex justify-between font-[Patrick_Hand] text-[11px] text-neutral-500 mt-1"><span>2:14</span><span>4:52</span></div>
            </div>

            <div className="now-mood">
              <p className="font-[Gochi_Hand] text-lg text-[#ffd93d]">today's mood</p>
              <p className="font-[Shadows_Into_Light] text-xl mt-1 leading-snug">
                "locked in. shipping mode. don't disturb (unless it's a bug)."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FunFacts() {
  const facts = [
    { title: "fuel", desc: "coffee → code → ship → repeat. that's the loop." },
    { title: "schedule", desc: "most productive 10pm–3am. best ideas come in the dark." },
    { title: "learning", desc: "deep-diving distributed systems & behavioral psychology." },
    { title: "mission", desc: "build for the next billion. India-first, world-ready." },
    { title: "process", desc: "whiteboard → notebook → prototype → ship. no 50-page PRDs." },
    { title: "motto", desc: "\"if it doesn't change behavior, it's just another app.\"" },
  ];
  const colors = ["sticky-pink", "sticky-blue", "sticky-green", "sticky-orange", "sticky-purple", ""];
  const rots = [-2, 1.5, -1, 2, -1.5, 1];
  return (
    <section id="fun" className="relative py-28 px-6 md:px-10">
      <div className="absolute bottom-6 left-6 ghost-num text-[16rem] hidden lg:block">10</div>
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="10" label="beyond the code" note="the human behind the commits." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {facts.map((f, i) => (
            <div key={f.title} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className={`sticky-note ${colors[i]} !p-5 card-3d min-h-[160px]`} style={{ transform: `rotate(${rots[i]}deg)` }}>
                <div className="tape absolute -top-3 left-6 w-14 h-5" style={{ transform: `rotate(${-rots[i]}deg)` }} />
                <h3 className="font-[Permanent_Marker] text-xl">{f.title}</h3>
                <p className="font-[Kalam] text-base mt-2 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 max-w-xl mx-auto">
          <div className="wiggle-box bg-[#fffef7] p-8 relative" style={{ transform: "rotate(-1deg)" }}>
            <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5" />
            <p className="font-[Shadows_Into_Light] text-3xl text-center mb-4">to-do list (life edition)</p>
            <ul className="space-y-3 font-[Kalam] text-lg">
              {[{ t: "learn to code", d: true }, { t: "build something real", d: true }, { t: "start a company", d: true }, { t: "ship v1 of NuroVed", d: true }, { t: "impact 1M+ lives", d: false }, { t: "sleep properly", d: false }].map((item) => (
                <li key={item.t} className="flex items-center gap-3">
                  <span className={`w-5 h-5 border-2 border-black rounded flex items-center justify-center ${item.d ? "bg-green-200" : ""}`}>{item.d && <CheckMark className="w-4 h-4 text-green-800" />}</span>
                  <span className={item.d ? "line-through text-neutral-400" : ""}>{item.t}</span>
                </li>
              ))}
            </ul>
            <Star className="absolute -bottom-4 -right-4 w-8 h-8" color="#ffd93d" />
          </div>
        </div>
      </div>
    </section>
  );
}


function GitHubStats() {
  return (
    <section className="relative py-20 px-6 md:px-10 crosshatch-bg">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="reveal text-center mb-10">
          <h2 className="font-[Caveat] font-bold text-4xl md:text-6xl">github <span className="text-[#e63946]">analytics</span></h2>
          <p className="font-[Patrick_Hand] text-neutral-500 mt-1">contributions, streaks & late-night commits.</p>
        </div>
        <div className="reveal grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="sketch-card !p-4 text-center" style={{ transform: "rotate(-1deg)" }}>
            <img src="https://github-readme-stats.vercel.app/api?username=fazilkhan0786&show_icons=true&hide_border=true&bg_color=fffef7&title_color=e63946&icon_color=e63946&text_color=1a1a1a" alt="GitHub Stats" className="w-full" loading="lazy" width="495" height="195" />
          </div>
          <div className="sketch-card !p-4 text-center" style={{ transform: "rotate(1deg)" }}>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fazilkhan0786&layout=compact&hide_border=true&bg_color=fffef7&title_color=e63946&text_color=1a1a1a" alt="Top Languages" className="w-full" loading="lazy" width="495" height="195" />
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "malekfazilkhan07@gmail.com";
  const copy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        analyticsActions.trackCopyEmail();
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        setCopied(false);
      });
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10">
      <div className="absolute top-6 right-6 ghost-num text-[16rem] hidden lg:block">12</div>
      <div className="mx-auto max-w-5xl relative z-10 text-center">
        <SectionHeader num="12" label="let's build" note="direct from the desk." />
        <div className="reveal mt-8 relative inline-block">
          <h2 className="font-[Caveat] font-bold leading-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
            got a <span className="hl-yellow">problem</span><br />worth <span className="text-[#e63946]">solving</span>?
          </h2>
          <Star className="absolute -top-6 -right-10 w-10 h-10 float hidden md:block" color="#ffd93d" />
          <Sparkle className="absolute bottom-2 -left-8 w-6 h-6 text-[#f4a261] float-slow hidden md:block" />
        </div>
        <p className="reveal font-[Kalam] text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          serious builders working on problems that matter — product-first, AI-enabled, systems-aware. <span className="hl-pink">based in Ahmedabad, Gujarat, India.</span>
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:malekfazilkhan07@gmail.com?subject=let's build something`}
            onClick={() => analyticsActions.trackSendEmail()}
            className="btn-hand btn-filled text-xl"
          >
            drop me an email
          </a>
          <button onClick={copy} className="btn-hand text-xl">
            {copied ? "copied!" : "copy email"}
          </button>
          <a
            href="tel:+917990632170"
            className="btn-hand btn-red text-xl"
          >
            call me directly
          </a>
        </div>
        <div className="reveal mt-6 font-[Patrick_Hand] text-neutral-500">or find me here</div>
        <div className="reveal mt-3 flex justify-center gap-4 flex-wrap">
          {[
            { label: "github", url: "https://github.com/fazilkhan0786" },
            { label: "linkedin", url: "https://www.linkedin.com/in/fazilkhan-malek-392082377" }
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="me noopener noreferrer"
              onClick={() => analyticsActions.trackSocialClick(s.label, s.url)}
              className="tag-pill !text-lg !px-6 !py-2"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="reveal mt-16 relative inline-block">
          <p className="font-[Caveat] font-bold text-4xl md:text-5xl" style={{ transform: "rotate(-3deg)" }}>— Fazil Malek</p>
          <Scribble className="w-40 h-5 absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-60" />
        </div>
        <div className="reveal mt-12 inline-block">
          <div className="sticky-note sticky-pink !p-4 !inline-block" style={{ transform: "rotate(3deg)" }}>
            <p className="font-[Gochi_Hand] text-lg">p.s. — if you've scrolled this far,<br />we should definitely talk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onPrivacyClick?: () => void; onNavigate?: (path: string) => void }) {
  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="relative px-6 md:px-10 py-10 border-t-[2.5px] border-black/80 bg-[#fffdf5]">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="text-center">
          <p className="font-[Shadows_Into_Light] text-xl text-neutral-600">
            "the best time to build was yesterday. the second best is <span className="text-[#e63946]">right now</span>."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-[Patrick_Hand] text-lg">
          <a href="/" onClick={(e) => handleFooterLink(e, "/")} className="hover:text-[#e63946] transition-colors">Home</a>
          <span>•</span>
          <a href="/projects/" onClick={(e) => handleFooterLink(e, "/projects/")} className="hover:text-[#e63946] transition-colors">Projects Showcase</a>
          <span>•</span>
          <a href="/services/" onClick={(e) => handleFooterLink(e, "/services/")} className="hover:text-[#e63946] transition-colors">Freelance &amp; Services</a>
          <span>•</span>
          <a href="/stories/" onClick={(e) => handleFooterLink(e, "/stories/")} className="hover:text-[#e63946] transition-colors">Stories &amp; Blog</a>
          <span>•</span>
          <a href="/certificates/" onClick={(e) => handleFooterLink(e, "/certificates/")} className="hover:text-[#e63946] transition-colors">Certificates &amp; Achievements</a>
          <span>•</span>
          <a href="/contact/" onClick={(e) => handleFooterLink(e, "/contact/")} className="hover:text-[#e63946] transition-colors">Contact &amp; Enquiry Form</a>
          <span>•</span>
          <a href="/privacy-policy/" onClick={(e) => handleFooterLink(e, "/privacy-policy/")} className="hover:text-[#e63946] transition-colors">
            Privacy Policy &amp; Disclosures
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 font-[Patrick_Hand] text-base border-t border-black/10 pt-6">
          <p className="flex items-center gap-2">
            hand-crafted with care &amp; caffeine in Ahmedabad, India
          </p>
          <p>
            founder mode:{" "}
            <span className="inline-flex items-center gap-1 bg-[#e63946] text-white px-2 py-0.5 rounded text-sm font-bold">
              ON <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </span>
          </p>
          <p className="text-neutral-500">© {new Date().getFullYear()} Fazil Malek</p>
        </div>

        <div className="text-center">
          <a href="#top" className="inline-flex items-center gap-2 font-[Patrick_Hand] text-sm text-neutral-500 hover:text-[#e63946] transition-colors">
            back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundPage({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <div className="py-24 px-6 md:px-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[65vh] font-[Kalam]">
      <div className="reveal wiggle-box bg-[#fffef7] p-10 md:p-14 border-[2.5px] border-black rounded-lg relative shadow-[6px_8px_0_rgba(26,26,26,0.12)]" style={{ transform: "rotate(-1deg)" }}>
        <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 rotate-[1deg]" />
        
        <h1 className="font-[Permanent_Marker] text-4xl md:text-5xl text-[#e63946] mb-4">
          404 - Page Lost in Margins
        </h1>
        
        <p className="font-[Patrick_Hand] text-2xl text-neutral-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Oops! Looks like this page got sketched out or was never written in our notebook.
        </p>
        
        <a
          href="/"
          onClick={(e) => {
            if (onNavigate && !e.ctrlKey && !e.metaKey) {
              e.preventDefault();
              onNavigate("/");
            }
          }}
          className="btn-hand btn-filled text-xl inline-block"
        >
          return to home page
        </a>
        
        <div className="absolute -bottom-5 -right-5 w-10 h-10 hidden md:block">
          <Star className="w-full h-full" color="#ffd93d" />
        </div>
      </div>
    </div>
  );
}

interface AppProps {
  initialRoute?: string;
}

export default function App({ initialRoute }: AppProps = {}) {
  const [loaded, setLoaded] = useState(false);
  const [route, setRoute] = useState<string>(() => {
    if (initialRoute) return normalizeRoutePath(initialRoute);
    if (typeof window === "undefined") return "/";
    // Check legacy hash first
    if (window.location.hash && (window.location.hash.startsWith("#/") || window.location.hash.startsWith("#"))) {
      const clean = window.location.hash.replace(/^#\/?/, "/");
      if (clean && clean !== "/" && !clean.startsWith("work") && !clean.startsWith("contact") && !clean.startsWith("top")) {
        return normalizeRoutePath(clean);
      }
    }
    return normalizeRoutePath(window.location.pathname);
  });

  const progress = useScrollProgress();
  useReveal();
  const handleLoaded = useCallback(() => setLoaded(true), []);

  const handleNavigate = useCallback((toPath: string) => {
    const normalized = normalizeRoutePath(toPath);
    if (typeof window !== "undefined") {
      if (window.location.pathname !== normalized) {
        window.history.pushState(null, "", normalized);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setRoute(normalized);
    updatePageSEO(normalized);
    analyticsActions.trackPageView(normalized);
  }, []);

  // Backward-compatible redirect for legacy hash URLs upon mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash && (window.location.hash.startsWith("#/") || window.location.hash.startsWith("#"))) {
      const clean = window.location.hash.replace(/^#\/?/, "/");
      if (clean && clean !== "/" && !clean.startsWith("work") && !clean.startsWith("contact") && !clean.startsWith("top")) {
        const normalized = normalizeRoutePath(clean);
        window.history.replaceState(null, "", normalized);
        setRoute(normalized);
        updatePageSEO(normalized);
        analyticsActions.trackPageView(normalized);
      }
    }
  }, []);

  // Synchronize browser history Back/Forward actions
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => {
      const current = normalizeRoutePath(window.location.pathname);
      setRoute(current);
      updatePageSEO(current);
      analyticsActions.trackPageView(current);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .stagger, .draw-line");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach((el) => io.observe(el));
    }, 100);
    return () => clearTimeout(timer);
  }, [loaded, route]);

  const renderPageContent = () => {
    if (route === "" || route === "/") {
      return (
        <>
          <Hero onNavigate={handleNavigate} />
          <Marquee />
          <About />
          <Notebook />
          <Ventures />
          <TrainWork />
          <Skills />
          <Journey />
          <Articles onNavigate={handleNavigate} />
          <FAQ />
          <Currently />
          <FunFacts />
          <GitHubStats />
          <Contact />
        </>
      );
    }
    if (route.startsWith("/projects")) {
      return <ProjectsPage onNavigate={handleNavigate} onNavigateContact={() => handleNavigate("/contact/")} />;
    }
    if (route.startsWith("/services")) {
      return <ServicesPage onNavigate={handleNavigate} onNavigateContact={() => handleNavigate("/contact/")} />;
    }
    if (route.startsWith("/stories")) {
      const storySlug = route.replace(/^\/stories\/?/, "").replace(/\/$/, "");
      if (storySlug) {
        return <StoryDetailPage slug={storySlug} onNavigate={handleNavigate} />;
      }
      return <StoriesPage onNavigate={handleNavigate} />;
    }
    if (route.startsWith("/certificates")) {
      return <CertificatesPage onNavigate={handleNavigate} />;
    }
    if (route.startsWith("/contact")) {
      return <ContactPage onNavigate={handleNavigate} />;
    }
    if (route.startsWith("/privacy-policy")) {
      return <PrivacyPolicyPage onNavigate={handleNavigate} />;
    }

    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <>
      {!loaded && <Loader onDone={handleLoaded} />}
      <CustomCursor />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="paper-bg paper-noise margin-line relative min-h-screen">
        <Nav currentRoute={route} onNavigate={handleNavigate} />
        <main className="pt-8">
          {renderPageContent()}
        </main>
        <Footer onNavigate={handleNavigate} />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

