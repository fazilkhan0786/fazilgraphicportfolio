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
  useMagnetic,
} from "./hooks";
import portrait from "./assets/portrait.png";
export { default as Notebook } from "./Notebook";
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
import { CONTACT_INFO } from "./constants/contact";
import {
  RetroAboutComputerIllustration,
  ProductBuilderIcon,
  FullStackIcon,
  DesignerIcon,
  AIExplorerIcon,
  WhatIDoMobileIcon,
  WhatIDoDesignIcon,
  WhatIDoAIIcon,
  WhatIDoFullStackIcon,
  WhatIDoProblemSolvingIcon,
  WhatIDoStartupIcon,
  BeyondFootballIcon,
  BeyondMusicIcon,
  BeyondGameDevIcon,
  BeyondLearningIcon
} from "./components/RetroHomeVisuals";

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
          Fazil Malek<span className="text-[#0f766e]">.</span>
        </p>
        <div className="loader-bar-bg">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-subtitle">
          initializing engineering portfolio...
        </p>
        <div className="loader-tags">
          <span>systems</span>
          <span>products</span>
          <span>applied AI</span>
        </div>
      </div>
    </div>
  );
}

function Nav({ currentRoute, onNavigate }: { currentRoute: string; onNavigate?: (path: string) => void }) {
  const [open, setOpen] = useState(false);

  const navPages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects/" },
    { label: "Services", href: "/services/" },
    { label: "Blog", href: "/stories/" },
    { label: "Certificates", href: "/certificates/" },
    { label: "Contact", href: "/contact/" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && currentRoute === "/") {
      e.preventDefault();
      const id = href.substring(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      return;
    }
    if (onNavigate && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      onNavigate(href);
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-3 py-3 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[5px_5px_0px_#f472b6] px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2.5 group"
          aria-label="Fazil Malek Home"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center font-display font-extrabold text-base sm:text-lg text-[#1a1a1a]">
            F
          </span>
          <span className="font-display font-extrabold text-lg sm:text-xl text-[#1a1a1a] tracking-tight">
            FAZIL.
          </span>
          {/* Decorative pixel checkerboard mark */}
          <div className="hidden sm:grid grid-cols-4 grid-rows-2 w-7 h-3.5 border border-[#1a1a1a] ml-1 overflow-hidden" aria-hidden="true">
            <span className="bg-[#1a1a1a]" />
            <span className="bg-transparent" />
            <span className="bg-[#1a1a1a]" />
            <span className="bg-transparent" />
            <span className="bg-transparent" />
            <span className="bg-[#1a1a1a]" />
            <span className="bg-transparent" />
            <span className="bg-[#1a1a1a]" />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navPages.map((p, idx) => {
            const isActive =
              (currentRoute === "/" && p.href === "/") ||
              (p.href !== "/" && !p.href.startsWith("/#") && currentRoute.startsWith(p.href)) ||
              (p.label === "Blog" && (currentRoute.startsWith("/stories") || currentRoute.startsWith("/blog")));
            return (
              <div key={p.href} className="flex items-center">
                <a
                  href={p.href}
                  onClick={(e) => handleNavClick(e, p.href)}
                  className={`text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#ffd93d] text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-lg shadow-[3px_3px_0px_#1a1a1a] px-3.5 py-1"
                      : "text-[#1a1a1a] hover:bg-[#fbf8ef] px-3 py-1 rounded-md"
                  }`}
                >
                  {p.label}
                </a>
                {idx < navPages.length - 1 && !isActive && (
                  <span className="text-stone-300 font-light mx-1 select-none" aria-hidden="true">|</span>
                )}
              </div>
            );
          })}
          <a
            href="https://github.com/fazilkhan0786"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 bg-[#1a1a1a] text-white font-bold text-xs border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] rounded-lg px-3 py-1.5 hover:bg-[#333] transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub ↗</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden w-10 h-10 border-2 border-[#1a1a1a] rounded-lg bg-[#ffd93d] flex flex-col items-center justify-center gap-1 shadow-[2px_2px_0px_#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className={`w-4 h-[2.5px] bg-[#1a1a1a] rounded transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-4 h-[2.5px] bg-[#1a1a1a] rounded transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-4 h-[2.5px] bg-[#1a1a1a] rounded transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl bg-white border-2.5 border-[#1a1a1a] rounded-xl p-4 shadow-[5px_5px_0px_#1a1a1a] space-y-1">
          {navPages.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="block font-bold text-base px-3 py-2 rounded-lg text-[#1a1a1a] hover:bg-[#ffd93d] transition-colors"
              onClick={(e) => handleNavClick(e, p.href)}
            >
              {p.label}
            </a>
          ))}
          <a
            href="https://github.com/fazilkhan0786"
            target="_blank"
            rel="me noopener noreferrer"
            className="block font-bold text-base px-3 py-2 text-[#e63946]"
          >
            GitHub Profile ↗
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const mag = useMagnetic(0.22);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workEl = document.getElementById("work") || document.getElementById("projects");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (onNavigate) {
      onNavigate("/#work");
    } else {
      window.location.hash = "#work";
    }
  };

  return (
    <section id="top" className="relative min-h-[92vh] pt-32 pb-16 px-4 sm:px-6 md:px-10 flex flex-col justify-center overflow-hidden">
      {/* Decorative Pixel Checkerboard Accents in Section Corners */}
      <div className="hidden md:block w-14 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute right-6 top-24 pointer-events-none" aria-hidden="true" />
      <div className="hidden md:block w-10 h-8 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute left-6 bottom-32 pointer-events-none" aria-hidden="true" />

      {/* Watermark 01 (Matching Reference Image 1) */}
      <div className="watermark-numeral absolute right-6 bottom-12 hidden lg:block select-none pointer-events-none opacity-40 font-mono font-black text-7xl text-[#c8b6ff]" aria-hidden="true">
        01
      </div>

      {/* 4-pointed yellow sparkle star */}
      <div className="absolute right-4 sm:right-12 bottom-44 text-[#ffd93d] text-3xl font-black select-none pointer-events-none drop-shadow-[2px_2px_0px_#1a1a1a]" aria-hidden="true">
        ✦
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content Area */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            {/* Terminal Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-mono font-bold mb-5">
              <span className="text-[#86efac]">&gt;</span> Software • Design • AI • Healthcare <span className="w-2 h-4 bg-[#86efac] inline-block animate-pulse ml-0.5" />
            </div>

            {/* Block Headline Rows (Matching Reference Image 1) */}
            <div className="space-y-2 mb-6">
              <div className="comic-sparks flex items-center flex-wrap gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] tracking-tight">
                  HI, I'M{" "}
                </span>
                <span className="bg-[#e63946] text-white font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] tracking-tight inline-block">
                  FAZIL.
                </span>
              </div>

              <div>
                <span className="bg-[#ffd93d] text-[#1a1a1a] font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3.5 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] tracking-tight inline-block">
                  I BUILD PRODUCTS,
                </span>
              </div>

              <div>
                <span className="bg-[#c8b6ff] text-[#1a1a1a] font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-3.5 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] tracking-tight inline-block">
                  APPS &amp; SYSTEMS
                </span>
              </div>

              <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
                THAT SOLVE <span className="text-[#e63946]">REAL PROBLEMS.</span>
              </div>
            </div>

            {/* Subtitle with Red Accent Bar */}
            <div className="border-l-4 border-[#e63946] pl-3.5 py-1 mb-8 max-w-xl">
              <p className="font-body text-base sm:text-lg text-[#3e3832] leading-relaxed font-bold">
                Computer Engineering student at GTU and founder of{" "}
                <span className="bg-[#fce7f3] text-[#9f1239] font-black px-1.5 py-0.5 rounded border border-[#f472b6]">
                  Promacle.
                </span>{" "}
                I build products at the intersection of healthcare, AI, and product design — from idea to real-world impact.
              </p>
            </div>

            {/* Retro Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={CONTACT_INFO.getWhatsAppUrlWithText("Hi Fazil, I saw your portfolio and want to collaborate")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsActions.trackWhatsAppClick()}
                className="btn-retro-whatsapp inline-flex items-center gap-2.5 !py-3 !px-6 text-base font-bold !bg-[#10b981] !text-white border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] rounded-xl hover:translate-y-[-2px] active:translate-y-0 transition-all cursor-pointer"
                aria-label="Chat with Fazil on WhatsApp (opens in new tab)"
                ref={mag.ref as React.RefObject<HTMLAnchorElement>}
                onMouseMove={mag.onMove as React.MouseEventHandler<HTMLAnchorElement>}
                onMouseLeave={mag.onLeave}
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="btn-retro-secondary inline-flex items-center gap-2.5 !py-3 !px-6 text-base font-bold bg-white text-[#1a1a1a] border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] rounded-xl hover:translate-y-[-2px] active:translate-y-0 transition-all cursor-pointer"
                aria-label="Explore Fazil Malek's selected work"
              >
                <span>View My Work →</span>
              </a>
            </div>
          </div>

          {/* Right Portrait & fazil.exe Retro Window (Matching Reference Image 1) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="retro-window max-w-[360px] sm:max-w-[380px] w-full bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#7c3aed] overflow-hidden">
                <div className="retro-window-header header-yellow !px-3.5 !py-2 flex items-center justify-between border-b-[2.5px] border-[#1a1a1a]">
                  <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a] flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#22c55e] border border-[#1a1a1a] inline-block" />
                    <span>fazil.exe</span>
                  </div>
                  <div className="retro-window-controls flex items-center gap-1.5">
                    <span className="win-btn win-btn-min">−</span>
                    <span className="win-btn win-btn-max">□</span>
                    <span className="win-btn win-btn-close">✕</span>
                  </div>
                </div>

                <div className="p-3 bg-white relative">
                  <div className="border-2 border-[#1a1a1a] rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={portrait}
                      alt="Fazil Malek — Software Engineer & Founder"
                      className="w-full aspect-[4/5] object-cover block"
                      loading="eager"
                      // @ts-ignore
                      fetchPriority="high"
                      width="360"
                      height="450"
                    />
                  </div>

                  {/* Pinned Yellow Sticky Note (Matching Reference Image 1) */}
                  <div className="sticky-note-retro absolute -right-3 top-12 sm:top-16 max-w-[170px] z-10 bg-[#fef08a] border-2 border-[#1a1a1a] p-3 rounded-lg shadow-[3px_3px_0px_#1a1a1a]">
                    <span className="tape-pink" />
                    <p className="font-display font-bold text-xs sm:text-sm text-[#1a1a1a] leading-tight">
                      "Build systems that change <span className="text-[#e63946] font-black">behavior</span>, not just screens."
                    </p>
                  </div>

                  {/* Retro Pixel Mouse Pointer */}
                  <div className="absolute bottom-16 right-5 pointer-events-none select-none z-10" aria-hidden="true">
                    <svg className="w-6 h-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="none">
                      <path d="M4 2L4 20L8.5 15.5L13.5 22L16 20.5L11 14L18 14L4 2Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Location Label Pill Below Photo */}
                  <div className="mt-3 py-1.5 px-3 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-lg flex items-center justify-between text-xs font-mono font-bold text-[#1a1a1a]">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#e63946]">📍</span>
                      <span>Fazil Malek</span>
                    </span>
                    <span className="text-[#6b635b]">Ahmedabad, Gujarat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Role Strip (Matching Reference Image 1) */}
        <div className="mt-12 w-full border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#e63946] overflow-hidden grid grid-cols-2 md:grid-cols-4 bg-[#1a1a1a]">
          <div className="bg-[#c8b6ff] px-4 py-3 flex items-center justify-center gap-2 border-r-0 md:border-r-[2.5px] border-b-[2.5px] md:border-b-0 border-[#1a1a1a] font-display font-extrabold text-sm text-[#1a1a1a]">
            <ProductBuilderIcon className="w-4 h-4" />
            <span>Product Builder</span>
          </div>
          <div className="bg-[#ffd93d] px-4 py-3 flex items-center justify-center gap-2 border-r-0 md:border-r-[2.5px] border-b-[2.5px] md:border-b-0 border-[#1a1a1a] font-display font-extrabold text-sm text-[#1a1a1a]">
            <FullStackIcon className="w-4 h-4" />
            <span>Full-Stack Developer</span>
          </div>
          <div className="bg-[#fbcfe8] px-4 py-3 flex items-center justify-center gap-2 border-r-0 md:border-r-[2.5px] border-b-0 border-[#1a1a1a] font-display font-extrabold text-sm text-[#1a1a1a]">
            <DesignerIcon className="w-4 h-4" />
            <span>UI/UX Designer</span>
          </div>
          <div className="bg-[#86efac] px-4 py-3 flex items-center justify-center gap-2 font-display font-extrabold text-sm text-[#1a1a1a]">
            <AIExplorerIcon className="w-4 h-4" />
            <span>AI/ML Explorer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT_INFO.getWhatsAppUrlWithText("Hi Fazil, I saw your portfolio and want to collaborate")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => analyticsActions.trackWhatsAppClick()}
      aria-label="Chat with Fazil on WhatsApp"
      className="floating-wa-btn md:hidden"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" fill="#ffffff" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}

export function Marquee() {
  const items = [
    "Full-Stack Web", "•", "Flutter Mobile", "•", "Healthcare AI", "•", "System Architecture", "•",
    "FastAPI & Python", "•", "React & Next.js", "•", "PyTorch & OpenCV", "•", "Distributed Systems", "•",
    "Computer Vision", "•", "Behavioral Design", "•"
  ];
  return (
    <div className="overflow-hidden border-y-[2.5px] border-[#1a1a1a] py-3 bg-[#ffd93d]">
      <div className="flex marquee-track whitespace-nowrap gap-6 font-mono text-xs uppercase tracking-widest text-[#1a1a1a] font-bold">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-6 items-center shrink-0">
            {items.map((item, j) => (
              <span key={j} className={item === "•" ? "text-[#e63946]" : "font-extrabold"}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ num, label, note }: { num: string; label: string; note?: string; dark?: boolean }) {
  return (
    <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8 pb-4 border-b-[2.5px] border-[#1a1a1a]">
      <div>
        <span className="section-tag">
          // SECTION {num}
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight comic-sparks">
          {label}
        </h2>
      </div>
      {note && (
        <p className="font-mono text-xs md:text-right max-w-sm text-[#6b635b] font-bold">
          <span className="text-[#e63946]">//</span> {note}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative Corner Checkerboards */}
      <div className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute left-6 top-10 pointer-events-none" aria-hidden="true" />
      <div className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute right-6 bottom-14 pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Heading (Matching Reference Image 2) */}
        <div className="mb-8">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#e9d5ff] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] mb-2.5">
            <span className="font-mono text-xs font-bold text-[#1a1a1a] tracking-wider uppercase">
              // ABOUT ME
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] tracking-tight">
              <span className="bg-[#ffd93d] text-[#1a1a1a] px-3 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] inline-block mr-2">
                A BIT
              </span>
              <span className="bg-[#e63946] text-white px-3 py-0.5 rounded-lg border-[2.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] inline-block mr-2">
                ABOUT
              </span>
              <span>ME.</span>
            </h2>
            {/* Comic red action sparks radiating top-right */}
            <div className="text-[#e63946] font-black text-2xl select-none" aria-hidden="true">
              ⚡
            </div>
          </div>
        </div>

        {/* Top 3-Part Composition: Bio + Middle Computer on Books + At a Glance Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8">
          {/* Left: Bio Text with Vertical Red Accent Bar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border-l-4 border-[#e63946] pl-3.5 py-1">
              <p className="font-body text-sm sm:text-base text-[#3e3832] leading-relaxed font-bold">
                I'm Fazil Malek, a Computer Engineering student, product builder, and founder from Ahmedabad, Gujarat. I love turning real-world problems into practical, user-focused digital products — especially in healthcare, AI, and behavioral technology.
              </p>
            </div>
          </div>

          {/* Middle: Vintage CRT Monitor on Stacked Books Illustration (Matching Reference Image 2) */}
          <div className="lg:col-span-3 flex justify-center py-2">
            <RetroAboutComputerIllustration className="w-48 sm:w-56 h-auto" />
          </div>

          {/* Right: At a Glance Window (Matching Reference Image 2) */}
          <div className="lg:col-span-5">
            <div className="retro-window bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#f472b6] overflow-hidden">
              <div className="retro-window-header header-yellow !px-3.5 !py-2 flex items-center justify-between border-b-[2.5px] border-[#1a1a1a]">
                <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] border border-[#1a1a1a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
                  <span className="ml-1">At a Glance</span>
                </div>
                <div className="retro-window-controls flex items-center gap-1.5">
                  <span className="win-btn win-btn-min">−</span>
                  <span className="win-btn win-btn-max">□</span>
                  <span className="win-btn win-btn-close">✕</span>
                </div>
              </div>

              {/* 6 Information Cells (3 cols x 2 rows) */}
              <div className="p-3 bg-white grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">🎓</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">B.E. Computer Engg.</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">GTU, SAL College</p>
                </div>
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">📍</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">Ahmedabad,</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">Gujarat</p>
                </div>
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">📅</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">02 May 2007</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">(19 y/o)</p>
                </div>
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">🚀</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">Founder</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">@ Promacle</p>
                </div>
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">❤️</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">Building</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">NuroVed</p>
                </div>
                <div className="p-2.5 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0px_#1a1a1a]">
                  <span className="text-xl block mb-1">💻</span>
                  <p className="font-display font-black text-[11px] text-[#1a1a1a] leading-tight">Product • Design</p>
                  <p className="text-[10px] font-mono text-[#6b635b] mt-0.5">AI • Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Two Windows: What I Do (Left) & Beyond Work (Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* What I Do Window (Lavender) */}
          <div className="lg:col-span-7">
            <div className="retro-window bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#7c3aed] overflow-hidden">
              <div className="retro-window-header header-lavender !px-3.5 !py-2 flex items-center justify-between border-b-[2.5px] border-[#1a1a1a]">
                <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a] flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d] border border-[#1a1a1a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-[#1a1a1a]" />
                  </div>
                  <span>What I Do</span>
                </div>
              </div>

              {/* 6 Areas in 3-column, 2-row layout */}
              <div className="p-4 bg-white grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: <WhatIDoMobileIcon />, title: "Product Development" },
                  { icon: <WhatIDoDesignIcon />, title: "UI/UX & Design" },
                  { icon: <WhatIDoAIIcon />, title: "AI/ML Solutions" },
                  { icon: <WhatIDoFullStackIcon />, title: "Full-Stack Development" },
                  { icon: <WhatIDoProblemSolvingIcon />, title: "Problem Solving" },
                  { icon: <WhatIDoStartupIcon />, title: "Startup Building" }
                ].map((item) => (
                  <div key={item.title} className="p-3 border-2 border-[#1a1a1a] rounded-xl bg-[#fbf8ef] shadow-[2px_2px_0px_#1a1a1a] flex flex-col items-center text-center">
                    <div className="mb-1.5">{item.icon}</div>
                    <p className="font-display font-black text-xs text-[#1a1a1a] leading-tight">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Beyond Work Window (Mint Green) */}
          <div className="lg:col-span-5 relative">
            <div className="retro-window bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#10b981] overflow-hidden">
              <div className="retro-window-header header-mint !px-3.5 !py-2 flex items-center justify-between border-b-[2.5px] border-[#1a1a1a]">
                <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a] flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffd93d] border border-[#1a1a1a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-[#1a1a1a]" />
                  </div>
                  <span>Beyond Work</span>
                </div>
              </div>

              {/* 4 Interests in 4 columns */}
              <div className="p-4 bg-white grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { icon: <BeyondFootballIcon />, title: "Football" },
                  { icon: <BeyondMusicIcon />, title: "Music" },
                  { icon: <BeyondGameDevIcon />, title: "Game Dev" },
                  { icon: <BeyondLearningIcon />, title: "Learning" }
                ].map((hobby) => (
                  <div key={hobby.title} className="p-3 border-2 border-[#1a1a1a] rounded-xl bg-[#fbf8ef] text-center shadow-[2px_2px_0px_#1a1a1a] flex flex-col items-center">
                    <div className="mb-1.5">{hobby.icon}</div>
                    <p className="font-display font-black text-xs text-[#1a1a1a]">{hobby.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Retro Pixel Mouse Cursor on Bottom Right */}
            <div className="absolute -bottom-3 -right-2 pointer-events-none select-none z-20" aria-hidden="true">
              <svg className="w-7 h-7 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="none">
                <path d="M4 2L4 20L8.5 15.5L13.5 22L16 20.5L11 14L18 14L4 2Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ventures() {
  const cardStyles = ["card-retro-mint", "card-retro-pink", "card-retro-yellow", "card-retro-purple"];
  const icons = ["🏥", "🎓", "🌱", "🧠"];

  const ventures = [
    {
      name: "NuroVed",
      tagline: "Healthcare Infrastructure Platform",
      status: "Active v1",
      statusClass: "badge-retro-live",
      desc: "Eliminates fragmentation in patient health records, clinical workflows, and prescription access across clinics.",
      stack: ["FastAPI", "Flutter", "NLP", "AI/ML", "PostgreSQL"]
    },
    {
      name: "Educle",
      tagline: "EdTech & Student Credibility Layer",
      status: "In Development",
      statusClass: "badge-retro-dev",
      desc: "End-to-end institutional operations management with verified skill and credibility tracking.",
      stack: ["React", "Supabase", "Analytics", "TypeScript"]
    },
    {
      name: "Trashee (Dprofiz)",
      tagline: "CleanTech IoT Telemetry Network",
      status: "Production Ready",
      statusClass: "badge-retro-live",
      desc: "Community-driven environmental reporting network with real-time geo-tagged IoT bin telemetry and dispatch alerts.",
      stack: ["Flutter", "Firebase", "GeoFire", "IoT Telemetry"]
    },
    {
      name: "Actora",
      tagline: "Behavioral Design & Focus Engine",
      status: "R&D Phase",
      statusClass: "badge-retro-planning",
      desc: "Cognitive feedback loops that detect attention drift triggers and deliver structured focus interventions.",
      stack: ["Behavioral AI", "Python", "React Native", "State Machines"]
    },
  ];

  return (
    <section id="ventures" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="03" label="Active Ventures" note="products built for verifiable real-world utility." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {ventures.map((v, i) => (
            <div
              key={v.name}
              className={`reveal ${cardStyles[i % cardStyles.length]} flex flex-col justify-between`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={v.statusClass}>
                    {v.status}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1a1a1a] bg-white border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">0{i + 1}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{icons[i]}</span>
                  <h3 className="font-display font-extrabold text-2xl text-[#1a1a1a]">{v.name} ↗</h3>
                </div>
                <p className="font-sans text-sm text-[#3e3832] font-bold">{v.tagline}</p>
                <p className="font-body text-[#3e3832] text-sm mt-3 leading-relaxed">{v.desc}</p>
              </div>

              <div className="mt-5 pt-4 border-t-2 border-[#1a1a1a]/20 flex flex-wrap gap-1.5">
                {v.stack.map((t) => (
                  <span key={t} className="badge-retro-tech">
                    {t}
                  </span>
                ))}
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
    { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "Dart", "SQL"], cardClass: "card-retro-mint" },
    { title: "Frontend & Mobile", items: ["React", "React Native", "Flutter", "Tailwind CSS", "Next.js"], cardClass: "card-retro-purple" },
    { title: "Backend & Systems", items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Firebase"], cardClass: "card-retro-yellow" },
    { title: "AI / ML & Vision", items: ["PyTorch", "OpenCV", "MediaPipe", "NLP", "Scikit-Learn"], cardClass: "card-retro-blue" },
    { title: "DevOps & Tooling", items: ["Git", "Docker", "Linux", "GCP", "REST APIs"], cardClass: "card-retro-pink" },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="04" label="Technical Competencies" note="frameworks and tooling in active engineering use." />

        <div className="reveal mt-8 overflow-hidden border-2 border-[#1a1a1a] py-5 bg-[#ffd93d] rounded-2xl shadow-[4px_4px_0px_#1a1a1a]">
          <div className="flex logo-marquee whitespace-nowrap gap-10 items-center">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-10 items-center shrink-0">
                {techLogos.map(({ name, C }) => (
                  <div key={name + dup} className="flex flex-col items-center gap-1.5 group shrink-0">
                    <C className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[2px_2px_0px_#1a1a1a]" />
                    <span className="font-mono text-xs font-bold text-[#1a1a1a] group-hover:text-[#e63946] transition-colors">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`reveal ${g.cardClass} flex flex-col justify-between`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#1a1a1a]/20">
                  <span className="w-3 h-3 rounded-full border border-[#1a1a1a] bg-[#1a1a1a]" />
                  <h3 className="font-display font-extrabold text-[#1a1a1a] text-sm">{g.title}</h3>
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#1a1a1a] font-bold">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="text-[#e63946]">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 reveal p-6 rounded-2xl bg-white border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
          <p className="font-mono text-xs uppercase tracking-wider text-[#e63946] font-extrabold mb-3">// Applied Methodologies &amp; Capabilities:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "System Design", "Product Strategy", "Behavioral Design", "Rapid Prototyping",
              "Production Shipping", "Healthcare Workflows", "Technical Documentation", "Figma Prototyping",
              "User Research", "Edge AI Telemetry"
            ].map((t) => (
              <span key={t} className="badge-retro-tech !text-xs !px-3 !py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const timeline = [
    {
      year: "2024 — Present",
      role: "Founder & Product Architect",
      company: "Promacle / NuroVed",
      desc: "Full product lifecycle architecture — healthcare workflow analysis, FastAPI backend engineering, Flutter mobile client, and clinical record interoperability.",
      tags: ["Leadership", "System Architecture", "Healthcare AI", "FastAPI"],
      shadow: "shadow-[6px_6px_0px_#e63946]",
      bg: "bg-[#fff5f5]"
    },
    {
      year: "2023",
      role: "Lead Developer",
      company: "Dprofiz Ltd",
      desc: "Architected IoT waste monitoring and community reward dispatch application. Scaled Firebase GeoFire real-time spatial queries for municipal alerts.",
      tags: ["IoT", "Flutter", "Firebase", "Telemetry"],
      shadow: "shadow-[6px_6px_0px_#059669]",
      bg: "bg-[#f0fdf4]"
    },
    {
      year: "2022",
      role: "AI/ML Engineering Fellow",
      company: "MiroFish AI",
      desc: "Constructed computer vision and natural language processing pipelines. Engineered context-aware automation models and data processing modules.",
      tags: ["Python", "PyTorch", "Computer Vision", "Pipelines"],
      shadow: "shadow-[6px_6px_0px_#7c3aed]",
      bg: "bg-[#f5f3ff]"
    },
    {
      year: "2021",
      role: "Self-Directed Engineering & GTU Admission",
      company: "Gujarat Technological University",
      desc: "Enrolled in Bachelor of Engineering in Computer Engineering. Mastered data structures, algorithms, Python, and modern software design patterns.",
      tags: ["Computer Science", "Algorithms", "GTU", "Python"],
      shadow: "shadow-[6px_6px_0px_#ca8a04]",
      bg: "bg-[#fefce8]"
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="05" label="Career Progression" note="chronological engineering milestones & verified experience." />
        <div className="mt-10 relative">
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-[3px] bg-[#1a1a1a]" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={t.company} className="reveal relative pl-12 md:pl-14" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={`absolute left-[9px] md:left-[13px] top-2 w-4 h-4 rounded-full border-2 border-[#1a1a1a] ${i === 0 ? "bg-[#e63946]" : "bg-[#ffd93d]"} shadow-[2px_2px_0px_#1a1a1a]`} />
                <div className={`p-6 rounded-2xl ${t.bg} border-[2.5px] border-[#1a1a1a] ${t.shadow}`}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#1a1a1a] text-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]">{t.year}</span>
                    <h3 className="font-display font-extrabold text-xl text-[#1a1a1a]">{t.role}</h3>
                    <span className="font-mono text-xs font-bold text-[#6b635b]">@ {t.company}</span>
                  </div>
                  <p className="font-body text-[#3e3832] text-sm leading-relaxed mt-2">{t.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="badge-retro-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Currently() {
  const activeSystems = [
    { label: "NuroVed v1", desc: "Patient health record sync & clinic appointment flow", progress: 85, phase: "Pre-Release QA", color: "#86efac" },
    { label: "Educle", desc: "Academic credibility ledger & student operations", progress: 60, phase: "Core Architecture", color: "#93c5fd" },
    { label: "Actora", desc: "Cognitive feedback loops & focus drift detection", progress: 45, phase: "Algorithm R&D", color: "#c8b6ff" },
    { label: "Healthcare Telemetry", desc: "FHIR-compliant patient telemetry schemas", progress: 70, phase: "Benchmarking", color: "#ffd93d" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="retro-window retro-window-black shadow-[8px_8px_0px_#ffd93d] overflow-hidden">
          <div className="retro-window-header header-yellow">
            <div className="retro-window-title font-mono font-bold text-xs text-[#1a1a1a]">
              <span>build_queue.exe — LIVE ENGINEERING PIPELINE &amp; SPRINT QUEUE</span>
            </div>
            <div className="retro-window-controls">
              <span className="win-btn win-btn-min">−</span>
              <span className="win-btn win-btn-max">□</span>
              <span className="win-btn win-btn-close">✕</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 bg-[#1a1a1a] text-white space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#333] pb-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs bg-[#86efac]/20 text-[#86efac] border border-[#86efac]/40 px-3 py-1 rounded-full mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#86efac] animate-pulse" />
                  <span>SYSTEM STATUS: OPERATIONAL &amp; COMPILING</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  Active Build Queue &amp; Focus
                </h3>
              </div>
              <p className="font-mono text-xs text-stone-400 max-w-sm">
                Verified engineering pipeline, active sprints, and system architectures under active development in Ahmedabad.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeSystems.map((sys) => (
                <div
                  key={sys.label}
                  className="p-5 rounded-xl bg-[#262626] border-2 border-[#404040] shadow-[3px_3px_0px_#000] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-extrabold text-white text-base">{sys.label}</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#666] text-[#ffd93d] font-bold">
                        {sys.phase}
                      </span>
                    </div>
                    <p className="font-body text-xs text-stone-300 leading-relaxed mt-2">{sys.desc}</p>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between font-mono text-xs text-stone-300 mb-1.5 font-bold">
                      <span>Milestone</span>
                      <span style={{ color: sys.color }}>{sys.progress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#171717] rounded-full border border-[#404040] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${sys.progress}%`, background: sys.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-xl bg-[#262626] border-2 border-[#404040] flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-white text-base">Looking for an engineer who executes with velocity?</h4>
                <p className="font-body text-stone-400 text-xs mt-1">Available for Software Engineer roles, high-impact internships, and freelance enterprise contracts.</p>
              </div>
              <a
                href={CONTACT_INFO.getWhatsAppUrlWithText("Hi Fazil, let's discuss a project")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsActions.trackWhatsAppClick()}
                className="btn-retro-whatsapp !text-xs !py-2.5 !px-5 shrink-0 inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  const principles = [
    { title: "First-Principles Thinking", desc: "Deconstruct the core problem to fundamental truths before writing any code or selecting frameworks.", card: "card-retro-yellow" },
    { title: "Relentless Execution Loop", desc: "Whiteboard architecture → Interactive prototype → Empirical instrumentation → Production shipment.", card: "card-retro-mint" },
    { title: "India-First, Global-Scale", desc: "Designing healthcare and civic tools capable of handling extreme scale, bandwidth variability, and usability constraints.", card: "card-retro-pink" },
    { title: "User Behavior Benchmark", desc: "If software doesn't demonstrably improve user behavior or operational workflows, it is merely visual decoration.", card: "card-retro-purple" },
    { title: "Athletic Discipline", desc: "Football instilled relentless stamina, team communication, and resilience under competitive pressure.", card: "card-retro-blue" },
    { title: "Continuous Technical Depth", desc: "Systematic deep-dives into distributed architectures, concurrency, and applied edge machine learning.", card: "card-retro-white" },
  ];

  return (
    <section id="philosophy" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader num="10" label="Engineering Principles" note="operating philosophy behind every shipped system." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`reveal ${p.card} flex flex-col justify-between`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#1a1a1a] bg-white border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">0{i + 1} //</span>
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="font-body text-[#3e3832] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubStats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="reveal text-center mb-8">
          <span className="section-tag uppercase mb-2 inline-block">// SECTION 08 // CODE ACTIVITY</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#1a1a1a] tracking-tight comic-sparks">
            GITHUB CONTRIBUTIONS &amp; <span className="badge-word-purple">LANGUAGES.</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#6b635b] mt-2">Verified public repository commits, streaks, and language telemetry.</p>
        </div>
        <div className="reveal grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border-[2.5px] border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a] text-center">
            <img src="https://github-readme-stats.vercel.app/api?username=fazilkhan0786&show_icons=true&hide_border=true&bg_color=ffffff&title_color=1a1a1a&icon_color=e63946&text_color=1a1a1a" alt="GitHub Stats" className="w-full" loading="lazy" width="495" height="195" />
          </div>
          <div className="p-4 rounded-2xl bg-white border-[2.5px] border-[#1a1a1a] shadow-[5px_5px_0px_#1a1a1a] text-center">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fazilkhan0786&layout=compact&hide_border=true&bg_color=ffffff&title_color=1a1a1a&text_color=1a1a1a" alt="Top Languages" className="w-full" loading="lazy" width="495" height="195" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const [copied, setCopied] = useState(false);
  const email = CONTACT_INFO.email;

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

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      onNavigate("/contact/");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-4xl relative z-10 text-center">
        <SectionHeader num="09" label="Initiate Contact" note="direct lines to Fazil Malek." />

        {/* Standout Retro Handshake CTA Banner matching Reference Screenshot 4 */}
        <div className="reveal mt-8 p-8 sm:p-12 border-[3px] border-[#1a1a1a] rounded-3xl bg-[#fbf8ef] shadow-[8px_8px_0px_#e63946] relative overflow-hidden">
          <div className="hidden md:block w-10 h-8 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute right-4 top-4 pointer-events-none" aria-hidden="true" />

          <span className="text-4xl block mb-3">🤝</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-tight">
            HAVE A PROJECT IN MIND? <br />
            <span className="badge-word-red">LET'S BUILD SOMETHING GREAT.</span>
          </h2>
          <p className="font-body text-[#3e3832] text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Open to software engineering internships, SDE opportunities, venture collaboration, and selective freelance contracts. Based in Ahmedabad, Gujarat, India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Engineering%20Inquiry%20from%20Portfolio`}
              onClick={() => analyticsActions.trackSendEmail()}
              className="btn-retro-primary !text-sm !px-6 !py-3 inline-flex items-center gap-2"
            >
              <span>Send Direct Email</span>
              <span>✉️</span>
            </a>
            <button onClick={copy} className="btn-retro-secondary !text-sm !px-6 !py-3">
              {copied ? "✓ Copied to Clipboard!" : "Copy Email"}
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneTel}`}
              onClick={() => analyticsActions.trackPhoneCall()}
              className="btn-retro-secondary !text-sm !px-6 !py-3"
            >
              Call Directly
            </a>
            <a
              href="/contact/"
              onClick={handleEnquiryClick}
              className="btn-retro-yellow !text-sm !px-6 !py-3"
            >
              Open Enquiry Form →
            </a>
          </div>
        </div>

        <div className="reveal mt-10 flex justify-center gap-3 flex-wrap">
          {[
            { label: "GitHub", url: CONTACT_INFO.social.github },
            { label: "LinkedIn", url: CONTACT_INFO.social.linkedin },
            { label: "WhatsApp", url: CONTACT_INFO.getWhatsAppUrlWithText("Hi Fazil, I saw your portfolio") }
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="me noopener noreferrer"
              onClick={() => analyticsActions.trackSocialClick(s.label, s.url)}
              className="badge-retro-tech !px-4 !py-2 !text-xs font-bold"
            >
              {s.label} ↗
            </a>
          ))}
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
    <footer className="relative px-6 md:px-10 py-12 border-t-[2.5px] border-[#1a1a1a] bg-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display font-extrabold text-2xl text-[#1a1a1a]">Fazil Malek</span>
            <p className="font-mono text-xs font-bold text-[#6b635b] mt-0.5">Software Engineer &amp; Product Architect • Ahmedabad, India</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 font-display font-bold text-sm text-[#1a1a1a]">
            <a href="/" onClick={(e) => handleFooterLink(e, "/")} className="hover:text-[#e63946] transition-colors">Home</a>
            <a href="/projects/" onClick={(e) => handleFooterLink(e, "/projects/")} className="hover:text-[#e63946] transition-colors">Projects</a>
            <a href="/services/" onClick={(e) => handleFooterLink(e, "/services/")} className="hover:text-[#e63946] transition-colors">Services</a>
            <a href="/stories/" onClick={(e) => handleFooterLink(e, "/stories/")} className="hover:text-[#e63946] transition-colors">Stories &amp; Blog</a>
            <a href="/certificates/" onClick={(e) => handleFooterLink(e, "/certificates/")} className="hover:text-[#e63946] transition-colors">Certificates</a>
            <a href="/contact/" onClick={(e) => handleFooterLink(e, "/contact/")} className="hover:text-[#e63946] transition-colors">Contact</a>
            <a href="/privacy-policy/" onClick={(e) => handleFooterLink(e, "/privacy-policy/")} className="hover:text-[#e63946] transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs font-bold text-[#6b635b] border-t-2 border-[#1a1a1a]/20 pt-6">
          <p>© {new Date().getFullYear()} Mohammad Fazil Firojkhan Malek. All rights reserved.</p>
          <a href="#top" className="hover:text-[#e63946] transition-colors">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundPage({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <div className="py-28 px-4 sm:px-6 md:px-10 max-w-xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="p-8 md:p-12 border-[2.5px] border-[#1a1a1a] rounded-3xl bg-white shadow-[6px_6px_0px_#e63946] w-full">
        <span className="section-tag uppercase mb-2 inline-block">// ERROR 404</span>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1a1a1a] mb-3 comic-sparks">
          PAGE NOT <span className="badge-word-red">FOUND.</span>
        </h1>
        <p className="font-body text-sm sm:text-base text-[#3e3832] mb-8 max-w-md mx-auto leading-relaxed">
          The requested route does not exist or may have been relocated in the Ahmedabad tech corridor.
        </p>
        <a
          href="/"
          onClick={(e) => {
            if (onNavigate && !e.ctrlKey && !e.metaKey) {
              e.preventDefault();
              onNavigate("/");
            }
          }}
          className="btn-retro-primary !text-sm !py-3 !px-6"
        >
          Return to Home ↗
        </a>
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
    const queryIndex = toPath.indexOf("?");
    const queryPart = queryIndex !== -1 ? toPath.slice(queryIndex) : "";
    const targetUrl = `${normalized}${queryPart}`;
    if (typeof window !== "undefined") {
      if (window.location.pathname + window.location.search !== targetUrl) {
        window.history.pushState(null, "", targetUrl);
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
          <About />
          <TrainWork onNavigate={handleNavigate} />
          <Skills />
          <Journey />
          <Articles onNavigate={handleNavigate} />
          <FAQ />
          <GitHubStats />
          <Contact onNavigate={handleNavigate} />
        </>
      );
    }
    if (route.startsWith("/projects")) {
      return <ProjectsPage onNavigate={handleNavigate} onNavigateContact={() => handleNavigate("/contact/")} />;
    }
    if (route.startsWith("/services")) {
      return <ServicesPage onNavigate={handleNavigate} onNavigateContact={() => handleNavigate("/contact/")} />;
    }
    if (route.startsWith("/stories") || route.startsWith("/blog")) {
      const storySlug = route.replace(/^\/(?:stories|blog)\/?/, "").replace(/\/$/, "");
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
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="paper-bg min-h-screen">
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

