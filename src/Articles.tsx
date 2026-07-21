/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Content Strategy & Research Articles Component (Updated with Specifications)
 */

import { useState } from "react";
import { analyticsActions } from "./utils/analytics";

interface Article {
  id: string;
  title: string;
  category: "Biography & Vision" | "Healthcare AI" | "System Architecture" | "Startup Journey";
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

const articles: Article[] = [
  {
    id: "mohammad-fazil-malek-building-technology-with-purpose",
    title: "Mohammad Fazil Malek: Building Technology with Purpose, One Innovation at a Time",
    category: "Biography & Vision",
    date: "July 2026",
    readTime: "7 min read",
    excerpt: "The story of Mohammad Fazil Malek (Fazilkhan Malek) — Computer Engineering student at GTU, footballer, founder of Promacle, and creator of NuroVed.",
    tags: ["Mohammad Fazil Malek", "Fazilkhan", "Promacle", "NuroVed", "GTU", "Ahmedabad", "Healthcare AI"],
    content: [
      "In an era where technology continues to reshape industries, a new generation of founders is emerging with a focus on solving meaningful real-world problems rather than simply creating software. Among them is Mohammad Fazil Malek, professionally known as Fazilkhan Malek, and also recognized as Fazil, Fajil, and Fazilkhan. An Indian entrepreneur, software developer, AI/ML enthusiast, product architect, and footballer, he represents a growing generation of builders who combine technical expertise with long-term vision.",
      "Born into the family of Malek Firojkhan Anvarkhan and Malek Hasinabibi Firojkhan, Mohammad Fazil Malek is currently pursuing a Bachelor of Engineering in Computer Engineering under Gujarat Technological University (GTU). Alongside his academic journey, he has dedicated himself to building products that address practical challenges through technology.",
      "Fazilkhan is the founder of Promacle, a technology company focused on developing innovative digital products. One of its flagship initiatives is NuroVed, a patient-centric healthcare platform designed to simplify health record management and improve communication between patients and healthcare providers. The vision behind NuroVed is to create a more connected healthcare experience by leveraging modern software engineering, artificial intelligence, and user-focused design.",
      "His technical expertise spans full-stack web development, Flutter application development, artificial intelligence, machine learning, UI/UX design, graphic design, website building, video editing, cloud technologies, API development, database architecture, and modern frontend technologies including React, Vite, Tailwind CSS, and GSAP. Rather than viewing programming as only a profession, he approaches it as a tool to create practical solutions with lasting impact.",
      "Beyond software development, Fazilkhan actively participates in innovation programs, technical competitions, hackathons, and collaborative projects that encourage problem-solving and entrepreneurship. He believes continuous learning and hands-on execution are the foundations of meaningful innovation. His portfolio reflects a commitment to writing scalable, secure, and performance-focused applications while maintaining strong attention to design and user experience.",
      "Football has also played an important role in shaping his mindset. The discipline, teamwork, resilience, and leadership developed through sport continue to influence the way he approaches entrepreneurship, product development, and team collaboration.",
      "Throughout his journey, Fazilkhan has focused on combining technical excellence with a clear product vision. His work is guided by the belief that successful technology should be intuitive, accessible, and capable of solving genuine human problems rather than adding unnecessary complexity.",
      "Looking ahead, his ambition extends beyond launching individual products. He aims to build globally recognized technology companies that contribute meaningful innovations across healthcare, artificial intelligence, software engineering, and emerging technologies. By combining engineering, thoughtful product design, and a commitment to continuous improvement, Mohammad Fazil Malek continues to work toward creating solutions that deliver measurable value to users and organizations alike.",
      "As his journey evolves, Fazilkhan Malek represents a generation of entrepreneurs who are driven not only by innovation but also by the desire to build technology that creates lasting positive impact."
    ]
  },
  {
    id: "nuroved-healthcare-architecture",
    title: "Architecting NuroVed: Zero-Fragmentation Healthcare Systems with FastAPI & Flutter",
    category: "Healthcare AI",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "How we eliminated clinical data fragmentation and built a resilient microservices backend with FastAPI, Flutter, and NLP pipelines.",
    tags: ["Healthcare AI", "FastAPI", "Flutter", "System Design"],
    content: [
      "Healthcare data fragmentation is one of the single largest causes of administrative waste and patient drop-off in modern medicine. When clinical workflows are trapped in siloed software, doctors waste time on manual data entry rather than care delivery.",
      "At Promacle, we engineered NuroVed to solve this exact bottleneck. The backend architecture relies on asynchronous Python microservices running on FastAPI, connected to high-performance PostgreSQL database instances managed through Supabase.",
      "Key Architectural Decisions:",
      "1. Mobile & Cross-Platform First: Using Flutter enabled a unified, reactive UI across iOS, Android, and Web with zero state duplication.",
      "2. NLP Data Extraction: Integrated automated medical transcription and record parsing using specialized NLP models, reducing doctor documentation time by over 60%.",
      "3. Zero-Trust Security: End-to-end encryption for patient records with strict role-based access control (RBAC) compliant with global health privacy standards."
    ]
  },
  {
    id: "behavioral-system-architecture",
    title: "Behavioral AI Architecture: Rewiring User Triggers Beyond Vanity Metrics",
    category: "System Architecture",
    date: "May 2026",
    readTime: "5 min read",
    excerpt: "Why traditional app engagement metrics fail and how Actora uses cognitive feedback loops to drive real behavioral change.",
    tags: ["Behavioral AI", "AI Models", "Cognitive Systems"],
    content: [
      "Most modern digital platforms optimize for attention capture — notifications, infinite scroll, and cheap dopamine loops. But attention is not behavioral change.",
      "When designing Actora, our goal was to attack the dopamine loop directly. Instead of encouraging endless scrolling, we engineered dynamic state machines that intercept habit loops at the trigger phase.",
      "By analyzing user friction points in real-time, the system delivers contextual intervention prompts when focus drift occurs. The result is software that actively respects human cognitive throughput while producing measurable habit formation."
    ]
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openArticle = (art: Article) => {
    setSelectedArticle(art);
    analyticsActions.trackArticleRead(art.id, art.title);
  };

  return (
    <section id="articles" className="relative py-28 px-6 md:px-10 crosshatch-bg">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="reveal text-center mb-12">
          <span className="section-num block mb-2">07</span>
          <h2 className="font-[Caveat] font-bold text-5xl md:text-7xl">
            articles &amp; <span className="text-[#e63946]">case studies</span>
          </h2>
          <p className="font-[Patrick_Hand] text-lg text-neutral-600 max-w-xl mx-auto mt-2">
            featured articles, healthcare AI research, and biography writeups.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="reveal wiggle-box bg-[#fffef7] p-6 border-2 border-black rounded-xl flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openArticle(art)}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-3">
                  <span className="bg-[#e63946] text-white px-2 py-0.5 rounded font-bold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-[Permanent_Marker] text-xl leading-snug mb-3 hover:text-[#e63946] transition-colors">
                  {art.title}
                </h3>
                <p className="font-[Kalam] text-sm text-neutral-700 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="font-[Patrick_Hand] text-xs text-neutral-500">{art.date}</span>
                <span className="font-[Patrick_Hand] text-sm text-[#e63946] font-bold">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fffef7] border-4 border-black max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 rounded-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 w-10 h-10 border-2 border-black rounded-full bg-[#fff9b0] font-bold text-xl flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-colors"
              aria-label="Close article"
            >
              ✕
            </button>

            <span className="bg-[#e63946] text-white text-xs px-3 py-1 rounded font-bold inline-block mb-3">
              {selectedArticle.category}
            </span>

            <h2 className="font-[Permanent_Marker] text-2xl md:text-4xl leading-tight mb-2">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 font-[Patrick_Hand] text-sm text-neutral-500 mb-6">
              <span>By Mohammad Fazil Malek</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="space-y-4 font-[Kalam] text-base md:text-lg leading-relaxed text-neutral-800 border-t border-black/10 pt-6">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag) => (
                <span key={tag} className="tag-pill !text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
