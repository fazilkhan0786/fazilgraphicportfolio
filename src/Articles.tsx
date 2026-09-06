/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Home Page Section 07 — Stories, Articles & Engineering Reflections
 */

import { stories } from "./data/stories";

export default function Articles() {
  // Showcase top 3 featured / high-leverage stories on the home page
  const homeStories = stories.slice(0, 3);

  return (
    <section id="articles" className="relative py-28 px-6 md:px-10 crosshatch-bg">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="reveal text-center mb-12">
          <span className="section-num block mb-2">07</span>
          <h2 className="font-[Caveat] font-bold text-5xl md:text-7xl">
            stories &amp; <span className="text-[#e63946]">writings</span>
          </h2>
          <p className="font-[Patrick_Hand] text-lg text-neutral-600 max-w-xl mx-auto mt-2">
            first-person reflections on founding Promacle, building NuroVed, GTU engineering, and product craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeStories.map((story) => (
            <article
              key={story.slug}
              className="reveal wiggle-box bg-[#fffef7] p-6 border-[2px] border-black rounded-lg flex flex-col justify-between shadow-[4px_5px_0_rgba(26,26,26,0.1)] hover:shadow-[6px_8px_0_rgba(26,26,26,0.16)] hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-3">
                  <span className="bg-[#1a1a1a] text-white px-2.5 py-0.5 rounded font-bold">
                    {story.category}
                  </span>
                  <span>⏱ {story.readTime}</span>
                </div>

                <h3 className="font-[Permanent_Marker] text-xl leading-snug mb-3">
                  <a
                    href={`#/stories/${story.slug}`}
                    className="group-hover:text-[#e63946] transition-colors"
                  >
                    {story.title}
                  </a>
                </h3>

                <p className="font-[Kalam] text-sm text-neutral-700 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="font-[Patrick_Hand] text-xs text-neutral-500">
                  {story.date} • {story.author}
                </span>
                <a
                  href={`#/stories/${story.slug}`}
                  className="font-[Patrick_Hand] text-sm text-[#e63946] font-bold hover:underline underline-hand"
                  style={{ textDecorationColor: "#e63946" }}
                >
                  Read entry →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Link to view all categories in the Stories archive */}
        <div className="reveal mt-12 text-center">
          <a
            href="#/stories"
            className="btn-hand btn-filled inline-flex items-center gap-2 text-base md:text-lg"
          >
            <span>Browse all notebook writings &amp; categories ({stories.length} published)</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
