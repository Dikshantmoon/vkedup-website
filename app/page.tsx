const stories = [
  {
    category: "STARTUP STORY",
    number: "01",
    title: "The Zomato Story",
    description:
      "How a simple idea grew into one of India's biggest food-tech companies.",
    symbol: "Z",
    accent: "from-rose-500/20 via-orange-400/10 to-transparent",
  },
  {
    category: "BUSINESS MODEL",
    number: "02",
    title: "How Zerodha Makes Money",
    description:
      "Understanding the business behind India's discount brokerage revolution.",
    symbol: "₹",
    accent: "from-emerald-400/20 via-teal-400/10 to-transparent",
  },
  {
    category: "GROWTH STRATEGY",
    number: "03",
    title: "The Rise of Zepto",
    description:
      "A closer look at the quick-commerce model and its growth strategy.",
    symbol: "Z",
    accent: "from-violet-500/20 via-blue-500/10 to-transparent",
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
  { url: "https://www.instagram.com/reel/DT8FuCgCNcB/", title: "Watch Reel 1" },
  { url: "https://www.instagram.com/reel/DTLWUIUk6P8/", title: "Watch Reel 2" },
  { url: "https://www.instagram.com/reel/DcJXU1MhX4N/", title: "Watch Reel 3" },
];

const revealAnimation = `
  @keyframes vkedup-rise-in {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes vkedup-soft-glow {
    0%, 100% { opacity: .35; transform: scale(1); }
    50% { opacity: .65; transform: scale(1.06); }
  }

  .vkedup-reveal {
    animation: vkedup-rise-in .75s cubic-bezier(.2,.7,.2,1) both;
  }

  .vkedup-delay-1 { animation-delay: .12s; }
  .vkedup-delay-2 { animation-delay: .24s; }
  .vkedup-delay-3 { animation-delay: .36s; }

  .vkedup-glow { animation: vkedup-soft-glow 7s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .vkedup-reveal, .vkedup-glow {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export default function Home() {
  return (
    <>
      <style>{revealAnimation}</style>

      <main className="min-h-screen overflow-hidden bg-[#101114] text-[#F5F5F7] selection:bg-[#7895FF] selection:text-[#101114]">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#101114]/90 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <a href="#" aria-label="VKEDUP home" className="text-2xl font-black tracking-tight">
              VKEDUP<span className="text-[#7895FF]">.</span>
            </a>

            <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#stories" className="transition-colors hover:text-[#A8BAFF]">Stories</a>
              <a href="#about" className="transition-colors hover:text-[#A8BAFF]">About</a>
              <a href="#shorts" className="transition-colors hover:text-[#A8BAFF]">YouTube</a>
              <a href="#instagram" className="transition-colors hover:text-[#A8BAFF]">Instagram</a>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-[#7895FF] px-4 py-2.5 text-sm font-bold text-[#101114] transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-5"
            >
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative isolate border-b border-white/[0.08]">
          <div className="vkedup-glow pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#496DFF]/20 blur-[100px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-32">
            <div className="vkedup-reveal">
              <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#A8BAFF] sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#7895FF] shadow-[0_0_16px_#7895FF]" />
                Business stories. Simplified.
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                Understand business.
                <span className="mt-2 block text-[#A8BAFF]">Think bigger.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Discover how companies start, how founders think, and how businesses grow.
                Simple lessons for curious minds and future entrepreneurs.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#stories" className="rounded-full bg-[#7895FF] px-6 py-3.5 font-bold text-[#101114] transition duration-300 hover:-translate-y-1 hover:bg-white">
                  Explore stories <span aria-hidden="true">↗</span>
                </a>
                <a href="#shorts" className="rounded-full border border-white/20 px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:border-[#A8BAFF] hover:text-[#A8BAFF]">
                  Watch videos <span aria-hidden="true">▶</span>
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div><p className="text-lg font-bold sm:text-xl">Startups</p><p className="mt-1 text-xs text-white/45 sm:text-sm">Stories & lessons</p></div>
                <div><p className="text-lg font-bold sm:text-xl">Business</p><p className="mt-1 text-xs text-white/45 sm:text-sm">Models explained</p></div>
                <div><p className="text-lg font-bold sm:text-xl">Growth</p><p className="mt-1 text-xs text-white/45 sm:text-sm">Ideas that scale</p></div>
              </div>
            </div>

            <div className="vkedup-reveal vkedup-delay-2 relative">
              <div className="vkedup-glow absolute -inset-5 rounded-[2rem] bg-[#496DFF]/15 blur-3xl" />
              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#252936] via-[#191b23] to-[#141519] p-6 shadow-2xl shadow-black/20 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-white/65">FEATURED STORY</span>
                  <span className="text-xs text-white/40">01 / 03</span>
                </div>
                <div className="flex min-h-56 items-center justify-center py-8 sm:min-h-72">
                  <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-rose-500 to-orange-400 text-7xl font-black text-white shadow-2xl shadow-rose-950/40 transition duration-500 hover:rotate-3 hover:scale-105 sm:h-40 sm:w-40 sm:text-8xl">Z</div>
                </div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#A8BAFF]">FOODTECH · INDIA</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Zomato story.</h2>
                <p className="mt-3 max-w-md leading-7 text-white/60">
                  From a simple problem to a household name. Explore the journey, business model, and lessons behind the brand.
                </p>
                <a href="#stories" className="mt-6 inline-flex font-bold text-[#A8BAFF] transition hover:translate-x-1 hover:text-white">
                  Discover the story <span className="ml-2">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Stories */}
        <section id="stories" className="scroll-mt-24 border-b border-white/[0.08] bg-[#15171C]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="vkedup-reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.24em] text-[#A8BAFF]">THE KNOWLEDGE LIBRARY</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Stories worth knowing.</h2>
              </div>
              <p className="max-w-sm leading-7 text-white/55">Explore the ideas, decisions, and strategies behind well-known businesses.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <article
                  key={story.number}
                  className={`vkedup-reveal vkedup-delay-${index + 1} group overflow-hidden rounded-2xl border border-white/10 bg-[#101216] transition duration-500 hover:-translate-y-2 hover:border-[#7895FF]/60 hover:shadow-xl hover:shadow-blue-950/20`}
                >
                  <div className={`flex h-52 items-center justify-center bg-gradient-to-br ${story.accent}`}>
                    <span className="text-8xl font-black text-white/90 transition duration-500 group-hover:scale-110 group-hover:rotate-3">{story.symbol}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#A8BAFF]">{story.category}</span>
                      <span className="text-xs text-white/35">{story.number}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{story.title}</h3>
                    <p className="mt-3 leading-7 text-white/55">{story.description}</p>
                    <a href="#contact" className="mt-6 inline-block text-sm font-bold text-white transition group-hover:translate-x-1 group-hover:text-[#A8BAFF]">Explore topic ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="vkedup-reveal grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#222631] to-[#15171C] p-7 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-[#A8BAFF]">THE IDEA BEHIND VKEDUP</p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Business is easier to understand when stories explain it.</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-white/60">
                VKEDUP makes business concepts approachable through company stories, startup journeys, and practical lessons. The goal is simple: learn how businesses work, one story at a time.
              </p>
              <a href="#shorts" className="mt-7 inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-[#A8BAFF] hover:text-[#A8BAFF]">Explore the content ↗</a>
            </div>
          </div>
        </section>

        {/* Video channel intro */}
        <section id="videos" className="scroll-mt-24 border-y border-white/10 bg-[#15171C]">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-[#A8BAFF]">LEARN THROUGH VIDEO</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">Ideas made easy to watch.</h2>
              <p className="mt-4 max-w-xl leading-7 text-white/55">Discover business explainers, company breakdowns, and startup lessons on the VKEDUP video channel.</p>
            </div>
            <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 rounded-full bg-[#7895FF] px-6 py-3.5 font-bold text-[#101114] transition duration-300 hover:-translate-y-1 hover:bg-white">Visit YouTube ↗</a>
          </div>
        </section>

        {/* YouTube Shorts: embedded videos with an external fallback link */}
        <section id="shorts" className="scroll-mt-24 border-t border-white/10 bg-[#101114]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="vkedup-reveal mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A8BAFF]">WATCH & LEARN</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">YouTube Shorts<span className="text-[#A8BAFF]">.</span></h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Quick business lessons, startup stories, and ideas worth sharing.</p>
              </div>
              <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer" className="rounded-full bg-[#7895FF] px-5 py-3 text-sm font-bold text-[#101114] transition hover:-translate-y-1 hover:bg-white">Visit YouTube ↗</a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shorts.map((short, index) => (
                <article key={short.id} className={`vkedup-reveal vkedup-delay-${index + 1} group overflow-hidden rounded-2xl border border-white/10 bg-[#191B21] transition duration-500 hover:-translate-y-2 hover:border-[#7895FF]/60 hover:shadow-xl hover:shadow-blue-950/20`}>
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
                    <h3 className="font-bold text-white">{short.title}</h3>
                    <a href={`https://www.youtube.com/shorts/${short.id}`} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-white/60 transition hover:text-[#A8BAFF]">Open on YouTube ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Reels: link cards; Instagram controls the actual playback */}
        <section id="instagram" className="scroll-mt-24 border-t border-white/10 bg-[#15171C]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="vkedup-reveal mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A8BAFF]">BEHIND THE STORIES</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Instagram Reels<span className="text-[#A8BAFF]">.</span></h2>
              <p className="mt-3 text-sm leading-6 text-white/60">Short ideas, useful insights, and stories from VKEDUP.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reels.map((reel, index) => (
                <a
                  key={reel.url}
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`vkedup-reveal vkedup-delay-${index + 1} group rounded-2xl border border-white/10 bg-[#101216] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#7895FF]/60 hover:shadow-xl hover:shadow-blue-950/20`}
                >
                  <span className="inline-flex rounded-full bg-[#7895FF]/15 px-3 py-1 text-xs font-bold text-[#A8BAFF]">VKEDUP · INSTAGRAM</span>
                  <h3 className="mt-5 text-xl font-bold text-white">{reel.title}</h3>
                  <p className="mt-2 text-sm text-white/60">Explore the latest stories and ideas.</p>
                  <p className="mt-5 text-sm font-bold text-[#A8BAFF] transition group-hover:translate-x-1">Watch Reel ↗</p>
                </a>
              ))}
            </div>

            <a href="https://www.instagram.com/vked.up/" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#7895FF] px-5 py-3 text-sm font-bold text-[#101114] transition hover:-translate-y-1 hover:bg-white">Visit Instagram ↗</a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="text-xl font-black text-white">VKEDUP<span className="text-[#7895FF]">.</span></a>
            <p className="text-sm text-white/40">Business stories. Simplified.</p>
            <div className="flex gap-5 text-sm text-white/60">
              <a href="https://www.youtube.com/@Vkedup" target="_blank" rel="noreferrer" className="transition hover:text-[#A8BAFF]">YouTube ↗</a>
              <a href="https://www.instagram.com/vked.up/" target="_blank" rel="noreferrer" className="transition hover:text-[#A8BAFF]">Instagram ↗</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/35">© 2026 VKEDUP. Built for curious minds.</div>
        </footer>
      </main>
    </>
  );
}
