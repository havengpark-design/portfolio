import Link from "next/link";
import Nav from "@/components/Nav";

export default function PorticoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[20px] mb-[72px]">
          <span className="text-[#1A9E89] text-[13px] font-medium tracking-widest uppercase">Case Study</span>
          <h1 className="text-black text-[56px] font-normal leading-[1.05]">Portico</h1>
          <p className="text-[#6B7280] text-[19px] font-normal leading-relaxed">
            Strategic UX redesign for a unified student lifecycle platform — consolidating fragmented EdTech tools into a seamless, single-app experience.
          </p>
          <div className="flex gap-[48px] pt-[8px] text-[14px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Role</span>
              <span className="text-black">UX Designer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Timeline</span>
              <span className="text-black">8 Weeks (Aug – Oct)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Focus</span>
              <span className="text-black">First-time UX · Skills · Progress</span>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="w-full rounded-[32px] overflow-hidden mb-[96px]" style={{ aspectRatio: "16/9", background: "#0D2240" }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/Design/portico/portico%20thumbnail.mp4" />
        </div>

        {/* Overview */}
        <section className="mb-[80px]">
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[20px]">
            Portico is an integrated EdTech platform for career schools, bringing together Campus Ivy, CourseKey, and Verity IQ under one brand. It manages the entire student lifecycle: enrollment, financial aid, attendance, skills, and student success.
          </p>
          <p className="text-[#4A5565] text-[17px] leading-[1.85]">
            As Portico began selling as a true end-to-end solution, students were still navigating 4 web portals and 2 separate mobile apps. This engagement, led through This Waay Product Design Studio, focused on defining the ideal unified student experience and delivering tactical guidance for Portico&apos;s Q4 roadmap.
          </p>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Goals */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Goals</h2>
          <div className="flex flex-col gap-[28px]">
            <div className="flex gap-[20px]">
              <span className="text-[#1A9E89] text-[13px] shrink-0 mt-[3px]">01</span>
              <div>
                <p className="text-black text-[17px] mb-[6px]">Define the Ideal Integrated Student Experience</p>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">Deliver a clear, opinionated vision for how the student experience should be structured — ensuring tools, features, and touchpoints work together as one unified journey from first login to academic completion.</p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <span className="text-[#1A9E89] text-[13px] shrink-0 mt-[3px]">02</span>
              <div>
                <p className="text-black text-[17px] mb-[6px]">Deliver Tactical Design Guidance for Q4</p>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">Provide actionable design guidance to unify specific areas of the student experience so that a new student starting a program with Portico in 2026 has a seamless single-app experience.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Problem */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">The Problem</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            Students and schools faced a fragmented, disconnected experience — creating confusion, reliance on support, and missed engagement opportunities.
          </p>
          <div className="flex flex-col gap-[20px]">
            {[
              { title: "Fragmented multi-app experience", desc: "Students navigate 4 web portals and 2 mobile apps for basic tasks — attendance, payments, skills, and messaging live in separate, disconnected systems." },
              { title: "No centralized engagement channel", desc: "Schools lack a reliable way to reach students on mobile. There is no consistent nudge mechanism to drive student action." },
              { title: "Invisible progress", desc: "Students can't easily track their educational journey. Attendance, grades, skills, and course plans are siloed with no unified view." },
              { title: "High reliance on training", desc: "Apps require significant upfront training. Users can't self-serve or navigate confidently without hand-holding, driving up support tickets." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-[20px]">
                <span className="text-[#9AA3AF] text-[13px] shrink-0 mt-[3px] w-[20px]">{i + 1}</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">{item.title}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Process */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Process</h2>
          <div className="flex flex-col gap-[20px]">
            {[
              { phase: "Discover", weeks: "Weeks 1–2", desc: "Product demos and stakeholder context-gathering. Built a shared understanding of the platforms, user types, and existing pain points." },
              { phase: "Define", weeks: "Weeks 3–4", desc: "Heuristic evaluation across Trajecsys, SIS, CourseKey, and the Portico mobile app. Identified usability violations and friction patterns." },
              { phase: "Create", weeks: "Weeks 5–7", desc: "Design concept generation — visual concepts highlighting opportunities and alternative approaches aligned to Q4 execution priorities." },
              { phase: "Validate", weeks: "Week 8", desc: "Results readout with the cross-functional product team. Aligned on north star direction and immediate tactical next steps." },
            ].map((step) => (
              <div key={step.phase} className="flex gap-[20px]">
                <div className="w-[160px] shrink-0">
                  <p className="text-black text-[15px]">{step.phase}</p>
                  <p className="text-[#9AA3AF] text-[13px]">{step.weeks}</p>
                </div>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Findings */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Key Findings</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            A heuristic evaluation across 6 platforms surfaced recurring patterns across the three investigation areas.
          </p>
          <div className="flex flex-col gap-[20px]">
            {[
              { title: "No onboarding bridge", desc: "There is no in-product path connecting registration to the native app. Students complete registration but receive no prompt to download or set up the mobile experience." },
              { title: "Empty states offer no direction", desc: "When not yet enrolled, screens show empty states with no context — leaving students stranded with nothing to do." },
              { title: "Unnecessarily long enrollment flow", desc: "Trajecsys' email validation requires 5 steps and heavy admin intervention, with no self-service resolution path." },
              { title: "Clock-in flow lacks feedback", desc: "After selecting a site and clicking Clock IN, no confirmation is shown — a critical failure for attendance tracking." },
              { title: "Navigation lacks scannability", desc: "The passport surface carries too many responsibilities. It's not immediately clear what's clickable or what each element does." },
              { title: "Skills are invisible in core flows", desc: "The SIS mobile experience covers many service entities but skill logging is entirely absent — a major gap given it's one of the three core user stories." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-[20px]">
                <span className="text-[#9AA3AF] text-[13px] shrink-0 mt-[3px] w-[20px]">{i + 1}</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">{item.title}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Design Concepts */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Design Concepts</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[56px]">
            Three concept screens were developed during the Create phase to address the highest-priority findings and demonstrate what a unified student experience could look like in Q4.
          </p>

          {/* Home screen */}
          <div className="mb-[64px]">
            <img src="/Design/portico/home.png" alt="Portico Home Screen" className="w-full rounded-[20px] mb-[20px]" />
            <div className="flex gap-[20px]">
              <span className="text-[#1A9E89] text-[13px] shrink-0 mt-[3px]">01</span>
              <div>
                <p className="text-black text-[15px] mb-[4px]">A unified home surface</p>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">Attendance, updates, payments, and quick actions consolidated into a single home screen — replacing the need to switch between 4 portals. Progress is visible at a glance from day one.</p>
              </div>
            </div>
          </div>

          {/* Skills + Course screens side by side */}
          <div className="flex gap-[20px]">
            <div className="flex-1 flex flex-col gap-[20px]">
              <img src="/Design/portico/Skills.png" alt="Portico Skills Screen" className="w-full rounded-[20px]" />
              <div className="flex gap-[20px]">
                <span className="text-[#1A9E89] text-[13px] shrink-0 mt-[3px]">02</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">Skills made visible</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">Skill submissions, review statuses, and instructor feedback brought into the core app — addressing the complete absence of skill logging in the existing mobile experience.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[20px]">
              <img src="/Design/portico/course.png" alt="Portico Course Screen" className="w-full rounded-[20px]" />
              <div className="flex gap-[20px]">
                <span className="text-[#1A9E89] text-[13px] shrink-0 mt-[3px]">03</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">Course detail with records and tools</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">Attendance records, grades, and in-context tools surfaced within a single course view — reducing reliance on separate portals for each service entity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
          <Link href="/" className="text-[#6B7280] text-[15px] hover:text-black transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Portfolio
          </Link>
          <a href="https://porticoedu.com" target="_blank" rel="noopener noreferrer" className="text-[#1A9E89] text-[15px] hover:opacity-70 transition-opacity flex items-center gap-2">
            View Portico Live
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </main>
  );
}
