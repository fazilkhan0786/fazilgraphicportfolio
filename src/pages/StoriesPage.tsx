/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Dedicated Stories, Startup Journey & Personal Publishing Archive
 */

import { useState, useEffect } from "react";
import {
  stories,
  ALL_CATEGORIES,
  StoryCategory,
  Story,
} from "../data/stories";

export default function StoriesPage() {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectors =
        ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .stagger, .stagger-children, .draw-line";
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
  }, [filterCategory]);

  const categories: string[] = ["All", ...ALL_CATEGORIES];

  const filteredStories: Story[] =
    filterCategory === "All"
      ? stories
      : stories.filter((s) => s.category === (filterCategory as StoryCategory));

  const featuredStory =
    filterCategory === "All"
      ? stories.find((s) => s.featured) || stories[0]
      : filteredStories[0];

  const gridStories =
    filterCategory === "All"
      ? filteredStories.filter((s) => s.slug !== featuredStory?.slug)
      : filteredStories.filter((s) => s.slug !== featuredStory?.slug);

  // Count items per category
  const getCategoryCount = (cat: string) => {
    if (cat === "All") return stories.length;
    return stories.filter((s) => s.category === cat).length;
  };

  return (
    <div className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Editorial Page Header */}
      <div className="reveal text-center mb-12">
        <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">
          // STORIES, LESSONS &amp; STARTUP ARCHIVE
        </span>
        <h1 className="font-[Caveat] font-bold text-6xl md:text-8xl leading-none">
          stories &amp; <span className="text-[#e63946]">reflections</span>
        </h1>
        <p className="font-[Kalam] text-xl text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Documenting my real journey as a founder, computer engineering student at GTU, product architect, and builder in Ahmedabad.
        </p>
      </div>

      {/* 8-Category Filter Bar with Item Counts */}
      <div className="reveal flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto">
        {categories.map((cat) => {
          const count = getCategoryCount(cat);
          const isSelected = filterCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`tag-pill !text-sm md:!text-base !px-4 !py-1.5 transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? "!bg-[#1a1a1a] !text-white !border-black shadow-[2px_2px_0_#e63946]"
                  : "!bg-[#fffef7] text-neutral-800 hover:!bg-amber-100"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-xs px-1.5 py-0.2 rounded-full font-bold font-[Patrick_Hand] ${
                  isSelected ? "bg-[#e63946] text-white" : "bg-black/10 text-neutral-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Story Hero Card */}
      {featuredStory && (
        <div className="reveal mb-14">
          <div className="bg-[#fffef7] p-8 md:p-12 border-[2.5px] border-black rounded-lg shadow-[6px_8px_0_rgba(26,26,26,0.12)] hover:shadow-[8px_12px_0_rgba(26,26,26,0.18)] transition-all relative">
            <div className="tape absolute -top-4 right-10 w-28 h-7 rotate-[-3deg]" />
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="bg-[#e63946] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider inline-block">
                Featured Entry • {featuredStory.category}
              </span>
              <div className="font-[Patrick_Hand] text-sm text-neutral-500">
                <span>By {featuredStory.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredStory.date}</span>
                <span className="mx-2">•</span>
                <span>⏱ {featuredStory.readTime}</span>
              </div>
            </div>

            <h2 className="font-[Permanent_Marker] text-2xl sm:text-3xl md:text-5xl text-neutral-900 leading-tight mb-4">
              <a
                href={`#/stories/${featuredStory.slug}`}
                className="hover:text-[#e63946] transition-colors"
              >
                {featuredStory.title}
              </a>
            </h2>

            <p className="font-[Kalam] text-lg text-neutral-700 max-w-4xl leading-relaxed mb-6">
              {featuredStory.subtitle || featuredStory.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between font-[Patrick_Hand] text-sm text-neutral-500 border-t border-black/10 pt-4 gap-4">
              <div className="flex flex-wrap gap-2">
                {featuredStory.tags.map((tag) => (
                  <span key={tag} className="tag-pill !text-xs !py-0.5">
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={`#/stories/${featuredStory.slug}`}
                className="text-[#e63946] font-bold text-base md:text-lg flex items-center gap-1 hover:underline underline-hand"
                style={{ textDecorationColor: "#e63946" }}
              >
                Read full notebook entry →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Stories */}
      {gridStories.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {gridStories.map((post) => (
            <article
              key={post.slug}
              className="reveal bg-[#fffef7] p-7 border-2 border-black rounded-lg flex flex-col justify-between shadow-[4px_5px_0_rgba(26,26,26,0.1)] hover:shadow-[6px_8px_0_rgba(26,26,26,0.16)] hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-3">
                  <span className="bg-[#1a1a1a] text-white px-2.5 py-0.5 rounded font-bold">
                    {post.category}
                  </span>
                  <span>⏱ {post.readTime}</span>
                </div>

                <h3 className="font-[Permanent_Marker] text-xl md:text-2xl leading-snug mb-3">
                  <a
                    href={`#/stories/${post.slug}`}
                    className="hover:text-[#e63946] transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="font-[Kalam] text-base text-neutral-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between font-[Patrick_Hand]">
                <span className="text-xs text-neutral-500">
                  {post.date} • {post.author}
                </span>
                <a
                  href={`#/stories/${post.slug}`}
                  className="text-sm text-[#e63946] font-bold hover:underline"
                >
                  Read entry →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Empty State for categories with no stories yet */}
      {filteredStories.length === 0 && (
        <div className="reveal text-center py-20 bg-[#fffef7] border-2 border-dashed border-black/25 rounded-lg max-w-2xl mx-auto p-8 shadow-[4px_4px_0_rgba(0,0,0,0.06)] relative">
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 rotate-[1deg]" />
          <span className="text-3xl mb-2 block">📓</span>
          <h3 className="font-[Permanent_Marker] text-2xl text-neutral-900 mb-2">
            No entries yet in "{filterCategory}"
          </h3>
          <p className="font-[Kalam] text-base text-neutral-600 mb-6 max-w-md mx-auto">
            Fazil is preparing reflections and case studies for this category. Stay tuned as new real experiences are documented.
          </p>
          <button
            onClick={() => setFilterCategory("All")}
            className="btn-hand btn-filled text-sm"
          >
            ← View All Stories ({stories.length})
          </button>
        </div>
      )}
    </div>
  );
}
