
const stories = [
  {
    category: "STARTUP STORY",
    number: "01",
    title: "The Zomato Story",
    description:
      "How a simple idea grew into one of India's biggest food-tech companies.",
    color: "from-red-500/30 to-orange-500/5",
    symbol: "Z",
  },
  {
    category: "BUSINESS MODEL",
    number: "02",
    title: "How Zerodha Makes Money",
    description:
      "Understanding the business behind India's discount brokerage revolution.",
    color: "from-emerald-500/25 to-transparent",
    symbol: "₹",
  },
  {
    category: "GROWTH STRATEGY",
    number: "03",
    title: "The Rise of Zepto",
    description:
      "A closer look at the quick-commerce model and its growth strategy.",
    color: "from-violet-500/25 to-transparent",
    symbol: "Z",
  },
];

const shorts = [
  {
    id: "LwOE--p6ezI",
    title: "Watch Short 1",
  },
  {
    id: "VbeuBef4v8I",
    title: "Watch Short 2",
  },
  {
    id: "vS2nh6uJ1Rs",
    title: "Watch Short 3",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10100f] text-[#f5f1e9]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10100f]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="text-2xl font-black tracking-tight">
            VKEDUP<span className="text-[#ff713b]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#stories" className="transition hover:text-[#ff713b]">
              Stories
            </a>
            <a href="#about" className="transition hover:text-[#ff713b]">
              About
            </a>
            <a href="#videos" className="transition hover:text-[#ff713b]">
              Videos
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#ff713b] px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
          >
            Let&apos;s connect ↗
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#ff713b] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#ff713b]" />
            BUSINESS STORIES. SIMPLIFIED.
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
            Understand business.
            <span className="mt-2 block text-[#ff713b]">
              Think bigger.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
            Discover how companies start, how founders think, and how
            businesses grow. Simple lessons for curious minds and future
            entrepreneurs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#stories"
              className="rounded-full bg-[#ff713b] px-7 py-4 font-bold text-black transition hover:bg-white"
            >
              Explore stories ↗
            </a>
            <a
              href="#videos"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-[#ff713b] hover:text-[#ff713b]"
            >
              Watch videos ▶
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-black">Startups</p>
              <p className="mt-1 text-sm text-white/50">Stories & lessons</p>
            </div>
            <div>
              <p className="text-2xl font-black">Business</p>
              <p className="mt-1 text-sm text-white/50">Models explained</p>
            </div>
            <div>
              <p className="text-2xl font-black">Growth</p>
              <p className="mt-1 text-sm text-white/50">Ideas that scale</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#ff713b]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#30302a] via-[#282019] to-[#151413] p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-white/70 sm:text-xs">
                FEATURED STORY
              </span>
              <span className="text-sm text-white/50">01 / 03</span>
            </div>

            <div className="flex min-h-[300px] items-center justify-center sm:min-h-[360px]">
              <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#e94454] text-7xl font-black shadow-2xl shadow-black/30 sm:h-40 sm:w-40 sm:text-8xl">
                Z
              </div>
            </div>

            <p className="text-xs font-bold tracking-[0.25em] text-[#ff713b]">
              FOODTECH · INDIA
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              The Zomato story.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-white/60">
              From a simple problem to a household name. Explore the journey,
              business model, and lessons behind the brand.
            </p>
            <a
              href="#stories"
              className="mt-7 inline-flex font-bold text-[#ff713b] hover:text-white"
            >
              Discover the story <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="stories" className="border-t border-white/10 bg-[#151514]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#ff713b]">
                THE KNOWLEDGE LIBRARY
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Stories worth knowing.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-white/50">
              Explore the ideas, decisions, and strategies behind well-known
              businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.number}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#10100f] transition duration-300 hover:-translate-y-1 hover:border-[#ff713b]/50"
              >
                <div
                  className={`flex h-52 items-center justify-center bg-gradient-to-br ${story.color}`}
                >
                  <span className="text-8xl font-black text-white/90 transition duration-300 group-hover:scale-110">
                    {story.symbol}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff713b]">
                      {story.category}
                    </span>
                    <span className="text-xs text-white/40">
                      {story.number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{story.title}</h3>
                  <p className="mt-3 leading-7 text-white/55">
                    {story.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block text-sm font-bold text-white transition group-hover:text-[#ff713b]"
                  >
                    Explore topic ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#24211e] to-[#151514] p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#ff713b]">
              THE IDEA BEHIND VKEDUP
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Business is easier to understand when stories explain it.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-white/60">
              VKEDUP makes business concepts approachable through company
              stories, startup journeys, and practical lessons. The goal is
              simple: learn how businesses work, one story at a time.
            </p>
            <a
              href="#videos"
              className="mt-7 inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-[#ff713b] hover:text-[#ff713b]"
            >
              Explore the content ↗
            </a>
          </div>
        </div>
      </section>

      <section id="videos" className="border-y border-white/10 bg-[#151514]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#ff713b]">
              LEARN THROUGH VIDEO
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Ideas made easy to watch.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/55">
              Discover business explainers, company breakdowns, and startup
              lessons on the VKEDUP video channel.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@Vkedup"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 rounded-full bg-[#ff713b] px-7 py-4 font-bold text-black transition hover:bg-white"
          >
            Visit YouTube ↗
          </a>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="text-xl font-black">
            VKEDUP<span className="text-[#ff713b]">.</span>
          </a>
          <p className="text-sm text-white/40">
            Business stories. Simplified.
          </p>
          <a
            href="https://www.youtube.com/@Vkedup"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/60 transition hover:text-[#ff713b]"
          >
            YouTube ↗
          </a>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/35">
          © 2026 VKEDUP. Built for curious minds.
        </div>
      </footer>
    </main>
  );
}
