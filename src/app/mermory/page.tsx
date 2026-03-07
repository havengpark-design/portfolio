import Link from "next/link";
import Nav from "@/components/Nav";

export default function MermoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[20px] mb-[72px]">
          <span className="text-[#4583DA] text-[13px] font-medium tracking-widest uppercase">Case Study</span>
          <h1 className="text-black text-[56px] font-normal leading-[1.05]">Mermory</h1>
          <p className="text-[#6B7280] text-[19px] font-normal leading-relaxed">
            Designing a mobile learning platform that guides learners through progress, completion, and transition — human first.
          </p>
          <div className="flex gap-[48px] pt-[8px] text-[14px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Role</span>
              <span className="text-black">Product Designer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Type</span>
              <span className="text-black">End-to-End Design</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Focus</span>
              <span className="text-black">Onboarding · Learning · Progress</span>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="w-full rounded-[32px] overflow-hidden mb-[96px]" style={{ aspectRatio: "16/9", background: "#0f0f0f" }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/Design/mermory/mermory.mp4" />
        </div>

        {/* What is Mermory */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">What is Mermory?</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[20px]">
            Mermory is a mobile learning platform built around the idea that learning should feel like progress, not pressure. It combines structured lessons with moments of celebration — rewarding learners at every step of their journey.
          </p>
          <p className="text-[#4A5565] text-[17px] leading-[1.85]">
            My role spanned the full product — from defining the core learning experience to establishing a visual language that could scale across the entire app.
          </p>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Problem & Solution */}
        <section className="mb-[80px]">
          <div className="flex gap-[48px]">
            <div className="flex-1">
              <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[24px]">Problem</h2>
              <p className="text-[#4A5565] text-[15px] leading-[1.8]">
                Learning apps often front-load complexity and fail to emotionally engage learners. Drop-off rates are high because users never feel a sense of momentum — there&apos;s no signal that they&apos;re making progress.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[24px]">Solution</h2>
              <p className="text-[#4A5565] text-[15px] leading-[1.8]">
                Design an experience where every interaction — from completing a lesson to earning a streak — reinforces the learner&apos;s identity as someone who is growing. Empathy at every touchpoint.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Goals */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Goals</h2>
          <div className="flex flex-col gap-[28px]">
            {[
              { title: "Guide learners through momentum", desc: "Use interface storytelling to make progress visible and meaningful — not just a number, but a feeling." },
              { title: "Reduce friction at critical drop-off points", desc: "Identify where learners abandon sessions and design micro-interactions that pull them forward." },
              { title: "Establish a scalable visual language", desc: "Build a design system that could grow with the product — consistent, warm, and human." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-[20px]">
                <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px]">0{i + 1}</span>
                <div>
                  <p className="text-black text-[17px] mb-[6px]">{item.title}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

      </div>

      {/* Full-width callout */}
      <div className="w-full bg-[#0f0f0f] py-[96px] mb-[0px]">
        <div className="w-[60%] mx-auto">
          <p className="text-white text-[40px] font-light leading-[1.25]">
            Here&apos;s how those decisions come together<br />
            across the learning experience.
          </p>
        </div>
      </div>

      <div className="w-[60%] mx-auto pt-[96px] pb-[120px]">

        {/* Section: Discovery */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Discovery</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[48px]">
            Learners arrive with a goal — studying for an exam, picking up a language, reviewing coursework. The Explore page was designed as their first meaningful moment of orientation: browse curated categories, search for decks, or skip the library entirely with Import AI, which turns any uploaded document into a ready-to-study deck in seconds.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Design/mermory/explore.png" alt="Mermory Explore page" className="w-full rounded-[24px]" style={{ display: "block" }} />
        </section>

        {/* Section: The Study Loop */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">The Study Loop</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[48px]">
            The study session is where the product earns its keep. Each card sits inside a gradient-bordered canvas — a deliberate visual cue that this is a moment of active focus. FSRS schedules every card at the optimal interval; XP rewards and a live progress bar make sure each session feels like forward motion, not just repetition.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Design/mermory/study.png" alt="Flashcard study session" className="w-full rounded-[24px] mb-[24px]" style={{ display: "block" }} />
          <div className="flex gap-[24px]">
            <div className="flex-1 rounded-[24px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Design/mermory/library.png" alt="Deck library with progress tracking" className="w-full" style={{ display: "block" }} />
            </div>
            <div className="flex-1 rounded-[24px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Design/mermory/congrats.png" alt="Deck published celebration modal" className="w-full" style={{ display: "block" }} />
            </div>
          </div>
          <p className="text-[#9AA3AF] text-[14px] leading-[1.7] mt-[20px]">
            The Library tracks deck-level progress at a glance. Every publish moment is marked with a confetti modal — a small, intentional celebration that reinforces the learner&apos;s identity as someone who creates, not just consumes.
          </p>
        </section>

        <hr className="border-black/8 mb-[96px]" />

        {/* Section: Visual Language */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Visual Language</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[48px]">
            The gradient system, the koala mascot, the card animations — every visual decision was made to feel warm and alive without being distracting. This recording shows the design language in motion across the full product.
          </p>
          <div className="w-full rounded-[24px] overflow-hidden bg-[#0f0f0f]" style={{ aspectRatio: "16/9" }}>
            <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/Design/mermory/mermory-demo.mp4" />
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
          <Link href="/" className="text-[#6B7280] text-[15px] hover:text-black transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Portfolio
          </Link>
          <a href="https://mermory.app" target="_blank" rel="noopener noreferrer" className="text-[#4583DA] text-[15px] hover:opacity-70 transition-opacity flex items-center gap-2">
            View Mermory Live
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </main>
  );
}
