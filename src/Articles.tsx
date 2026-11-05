/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Home Page Section 07 — Stories, Articles & Engineering Reflections
 */

import { stories } from "./data/stories";

export default function Articles({ onNavigate }: { onNavigate?: (path: string) => void }) {
  // Showcase top 3 featured / high-leverage stories on the home page
  const homeStories = stories.slice(0, 3);

  return (
    <section id="articles" className="relative py-24 px-4 sm:px-6 md:px-10 border-t-[2.5px] border-[#1a1a1a]">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="reveal text-center mb-12">
          <span className="section-tag uppercase mb-2 inline-block">// SECTION 06</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight comic-sparks">
            ENGINEERING ESSAYS &amp; <span className="badge-word-purple">REFLECTIONS.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-[#3e3832] max-w-xl mx-auto mt-3">
            First-person technical reflections on founding Promacle, architecting NuroVed, GTU engineering, and product craft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {homeStories.map((story, i) => {
            const cardStyles = ["card-retro-purple", "card-retro-mint", "card-retro-pink"];
            return (
              <article
                key={story.slug}
                className={`reveal ${cardStyles[i % cardStyles.length]} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#1a1a1a] mb-3 font-bold">
                    <span className="bg-white border border-[#1a1a1a] px-2.5 py-0.5 rounded shadow-[1px_1px_0px_#1a1a1a]">
                      {story.category}
                    </span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#1a1a1a] leading-snug mb-3">
                    <a
                      href={`/stories/${story.slug}/`}
                      onClick={(e) => {
                        if (onNavigate && !e.ctrlKey && !e.metaKey) {
                          e.preventDefault();
                          onNavigate(`/stories/${story.slug}/`);
                        }
                      }}
                      className="hover:text-[#e63946] transition-colors"
                    >
                      {story.title}
                    </a>
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#3e3832] leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a]/20 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#6b635b] font-bold">
                    {story.date}
                  </span>
                  <a
                    href={`/stories/${story.slug}/`}
                    onClick={(e) => {
                      if (onNavigate && !e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        onNavigate(`/stories/${story.slug}/`);
                      }
                    }}
                    className="font-bold text-[#1a1a1a] hover:text-[#e63946] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Essay</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Link to view all categories in the Stories archive */}
        <div className="reveal mt-12 text-center">
          <a
            href="/stories/"
            onClick={(e) => {
              if (onNavigate && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                onNavigate("/stories/");
              }
            }}
            className="btn-retro-primary !text-sm !py-3 !px-4 sm:!px-8 inline-flex items-center justify-center text-center max-w-full whitespace-normal sm:whitespace-nowrap gap-2"
          >
            <span>Browse All Engineering Essays ({stories.length} Published) →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
