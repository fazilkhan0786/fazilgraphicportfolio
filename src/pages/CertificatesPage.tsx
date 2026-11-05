/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Certificates & Achievements Page
 * Faithfully matches media_1793867824350.jpg
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { analyticsActions } from "../utils/analytics";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  RetroTrophyIllustration,
  CertificateIssuerIcon,
  MedalRibbonIcon,
  TrophyHeaderIcon,
  HighlightTrophyIcon,
  HighlightDiplomaIcon,
  HighlightRocketIcon,
  HighlightChartIcon,
  LaurelTrophyIcon,
  CodeTerminalIcon,
  CupTrophyIcon,
  CommunityPeopleIcon
} from "../components/RetroCertificateVisuals";

// =========================================================================
// DATA MODELS
// =========================================================================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: "AI & Machine Learning" | "Computer Science" | "Hackathons" | "Experience & Vol.";
  statusBadge: "Certified" | "Verified" | "Completed" | "Awarded";
  shadowColor: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
  isFeatured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  bgColor: string;
  shadowColor: string;
  icon: React.ReactNode;
  description?: string;
}

// 100% PRESERVATION OF ALL 13 VERIFIED CERTIFICATES FROM EXISTING DATA
const certificatesData: Certificate[] = [
  {
    id: "harvard-cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University (HarvardX)",
    date: "Dec 2024",
    image: "/images/CS50_Computer-Science_Certificate.png",
    category: "Computer Science",
    statusBadge: "Certified",
    shadowColor: "#c8b6ff", // Purple offset shadow
    isFeatured: true,
    description: "Harvard University's flagship introduction to computer science and programming art. Covers algorithmic thinking, data structures, memory management, encapsulation, software engineering, and full-stack web applications.",
    skills: ["C", "Python", "SQL", "HTML/CSS", "Algorithms", "Data Structures", "Memory Management"],
    verifyUrl: "https://cs50.harvard.edu/x"
  },
  {
    id: "harvard-cs50s",
    title: "CS50: Introduction to Programming with Python",
    issuer: "Harvard University (HarvardX)",
    date: "Nov 2025",
    image: "/images/CS50_Introduction-Python_Certificate.png",
    category: "Computer Science",
    statusBadge: "Verified",
    shadowColor: "#86efac", // Green offset shadow
    isFeatured: true,
    description: "An intensive curriculum on programming using Python. Covered functions, arguments, variables, conditionals, loops, exceptions, third-party libraries, unit tests, file I/O, regular expressions, and object-oriented architectures.",
    skills: ["Python", "Unit Testing", "Regex", "Object-Oriented Programming (OOP)", "File I/O", "APIs"],
    verifyUrl: "https://cs50.harvard.edu/python"
  },
  {
    id: "aws-ml-academy",
    title: "AWS Academy Graduate - Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025",
    image: "/images/AWS_ML_Certificate.png",
    category: "AI & Machine Learning",
    statusBadge: "Certified",
    shadowColor: "#38bdf8", // Sky blue offset shadow
    isFeatured: true,
    description: "In-depth academy course on the complete machine learning lifecycle utilizing AWS SageMaker. Hands-on learning of data engineering, exploratory data analysis, modeling (supervised & unsupervised), and production model deployment.",
    skills: ["AWS SageMaker", "Machine Learning Pipeline", "Supervised Learning", "Model Deployment", "Cloud AI"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "aws-ai-ml-academy",
    title: "AWS Academy Graduate - Cloud Foundations / AI & ML",
    issuer: "Amazon Web Services (AWS)",
    date: "Jan 2025",
    image: "/images/AWS_AI-ML_Certificate.png",
    category: "AI & Machine Learning",
    statusBadge: "Certified",
    shadowColor: "#f472b6",
    description: "Core cloud infrastructure conceptualization paired with AWS cloud AI services: Amazon Rekognition, Polly, Lex, SageMaker Canvas, and foundation model deployment strategies.",
    skills: ["AWS Cloud Foundations", "AI/ML Services", "Computer Vision", "Natural Language Processing", "SageMaker Canvas"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "aws-prompt-engineering",
    title: "AWS Academy Graduate - Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2025",
    image: "/images/AWS_Prompt_Engineering_Certificate.png",
    category: "AI & Machine Learning",
    statusBadge: "Certified",
    shadowColor: "#ffd93d",
    description: "Focused study on designing and optimizing prompts for Large Language Models (LLMs). Explores zero-shot, few-shot prompting, chain-of-thought methodologies, prompt injection defense, and deployment via AWS Bedrock.",
    skills: ["Prompt Engineering", "Large Language Models", "Generative AI", "Claude & Bedrock", "AI Safety"],
    verifyUrl: "https://aws.amazon.com/training/aws-academy/"
  },
  {
    id: "dprofiz-internship-completion",
    title: "Lead Software Developer & IoT Intern",
    issuer: "Dprofiz Ltd",
    date: "Nov 2023",
    image: "/images/Internship_Fazil_Internship_Certificate.png",
    category: "Experience & Vol.",
    statusBadge: "Completed",
    shadowColor: "#059669",
    description: "Awarded for successfully completing a software engineering and IoT development internship. Led implementation of clean-tech reporting, Geo-mapping features, and gamified community reward dashboards.",
    skills: ["IoT Systems", "Flutter", "Firebase Integration", "RESTful APIs", "Git & Team Collaboration"]
  },
  {
    id: "dprofiz-offer-letter",
    title: "Dprofiz Internship Offer Letter",
    issuer: "Dprofiz Ltd",
    date: "Aug 2023",
    image: "/images/Dprofiz_Fazil_Internship-Offer_Letter.png",
    category: "Experience & Vol.",
    statusBadge: "Verified",
    shadowColor: "#0284c7",
    description: "Official selection and appointment offer as a Software Developer Intern at Dprofiz Ltd. Marked the beginning of professional startup engineering collaborations.",
    skills: ["Lead Software Developer", "Professional Engineering", "Agile Methodologies", "Project Planning"]
  },
  {
    id: "hts25-hack-x",
    title: "Hack-x HTS25 Achievement Certificate",
    issuer: "Hack-x Hackathon Committee",
    date: "Mar 2025",
    image: "/images/HTS25_Hack-x_Certificate.png",
    category: "Hackathons",
    statusBadge: "Awarded",
    shadowColor: "#e11d48",
    description: "Recognition of active participation and prototype building under intense time constraints during the HTS25 Hack-x Hackathon, addressing real-world problem statements.",
    skills: ["Rapid Prototyping", "Full-Stack Development", "Team Coordination", "Hackathon"]
  },
  {
    id: "hts26-hack-x",
    title: "Hack-x HTS26 Achievement Certificate",
    issuer: "Hack-x Hackathon Committee",
    date: "Mar 2026",
    image: "/images/HTS26_Hack-x_Certificate.png",
    category: "Hackathons",
    statusBadge: "Awarded",
    shadowColor: "#7c3aed",
    description: "Earned for pioneering software design, architectural viability, and coding execution under a 36-hour sprint at the HTS26 Hack-x Hackathon at GEC Gandhinagar.",
    skills: ["Systems Engineering", "Pitching & Presentation", "Collaborative Coding"]
  },
  {
    id: "unplugged-26",
    title: "UNPLUGGED '26 Achievement & Hackathon",
    issuer: "Unplugged Tech Meetup & Hackathon",
    date: "Jan 2026",
    image: "/images/UNPLUGGED26_Certificate.png",
    category: "Hackathons",
    statusBadge: "Awarded",
    shadowColor: "#0d9488",
    description: "Awarded for designing and building outstanding interactive software architectures under severe constraints at the UNPLUGGED '26 technology sprint.",
    skills: ["Product Design", "Hardware-Software Interface", "Innovative Thinking"]
  },
  {
    id: "programming-relay-gtu",
    title: "Programming Relay Winner / Competitor",
    issuer: "GTU Computer Engineering Department",
    date: "Sep 2024",
    image: "/images/Programming_Relay.png",
    category: "Computer Science",
    statusBadge: "Awarded",
    shadowColor: "#ca8a04",
    description: "Earned during the GTU Departmental Tech Fest for rapid-fire algorithmic problem solving, passing complex competitive programming challenges in a team-relay format.",
    skills: ["Competitive Programming", "C++", "Data Structures", "Speed Coding"]
  },
  {
    id: "ssip-startup-awareness",
    title: "SSIP Innovation & Start-up Awareness",
    issuer: "Student Start-up & Innovation Policy (SSIP), Gov. of Gujarat",
    date: "Oct 2024",
    image: "/images/SSIP_Awareness_Certificate.png",
    category: "Experience & Vol.",
    statusBadge: "Certified",
    shadowColor: "#ea580c",
    description: "Certified awareness of Gujarat's Student Start-up & Innovation Policy. Covers intellectual property rights (IPR), government incubation programs, and venture funding criteria.",
    skills: ["Entrepreneurship", "Incubation Pipelines", "Intellectual Property & Patents"]
  },
  {
    id: "pitchcraft-volunteering",
    title: "PitchCraft Volunteering & Startup Engagement",
    issuer: "PitchCraft Startup Hub",
    date: "Feb 2025",
    image: "/images/PitchCraft_Volunteering_Certificate.png",
    category: "Experience & Vol.",
    statusBadge: "Verified",
    shadowColor: "#7c3aed",
    description: "Volunteered and collaborated with early-stage founders to support pitch deck designs, UI/UX conceptualizations, and tech architecture mapping during regional startup meetups.",
    skills: ["Volunteering", "Startup Pitching", "UI/UX Feedback", "Ecosystem Collaboration"]
  }
];

// KEY ACHIEVEMENTS (EXACT REFERENCE REPRODUCTION)
const achievementsData: Achievement[] = [
  {
    id: "ideathon-winner",
    title: "Ideathon 2026 Winner",
    event: "Entrepreneurship & Innovation",
    bgColor: "#fef08a", // Pastel yellow
    shadowColor: "#ca8a04",
    icon: <LaurelTrophyIcon className="w-10 h-10 shrink-0" />,
    description: "1st Place winner for healthcare innovation prototype and venture roadmap under Gujarat Student Start-up Policy."
  },
  {
    id: "hack-x-winner",
    title: "Hack.X Winner",
    event: "GEC Gandhinagar",
    bgColor: "#fbcfe8", // Pastel pink
    shadowColor: "#e11d48",
    icon: <CodeTerminalIcon className="w-10 h-10 shrink-0" />,
    description: "Pioneered rapid software architecture and 36-hour sprint execution at the state-level Hack.X hackathon."
  },
  {
    id: "sih-finalist",
    title: "SIH 2025 Finalist",
    event: "Smart India Hackathon",
    bgColor: "#bbf7d0", // Mint green
    shadowColor: "#059669",
    icon: <CupTrophyIcon className="w-10 h-10 shrink-0" />,
    description: "National finalist selection at Smart India Hackathon for engineering clinical record coordination infrastructure."
  },
  {
    id: "iste-core",
    title: "ISTE Core Member",
    event: "SAL Education, Ahmedabad",
    bgColor: "#e9d5ff", // Lavender purple
    shadowColor: "#7c3aed",
    icon: <CommunityPeopleIcon className="w-10 h-10 shrink-0" />,
    description: "Active core executive member organizing technical symposia, coding relays, and student development workshops."
  }
];

interface CertificatesPageProps {
  onNavigate?: (path: string) => void;
}

export default function CertificatesPage({ onNavigate }: CertificatesPageProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isViewerClosing, setIsViewerClosing] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [showAllExpanded, setShowAllExpanded] = useState(false);
  const triggerButtonRef = useRef<HTMLElement | null>(null);

  const categories = ["All", "AI & Machine Learning", "Computer Science", "Hackathons", "Experience & Vol."];

  const featuredCerts = certificatesData.filter((c) => c.isFeatured);

  const filteredCerts = filterCategory === "All"
    ? certificatesData
    : certificatesData.filter((c) => c.category === filterCategory);

  // Open Lightbox Viewer
  const handleOpenCert = useCallback((cert: Certificate, triggerEl?: HTMLElement) => {
    if (triggerEl) triggerButtonRef.current = triggerEl;
    setSelectedCert(cert);
    setIsViewerClosing(false);
    analyticsActions.trackArticleRead(cert.id, cert.title);
  }, []);

  // Close Lightbox Viewer with smooth exit animation
  const handleCloseViewer = useCallback(() => {
    setIsViewerClosing(true);
    setTimeout(() => {
      setSelectedCert(null);
      setIsViewerClosing(false);
      if (triggerButtonRef.current) {
        triggerButtonRef.current.focus();
      }
    }, 150);
  }, []);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!selectedCert) return;

    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.classList.add("modal-open");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseViewer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert, handleCloseViewer]);

  // Scroll to full gallery when clicking View All
  const handleScrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAllExpanded(true);
    const galleryEl = document.getElementById("all-certificates-gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Pixel Checkerboard Marks */}
      <div
        className="hidden md:block w-12 h-10 rounded-sm pixel-checkerboard-purple border border-[#1a1a1a]/30 absolute left-6 top-32 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden md:block w-10 h-8 rounded-sm pixel-checkerboard-coral border border-[#1a1a1a]/30 absolute right-6 top-64 pointer-events-none"
        aria-hidden="true"
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Certificates", path: "/certificates/" }
        ]}
        onNavigate={onNavigate}
      />

      {/* =========================================================================
          HERO SECTION — EXACT REFERENCE COMPOSITION
          Left: Purple tag + Heading with Coral Highlight + Vertical Red Line
          Middle: Retro Trophy & Books vector illustration
          Right: Window-style Highlights panel with 4 verified statistic columns
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-14">
        {/* Left: Typography & Headline */}
        <div className="lg:col-span-5 flex flex-col items-start z-10">
          <span className="inline-block bg-[#c8b6ff] border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono text-xs font-extrabold px-3 py-1 rounded shadow-[2px_2px_0px_#1a1a1a] uppercase mb-4 tracking-wider">
            // CERTIFICATES &amp; ACHIEVEMENTS
          </span>

          {/* Action Sparks above Heading */}
          <div className="flex items-center gap-1 mb-1 ml-1 select-none" aria-hidden="true">
            <span className="w-1.5 h-3.5 bg-[#e63946] rotate-[-25deg] rounded-full inline-block" />
            <span className="w-1.5 h-4.5 bg-[#e63946] rotate-[-10deg] rounded-full inline-block -translate-y-0.5" />
            <span className="w-1.5 h-3.5 bg-[#e63946] rotate-[10deg] rounded-full inline-block" />
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.15] mb-5">
            MY CREDENTIALS &amp; <br className="hidden sm:inline" />
            <span className="inline-block bg-[#e63946] text-white px-2.5 py-0.5 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] mt-1">
              ACHIEVEMENTS.
            </span>
          </h1>

          <div className="border-l-4 border-[#e63946] pl-3.5 py-1 max-w-xl">
            <p className="font-body text-base sm:text-lg text-[#3e3832] font-bold leading-relaxed">
              A showcase of my learning, certifications, competitions and milestones in tech, product and entrepreneurship.
            </p>
          </div>
        </div>

        {/* Middle: Retro Trophy & Books Illustration */}
        <div className="lg:col-span-3 flex items-center justify-center z-10 py-2 lg:py-0">
          <RetroTrophyIllustration />
        </div>

        {/* Right: Highlights Window-Style Panel */}
        <div className="lg:col-span-4 flex flex-col z-10">
          <div className="border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#7c3aed] bg-[#fbf8ef] overflow-hidden">
            {/* Window Header */}
            <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-3.5 py-2 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#e63946] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#ffd93d] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#86efac] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
              </div>
              <span className="font-display font-extrabold text-xs sm:text-sm text-[#1a1a1a] tracking-wide">
                Highlights
              </span>
              <div className="w-8" />
            </div>

            {/* 4 Evenly Spaced Columns */}
            <div className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 text-center items-start">
              {/* Col 1: Competitions Won */}
              <div className="flex flex-col items-center">
                <HighlightTrophyIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-display font-black text-2xl sm:text-2xl text-[#1a1a1a] mt-2 leading-none">
                  3+
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-700 mt-1 leading-tight">
                  Competitions<br />Won
                </span>
              </div>

              {/* Col 2: Certifications Earned */}
              <div className="flex flex-col items-center">
                <HighlightDiplomaIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-display font-black text-2xl sm:text-2xl text-[#1a1a1a] mt-2 leading-none">
                  10+
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-700 mt-1 leading-tight">
                  Certifications<br />Earned
                </span>
              </div>

              {/* Col 3: Major Projects */}
              <div className="flex flex-col items-center">
                <HighlightRocketIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-display font-black text-2xl sm:text-2xl text-[#1a1a1a] mt-2 leading-none">
                  5+
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-700 mt-1 leading-tight">
                  Major<br />Projects
                </span>
              </div>

              {/* Col 4: Current CGPA */}
              <div className="flex flex-col items-center">
                <HighlightChartIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-display font-black text-2xl sm:text-2xl text-[#1a1a1a] mt-2 leading-none">
                  9.5
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-700 mt-1 leading-tight">
                  CGPA<br />(Current)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: FEATURED CERTIFICATES
          Yellow Header Pill + View All → Button
          Row of 3 Featured Cards (Harvard CS50x, Harvard CS50 Python, AWS ML)
          ========================================================================= */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          {/* Yellow Section Pill */}
          <div className="bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-xl px-4 py-1.5 shadow-[3px_3px_0px_#1a1a1a] flex items-center gap-2.5">
            <MedalRibbonIcon className="w-5 h-5 shrink-0" />
            <h2 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] tracking-tight">
              Featured Certificates
            </h2>
          </div>

          {/* View All Button */}
          <button
            onClick={handleScrollToGallery}
            className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-xl px-4 py-1.5 font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All</span>
            <span className="text-sm">→</span>
          </button>
        </div>

        {/* 3 Featured Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={(e) => handleOpenCert(cert, e.currentTarget)}
              className="bg-[#fffef7] border-[2.5px] border-[#1a1a1a] rounded-2xl p-5 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_var(--card-shadow)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex flex-col justify-between group"
              style={{
                boxShadow: `6px 6px 0px ${cert.shadowColor}`,
                "--card-shadow": cert.shadowColor
              } as React.CSSProperties}
            >
              <div>
                {/* Top Row: Provider Logo on Left, External/Open Indicator on Right */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-1 bg-white border border-[#1a1a1a] rounded-lg shadow-[1.5px_1.5px_0px_#1a1a1a] shrink-0">
                    <CertificateIssuerIcon issuer={cert.issuer} className="w-8 h-8" />
                  </div>
                  <div className="w-7 h-7 bg-white border-2 border-[#1a1a1a] rounded-md shadow-[1.5px_1.5px_0px_#1a1a1a] flex items-center justify-center font-mono text-xs font-bold text-[#1a1a1a] group-hover:bg-[#ffd93d] transition-colors">
                    ↗
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#1a1a1a] leading-tight mb-1 group-hover:text-[#e63946] transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs font-bold text-neutral-600 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Bottom Row: Status Badge on Left, Date on Right */}
              <div className="flex items-center justify-between pt-3 border-t-2 border-[#1a1a1a]/15 mt-auto">
                <span className="bg-[#86efac] border-2 border-[#1a1a1a] rounded-md px-2.5 py-0.5 font-mono text-[11px] font-black text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] flex items-center gap-1">
                  <span>✓</span>
                  <span>{cert.statusBadge}</span>
                </span>
                <span className="font-mono text-xs font-extrabold text-neutral-700">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: KEY ACHIEVEMENTS
          Purple Header Pill + View All → Button
          Row of 4 Achievement Cards (Ideathon 2026, Hack.X, SIH 2025, ISTE Core)
          ========================================================================= */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          {/* Purple Section Pill */}
          <div className="bg-[#c8b6ff] border-2 border-[#1a1a1a] rounded-xl px-4 py-1.5 shadow-[3px_3px_0px_#1a1a1a] flex items-center gap-2.5">
            <TrophyHeaderIcon className="w-5 h-5 shrink-0" />
            <h2 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] tracking-tight">
              Key Achievements
            </h2>
          </div>

          {/* View All Button */}
          <button
            onClick={handleScrollToGallery}
            className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-xl px-4 py-1.5 font-mono text-xs font-black text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All</span>
            <span className="text-sm">→</span>
          </button>
        </div>

        {/* 4 Achievement Cards Across on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="border-[2.5px] border-[#1a1a1a] rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_var(--ach-shadow)] active:translate-x-[1px] active:translate-y-[1px] select-none"
              style={{
                backgroundColor: item.bgColor,
                boxShadow: `5px 5px 0px ${item.shadowColor}`,
                "--ach-shadow": item.shadowColor
              } as React.CSSProperties}
            >
              {/* Illustrative Icon Container */}
              <div className="bg-white border-2 border-[#1a1a1a] rounded-xl p-2 shrink-0 shadow-[2px_2px_0px_#1a1a1a]">
                {item.icon}
              </div>

              {/* Title & Event Subtitle */}
              <div>
                <h3 className="font-display font-black text-base sm:text-lg text-[#1a1a1a] leading-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs font-bold text-neutral-800 mt-1 leading-snug">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPLETE CERTIFICATES CATALOG & CATEGORY FILTERING
          Preserves 100% of all 13 verified certificates with full metadata
          ========================================================================= */}
      <section id="all-certificates-gallery" className="pt-6 border-t-[2.5px] border-[#1a1a1a]/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
              All Verified Credentials ({certificatesData.length})
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold text-neutral-600 mt-1">
              Filter by engineering domain or view complete proof of work.
            </p>
          </div>

          {/* Toggle Expand / Collapse */}
          <button
            onClick={() => setShowAllExpanded(!showAllExpanded)}
            className="bg-white hover:bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-xl px-4 py-2 font-mono text-xs font-black text-[#1a1a1a] shadow-[2.5px_2.5px_0px_#1a1a1a] hover:shadow-[3.5px_3.5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer self-start sm:self-auto shrink-0"
          >
            {showAllExpanded ? "Show Less ↑" : `Expand All (${certificatesData.length}) ↓`}
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((cat) => {
            const isSelected = filterCategory === cat;
            const count = cat === "All"
              ? certificatesData.length
              : certificatesData.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`font-mono text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#1a1a1a] text-white shadow-[2.5px_2.5px_0px_#ffd93d]"
                    : "bg-white text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#ffd93d] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 opacity-70 font-normal">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Full Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAllExpanded ? filteredCerts : filteredCerts.slice(0, 6)).map((cert) => (
            <div
              key={cert.id}
              onClick={(e) => handleOpenCert(cert, e.currentTarget)}
              className="bg-[#fffef7] border-[2.5px] border-[#1a1a1a] rounded-2xl p-5 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_var(--gallery-shadow)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex flex-col justify-between group"
              style={{
                boxShadow: `5px 5px 0px ${cert.shadowColor}`,
                "--gallery-shadow": cert.shadowColor
              } as React.CSSProperties}
            >
              <div>
                {/* Top Row: Provider Logo & Open Indicator */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-1 bg-white border border-[#1a1a1a] rounded-lg shadow-[1.5px_1.5px_0px_#1a1a1a] shrink-0">
                    <CertificateIssuerIcon issuer={cert.issuer} className="w-8 h-8" />
                  </div>
                  <span className="bg-[#ffd93d] border border-[#1a1a1a] rounded px-2 py-0.5 font-mono text-[10px] font-black text-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]">
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] leading-tight mb-1 group-hover:text-[#e63946] transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs font-bold text-neutral-600 mb-3 truncate">
                  {cert.issuer}
                </p>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="bg-white border border-[#1a1a1a]/40 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="font-mono text-[10px] font-bold text-neutral-500 self-center">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Row: Status Badge & Date */}
              <div className="flex items-center justify-between pt-3 border-t-2 border-[#1a1a1a]/15 mt-auto">
                <span className="bg-[#86efac] border-2 border-[#1a1a1a] rounded-md px-2 py-0.5 font-mono text-[10px] font-black text-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]">
                  ✓ {cert.statusBadge}
                </span>
                <span className="font-mono text-xs font-extrabold text-neutral-700">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / View All Bottom CTA if gallery is collapsed */}
        {!showAllExpanded && filteredCerts.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllExpanded(true)}
              className="bg-[#ffd93d] hover:bg-[#ffea75] border-2 border-[#1a1a1a] rounded-xl px-6 py-3 font-display font-black text-sm text-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[5px_5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              Show Remaining {filteredCerts.length - 6} Certificates ↓
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          POLISHED CERTIFICATE LIGHTBOX / VIEWER MODAL
          Hardware-accelerated, uncropped full resolution preview with verified details
          ========================================================================= */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-lightbox-title"
          className={`fixed inset-0 z-[1000] bg-[#18130e]/80 flex items-center justify-center p-3 sm:p-5 md:p-6 select-none ${
            isViewerClosing ? "retro-modal-backdrop-out" : "retro-modal-backdrop-in"
          }`}
          onClick={handleCloseViewer}
        >
          <div
            className={`bg-[#fffef7] border-[2.5px] border-[#1a1a1a] max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl relative shadow-[10px_10px_0px_#1a1a1a] overflow-hidden ${
              isViewerClosing ? "retro-modal-window-out" : "retro-modal-window-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-4 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e63946] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#ffd93d] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="w-3 h-3 rounded-full bg-[#86efac] border border-[#1a1a1a] shadow-[0.5px_0.5px_0px_#1a1a1a]" />
                <span className="ml-2 font-mono text-xs font-black text-[#1a1a1a] uppercase tracking-wider hidden sm:inline">
                  Verified Credential Viewer
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseViewer}
                autoFocus
                aria-label="Close certificate viewer"
                className="w-7 h-7 bg-[#e63946] hover:bg-[#d90429] border-2 border-[#1a1a1a] rounded text-white font-mono font-bold text-xs flex items-center justify-center shadow-[1.5px_1.5px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
              {/* Full Image Container */}
              <div className="bg-neutral-100 border-2 border-[#1a1a1a] rounded-xl p-2.5 sm:p-4 flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] overflow-hidden">
                <picture>
                  <source
                    srcSet={selectedCert.image.replace(/\.(png|jpg)$/, ".webp")}
                    type="image/webp"
                  />
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[50vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded border border-neutral-300"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Details & Metadata Panel */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#c8b6ff] border-2 border-[#1a1a1a] rounded px-2.5 py-0.5 font-mono text-xs font-black text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]">
                      {selectedCert.category}
                    </span>
                    <span className="bg-[#86efac] border-2 border-[#1a1a1a] rounded px-2.5 py-0.5 font-mono text-xs font-black text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]">
                      ✓ {selectedCert.statusBadge}
                    </span>
                  </div>

                  <h3 id="cert-lightbox-title" className="font-display font-extrabold text-xl sm:text-2xl text-[#1a1a1a] leading-tight">
                    {selectedCert.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700">
                    <strong className="text-[#1a1a1a]">Issuing Organization:</strong> {selectedCert.issuer} • <strong className="text-[#1a1a1a]">Granted:</strong> {selectedCert.date}
                  </p>

                  <p className="font-body text-sm sm:text-base text-neutral-800 leading-relaxed font-semibold">
                    {selectedCert.description}
                  </p>

                  {/* Skills Acquired Badges */}
                  <div>
                    <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#1a1a1a] mb-2">
                      Skills &amp; Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-white border-2 border-[#1a1a1a] rounded-md px-2.5 py-1 font-mono text-xs font-bold text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Column */}
                <div className="md:col-span-4 flex flex-col gap-3">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#e63946] hover:bg-[#d90429] text-white border-2 border-[#1a1a1a] rounded-xl font-display font-black text-sm tracking-wider uppercase shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                    >
                      <span>Verify Credential</span>
                      <span>↗</span>
                    </a>
                  )}

                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white hover:bg-[#ffd93d] text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-xl font-display font-black text-sm tracking-wider uppercase shadow-[3px_3px_0px_#1a1a1a] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <span>Open High-Res Image</span>
                    <span>↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseViewer}
                    className="w-full py-2.5 bg-neutral-200 hover:bg-neutral-300 text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-xl font-mono font-bold text-xs shadow-[2px_2px_0px_#1a1a1a] transition-all cursor-pointer text-center mt-2"
                  >
                    Close Viewer (Esc)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
