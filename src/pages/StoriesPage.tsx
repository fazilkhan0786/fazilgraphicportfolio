/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Stories, Startup Journey & Blog Page (Updated with Specifications)
 */

import { useState } from "react";
import { analyticsActions } from "../utils/analytics";

interface StoryPost {
  id: string;
  title: string;
  category: "Biography & Vision" | "Startup Story" | "Healthcare AI" | "Behavioral Systems";
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

const storyPosts: StoryPost[] = [
  {
    id: "mohammad-fazil-malek-building-technology-with-purpose",
    title: "Mohammad Fazil Malek: Building Technology with Purpose, One Innovation at a Time",
    category: "Biography & Vision",
    date: "July 2026",
    readTime: "7 min read",
    excerpt: "The story of Mohammad Fazil Malek (Fazilkhan Malek) — Computer Engineering student at GTU, footballer, founder of Promacle, and architect behind NuroVed.",
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
    id: "promacle-startup-story",
    title: "The Promacle Story: Building Digital Healthcare & AI Products from Ahmedabad",
    category: "Startup Story",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "How Promacle was established in Ahmedabad to solve real operational friction in healthcare (NuroVed), edtech, and behavioral software.",
    tags: ["Promacle", "NuroVed", "Founder Mode", "Ahmedabad Tech"],
    content: [
      "Building products in founder mode requires relentless prioritization and a deep commitment to human outcomes.",
      "Promacle was created to eliminate operational friction. When we engineered NuroVed, our objective was clear: simplify medical records and bridge patient-practitioner communication gaps.",
      "Key Principles at Promacle:",
      "1. Human Outcomes > Demo Polish: Software must solve real-world problems daily.",
      "2. Robust System Architecture: Async Python backends, reactive Flutter mobile interfaces, and clean PostgreSQL schemas.",
      "3. Local Engineering, Global Standards: Operating from Ahmedabad, Gujarat, with global engineering standards."
    ]
  },
  {
    id: "nuroved-healthcare-tech",
    title: "Architecting NuroVed: Patient-Centric Healthcare Systems",
    category: "Healthcare AI",
    date: "May 2026",
    readTime: "5 min read",
    excerpt: "Technical writeup on FastAPI async microservices, Flutter cross-platform mobile architecture, and patient record security.",
    tags: ["FastAPI", "Flutter", "Healthcare AI", "Python", "NuroVed"],
    content: [
      "Healthcare data fragmentation is one of the largest bottlenecks in modern medical care.",
      "NuroVed addresses this by unifying patient health records, streamlining doctor-patient communication, and embedding NLP transcription for fast record keeping."
    ]
  }
];

export default function StoriesPage() {
  const [selectedPost, setSelectedPost] = useState<StoryPost | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Biography & Vision", "Startup Story", "Healthcare AI", "Behavioral Systems"];

  const filteredPosts = filterCategory === "All"
    ? storyPosts
    : storyPosts.filter((p) => p.category === filterCategory);

  const openPost = (post: StoryPost) => {
    setSelectedPost(post);
    analyticsActions.trackArticleRead(post.id, post.title);
  };

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// STORIES &amp; INSIGHTS</span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          stories &amp; <span className="text-[#e63946]">writings</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          my biography, startup journey with Promacle, GTU computer engineering experience, and technical writeups.
        </p>
      </div>

      {/* Category Filters */}
      <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`tag-pill !text-base !px-5 !py-2 transition-all ${
              filterCategory === cat
                ? "!bg-[#1a1a1a] !text-white"
                : "!bg-[#fffef7] text-black hover:!bg-amber-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Biography Header Card */}
      <div
        className="reveal wiggle-box bg-[#fffef7] p-8 md:p-12 border-3 border-black rounded-2xl mb-12 cursor-pointer shadow-md hover:shadow-xl transition-all relative"
        onClick={() => openPost(storyPosts[0])}
      >
        <div className="tape absolute -top-4 right-10 w-24 h-7 rotate-[-3deg]" />
        <span className="bg-[#e63946] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider inline-block mb-3">
          Featured Biography &amp; Article
        </span>
        <h2 className="font-[Permanent_Marker] text-3xl md:text-5xl text-neutral-900 leading-tight mb-4">
          {storyPosts[0].title}
        </h2>
        <p className="font-[Kalam] text-lg text-neutral-700 max-w-3xl leading-relaxed mb-6">
          {storyPosts[0].excerpt}
        </p>
        <div className="flex items-center justify-between font-[Patrick_Hand] text-sm text-neutral-500 border-t border-black/10 pt-4">
          <span>{storyPosts[0].date} • {storyPosts[0].readTime}</span>
          <span className="text-[#e63946] font-bold text-base">Read complete article →</span>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {filteredPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="reveal wiggle-box bg-[#fffef7] p-6 border-2 border-black rounded-xl flex flex-col justify-between cursor-pointer hover:shadow-md transition-all"
            onClick={() => openPost(post)}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-3">
                <span className="bg-[#1a1a1a] text-white px-2 py-0.5 rounded font-bold">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-[Permanent_Marker] text-xl leading-snug mb-3 hover:text-[#e63946] transition-colors">
                {post.title}
              </h3>
              <p className="font-[Kalam] text-sm text-neutral-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-[Patrick_Hand]">
              <span className="text-xs text-neutral-500">{post.date}</span>
              <span className="text-sm text-[#e63946] font-bold">Read article →</span>
            </div>
          </article>
        ))}
      </div>

      {/* Story Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fffef7] border-4 border-black max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 rounded-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-10 h-10 border-2 border-black rounded-full bg-[#fff9b0] font-bold text-xl flex items-center justify-center hover:bg-[#e63946] hover:text-white transition-colors"
              aria-label="Close story"
            >
              ✕
            </button>

            <span className="bg-[#e63946] text-white text-xs px-3 py-1 rounded font-bold inline-block mb-3">
              {selectedPost.category}
            </span>

            <h2 className="font-[Permanent_Marker] text-2xl md:text-4xl leading-tight mb-2">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 font-[Patrick_Hand] text-sm text-neutral-500 mb-6">
              <span>By Mohammad Fazil Malek</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="space-y-4 font-[Kalam] text-base md:text-lg leading-relaxed text-neutral-800 border-t border-black/10 pt-6">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-2">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="tag-pill !text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
