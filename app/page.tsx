import Reveal from "./reveal";
import DemoStatCounter from "./demo-stat-counter";
import ChannelPerformanceChart from "./channel-performance-chart";
import ContactForm from "./contact-form";
import Image from "next/image";

const stories = [
  {
    category: "STARTUP STORY",
    number: "01",
    title: "The Zomato Story",
    description:
      "How a simple idea grew into one of India's biggest food-tech companies.",
    symbol: "Z",
  },
  {
    category: "BUSINESS MODEL",
    number: "02",
    title: "How Zerodha Makes Money",
    description:
      "Understanding the business behind India's discount brokerage revolution.",
    symbol: "₹",
  },
  {
    category: "GROWTH STRATEGY",
    number: "03",
    title: "The Rise of Zepto",
    description:
      "A closer look at the quick-commerce model and its growth strategy.",
    symbol: "Z",
  },
];

const shorts = [
  { id: "LwOE--p6ezI", title: "Anveshan" },
  { id: "VbeuBef4v8I", title: "Business Story 2" },
  {
    id: "vS2nh6uJ1Rs",
    title: "Portl - Premium Smart Home Gym & Fitness Studio",
  },
];

const reels = [
  {
    url: "https://www.instagram.com/reel/DT8FuCgCNcB/",
    title: "From Helping Farmers to 100 Cr Brand",
    image: "/images/reels/reel-1.jpg",
  },
  {
    url: "https://www.instagram.com/reel/DTLWUIUk6P8/",
    title: "Side Effects with Famous Medicine Brand",
    image: "/images/reels/reel-2.jpg",
  },
  {
    url: "https://www.instagram.com/reel/DcJXU1MhX4N/",
    title: "How This Founder Made an 80 Crore Gym Gadget Brand",
    image: "/images/reels/reel-3.jpg",
  },
];

type DemoStat = {
  label: string;
  value: number;
  divisor?: number;
  decimals?: number;
  suffix?: string;
};

const demoStats: DemoStat[] = [
  { label: "Subscribers", value: 12800, divisor: 1000, decimals: 1, suffix: "K" },
  { label: "Demo views", value: 845000, divisor: 1000, decimals: 0, suffix: "K" },
  { label: "Videos published", value: 156 },
  { label: "Engagement score", value: 92 },
];

