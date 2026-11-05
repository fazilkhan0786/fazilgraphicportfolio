/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Mohammad Fazil Firojkhan Malek
 * Dedicated Stories & Blog Page — Retro Block-Style Engineering Essays & Founder Archive
 * Faithfully matches media_1793868784164.jpg
 */

import { useState, useEffect, useMemo } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { stories, Story } from "../data/stories";
import {
  RetroBlogComputerIllustration,
  ProductCubeIcon,
  AIMicrochipIcon,
  HealthcareCrossIcon,
  DesignPencilIcon,
  FounderUserIcon,
  DevCodeIcon,
  FeaturedStarIcon,
  HealthBadgeIcon,
  ChipBadgeIcon,
  FigmaBadgeIcon,
  RocketBadgeIcon,
  FeaturedStoryPixelCover
} from "../components/RetroBlogVisuals";
import { StoryReaderModal } from "../components/StoryReaderModal";

interface StoriesPageProps {
  onNavigate?: (path: string) => void;
}

type TopicKey = "All" | "Product" | "AI/ML" | "Healthcare" | "Design" | "Founder Life" | "Dev & Tech";

interface TopicConfig {
  key: TopicKey;
  label: string;
  bgClass: string;
  activeBgClass: string;
  shadowClass: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TOPICS: TopicConfig[] = [
  {
    key: "Product",
    label: "Product",
    bgClass: "bg-[#fbcfe8] text-[#1a1a1a]",
    activeBgClass: "bg-[#f472b6] text-white",
    shadowClass: "shadow-[3px_3px_0px_#f472b6]",
    icon: ProductCubeIcon
  },
  {
    key: "AI/ML",
    label: "AI/ML",
    bgClass: "bg-[#bae6fd] text-[#1a1a1a]",
    activeBgClass: "bg-[#0284c7] text-white",
    shadowClass: "shadow-[3px_3px_0px_#38bdf8]",
    icon: AIMicrochipIcon
  },
  {
    key: "Healthcare",
    label: "Healthcare",
    bgClass: "bg-[#bbf7d0] text-[#1a1a1a]",
    activeBgClass: "bg-[#10b981] text-white",
    shadowClass: "shadow-[3px_3px_0px_#86efac]",
    icon: HealthcareCrossIcon
  },
  {
    key: "Design",
    label: "Design",
    bgClass: "bg-[#e9d5ff] text-[#1a1a1a]",
    activeBgClass: "bg-[#7c3aed] text-white",
    shadowClass: "shadow-[3px_3px_0px_#c8b6ff]",
    icon: DesignPencilIcon
  },
  {
    key: "Founder Life",
    label: "Founder Life",
    bgClass: "bg-[#fef08a] text-[#1a1a1a]",
    activeBgClass: "bg-[#eab308] text-white",
    shadowClass: "shadow-[3px_3px_0px_#facc15]",
    icon: FounderUserIcon
  },
  {
    key: "Dev & Tech",
    label: "Dev & Tech",
    bgClass: "bg-[#bae6fd] text-[#1a1a1a]",
    activeBgClass: "bg-[#2563eb] text-white",
    shadowClass: "shadow-[3px_3px_0px_#60a5fa]",
    icon: DevCodeIcon
  }
];

function matchesTopic(story: Story, topic: TopicKey): boolean {
  if (topic === "All") return true;
  if (topic === "Product") {
    return (
      story.category === "Startups" ||
      story.tags.some((t) => /product|nuroved|promacle|architecture/i.test(t))
    );
  }
  if (topic === "AI/ML") {
    return story.tags.some((t) => /ai|machine learning|ml/i.test(t));
  }
  if (topic === "Healthcare") {
    return story.tags.some((t) => /health|nuroved/i.test(t));
  }
  if (topic === "Design") {
    return (
      story.category === "Design" ||
      story.tags.some((t) => /design|ui|ux/i.test(t))
    );
  }
  if (topic === "Founder Life") {
    return (
      story.category === "Startups" ||
      story.category === "Lessons" ||
      story.category === "Personal" ||
      story.tags.some((t) => /founder|personal|discipline|focus/i.test(t))
    );
  }
  if (topic === "Dev & Tech") {
    return (
      story.category === "Technology" ||
      story.tags.some((t) => /fastapi|python|flutter|engineering|systems/i.test(t))
    );
  }
  return false;
}

export default function StoriesPage({ onNavigate }: StoriesPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<TopicKey>("All");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Check URL query parameters or hash to open a story if deep-linked
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const storyParam = params.get("story");
    if (storyParam) {
      const match = stories.find((s) => s.slug === storyParam);
      if (match) setSelectedStory(match);
    }
  }, []);

  // Filtered stories based on current topic
  const filteredStories = useMemo(() => {
    return stories.filter((s) => matchesTopic(s, selectedTopic));
  }, [selectedTopic]);

  // Featured story selection: prefer marked featured or first in list
  const featuredStory = useMemo(() => {
    if (filteredStories.length === 0) return null;
    return filteredStories.find((s) => s.featured) || filteredStories[0];
  }, [filteredStories]);

  // Remaining grid stories for the 2x2 grid
  const gridStories = useMemo(() => {
    if (!featuredStory) return [];
    return filteredStories.filter((s) => s.slug !== featuredStory.slug);
  }, [filteredStories, featuredStory]);

  // Handle topic button click: toggle if clicked again
  const handleTopicClick = (topic: TopicKey) => {
    setSelectedTopic((prev) => (prev === topic ? "All" : topic));
    setCurrentPage(1);
  };

  // Preset styles for the 4 grid cards matching reference
  const gridCardStyles = [
    {
      bgClass: "bg-[#dcfce7]",
      shadowClass: "shadow-[6px_6px_0px_#86efac]",
      iconComponent: HealthBadgeIcon
    },
    {
      bgClass: "bg-[#fce7f3]",
      shadowClass: "shadow-[6px_6px_0px_#f472b6]",
      iconComponent: ChipBadgeIcon
    },
    {
      bgClass: "bg-[#e0f2fe]",
      shadowClass: "shadow-[6px_6px_0px_#38bdf8]",
      iconComponent: FigmaBadgeIcon
    },
    {
      bgClass: "bg-[#fef9c3]",
      shadowClass: "shadow-[6px_6px_0px_#facc15]",
      iconComponent: RocketBadgeIcon
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative select-none">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Stories & Blog", path: "/stories/" }
        ]}
        onNavigate={onNavigate}
      />

      {/* Decorative Pixel Checkerboard Elements */}
      <div
        className="hidden lg:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] absolute top-28 right-12 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
        <span className="bg-transparent" />
        <span className="bg-[#c8b6ff]" />
      </div>

      <div
        className="hidden lg:grid grid-cols-4 grid-rows-2 w-10 h-5 border border-[#1a1a1a] absolute bottom-36 left-8 pointer-events-none opacity-80"
        aria-hidden="true"
      >
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
        <span className="bg-transparent" />
        <span className="bg-[#fb7185]" />
      </div>

      {/* =========================================================================
          HERO SECTION — EXACT THREE-PART REFERENCE COMPOSITION
          Left: Typography & Headlines | Center: BLOG.EXE Computer | Right: Explore Topics Window
         ========================================================================= */}
      <section className="mb-14 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#e9d5ff] border-2 border-[#1a1a1a] rounded-full px-3.5 py-1 font-mono font-bold text-xs text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] mb-3">
              <span>// STORIES &amp; BLOG</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.15rem] text-[#1a1a1a] uppercase tracking-tight leading-[1.08] mb-4">
              IDEAS, BUILDS &amp; <br />
              <span className="bg-[#ffd93d] border-[2.5px] border-[#1a1a1a] px-2.5 py-0.5 rounded-lg shadow-[3px_3px_0px_#1a1a1a] inline-block mr-2.5">
                FOUNDER
              </span>
              <span className="relative bg-[#fb7185] border-[2.5px] border-[#1a1a1a] px-2.5 py-0.5 rounded-lg shadow-[3px_3px_0px_#1a1a1a] inline-block">
                STORIES.
                {/* Comic Action Sparks radiating out */}
                <span
                  className="absolute -top-3.5 -right-4 flex gap-0.5 pointer-events-none select-none text-[#e63946]"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M4 18L1 14" />
                    <path d="M10 10L14 3" />
                    <path d="M16 16L22 14" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description with Vertical Red Accent Bar */}
            <div className="flex items-start gap-3 max-w-md mt-1">
              <span
                className="w-1.5 h-12 bg-[#e63946] rounded-full shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="font-body text-xs sm:text-sm md:text-base text-[#3e3832] leading-relaxed">
                I write about product building, healthcare tech, AI, design, and the real journey of a student founder.
              </p>
            </div>
          </div>

          {/* Middle Column: Vintage BLOG.EXE Computer Illustration */}
          <div className="lg:col-span-3 flex justify-center py-2 lg:py-0">
            <RetroBlogComputerIllustration className="w-full max-w-[270px] sm:max-w-[290px] lg:max-w-[310px]" />
          </div>

          {/* Right Column: Explore by Topic Window */}
          <div className="lg:col-span-4">
            <div className="bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#7c3aed] overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#ffd93d] border-b-[2.5px] border-[#1a1a1a] px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] border border-[#1a1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b] border border-[#1a1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981] border border-[#1a1a1a]" />
                </div>
                <span className="font-mono font-black text-xs text-[#1a1a1a] uppercase tracking-wide">
                  // Explore by Topic
                </span>
                <div className="flex items-center gap-1 font-mono text-[10px] text-[#1a1a1a]/70" aria-hidden="true">
                  <span>_</span>
                  <span>□</span>
                  <span>✕</span>
                </div>
              </div>

              {/* Window Interior: 6 Topic Filter Buttons */}
              <div className="p-4 bg-[#fbf8ef]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TOPICS.map((topic) => {
                    const isSelected = selectedTopic === topic.key;
                    const Icon = topic.icon;
                    return (
                      <button
                        key={topic.key}
                        onClick={() => handleTopicClick(topic.key)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-[#1a1a1a] font-mono text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "!bg-[#1a1a1a] !text-white shadow-[2px_2px_0px_#ffd93d] translate-y-0.5"
                            : `${topic.bgClass} ${topic.shadowClass} hover:-translate-y-0.5`
                        }`}
                        aria-pressed={isSelected}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{topic.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Filter Reset Indicator */}
                {selectedTopic !== "All" && (
                  <div className="mt-3 pt-3 border-t border-[#1a1a1a]/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6b635b]">
                      Filtering by: <strong className="text-[#1a1a1a]">{selectedTopic}</strong>
                    </span>
                    <button
                      onClick={() => setSelectedTopic("All")}
                      className="text-[#e63946] font-bold hover:underline cursor-pointer"
                    >
                      Reset All ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED & SMALLER STORIES SECTION — EXACT COMPOSITION
          Left: 1 Large Featured Story Card | Right: 2x2 Grid of 4 Smaller Cards
         ========================================================================= */}
      {featuredStory ? (
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Large Featured Story Card */}
            <div className="lg:col-span-5 flex flex-col">
              <article
                onClick={() => setSelectedStory(featuredStory)}
                className="bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[8px_8px_0px_#c8b6ff] hover:shadow-[10px_10px_0px_#7c3aed] hover:-translate-y-0.5 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer h-full"
              >
                {/* Large Cover Art with Sunset Pixel Skyline */}
                <div className="relative border-b-[2.5px] border-[#1a1a1a] bg-[#1e1b4b] h-52 sm:h-60 overflow-hidden">
                  <FeaturedStoryPixelCover className="h-full w-full" />
                  {/* Yellow Featured Story Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#ffd93d] border-2 border-[#1a1a1a] px-3 py-1 rounded-lg font-mono font-black text-xs text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                    <FeaturedStarIcon className="w-3.5 h-3.5 text-[#1a1a1a]" />
                    <span>Featured Story</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display font-black text-xl sm:text-2xl text-[#1a1a1a] leading-snug group-hover:text-[#e63946] transition-colors mb-2.5">
                      {featuredStory.title}
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed line-clamp-3 mb-4">
                      {featuredStory.excerpt}
                    </p>
                  </div>

                  {/* Bottom Metadata & Read Button */}
                  <div className="pt-4 border-t-2 border-[#1a1a1a]/15 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-3 text-[#6b635b] font-bold">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {featuredStory.date}
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {featuredStory.readTime}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStory(featuredStory);
                      }}
                      className="bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0px_#1a1a1a] px-3.5 py-1.5 font-mono font-bold text-xs text-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Right: 2x2 Grid of 4 Smaller Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                {gridStories.slice(0, 4).map((story, index) => {
                  const style = gridCardStyles[index % gridCardStyles.length];
                  const BadgeIcon = style.iconComponent;
                  return (
                    <article
                      key={story.slug}
                      onClick={() => setSelectedStory(story)}
                      className={`${style.bgClass} border-[2.5px] border-[#1a1a1a] rounded-2xl ${style.shadowClass} hover:shadow-[8px_8px_0px_#1a1a1a] hover:-translate-y-0.5 transition-all p-5 flex flex-col justify-between group cursor-pointer min-h-[220px]`}
                    >
                      <div>
                        {/* Top: Icon Badge & Category */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <BadgeIcon className="w-9 h-9 shrink-0" />
                          <span className="font-mono text-[11px] font-bold text-[#1a1a1a] bg-white/70 border border-[#1a1a1a] px-2 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                            {story.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1a1a1a] leading-snug group-hover:text-[#e63946] transition-colors mb-2 line-clamp-2">
                          {story.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-body text-xs text-[#3e3832] leading-relaxed line-clamp-2 mb-3">
                          {story.excerpt}
                        </p>
                      </div>

                      {/* Bottom Date & Read Time */}
                      <div className="pt-3 border-t border-[#1a1a1a]/15 flex items-center justify-between font-mono text-[11px] text-[#6b635b] font-bold">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {story.date}
                        </span>
                        <span>|</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {story.readTime}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Empty State for topics with 0 published stories (e.g. AI/ML) */
        <div className="my-16 bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[8px_8px_0px_#ffd93d]">
          <div className="w-16 h-16 bg-[#ffd93d] border-2 border-[#1a1a1a] rounded-2xl shadow-[3px_3px_0px_#1a1a1a] flex items-center justify-center mx-auto mb-4 text-2xl font-mono">
            📝
          </div>
          <h2 className="font-display font-black text-2xl text-[#1a1a1a] uppercase mb-2">
            No entries found in "{selectedTopic}"
          </h2>
          <p className="font-body text-sm text-[#3e3832] max-w-md mx-auto mb-6 leading-relaxed">
            Fazil is currently preparing deep dives and architecture breakdowns for this topic. Check back soon or browse all published founder reflections!
          </p>
          <button
            onClick={() => setSelectedTopic("All")}
            className="btn-retro-primary !text-xs !py-3 !px-6 cursor-pointer"
          >
            Reset Filter / View All Stories ({stories.length}) →
          </button>
        </div>
      )}

      {/* =========================================================================
          PAGINATION / MORE STORIES BANNER
          Full-width cream banner with black outline, pink offset shadow, and numbered blocks
         ========================================================================= */}
      <div className="bg-white border-[2.5px] border-[#1a1a1a] rounded-2xl shadow-[6px_6px_0px_#f472b6] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-2 font-mono font-bold text-sm text-[#1a1a1a]">
          <span>More Stories</span>
          <span className="text-[#e63946]">→</span>
          <span className="text-xs text-[#6b635b] ml-1">
            ({filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"} available)
          </span>
        </div>

        {/* Numbered Page Buttons */}
        <div className="flex items-center gap-1.5 font-mono font-bold text-xs">
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 rounded-lg border-2 border-[#1a1a1a] flex items-center justify-center transition-all cursor-pointer ${
              currentPage === 1
                ? "bg-[#ffd93d] text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]"
                : "bg-white text-[#1a1a1a] hover:bg-[#fbf8ef]"
            }`}
            aria-label="Page 1"
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className="w-8 h-8 rounded-lg border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-[#fbf8ef] flex items-center justify-center cursor-pointer transition-all"
            aria-label="Page 2"
          >
            2
          </button>
          <button
            onClick={() => setCurrentPage(3)}
            className="w-8 h-8 rounded-lg border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] hover:bg-[#fbf8ef] flex items-center justify-center cursor-pointer transition-all"
            aria-label="Page 3"
          >
            3
          </button>
          <span className="px-1 text-[#6b635b]">...</span>
        </div>
      </div>

      {/* Floating Retro Article Reader Modal */}
      {selectedStory && (
        <StoryReaderModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
