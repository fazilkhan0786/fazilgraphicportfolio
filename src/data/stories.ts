/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Publishing Data Store — Stories, Notebook Entries & Reflections
 */

export type StoryCategory =
  | "Personal"
  | "Startups"
  | "Building"
  | "Struggles"
  | "Wins"
  | "Lessons"
  | "Design"
  | "Technology";

export interface StoryPullQuote {
  quote: string;
  attribution?: string;
}

export interface StoryTakeaway {
  point: string;
  detail: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  category: StoryCategory;
  author: string;
  authorRole: string;
  authorUrl: string;
  date: string;
  isoDate: string;
  modifiedDate?: string;
  readTime: string;
  excerpt: string;
  coverImage?: string;
  featuredVisualCaption?: string;
  content: string[];
  pullQuotes?: StoryPullQuote[];
  takeaways: StoryTakeaway[];
  tags: string[];
  featured?: boolean;
}

export const ALL_CATEGORIES: StoryCategory[] = [
  "Personal",
  "Startups",
  "Building",
  "Struggles",
  "Wins",
  "Lessons",
  "Design",
  "Technology",
];

export const stories: Story[] = [
  {
    slug: "why-i-started-nuroved",
    title: "Why I Started NuroVed: Fixing the Small Fractures in Everyday Healthcare",
    subtitle: "How seeing doctors battle disjointed software and patients lose vital records convinced me to build a simpler, patient-centric healthcare platform.",
    category: "Startups",
    author: "Fazil Malek",
    authorRole: "Founder @ Promacle • B.E. Computer Engineering @ GTU",
    authorUrl: "https://fazilportfolio.me",
    date: "June 2026",
    isoDate: "2026-06-15",
    modifiedDate: "2026-07-20",
    readTime: "6 min read",
    excerpt: "The origin story of NuroVed and why Promacle chose healthcare infrastructure over easy consumer apps. A look at medical record fragmentation from Ahmedabad, Gujarat.",
    featuredVisualCaption: "Early architecture sketches of NuroVed patient record sync, drafted on grid paper in Ahmedabad.",
    content: [
      "Most software problems look trivial from thirty thousand feet. When you examine healthcare software through investor pitch decks, you see polished dashboards, automated billing, and promises of end-to-end hospital management. But when you sit in an actual clinic in Ahmedabad, the reality looks completely different.",
      "Doctors spend more time clicking through poorly organized desktop menus than looking their patients in the eye. Meanwhile, patients carry manila folders stuffed with loose lab reports, paper prescriptions with fading ink, and imaging CDs that nobody has a disc drive to read anymore. When someone switches doctors or visits an emergency room, their medical history effectively resets to zero.",
      "That disconnect is why I founded Promacle, and it is why NuroVed became our primary focus. We did not set out to build an all-encompassing enterprise hospital system that takes six months of training to understand. We set out to fix the immediate, painful breakdown: making a patient's health records portable, clean, and immediately comprehensible to any doctor they consult.",
      "Building healthcare software teaches you humility very quickly. In consumer tech, a small bug causes a minor user annoyance. In medical software, an incorrect allergy note or a delayed record sync can directly compromise someone's care. That responsibility forces you to build with extreme care, verify your schemas rigorously, and throw away any feature that adds confusion.",
      "NuroVed is still in active development, but the core thesis remains unchanged: healthcare software should feel invisible to the patient and effortless for the practitioner. Every line of code we write is tested against that standard."
    ],
    pullQuotes: [
      {
        quote: "In medical software, an incorrect record sync can compromise care. That responsibility forces you to build with extreme care.",
        attribution: "Fazil Malek"
      }
    ],
    takeaways: [
      {
        point: "Real pain points live in clinics, not pitch decks",
        detail: "Spending time observing actual consultations reveals that software usability in healthcare is a clinical safety issue, not just a design preference."
      },
      {
        point: "Simplicity is a moral requirement in health tech",
        detail: "Complex interfaces create data entry fatigue. If a system requires a multi-day onboarding course, doctors will revert to paper."
      },
      {
        point: "Patient ownership over data is the foundation",
        detail: "When patients hold their encrypted records, interoperability happens naturally across different clinics and specialists."
      }
    ],
    tags: ["NuroVed", "Promacle", "Startups", "Healthcare", "Ahmedabad", "Systems Architecture"],
    featured: true,
  },
  {
    slug: "building-while-being-a-student",
    title: "Building While Being a Student: Managing Code, Classes, and Founder Mode",
    subtitle: "What balancing a Computer Engineering degree at GTU with building Promacle has taught me about focus, time constraints, and hands-on execution.",
    category: "Lessons",
    author: "Fazil Malek",
    authorRole: "Founder @ Promacle • B.E. Computer Engineering @ GTU",
    authorUrl: "https://fazilportfolio.me",
    date: "July 2026",
    isoDate: "2026-07-02",
    modifiedDate: "2026-07-22",
    readTime: "5 min read",
    excerpt: "Reflections on pursuing a Bachelor of Engineering at Gujarat Technological University while running Promacle. Lessons on practical execution vs theoretical syllabi.",
    featuredVisualCaption: "Desk notebook log balancing semester lab assignments and production commits.",
    content: [
      "There is a persistent myth that you must choose between being a dedicated student and being a serious builder. People often ask how I manage college lectures, semester examinations at Gujarat Technological University (GTU), and the daily engineering demands of running Promacle.",
      "The honest answer is that constraints force clarity. When your day is broken up by lecture schedules and lab submissions, you no longer have the luxury of eight uninterrupted hours of aimless tinkering. You must know exactly what you are building before you open your editor.",
      "My university coursework provides valuable theoretical grounding—understanding database normalization, compiler basics, algorithmic complexity, and operating system internals. But the syllabus alone cannot teach you the harsh realities of production systems: debugging an intermittent race condition in an async endpoint, configuring production security headers, or designing an interface that a non-technical person can understand without instructions.",
      "By applying theoretical concepts immediately to real-world code at Promacle, both sides reinforce each other. Discrete mathematics and data structures stop being abstract exam topics and become tools to write cleaner state machines and query optimizations.",
      "The hardest part is not the workload; it is energy management. Saying no to superficial distractions, maintaining physical fitness through football, and keeping a notebook log of daily micro-goals has been essential to sustaining this pace without burning out."
    ],
    pullQuotes: [
      {
        quote: "Constraints force clarity. When your time is divided, you no longer have the luxury of aimless tinkering.",
        attribution: "Fazil Malek"
      }
    ],
    takeaways: [
      {
        point: "Theory without execution is fragile",
        detail: "Studying computer science concepts becomes significantly more potent when you are immediately applying them to production systems."
      },
      {
        point: "Time constraints kill perfectionism",
        detail: "Having limited evening hours forces you to prioritize high-leverage engineering tasks over endless aesthetic micro-tweaks."
      },
      {
        point: "Athletic discipline protects against burnout",
        detail: "Playing football regularly provides mental resets and reminds me that stamina is built through steady, consistent practice."
      }
    ],
    tags: ["Student Founder", "GTU", "Computer Engineering", "Lessons", "Focus", "Execution"],
    featured: false,
  },
  {
    slug: "how-i-approach-building-products",
    title: "How I Approach Building Products: Starting on Paper Before Writing Code",
    subtitle: "Why sketching user flows with an ink pen on grid paper saves weeks of wasted frontend engineering and keeps the focus strictly on human outcomes.",
    category: "Design",
    author: "Fazil Malek",
    authorRole: "Founder @ Promacle • B.E. Computer Engineering @ GTU",
    authorUrl: "https://fazilportfolio.me",
    date: "May 2026",
    isoDate: "2026-05-18",
    modifiedDate: "2026-06-10",
    readTime: "5 min read",
    excerpt: "My tactile design philosophy: why I start every system architecture and interface in physical notebooks before jumping into Figma or writing code.",
    featuredVisualCaption: "Rough pen-and-ink user journey map showing record validation states.",
    content: [
      "Modern development tools are fast, but their speed can be deceptive. It is very easy to jump straight into a React codebase or a Figma canvas, generate ten components, assemble a slick interface, and realize two weeks later that you built the wrong thing with great precision.",
      "My rule for every project at Promacle—whether it is NuroVed, Actora, or client architectures—is that nothing touches code until it has survived on paper.",
      "Paper is forgiving of thoughts but unforgiving of ambiguity. When you draw a screen by hand, you can feel when a user flow requires too many steps. If sketching the path from a patient's sign-in to their medical record review takes three separate arrows and cluttered margin notes, you already know the UI is bloated. You do not need twenty hours of coding to learn what an ink sketch can tell you in five minutes.",
      "Furthermore, I evaluate interfaces based on human outcomes rather than engagement metrics. A good tool helps someone complete their task and leave. If a doctor has to stay on a screen longer than necessary, that is not 'high engagement'—it is operational friction.",
      "Design is not decoration added after the engineering is done; it is the structural definition of how a human interacts with a computer."
    ],
    pullQuotes: [
      {
        quote: "If a doctor has to stay on a screen longer than necessary, that is not high engagement—it is operational friction.",
        attribution: "Fazil Malek"
      }
    ],
    takeaways: [
      {
        point: "Paper reveals flow flaws faster than Figma",
        detail: "Physical sketching prevents getting bogged down in font pairings and color tokens before the logical flow is proven."
      },
      {
        point: "Measure human outcomes, not vanity dwell time",
        detail: "Software that respects human attention gets the user back to their real-world task as quickly and reliably as possible."
      },
      {
        point: "Architecture and design are inseparable",
        detail: "You cannot design a trustworthy user experience without knowing how the data model and network boundaries behave underneath."
      }
    ],
    tags: ["Product Design", "UI/UX", "Notebook", "Philosophy", "Human Outcomes"],
    featured: false,
  },
  {
    slug: "architecting-nuroved",
    title: "Architecting NuroVed: Zero-Fragmentation Medical Systems with FastAPI & Flutter",
    subtitle: "A technical walkthrough of our asynchronous Python backend, cross-platform mobile frontend, and zero-trust record storage model.",
    category: "Technology",
    author: "Fazil Malek",
    authorRole: "Founder @ Promacle • B.E. Computer Engineering @ GTU",
    authorUrl: "https://fazilportfolio.me",
    date: "April 2026",
    isoDate: "2026-04-24",
    modifiedDate: "2026-05-30",
    readTime: "7 min read",
    excerpt: "Technical deep-dive into how we engineered NuroVed's backend services with FastAPI, reactive Flutter mobile apps, and structured PostgreSQL schemas.",
    featuredVisualCaption: "Microservice sequence diagram showing async health data ingest and client reconciliation.",
    content: [
      "When designing the backend architecture for NuroVed, the primary engineering constraint was clear: data integrity cannot be compromised, even under erratic network conditions typical of hospital basements or rural clinic visits.",
      "We selected Python with FastAPI for the core API services. FastAPI's native support for asynchronous requests via Starlette and Pydantic validation allows us to handle high-concurrency ingestion of health metrics and document uploads while maintaining strict runtime type validation.",
      "For the frontend, we chose Flutter. Rather than maintaining separate native Swift and Kotlin codebases, Flutter gave us a single unified rendering pipeline across iOS, Android, and web. Its declarative reactive state tree allowed us to build custom medical record timelines, graph visualizers, and interactive prescription sheets with 60fps responsiveness on both high-end and entry-level Android smartphones.",
      "Security is layered from the database up. Patient health records are encrypted at rest with AES-256 and transmitted strictly over TLS 1.3. Role-based access control (RBAC) ensures that a consulting doctor only receives temporary, revocable access to the specific medical records authorized by the patient.",
      "Building a system of this nature requires treating every edge case as an inevitable reality: dropped websockets, partial uploads, conflicting concurrent edits, and strict offline synchronization."
    ],
    pullQuotes: [
      {
        quote: "Data integrity cannot be compromised, even under erratic network conditions typical of hospital basements or rural clinics.",
        attribution: "Fazil Malek"
      }
    ],
    takeaways: [
      {
        point: "Async Python + Pydantic provides rigorous runtime safety",
        detail: "Enforcing strict schema contracts at the API boundary prevents malformed health payload ingestion before it ever reaches the database."
      },
      {
        point: "Flutter eliminates cross-platform state divergence",
        detail: "A single reactive codebase ensures patients on iOS and doctors on Android see the exact same layout and data synchronization behavior."
      },
      {
        point: "Least-privilege access must be user-controlled",
        detail: "Patients should possess cryptographic agency over who can read their consultation logs and for what duration."
      }
    ],
    tags: ["FastAPI", "Python", "Flutter", "PostgreSQL", "Healthcare Tech", "System Architecture"],
    featured: false,
  },
  {
    slug: "building-technology-with-purpose",
    title: "Building Technology with Purpose: Discipline, Sport, and Long-Term Vision",
    subtitle: "How growing up playing football shaped my resilience as an engineer and why I believe technology should solve human problems, not just chase hype.",
    category: "Personal",
    author: "Fazil Malek",
    authorRole: "Founder @ Promacle • B.E. Computer Engineering @ GTU",
    authorUrl: "https://fazilportfolio.me",
    date: "March 2026",
    isoDate: "2026-03-10",
    modifiedDate: "2026-07-21",
    readTime: "6 min read",
    excerpt: "A personal reflection by Mohammad Fazil Malek on football discipline, values instilled by family in Ahmedabad, and the enduring motivation behind Promacle.",
    featuredVisualCaption: "Handwritten note on personal principles: endurance, clarity, and service.",
    content: [
      "Before I wrote my first line of Python or configured my first Git repository, my world was defined by the football pitch. Playing football throughout my school years taught me lessons that no computer engineering textbook could ever replicate.",
      "In football, when you lose possession or fall behind in the 80th minute, you cannot complain to the referee or pause the match. You sprint back, defend your position, and reset. That physical resilience translated directly to how I approach software bugs, failed product iterations, and the daily obstacles of entrepreneurship.",
      "My family—Malek Firojkhan Anvarkhan and Malek Hasinabibi Firojkhan—instilled in me a deep appreciation for honest work, patience, and humility. Coming from Ahmedabad, Gujarat, a city known for entrepreneurial energy and grounded pragmatism, I never wanted to build technology just to ride temporary hype cycles.",
      "There is a temptation in tech to jump on every passing wave—tokenizing things that do not need tokens, slapping artificial intelligence onto basic forms, or chasing vanity metrics. But real builders are remembered for the enduring utility of what they create.",
      "Promacle is built on that philosophy. Whether we are engineering healthcare platforms, educational tools, or custom software for businesses, the question is always the same: does this genuinely make someone's life or work better? If the answer is yes, the effort is worth every late night."
    ],
    pullQuotes: [
      {
        quote: "In football, when you fall behind in the 80th minute, you sprint back, defend, and reset. That resilience translates directly to software.",
        attribution: "Fazil Malek"
      }
    ],
    takeaways: [
      {
        point: "Sport builds mental fortitude for debugging and building",
        detail: "Physical discipline and team sports teach you to stay composed under pressure and keep executing when plans fall apart."
      },
      {
        point: "Root yourself in enduring human problems",
        detail: "Hype cycles come and go every eighteen months; foundational human needs like health, communication, and learning remain constant."
      },
      {
        point: "Consistency beats sudden bursts of inspiration",
        detail: "Shipping meaningful software is the result of continuous daily commits and deliberate improvement over years."
      }
    ],
    tags: ["Personal", "Football", "Discipline", "Ahmedabad", "Family", "Vision"],
    featured: false,
  }
];

