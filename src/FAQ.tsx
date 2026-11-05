/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Answer Engine Optimization (AEO) & FAQ Component (Updated with Specifications)
 */

import { useState } from "react";
import { analyticsActions } from "./utils/analytics";

interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: "General" | "Ventures" | "Healthcare AI" | "Tech & Services" | "Background";
  tags: string[];
}

const faqs: FAQItem[] = [
  {
    id: "who-is-fazil-malek",
    question: "Who is Fazil Malek?",
    category: "General",
    tags: ["bio", "founder", "fazil", "ahmedabad", "promacle"],
    shortAnswer: "Fazil Malek is an Indian entrepreneur, software developer, AI/ML engineer, product architect, footballer, and founder of Promacle (creator of NuroVed).",
    fullAnswer: "Fazil Malek is an Indian entrepreneur, software developer, AI/ML engineer, product architect, and founder of Promacle, based in Ahmedabad, Gujarat. He is pursuing a Bachelor of Engineering in Computer Engineering at Gujarat Technological University (GTU). He is dedicated to building products focused on healthcare, AI, and scalable software systems."
  },
  {
    id: "what-is-promacle-nuroved",
    question: "What is Promacle and NuroVed Healthcare Platform?",
    category: "Ventures",
    tags: ["promacle", "nuroved", "digital healthcare", "ventures"],
    shortAnswer: "Promacle is a technology company founded by Fazil Malek. Its flagship project is NuroVed, a patient-centric digital healthcare platform.",
    fullAnswer: "NuroVed is a patient-centric digital healthcare platform designed to simplify health record management and improve communication between patients and healthcare providers. It uses modern software engineering, artificial intelligence, and user-focused design to create a connected healthcare experience."
  },
  {
    id: "education-family-background",
    question: "What is Fazil Malek's educational background?",
    category: "Background",
    tags: ["education", "gtu", "computer engineering"],
    shortAnswer: "Fazil Malek is pursuing a B.E. in Computer Engineering at GTU in Ahmedabad.",
    fullAnswer: "Fazil Malek is currently pursuing his Bachelor of Engineering in Computer Engineering under Gujarat Technological University (GTU) in Ahmedabad, Gujarat. Alongside academics, he represents his passion for football as a dedicated player and actively participates in hackathons and technical innovation programs."
  },
  {
    id: "services-skills-offered",
    question: "What services and technical expertise does Fazil offer?",
    category: "Tech & Services",
    tags: ["ui/ux", "graphic design", "website building", "startup collaboration", "video editing", "flutter", "fastapi"],
    shortAnswer: "Fazil offers UI/UX Design, Website Development, Startup Collaboration, Video Editing, Full-Stack Web Development, and Flutter Mobile App Development.",
    fullAnswer: "Fazil's expertise spans Full-Stack Web Development, Flutter App Development, AI/ML systems, UI/UX Design, Website Development, Video Editing, and Startup Collaboration. He works with React, Vite, Tailwind CSS, GSAP, Python, FastAPI, and cloud backend databases."
  },
  {
    id: "football-sports-mindset",
    question: "How does football influence Fazil's approach to technology?",
    category: "Background",
    tags: ["football", "sports", "mindset", "teamwork", "leadership"],
    shortAnswer: "Football instills discipline, teamwork, resilience, and leadership that directly shape how Fazil builds tech products and collaborates.",
    fullAnswer: "Football has played an important role in shaping Fazil's mindset. The discipline, teamwork, resilience, and leadership developed on the field directly influence how he approaches entrepreneurship, product design, problem-solving, and leading engineering teams at Promacle."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("who-is-fazil-malek");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Ventures", "Healthcare AI", "Tech & Services", "Background"];

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) {
      analyticsActions.trackFAQToggle(id);
    }
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="reveal text-center mb-10">
          <span className="section-tag uppercase mb-2 inline-block">// SECTION 07</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight comic-sparks">
            FREQUENTLY ASKED <span className="badge-word-yellow">QUESTIONS.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-[#3e3832] max-w-xl mx-auto mt-3">
            Direct, verified answers about my engineering craft, founding Promacle, and approach to systems.
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn-retro ${activeCategory === cat ? "filter-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <dl className="reveal space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`p-5 md:p-6 rounded-2xl bg-white border-[2.5px] border-[#1a1a1a] transition-all duration-200 ${
                  isOpen ? "shadow-[6px_6px_0px_#ffd93d]" : "shadow-[3px_3px_0px_#1a1a1a]"
                }`}
              >
                <dt>
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between text-left font-display font-extrabold text-lg md:text-xl text-[#1a1a1a] gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#e63946] font-mono text-sm font-bold">Q.</span> {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-lg border-2 border-[#1a1a1a] flex items-center justify-center font-mono text-sm font-bold shrink-0 transition-colors ${
                      isOpen ? "bg-[#ffd93d] text-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]" : "bg-[#fbf8ef] text-[#1a1a1a]"
                    }`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>

                <dd
                  id={`faq-answer-${faq.id}`}
                  className={`mt-4 pt-4 border-t-2 border-[#1a1a1a]/20 transition-all duration-300 ${
                    isOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="bg-[#86efac]/20 p-4 border-2 border-[#1a1a1a] rounded-xl mb-3 text-sm text-[#1a1a1a] font-body shadow-[2px_2px_0px_#1a1a1a]">
                    <strong className="font-mono text-xs text-[#059669] uppercase tracking-wider block mb-1 font-bold">
                      // Direct Summary (AEO Definition):
                    </strong>
                    {faq.shortAnswer}
                  </div>

                  <p className="font-body text-sm md:text-base leading-relaxed text-[#3e3832]">
                    {faq.fullAnswer}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {faq.tags.map((t) => (
                      <span key={t} className="badge-retro-tech !text-[11px]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
