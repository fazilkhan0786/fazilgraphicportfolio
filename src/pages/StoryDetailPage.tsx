/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Dedicated Story Detail Page — Editorial Notebook Reading Experience
 */

import { useEffect } from "react";
import {
  getStoryBySlug,
  getNextPrevStories,
  getRelatedStories,
} from "../data/stories";
import { setStorySEO, resetBaseSEO } from "../utils/seo";
import { analyticsActions } from "../utils/analytics";
import portraitImg from "../assets/portrait.png";

interface StoryDetailPageProps {
  slug: string;
  onNavigateHome?: () => void;
}

export default function StoryDetailPage({ slug }: StoryDetailPageProps) {
  const story = getStoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (story) {
      setStorySEO(story);
      analyticsActions.trackArticleRead(story.slug, story.title);
    }

    return () => {
      resetBaseSEO();
    };
  }, [slug, story]);

  // Observer for animation reveals
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [slug]);

  if (!story) {
    return (
      <div className="py-28 px-6 md:px-10 max-w-3xl mx-auto text-center">
        <div className="bg-[#fffef7] border-[2.5px] border-black rounded-lg p-10 shadow-[6px_8px_0_rgba(26,26,26,0.12)] relative">
          <div className="tape absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 rotate-[-1deg]" />
          <span className="font-[Patrick_Hand] text-lg text-[#e63946] block mb-2">// 404 NOTEBOOK ENTRY</span>
          <h1 className="font-[Permanent_Marker] text-3xl md:text-5xl mb-4">
            Story Not Found
          </h1>
          <p className="font-[Kalam] text-lg text-neutral-600 mb-8 leading-relaxed">
            This notebook entry does not exist or may have been moved.
          </p>
          <a
            href="#/stories"
            className="btn-hand btn-filled inline-block"
          >
            ← Return to All Stories
          </a>
        </div>
      </div>
    );
  }

  const { prev, next } = getNextPrevStories(story.slug);
  const related = getRelatedStories(story.slug, 2);

  return (
    <article className="py-20 md:py-28 px-6 md:px-10 max-w-4xl mx-auto">
      {/* Back to archive link */}
      <div className="mb-8">
        <a
          href="#/stories"
          className="inline-flex items-center gap-2 font-[Patrick_Hand] text-base md:text-lg text-neutral-600 hover:text-[#e63946] transition-colors"
        >
          <span>←</span>
          <span className="underline-hand" style={{ textDecorationColor: "#e63946" }}>
            All Stories &amp; Notebook Archive
          </span>
        </a>
      </div>

      {/* Main Story Sheet */}
      <div className="bg-[#fffef7] border-[2.5px] border-black rounded-lg p-7 md:p-12 shadow-[8px_10px_0_rgba(26,26,26,0.12)] relative">
        {/* Decorative Tape */}
        <div className="tape absolute -top-4 right-12 w-28 h-7 rotate-[2deg] hidden sm:block" />
        <div className="tape absolute -top-4 left-12 w-24 h-6 rotate-[-3deg] hidden sm:block" />

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-black/15 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="bg-[#1a1a1a] text-white font-[Patrick_Hand] text-xs md:text-sm px-3 py-1 rounded font-bold tracking-wide">
              {story.category}
            </span>
            <span className="font-[Patrick_Hand] text-sm text-neutral-500">
              {story.date}
            </span>
          </div>

          <div className="font-[Patrick_Hand] text-sm text-neutral-500 flex items-center gap-2">
            <span>⏱ {story.readTime}</span>
            <span>•</span>
            <span className="text-[#e63946] font-semibold">Author: {story.author}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <header className="mb-10">
          <h1 className="font-[Permanent_Marker] text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-[1.18] mb-5">
            {story.title}
          </h1>
          <p className="font-[Kalam] text-lg md:text-xl text-neutral-700 leading-relaxed italic border-l-4 border-[#e63946] pl-4">
            {story.subtitle}
          </p>
        </header>

        {/* Featured Visual / Notebook Sketch Block */}
        <div className="mb-10 bg-[#faf6ee] border-2 border-black/20 rounded-md p-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-3 border-b border-black/10 pb-2">
            <span>// ARCHIVE SKETCH NOTE</span>
            <span>AHMEDABAD, GUJARAT</span>
          </div>
          <div className="font-[Caveat] text-2xl md:text-3xl text-neutral-800 text-center py-6 px-4 bg-white/70 border border-dashed border-black/20 rounded">
            "{story.excerpt}"
          </div>
          {story.featuredVisualCaption && (
            <p className="font-[Patrick_Hand] text-xs md:text-sm text-neutral-500 text-center mt-3">
              ✦ {story.featuredVisualCaption}
            </p>
          )}
        </div>

        {/* Main Content Paragraphs */}
        <div className="space-y-6 text-neutral-900 font-[Inter] text-base md:text-lg leading-[1.85] font-normal">
          {story.content.map((paragraph, idx) => (
            <p key={idx} className="tracking-normal">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pull Quote */}
        {story.pullQuotes && story.pullQuotes.length > 0 && (
          <div className="my-12 py-6 px-8 bg-[#fff9b0]/50 border-l-[5px] border-[#e63946] rounded-r-lg relative">
            <span className="font-[Caveat] text-6xl text-[#e63946]/40 absolute -top-4 left-2 select-none pointer-events-none">
              “
            </span>
            <blockquote className="font-[Caveat] text-2xl md:text-3xl text-neutral-900 leading-snug relative z-10">
              {story.pullQuotes[0].quote}
            </blockquote>
            {story.pullQuotes[0].attribution && (
              <cite className="block font-[Patrick_Hand] text-base text-neutral-600 mt-3 not-italic">
                — {story.pullQuotes[0].attribution}
              </cite>
            )}
          </div>
        )}

        {/* "What I Learned" Notebook Box */}
        {story.takeaways && story.takeaways.length > 0 && (
          <div className="my-12 p-6 md:p-8 bg-[#fff9db] border-[2px] border-black rounded-lg shadow-[4px_5px_0_rgba(26,26,26,0.1)] relative">
            <div className="tape absolute -top-3 left-8 w-24 h-5 rotate-[-2deg]" />
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📌</span>
              <h3 className="font-[Permanent_Marker] text-xl md:text-2xl text-neutral-900">
                What I Learned
              </h3>
            </div>
            <p className="font-[Patrick_Hand] text-sm text-neutral-600 mb-5">
              Direct takeaways and practical principles recorded from this experience:
            </p>

            <ul className="space-y-4">
              {story.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-[Permanent_Marker] text-sm bg-[#1a1a1a] text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-[Kalam] font-bold text-base md:text-lg text-neutral-900">
                      {item.point}
                    </h4>
                    <p className="font-[Patrick_Hand] text-sm md:text-base text-neutral-700 leading-relaxed mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-black/15 flex flex-wrap items-center gap-2">
          <span className="font-[Patrick_Hand] text-xs text-neutral-500 uppercase tracking-wider mr-1">
            Tags:
          </span>
          {story.tags.map((tag) => (
            <span key={tag} className="tag-pill !text-xs !py-0.5 !px-2.5">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-black/20 flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#faf6ee] p-6 rounded-lg border border-black/10">
          <img
            src={portraitImg}
            alt="Fazil Malek"
            className="w-20 h-20 rounded-full border-2 border-black object-cover shadow-[3px_3px_0_rgba(0,0,0,0.1)] shrink-0"
          />
          <div className="text-center sm:text-left">
            <span className="font-[Patrick_Hand] text-xs text-[#e63946] uppercase tracking-wider block font-bold">
              Written by
            </span>
            <h4 className="font-[Permanent_Marker] text-xl text-neutral-900">
              {story.author}
            </h4>
            <p className="font-[Patrick_Hand] text-sm text-neutral-600 mb-2">
              {story.authorRole}
            </p>
            <p className="font-[Kalam] text-sm text-neutral-700 leading-relaxed mb-3">
              Indian entrepreneur and Computer Engineering student at Gujarat Technological University (GTU). Founder of Promacle, builder of NuroVed, and footballer based in Ahmedabad.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 font-[Patrick_Hand] text-sm">
              <a
                href="https://github.com/fazilkhan0786"
                target="_blank"
                rel="me noopener noreferrer"
                className="underline-hand hover:text-[#e63946]"
                style={{ textDecorationColor: "#1a1a1a" }}
              >
                GitHub ↗
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/fazilkhan-malek-392082377"
                target="_blank"
                rel="me noopener noreferrer"
                className="underline-hand hover:text-[#e63946]"
                style={{ textDecorationColor: "#1a1a1a" }}
              >
                LinkedIn ↗
              </a>
              <span>•</span>
              <a
                href="https://fazilportfolio.me/"
                className="underline-hand hover:text-[#e63946]"
                style={{ textDecorationColor: "#e63946" }}
              >
                fazilportfolio.me ↗
              </a>
            </div>
          </div>
        </div>

        {/* Next & Previous Story Navigation */}
        <div className="mt-12 pt-8 border-t border-black/15 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <a
              href={`#/stories/${prev.slug}`}
              className="p-4 bg-[#fffdf5] border-2 border-black rounded-lg hover:-translate-y-0.5 hover:shadow-[4px_5px_0_rgba(26,26,26,0.12)] transition-all group"
            >
              <span className="font-[Patrick_Hand] text-xs text-neutral-500 block mb-1">
                ← Previous Entry ({prev.category})
              </span>
              <h5 className="font-[Permanent_Marker] text-sm md:text-base text-neutral-900 group-hover:text-[#e63946] transition-colors leading-snug">
                {prev.title}
              </h5>
            </a>
          ) : (
            <div className="p-4 border-2 border-dashed border-black/15 rounded-lg opacity-40 font-[Patrick_Hand] text-xs flex items-center justify-center">
              First entry in archive
            </div>
          )}

          {next ? (
            <a
              href={`#/stories/${next.slug}`}
              className="p-4 bg-[#fffdf5] border-2 border-black rounded-lg hover:-translate-y-0.5 hover:shadow-[4px_5px_0_rgba(26,26,26,0.12)] transition-all group text-right"
            >
              <span className="font-[Patrick_Hand] text-xs text-neutral-500 block mb-1">
                Next Entry ({next.category}) →
              </span>
              <h5 className="font-[Permanent_Marker] text-sm md:text-base text-neutral-900 group-hover:text-[#e63946] transition-colors leading-snug">
                {next.title}
              </h5>
            </a>
          ) : (
            <div className="p-4 border-2 border-dashed border-black/15 rounded-lg opacity-40 font-[Patrick_Hand] text-xs flex items-center justify-center">
              Latest entry in archive
            </div>
          )}
        </div>
      </div>

      {/* Related Stories Section */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="section-num text-xs">✦</span>
            <h3 className="font-[Permanent_Marker] text-2xl text-neutral-900">
              Related Notebook Stories
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`#/stories/${rel.slug}`}
                className="bg-[#fffef7] border-[2px] border-black rounded-lg p-6 shadow-[4px_5px_0_rgba(26,26,26,0.08)] hover:shadow-[6px_8px_0_rgba(26,26,26,0.14)] hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-[Patrick_Hand] text-neutral-500 mb-2">
                    <span className="bg-[#1a1a1a] text-white px-2 py-0.5 rounded font-bold">
                      {rel.category}
                    </span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="font-[Permanent_Marker] text-lg text-neutral-900 group-hover:text-[#e63946] transition-colors leading-snug mb-2">
                    {rel.title}
                  </h4>
                  <p className="font-[Kalam] text-xs text-neutral-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between font-[Patrick_Hand] text-xs text-neutral-500">
                  <span>{rel.date}</span>
                  <span className="text-[#e63946] font-bold">Read story →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
