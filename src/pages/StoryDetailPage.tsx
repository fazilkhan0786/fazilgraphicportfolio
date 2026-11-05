/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Story Detail Page — Retro Block-Style Reading Experience
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
import Breadcrumbs from "../components/Breadcrumbs";

interface StoryDetailPageProps {
  slug: string;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export default function StoryDetailPage({ slug, onNavigate }: StoryDetailPageProps) {
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
        <div className="bg-[#fbf8ef] border-[2.5px] border-[#1a1a1a] rounded-2xl p-10 shadow-[8px_8px_0px_#ef4444] relative">
          <span className="font-mono text-xs text-[#e63946] font-bold block mb-2">// 404 NOTEBOOK ENTRY</span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-[#1a1a1a] mb-4">
            Story Not Found
          </h1>
          <p className="font-body text-base text-[#3e3832] mb-8 leading-relaxed">
            This notebook entry does not exist or may have been moved.
          </p>
          <a
            href="/stories/"
            onClick={(e) => {
              if (onNavigate && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                onNavigate("/stories/");
              }
            }}
            className="btn-retro-primary inline-block"
          >
            Return to All Stories
          </a>
        </div>
      </div>
    );
  }

  const { prev, next } = getNextPrevStories(story.slug);
  const related = getRelatedStories(story.slug, 2);

  return (
    <article className="py-20 md:py-28 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto select-text">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Stories & Blog", path: "/stories/" },
          { label: story.title, path: `/stories/${story.slug}/` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Back to archive link */}
      <div className="mb-8">
        <a
          href="/stories/"
          onClick={(e) => {
            if (onNavigate && !e.ctrlKey && !e.metaKey) {
              e.preventDefault();
              onNavigate("/stories/");
            }
          }}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1a1a1a] hover:text-[#e63946] transition-colors"
        >
          <span>← Back to All Stories &amp; Blog Archive</span>
        </a>
      </div>

      {/* Main Story Sheet */}
      <div className="bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[10px_10px_0px_#7c3aed] relative">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#1a1a1a]/15 pb-6 mb-8 font-mono text-xs font-bold text-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <span className="bg-[#ffd93d] border border-[#1a1a1a] px-3 py-1 rounded shadow-[2px_2px_0px_#1a1a1a] tracking-wide">
              {story.category}
            </span>
            <span className="text-[#6b635b]">
              {story.date}
            </span>
          </div>

          <div className="text-[#6b635b] flex items-center gap-2">
            <span>{story.readTime}</span>
            <span>•</span>
            <span className="text-[#e63946] font-bold">Author: {story.author}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <header className="mb-10">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-[1.12] tracking-tight mb-5">
            {story.title}
          </h1>
          {story.subtitle && (
            <p className="font-body text-base sm:text-lg text-[#3e3832] leading-relaxed italic border-l-4 border-[#ffd93d] pl-4 py-1">
              {story.subtitle}
            </p>
          )}
        </header>

        {/* Featured Visual / Archive Sketch Block */}
        <div className="mb-10 bg-[#fbf8ef] border-2 border-[#1a1a1a] rounded-xl p-6 relative overflow-hidden shadow-[4px_4px_0px_#1a1a1a]">
          <div className="flex items-center justify-between font-mono text-xs text-[#6b635b] mb-3 border-b border-[#1a1a1a]/15 pb-2">
            <span>// ARCHIVE SKETCH NOTE</span>
            <span className="font-bold text-[#1a1a1a]">AHMEDABAD, GUJARAT</span>
          </div>
          <div className="font-display font-bold text-lg sm:text-xl text-[#1a1a1a] text-center py-5 px-4 bg-white border border-[#1a1a1a] rounded-lg">
            "{story.excerpt}"
          </div>
          {story.featuredVisualCaption && (
            <p className="font-mono text-xs text-[#6b635b] text-center mt-3">
              ✦ {story.featuredVisualCaption}
            </p>
          )}
        </div>

        {/* Main Content Paragraphs */}
        <div className="space-y-6 text-[#1a1a1a] font-body text-base md:text-lg leading-[1.85] font-normal">
          {story.content.map((paragraph, idx) => (
            <p key={idx} className="tracking-normal">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pull Quote */}
        {story.pullQuotes && story.pullQuotes.length > 0 && (
          <div className="my-10 py-6 px-8 bg-[#f3e8ff] border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0px_#7c3aed] relative">
            <span className="absolute -top-3 left-6 bg-[#ffd93d] border border-[#1a1a1a] px-2 py-0.5 rounded text-xs font-mono font-bold">
              NOTEBOOK QUOTE
            </span>
            <blockquote className="font-display font-bold text-xl md:text-2xl text-[#1a1a1a] leading-snug pt-1 mb-2">
              "{story.pullQuotes[0].quote}"
            </blockquote>
            {story.pullQuotes[0].attribution && (
              <cite className="block font-mono text-xs font-bold text-[#6b635b] not-italic">
                — {story.pullQuotes[0].attribution}
              </cite>
            )}
          </div>
        )}

        {/* "What I Learned" Architecture Box */}
        {story.takeaways && story.takeaways.length > 0 && (
          <div className="my-10 p-6 md:p-8 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[5px_5px_0px_#1a1a1a]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#86efac] border border-[#1a1a1a] rounded-xs" />
              <h3 className="font-display font-extrabold text-xl text-[#1a1a1a] uppercase">
                What I Learned
              </h3>
            </div>
            <p className="font-mono text-xs text-[#6b635b] mb-5">
              Direct takeaways and practical principles recorded from this experience:
            </p>

            <ul className="space-y-4">
              {story.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="bg-[#ffd93d] border border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#1a1a1a]">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#1a1a1a]">
                      {item.point}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a]/15 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#6b635b] uppercase tracking-wider mr-1">
            Tags:
          </span>
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white border border-[#1a1a1a] font-mono text-xs text-[#1a1a1a] font-semibold px-2.5 py-1 rounded shadow-[2px_2px_0px_#1a1a1a]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 pt-8 border-t-2 border-[#1a1a1a]/15 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#fbf8ef] p-6 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
          <img
            src={portraitImg}
            alt="Fazil Malek"
            width="80"
            height="80"
            className="w-20 h-20 rounded-xl border-2 border-[#1a1a1a] object-cover shadow-[2px_2px_0px_#1a1a1a] shrink-0"
          />
          <div className="text-center sm:text-left flex-1">
            <span className="font-mono text-xs text-[#e63946] uppercase tracking-wider block font-bold">
              Written by
            </span>
            <h4 className="font-display font-extrabold text-xl text-[#1a1a1a]">
              {story.author}
            </h4>
            <p className="font-mono text-xs text-[#6b635b] mb-2">
              {story.authorRole}
            </p>
            <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed mb-3">
              Indian entrepreneur and Computer Engineering student at Sal College Of Engineering backed by Gujarat Technological University (GTU). Founder of Promacle, builder of NuroVed, and footballer based in Ahmedabad.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 font-mono text-xs font-bold">
              <a
                href="https://github.com/fazilkhan0786"
                target="_blank"
                rel="me noopener noreferrer"
                className="hover:text-[#e63946] transition-colors"
              >
                GitHub ↗
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/fazilkhan-malek-392082377"
                target="_blank"
                rel="me noopener noreferrer"
                className="hover:text-[#e63946] transition-colors"
              >
                LinkedIn ↗
              </a>
              <span>•</span>
              <a
                href="https://fazilportfolio.me/"
                className="hover:text-[#e63946] transition-colors"
              >
                fazilportfolio.me
              </a>
            </div>
          </div>
        </div>

        {/* Next & Previous Story Navigation */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]/15 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <a
              href={`/stories/${prev.slug}/`}
              onClick={(e) => {
                if (onNavigate && !e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  onNavigate(`/stories/${prev.slug}/`);
                }
              }}
              className="p-4 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0px_#1a1a1a] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#1a1a1a] transition-all group"
            >
              <span className="font-mono text-xs text-[#6b635b] font-bold block mb-1">
                ← Previous Entry ({prev.category})
              </span>
              <h5 className="font-display font-extrabold text-sm md:text-base text-[#1a1a1a] group-hover:text-[#e63946] transition-colors leading-snug">
                {prev.title}
              </h5>
            </a>
          ) : (
            <div className="p-4 border-2 border-dashed border-[#1a1a1a]/30 rounded-xl opacity-50 font-mono text-xs flex items-center justify-center">
              First entry in archive
            </div>
          )}

          {next ? (
            <a
              href={`/stories/${next.slug}/`}
              onClick={(e) => {
                if (onNavigate && !e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  onNavigate(`/stories/${next.slug}/`);
                }
              }}
              className="p-4 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0px_#1a1a1a] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#1a1a1a] transition-all group text-right"
            >
              <span className="font-mono text-xs text-[#6b635b] font-bold block mb-1">
                Next Entry ({next.category}) →
              </span>
              <h5 className="font-display font-extrabold text-sm md:text-base text-[#1a1a1a] group-hover:text-[#e63946] transition-colors leading-snug">
                {next.title}
              </h5>
            </a>
          ) : (
            <div className="p-4 border-2 border-dashed border-[#1a1a1a]/30 rounded-xl opacity-50 font-mono text-xs flex items-center justify-center">
              Latest entry in archive
            </div>
          )}
        </div>
      </div>

      {/* Related Stories Section */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-[#ffd93d] border border-[#1a1a1a] rounded-xs" />
            <h3 className="font-display font-black text-2xl text-[#1a1a1a] uppercase">
              Related Notebook Stories
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/stories/${rel.slug}/`}
                onClick={(e) => {
                  if (onNavigate && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    onNavigate(`/stories/${rel.slug}/`);
                  }
                }}
                className="bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl p-6 shadow-[5px_5px_0px_#c8b6ff] hover:shadow-[7px_7px_0px_#7c3aed] hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#6b635b] font-bold mb-2">
                    <span className="bg-[#ffd93d] text-[#1a1a1a] border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                      {rel.category}
                    </span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="font-display font-extrabold text-lg text-[#1a1a1a] group-hover:text-[#e63946] transition-colors leading-snug mb-2">
                    {rel.title}
                  </h4>
                  <p className="font-body text-xs text-[#3e3832] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1a1a1a]/15 flex items-center justify-between font-mono text-xs text-[#6b635b] font-bold">
                  <span>{rel.date}</span>
                  <span className="text-[#e63946]">Read story →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
