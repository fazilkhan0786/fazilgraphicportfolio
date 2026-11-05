/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Floating Retro Article Reader Window Modal
 * Faithfully matches retro window system with complete un-truncated content
 */

import React, { useEffect, useCallback } from "react";
import { Story } from "../data/stories";
import portraitImg from "../assets/portrait.png";

interface StoryReaderModalProps {
  story: Story | null;
  onClose: () => void;
  onNavigate?: (path: string) => void;
}

export const StoryReaderModal: React.FC<StoryReaderModalProps> = ({
  story,
  onClose,
  onNavigate
}) => {
  // Handle keyboard Escape and URL history state
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!story) return;

    // Lock body scroll
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    // Deep link synchronization: update URL to /stories/{slug}/ without reload
    const originalUrl = window.location.pathname + window.location.search;
    const targetUrl = `/stories/${story.slug}/`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ storySlug: story.slug }, "", targetUrl);
    }

    const handlePopState = () => {
      onClose();
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);

      // Restore base stories URL if closing without navigation
      if (window.location.pathname === targetUrl) {
        window.history.pushState(null, "", originalUrl.startsWith("/stories") ? "/stories/" : originalUrl);
      }
    };
  }, [story, handleKeyDown, onClose]);

  if (!story) return null;

  const handleOpenStandalone = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    if (onNavigate) {
      onNavigate(`/stories/${story.slug}/`);
    } else {
      window.location.assign(`/stories/${story.slug}/`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#18130e]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-story-title"
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fbf8ef] border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[10px_10px_0px_#7c3aed] overflow-hidden select-text animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Title Bar */}
        <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-3.5 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between select-none shrink-0">
          <div className="flex items-center gap-2">
            {/* Terminal control dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] border border-[#1a1a1a]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] border border-[#1a1a1a]" />
            </div>
            <span className="font-mono font-bold text-xs sm:text-sm text-[#1a1a1a] ml-2 truncate max-w-[200px] sm:max-w-md">
              // READER.EXE — {story.category.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-mono text-xs font-semibold text-[#1a1a1a]/70">
              ESC to close
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-[#1a1a1a] rounded-md shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center font-mono font-bold text-sm text-[#1a1a1a] hover:bg-[#ef4444] hover:text-white transition-colors cursor-pointer"
              aria-label="Close reader window"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content */}
        <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-6">
          {/* Metadata Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#1a1a1a] border-b-2 border-[#1a1a1a]/15 pb-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#ffd93d] border border-[#1a1a1a] px-2.5 py-1 rounded shadow-[2px_2px_0px_#1a1a1a]">
                {story.category}
              </span>
              <span className="text-[#6b635b]">By {story.author}</span>
            </div>
            <div className="flex items-center gap-3 text-[#6b635b]">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {story.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {story.readTime}
              </span>
            </div>
          </div>

          {/* Article Title & Subtitle */}
          <div>
            <h1
              id="reader-story-title"
              className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-tight tracking-tight mb-3"
            >
              {story.title}
            </h1>
            {story.subtitle && (
              <p className="font-body text-base sm:text-lg text-[#3e3832] leading-relaxed italic border-l-4 border-[#ffd93d] pl-4 py-1">
                {story.subtitle}
              </p>
            )}
          </div>

          {/* Visual Banner Caption if present */}
          {story.featuredVisualCaption && (
            <div className="bg-[#fef9c3] border-2 border-[#1a1a1a] rounded-xl p-3.5 shadow-[3px_3px_0px_#1a1a1a] flex items-center gap-2.5">
              <span className="font-mono text-lg select-none">📌</span>
              <p className="font-mono text-xs text-[#3e3832] leading-snug">
                {story.featuredVisualCaption}
              </p>
            </div>
          )}

          {/* Full Article Content Paragraphs */}
          <div className="space-y-4 pt-2">
            {story.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-base sm:text-lg text-[#1a1a1a] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Styled Pull Quotes */}
          {story.pullQuotes && story.pullQuotes.length > 0 && (
            <div className="my-6 space-y-4">
              {story.pullQuotes.map((pq, i) => (
                <blockquote
                  key={i}
                  className="bg-[#f3e8ff] border-2 border-[#1a1a1a] rounded-xl p-5 shadow-[4px_4px_0px_#7c3aed] relative"
                >
                  <span className="absolute -top-3 left-6 bg-[#ffd93d] border border-[#1a1a1a] px-2 py-0.5 rounded text-xs font-mono font-bold">
                    NOTEBOOK QUOTE
                  </span>
                  <p className="font-display font-bold text-lg sm:text-xl text-[#1a1a1a] italic leading-snug pt-1 mb-2">
                    "{pq.quote}"
                  </p>
                  {pq.attribution && (
                    <cite className="font-mono text-xs font-bold text-[#6b635b] block not-italic">
                      — {pq.attribution}
                    </cite>
                  )}
                </blockquote>
              ))}
            </div>
          )}

          {/* Takeaways Section */}
          {story.takeaways && story.takeaways.length > 0 && (
            <div className="bg-white border-2 border-[#1a1a1a] rounded-xl p-5 sm:p-6 shadow-[5px_5px_0px_#1a1a1a] my-6">
              <h2 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#86efac] border border-[#1a1a1a] rounded-xs" />
                Key Architectural Takeaways &amp; Reflections
              </h2>
              <div className="space-y-3">
                {story.takeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="bg-[#ffd93d] border border-[#1a1a1a] text-[#1a1a1a] w-5 h-5 rounded flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 shadow-[1px_1px_0px_#1a1a1a]">
                      ✓
                    </span>
                    <div>
                      <strong className="font-display font-bold text-sm sm:text-base text-[#1a1a1a] block">
                        {item.point}
                      </strong>
                      <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Cloud */}
          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-mono text-xs font-bold text-[#6b635b]">TOPICS:</span>
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-[#1a1a1a] font-mono text-xs text-[#1a1a1a] font-semibold px-2.5 py-1 rounded shadow-[2px_2px_0px_#1a1a1a]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Bio Card */}
          <div className="bg-[#fffef7] border-2 border-[#1a1a1a] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#1a1a1a] flex items-center gap-4">
            <img
              src={portraitImg}
              alt={story.author}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-[#1a1a1a] object-cover shrink-0 shadow-[2px_2px_0px_#1a1a1a]"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-extrabold text-base text-[#1a1a1a]">
                {story.author}
              </h3>
              <p className="font-mono text-xs text-[#6b635b] truncate">
                {story.authorRole}
              </p>
              <p className="font-body text-xs text-[#3e3832] mt-1">
                Computer Engineering at GTU • Founder @ Promacle • Building NuroVed &amp; software architectures.
              </p>
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="pt-4 border-t-2 border-[#1a1a1a]/15 flex flex-wrap items-center justify-between gap-3 select-none">
            <button
              onClick={onClose}
              className="btn-retro-secondary !text-xs !py-2.5 !px-5 inline-flex items-center gap-1.5"
            >
              <span>← Back to All Stories</span>
            </button>

            <a
              href={`/stories/${story.slug}/`}
              onClick={handleOpenStandalone}
              className="btn-retro-primary !text-xs !py-2.5 !px-5 inline-flex items-center gap-1.5"
            >
              <span>Open Standalone Page ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
