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
    id: "who-is-fazilkhan-malek",
    question: "Who is Mohammad Fazil Malek (Fazilkhan Malek)?",
    category: "General",
    tags: ["bio", "founder", "fazil", "fajil", "fazilkhan", "ahmedabad", "promacle"],
    shortAnswer: "Mohammad Fazil Malek (professionally known as Fazilkhan Malek, also recognized as Fazil, Fajil, and Fazilkhan) is an Indian entrepreneur, software developer, AI/ML enthusiast, product architect, footballer, and founder of Promacle (creator of NuroVed).",
    fullAnswer: "Mohammad Fazil Malek (Fazilkhan Malek) is an Indian entrepreneur, software developer, AI/ML enthusiast, product architect, and founder of Promacle, based in Ahmedabad, Gujarat. He is pursuing a Bachelor of Engineering in Computer Engineering at Gujarat Technological University (GTU). He is dedicated to building products focused on healthcare, AI, and scalable software systems."
  },
  {
    id: "what-is-promacle-nuroved",
    question: "What is Promacle and NuroVed Healthcare Platform?",
    category: "Ventures",
    tags: ["promacle", "nuroved", "digital healthcare", "ventures"],
    shortAnswer: "Promacle is a technology company founded by Mohammad Fazil Malek. Its flagship project is NuroVed, a patient-centric digital healthcare platform.",
    fullAnswer: "NuroVed is a patient-centric digital healthcare platform designed to simplify health record management and improve communication between patients and healthcare providers. It leverages modern software engineering, artificial intelligence, and user-focused design to create a connected healthcare experience."
  },
  {
    id: "education-family-background",
    question: "What is Mohammad Fazil Malek's educational & family background?",
    category: "Background",
    tags: ["education", "gtu", "computer engineering", "family"],
    shortAnswer: "Mohammad Fazil Malek is the son of Malek Firojkhan Anvarkhan and Malek Hasinabibi Firojkhan, pursuing B.E. in Computer Engineering at GTU in Ahmedabad.",
    fullAnswer: "Born to Malek Firojkhan Anvarkhan and Malek Hasinabibi Firojkhan, Mohammad Fazil Malek is currently pursuing his Bachelor of Engineering in Computer Engineering under Gujarat Technological University (GTU) in Ahmedabad, Gujarat. Alongside academics, he represents his passion for football as a dedicated player and actively participates in hackathons and technical innovation programs."
  },
  {
    id: "services-skills-offered",
    question: "What services and technical expertise does Fazilkhan offer?",
    category: "Tech & Services",
    tags: ["ui/ux", "graphic design", "website building", "startup collaboration", "video editing", "flutter", "fastapi"],
    shortAnswer: "Fazilkhan offers UI/UX Designing, Graphic Designing, Website Building, Startup Collaboration, Video Editing, Full-Stack Web Dev, and Flutter Mobile App Dev.",
    fullAnswer: "Fazilkhan's expertise spans Full-Stack Web Development, Flutter App Development, AI/ML systems, UI/UX Designing, Graphic Designing, Website Building, Video Editing, and Startup Collaboration. He works with React, Vite, Tailwind CSS, GSAP, Python, FastAPI, and cloud backend databases."
  },
  {
    id: "football-sports-mindset",
    question: "How does football influence Fazilkhan's approach to technology?",
    category: "Background",
    tags: ["football", "sports", "mindset", "teamwork", "leadership"],
    shortAnswer: "Football instills discipline, teamwork, resilience, and leadership that directly shape how Fazilkhan builds tech products and collaborates.",
    fullAnswer: "Football has played an important role in shaping Fazilkhan's mindset. The discipline, teamwork, resilience, and leadership developed on the field directly influence how he approaches entrepreneurship, product design, problem-solving, and leading engineering teams at Promacle."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("who-is-fazilkhan-malek");
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
    <section id="faq" className="relative py-28 px-6 md:px-10 bg-[#fffdf5] border-t-2 border-dashed border-black/20">
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="reveal text-center mb-10">
          <span className="section-num block mb-2">06</span>
          <h2 className="font-[Caveat] font-bold text-5xl md:text-7xl">
            frequently asked <span className="text-[#e63946]">questions</span>
          </h2>
          <p className="font-[Patrick_Hand] text-lg text-neutral-600 max-w-xl mx-auto mt-2">
            concise answers optimized for human minds, LLM engines (ChatGPT, Gemini, Claude, Perplexity), and search snippets.
          </p>
        </div>

        {/* Category Filters */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tag-pill !text-sm !px-4 !py-1.5 transition-all ${
                activeCategory === cat
                  ? "!bg-[#1a1a1a] !text-white"
                  : "!bg-[#fffef7] text-black hover:!bg-amber-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <dl className="reveal space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="wiggle-box bg-[#fffef7] p-5 md:p-6 transition-all duration-300 border-2 border-black rounded-xl"
              >
                <dt>
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between text-left font-[Permanent_Marker] text-xl md:text-2xl gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#e63946]">Q.</span> {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-[Inter] text-lg shrink-0 bg-[#fff9b0]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>

                {/* Featured Snippet Definition Box */}
                <dd
                  id={`faq-answer-${faq.id}`}
                  className={`mt-4 pt-4 border-t border-black/10 transition-all duration-300 ${
                    isOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="bg-amber-50/80 p-4 border-l-4 border-[#e63946] rounded-r-lg mb-3 font-[Kalam] text-base md:text-lg">
                    <strong className="font-[Permanent_Marker] text-[#e63946] block mb-1">
                      Direct Summary (AEO Definition):
                    </strong>
                    {faq.shortAnswer}
                  </div>

                  <p className="font-[Kalam] text-base md:text-lg leading-relaxed text-neutral-800">
                    {faq.fullAnswer}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {faq.tags.map((t) => (
                      <span key={t} className="tag-pill !text-xs !py-0.5 !px-2 !bg-white/80">
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