// Helper functions for querying and navigation
export function getStoryBySlug(slug: string): Story | undefined {
  const clean = slug.replace(/^#?\/?stories\/?/, "").replace(/\/$/, "");
  return stories.find((s) => s.slug === clean);
}

export function getStoriesByCategory(category: StoryCategory | "All"): Story[] {
  if (category === "All") return stories;
  return stories.filter((s) => s.category === category);
}

export function getRelatedStories(currentSlug: string, limit = 2): Story[] {
  const current = getStoryBySlug(currentSlug);
  if (!current) return stories.slice(0, limit);

  const sameCategory = stories.filter(
    (s) => s.slug !== current.slug && s.category === current.category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const remaining = stories.filter(
    (s) => s.slug !== current.slug && s.category !== current.category
  );
  return [...sameCategory, ...remaining].slice(0, limit);
}

export function getNextPrevStories(currentSlug: string): {
  prev: Story | null;
  next: Story | null;
} {
  const clean = currentSlug.replace(/^#?\/?stories\/?/, "").replace(/\/$/, "");
  const idx = stories.findIndex((s) => s.slug === clean);
  if (idx === -1) return { prev: null, next: null };

  const prev = idx > 0 ? stories[idx - 1] : null;
  const next = idx < stories.length - 1 ? stories[idx + 1] : null;
  return { prev, next };
}