export default function Home() {
  return (
      <main className="vkedup-site min-h-screen overflow-hidden">
        {/* Header */}
        <header className="vkedup-header sticky top-0 z-50 border-b backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-4 sm:px-8">
            <a href="#" aria-label="VKEDUP home" className="vkedup-wordmark text-2xl font-black tracking-tight">
              VKEDUP<span>.</span>
            </a>

            <div className="vkedup-nav hidden items-center gap-8 text-sm md:flex">
              <a href="#stories" className="transition-colors">Stories</a>
              <a href="#about" className="transition-colors">About</a>
              <a href="#shorts" className="transition-colors">YouTube</a>
              <a href="#instagram" className="transition-colors">Instagram</a>
            </div>

            <a
              href="#contact"
              className="vkedup-button vkedup-button--primary rounded-full px-4 py-2.5 text-sm font-bold transition duration-300 sm:px-5"
            >
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </a>

            <div className="vkedup-mobile-nav flex w-full items-center justify-between gap-4 border-t pt-3 text-xs md:hidden">
              <a href="#stories" className="transition-colors">Stories</a>
              <a href="#about" className="transition-colors">About</a>
              <a href="#shorts" className="transition-colors">YouTube</a>
              <a href="#instagram" className="transition-colors">Instagram</a>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section className="vkedup-hero relative isolate border-b">
          <div className="vkedup-orbit vkedup-parallax pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full blur-[100px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-32">
            <Reveal>
              <div>
                <p className="vkedup-eyebrow mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] sm:text-sm">
                  <span className="h-2 w-2 rounded-full" />
                  Business stories. Simplified.
                </p>

                <h1 className="vkedup-display max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                  Understand business.
                  <span className="mt-2 block">Think bigger.</span>
                </h1>

                <p className="vkedup-hero-copy mt-7 max-w-xl text-base leading-8 sm:text-lg">
                  Discover how companies start, how founders think, and how businesses grow.
                  Simple lessons for curious minds and future entrepreneurs.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#stories" className="vkedup-button vkedup-button--primary rounded-full px-6 py-3.5 font-bold transition duration-300">
                    Explore stories <span aria-hidden="true">↗</span>
                  </a>
                  <a href="#shorts" className="vkedup-button vkedup-button--text rounded-full border px-6 py-3.5 font-semibold transition duration-300">
                    Watch videos <span aria-hidden="true">▶</span>
                  </a>
                </div>

                <div className="vkedup-hero-topics mt-12 grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
                  <div><p>Startups</p><p className="mt-1 text-xs sm:text-sm">Stories & lessons</p></div>
                  <div><p>Business</p><p className="mt-1 text-xs sm:text-sm">Models explained</p></div>
                  <div><p>Growth</p><p className="mt-1 text-xs sm:text-sm">Ideas that scale</p></div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140} className="relative">
              <div className="relative">
                <article className="vkedup-featured-story relative overflow-hidden border p-6 shadow-2xl sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="vkedup-story-kicker border px-3 py-2 text-[10px] font-bold tracking-[0.2em]">FEATURED STORY</span>
                    <span className="text-xs">01 / 03</span>
                  </div>
                  <div className="flex min-h-56 items-center justify-center py-8 sm:min-h-72">
                    <div className="vkedup-feature-monogram flex h-32 w-32 items-center justify-center text-7xl font-black transition duration-500 sm:h-40 sm:w-40 sm:text-8xl">Z</div>
                  </div>
                  <p className="vkedup-eyebrow text-xs font-bold tracking-[0.22em]">FOODTECH · INDIA</p>
                  <h2 className="vkedup-display mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Zomato story.</h2>
                  <p className="vkedup-feature-copy mt-3 max-w-md leading-7">
                    From a simple problem to a household name. Explore the journey, business model, and lessons behind the brand.
                  </p>
                  <a href="#stories" className="vkedup-inline-link mt-6 inline-flex font-bold transition">
                    Discover the story <span className="ml-2">↗</span>
                  </a>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stories */}
        <section id="stories" className="vkedup-stories scroll-mt-24 border-b">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="vkedup-eyebrow text-xs font-bold tracking-[0.24em]">THE KNOWLEDGE LIBRARY</p>
                <h2 className="vkedup-display mt-4 text-4xl font-black tracking-tight sm:text-6xl">Stories worth knowing.</h2>
              </div>
              <p className="vkedup-secondary max-w-sm leading-7">Explore the ideas, decisions, and strategies behind well-known businesses.</p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <Reveal key={story.number} delay={index * 90}>
                  <article data-story-index={index} className="vkedup-story group h-full overflow-hidden border-b">
                    <div className="vkedup-story-visual flex h-52 items-center justify-center">
                      <span className="vkedup-story-symbol text-8xl font-black transition duration-500 group-hover:scale-105">{story.symbol}</span>
                    </div>
                    <div className="py-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="vkedup-eyebrow text-[10px] font-bold tracking-[0.2em]">{story.category}</span>
                        <span className="vkedup-story-number text-xs">{story.number}</span>
                      </div>
                      <h3 className="vkedup-display mt-4 text-2xl font-bold">{story.title}</h3>
                      <p className="vkedup-secondary mt-3 leading-7">{story.description}</p>
                      <a href="#contact" className="vkedup-inline-link mt-6 inline-block text-sm font-bold transition">Explore topic ↗</a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="vkedup-about scroll-mt-24 border-b">
          <Reveal className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center lg:gap-16">
            <div className="vkedup-profile-frame mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-full">
              <Image
                src="/images/vkedup-profile.png"
                alt="VKEDUP profile portrait"
                width={440}
                height={440}
                sizes="(max-width: 768px) 72vw, 288px"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="vkedup-eyebrow text-xs font-bold tracking-[0.24em]">THE IDEA BEHIND VKEDUP</p>
              <h2 className="vkedup-display mt-5 text-4xl font-black leading-tight sm:text-5xl">Business is easier to understand when stories explain it.</h2>
              <p className="vkedup-secondary mt-6 text-base leading-8">
                VKEDUP makes business concepts approachable through company stories, startup journeys, and practical lessons. The goal is simple: learn how businesses work, one story at a time.
              </p>
              <a href="#shorts" className="vkedup-button vkedup-button--text mt-7 inline-flex border px-6 py-3 font-semibold transition duration-300">Explore the content ↗</a>
            </div>
          </Reveal>
        </section>

        {/* Video channel intro */}
        <section id="videos" className="vkedup-video-intro scroll-mt-24 border-y">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="vkedup-eyebrow text-xs font-bold tracking-[0.24em]">LEARN THROUGH VIDEO</p>
              <h2 className="vkedup-display mt-4 text-3xl font-black sm:text-5xl">Ideas made easy to watch.</h2>
              <p className="vkedup-secondary mt-4 max-w-xl leading-7">Discover business explainers, company breakdowns, and startup lessons on the VKEDUP video channel.</p>
            </div>
            <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer" className="vkedup-button vkedup-button--inverse inline-flex w-fit shrink-0 px-6 py-3.5 font-bold transition duration-300">Visit YouTube ↗</a>
          </Reveal>
        </section>

        {/* Illustrative demo values, not live YouTube analytics */}
        <section
          aria-labelledby="channel-stats-title"
          className="vkedup-analytics border-b"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="vkedup-eyebrow text-xs font-bold uppercase tracking-[0.24em]">
                  CHANNEL SNAPSHOT
                </p>
                <h2
                  id="channel-stats-title"
                  className="vkedup-display mt-3 text-3xl font-black sm:text-4xl"
                >
                  YouTube demo statistics<span>.</span>
                </h2>
              </div>
              <p className="vkedup-secondary max-w-md text-sm leading-6">
                Illustrative figures for design purposes only. These are not
                real-time or verified YouTube analytics.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {demoStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80}>
                  <article className="vkedup-stat-card group relative h-full overflow-hidden border p-5 sm:p-6">
                    <span className="vkedup-stat-arrow absolute right-5 top-5 text-lg sm:right-6 sm:top-6">
                      ↗
                    </span>
                    <p className="vkedup-stat-label text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm">
                      {stat.label}
                    </p>
                    <p className="vkedup-stat-value vkedup-display mt-6 text-3xl font-black tracking-tight sm:mt-8 sm:text-4xl">
                      <DemoStatCounter
                        value={stat.value}
                        divisor={stat.divisor}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="vkedup-stat-note mt-2 text-xs font-medium">
                      Illustrative demo
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <ChannelPerformanceChart />
            </Reveal>
          </div>
        </section>

        {/* YouTube Shorts: embedded videos with an external fallback link */}
        <section id="shorts" className="vkedup-video-section scroll-mt-24 border-t">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="vkedup-eyebrow text-xs font-bold uppercase tracking-[0.24em]">WATCH & LEARN</p>
                <h2 className="vkedup-display mt-3 text-3xl font-black sm:text-4xl">YouTube Shorts<span>.</span></h2>
                <p className="vkedup-secondary mt-3 max-w-xl text-sm leading-6">Quick business lessons, startup stories, and ideas worth sharing.</p>
              </div>
              <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer" className="vkedup-button vkedup-button--inverse rounded-full px-5 py-3 text-sm font-bold transition">Visit YouTube ↗</a>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shorts.map((short, index) => (
                <Reveal key={short.id} delay={index * 90}>
                  <article className="vkedup-card vkedup-video-card group h-full overflow-hidden border">
                    <div className="relative aspect-[9/12] overflow-hidden bg-black">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${short.id}`}
                        title={short.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{short.title}</h3>
                      <a href={`https://www.youtube.com/shorts/${short.id}`} target="_blank" rel="noreferrer" className="vkedup-secondary mt-2 inline-block text-sm transition">Open on YouTube ↗</a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Reels: link cards; Instagram controls the actual playback */}
        <section id="instagram" className="vkedup-video-section scroll-mt-24 border-t">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal className="mb-8">
              <p className="vkedup-eyebrow text-xs font-bold uppercase tracking-[0.24em]">BEHIND THE STORIES</p>
              <h2 className="vkedup-display mt-3 text-3xl font-black sm:text-4xl">Instagram Reels<span>.</span></h2>
              <p className="vkedup-secondary mt-3 text-sm leading-6">Short ideas, useful insights, and stories from VKEDUP.</p>
            </Reveal>

            <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((reel, index) => (
                <Reveal key={reel.url} delay={index * 90}>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${reel.title}. Opens the Instagram Reel in a new tab.`}
                    className="vkedup-card vkedup-reel-card group w-full overflow-hidden border"
                  >
                    <span className="vkedup-reel-preview">
                      <Image
                        src={reel.image}
                        alt={`Instagram Reel preview: ${reel.title}`}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 30vw"
                        className="vkedup-reel-image"
                      />
                      <span className="vkedup-reel-preview-top">VKEDUP <span>·</span> INSTAGRAM</span>
                      <span className="vkedup-reel-preview-bottom">
                        {index === 0 ? "FEATURED REEL" : "OPEN REEL"}
                      </span>
                      <span className="vkedup-reel-play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                          <path d="M9 6.75v10.5L17 12 9 6.75Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="vkedup-reel-copy">
                      <span className="vkedup-reel-label inline-flex px-3 py-1 text-xs font-bold">VKEDUP · INSTAGRAM</span>
                      <span className="vkedup-display mt-5 block text-xl font-bold">{reel.title}</span>
                      <span className="vkedup-secondary mt-2 block text-sm">Open this Reel on Instagram.</span>
                      <span className="vkedup-inline-link mt-5 block text-sm font-bold transition group-hover:translate-x-1">Watch Reel ↗</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <a href="https://www.instagram.com/vked.up/" target="_blank" rel="noreferrer" className="vkedup-button vkedup-button--inverse mt-8 inline-flex rounded-full px-5 py-3 text-sm font-bold transition">Visit Instagram ↗</a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="vkedup-contact scroll-mt-24 border-t"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="vkedup-eyebrow text-xs font-bold uppercase tracking-[0.24em]">
                LET&apos;S CONNECT
              </p>
              <h2
                className="vkedup-display mt-4 text-4xl font-black sm:text-5xl"
                id="contact-title"
              >
                Have a story to tell?
              </h2>
              <p className="vkedup-secondary mt-5 max-w-md leading-7">
                Share what you are building and what you have in mind. We&apos;ll
                explore how VKEDUP can help bring your business story to life.
              </p>
              <p className="vkedup-contact-note mt-8 border-l pl-4 text-sm leading-6">
                Prefer a quick conversation? Send an enquiry directly on
                WhatsApp using the details you enter in the form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="vkedup-footer border-t px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <a href="#" className="vkedup-wordmark text-xl font-black">VKEDUP<span>.</span></a>
              <p className="text-sm">Business stories. Simplified.</p>
              <div className="vkedup-footer-links flex gap-5 text-sm">
                <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer">YouTube ↗</a>
                <a href="https://www.instagram.com/vked.up/" target="_blank" rel="noreferrer">Instagram ↗</a>
              </div>
            </div>
            <div className="vkedup-copyright mt-8 border-t pt-6 text-xs">© 2026 VKEDUP. Built for curious minds.</div>
          </div>
        </footer>
      </main>
  );
}
