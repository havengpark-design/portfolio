import Link from "next/link";
import Nav from "@/components/Nav";
import LightboxImage from "@/components/LightboxImage";
import FadeIn from "@/components/FadeIn";
import ReadingProgress from "@/components/ReadingProgress";

const ACCENT = "#4583DA";

const users = [
  { name: "Business User", subtitle: "The Developer", desc: "Designs and builds job logic that powers business automation. Focused on creating repeatable, efficient workflows that remove manual steps for other teams." },
  { name: "Operator", subtitle: "The Babysitter", desc: "Monitors job execution day-to-day. Quickly investigates and resolves failed or unexpected runs to keep business operations on track." },
  { name: "Admin", subtitle: "IT / System Admin", desc: "Maintains the infrastructure and permissions that keep JAMS stable and secure — configuring servers, agents, and access controls." },
];

const findings = [
  { title: "No system-wide overview", desc: "The homepage offers no insight into job health, agent status, or recent activity. Users land with nothing actionable." },
  { title: "Hard to find jobs", desc: "Heavy dependence on folder structure with no saved filters, search, or quick access to failed jobs." },
  { title: "Unclear error messages", desc: "Error logs lack hierarchy and guidance. Users can't quickly identify what broke or how to fix it without hunting through multiple screens." },
  { title: "Configuration paralysis", desc: "Job creation exposes 60+ job types with no filtering or context — overwhelming for new and non-technical users." },
  { title: "Inconsistent interaction patterns", desc: "Pagination defaults to 10, action columns hide off-screen, and global vs. item-level actions are grouped — creating confusion." },
  { title: "Mixed read/edit experiences", desc: "Editable and read-only pages share the same visual treatment, giving no indication of what's actionable." },
];

const recommendations = [
  { label: "Home / Landing Page", desc: "Transform into a unified jumping-off point with system-wide status, agent health, job history, and at-a-glance insight." },
  { label: "Monitor Page", desc: "Improve scannability with better status visibility, persistent pagination, accessible action columns, and quick filters for failed jobs." },
  { label: "Job Entry / Log View", desc: "Surface error context, recommended next steps, and direct links — helping operators resolve issues faster." },
  { label: "Jobs Landing", desc: "Improve findability with saved filters, quick search, and smarter default sort orders." },
  { label: "Job Creation Flow", desc: "Introduce execution-method-based guidance and AI-assisted creation to reduce option paralysis." },
  { label: "Job Details: Summary", desc: "Replace the flat summary with meaningful context: last run, next run, failure rate, and job type at a glance." },
];

export default function JamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ReadingProgress color={ACCENT} />
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <FadeIn className="flex flex-col gap-[20px] mb-[72px]">
          <span className="text-[#4583DA] text-[13px] font-medium tracking-widest uppercase">Case Study</span>
          <h1 className="text-black text-[56px] font-normal leading-[1.05]">JAMS Scheduler</h1>
          <p className="text-[#6B7280] text-[19px] font-normal leading-relaxed">
            Strategic UX improvements for an enterprise workload automation platform — modernizing the experience without a foundational rebuild.
          </p>
          <div className="flex gap-[48px] pt-[8px] text-[14px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Role</span>
              <span className="text-black">UX Designer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Timeline</span>
              <span className="text-black">8 Weeks (Oct – Dec)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Focus</span>
              <span className="text-black">Home · Monitor · Job Creation</span>
            </div>
          </div>
        </FadeIn>

        {/* Video */}
        <FadeIn delay={80} className="w-full rounded-[32px] overflow-hidden mb-[96px]" style={{ aspectRatio: "16/9", background: "#0f0f0f" }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/Design/jams/jams%20thumbnail.mp4" />
        </FadeIn>

        {/* Overview */}
        <FadeIn className="mb-[80px]">
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[20px]">
            JAMS is an enterprise workload automation platform used by IT teams across industries — from financial services to healthcare — to schedule, orchestrate, and monitor critical business jobs across Windows, Linux, and UNIX environments.
          </p>
          <p className="text-[#4A5565] text-[17px] leading-[1.85]">
            This was a strategic UX engagement focused on modernizing the JAMS web client. The goal: identify friction points, surface quick wins, and deliver design concepts that demonstrate the opportunity — without requiring a foundational rebuild.
          </p>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* Goals */}
        <FadeIn className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Goals</h2>
          <div className="flex flex-col gap-[16px]">
            {[
              { title: "Deliver a modern, trustworthy UX", desc: "Refresh key interface patterns to reflect a contemporary experience — ensuring the design system, hierarchy, and workflows are cohesive and intuitive." },
              { title: "Reduce friction in critical workflows", desc: "Study how administrators and automation engineers perform key tasks to identify usability issues and reveal opportunities beyond a simple facelift." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-[20px] rounded-[10px] px-[14px] py-[12px] -mx-[14px] hover:bg-[#F8F9FF] transition-colors duration-200 cursor-default">
                <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px]">0{i + 1}</span>
                <div>
                  <p className="text-black text-[17px] mb-[6px]">{item.title}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* Users */}
        <FadeIn className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Who uses JAMS</h2>
          <div className="flex flex-col gap-[8px]">
            {users.map((user) => (
              <div key={user.name} className="flex gap-[20px] rounded-[10px] px-[14px] py-[12px] -mx-[14px] hover:bg-[#F8F9FF] transition-colors duration-200 cursor-default">
                <div className="w-[160px] shrink-0">
                  <p className="text-black text-[15px]">{user.name}</p>
                  <p className="text-[#9AA3AF] text-[13px]">{user.subtitle}</p>
                </div>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">{user.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* Findings */}
        <FadeIn className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Key Findings</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            A heuristic evaluation across the Monitor, Jobs, and Home pages surfaced recurring patterns of friction.
          </p>
          <div className="flex flex-col gap-[8px]">
            {findings.map((item, i) => (
              <div key={item.title} className="flex gap-[20px] rounded-[10px] px-[14px] py-[12px] -mx-[14px] hover:bg-[#F8F9FF] transition-colors duration-200 cursor-default">
                <span className="text-[#9AA3AF] text-[13px] shrink-0 mt-[3px] w-[20px]">{i + 1}</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">{item.title}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* Starting Point */}
        <FadeIn className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[8px]">Starting Point</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[48px]">
            The original web client — functional, but offering little visibility or guidance to the people who need it most.
          </p>

          <div className="mb-[48px]">
            <div className="flex items-center gap-[10px] mb-[16px]">
              <span className="bg-[#F3F4F6] text-[#6B7280] text-[11px] uppercase tracking-widest px-[10px] py-[4px] rounded-full">Before</span>
              <span className="text-black text-[15px]">Home Page</span>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-[2px]">
              <div className="rounded-[16px] overflow-hidden border border-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
                <LightboxImage src="/Design/jams/Dashboard/Home%20-%20Original.png" alt="JAMS original home page" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <p className="text-[#9AA3AF] text-[13px] mt-[14px] leading-[1.7]">
              Users land on a near-empty page — no system status, no job health overview, no way to jump into work. A missed opportunity to orient operators the moment they open the app.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[10px] mb-[16px]">
              <span className="bg-[#F3F4F6] text-[#6B7280] text-[11px] uppercase tracking-widest px-[10px] py-[4px] rounded-full">Before</span>
              <span className="text-black text-[15px]">Monitor Page</span>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-[2px]">
              <div className="rounded-[16px] overflow-hidden border border-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
                <LightboxImage src="/Design/jams/Monitor/Monitor%20-%20Original.png" alt="JAMS original monitor page" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <p className="text-[#9AA3AF] text-[13px] mt-[14px] leading-[1.7]">
              A dense, unfiltered table with no summary context, no status-at-a-glance, and actions buried off-screen. Operators had to scroll, hunt, and guess.
            </p>
          </div>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* Recommendations */}
        <FadeIn className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Design Recommendations</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            High-value changes that respect the existing information architecture — a phased approach to improvement.
          </p>
          <div className="flex flex-col gap-[8px]">
            {recommendations.map((item, i) => (
              <div key={item.label} className="flex gap-[20px] rounded-[10px] px-[14px] py-[12px] -mx-[14px] hover:bg-[#F8F9FF] transition-colors duration-200 cursor-default">
                <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px] w-[20px]">0{i + 1}</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">{item.label}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn><hr className="border-black/8 mb-[80px]" /></FadeIn>

        {/* The Redesign */}
        <FadeIn className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[8px]">The Redesign</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[56px]">
            Three iterations of the home page, and a ground-up rethink of the monitor. Each pass tightened hierarchy and surfaced what operators actually need — without losing the power-user depth that enterprise teams depend on.
          </p>

          {/* Home — progression */}
          <div className="mb-[64px]">
            <p className="text-black text-[17px] mb-[6px]">Home Page</p>
            <p className="text-[#6B7280] text-[15px] leading-[1.7] mb-[32px]">From a blank landing page to a real-time operations hub. Three versions, progressively simplifying the information architecture to reduce cognitive load.</p>

            <div className="transition-all duration-300 hover:-translate-y-[2px] mb-[12px]">
              <div className="rounded-[16px] overflow-hidden border border-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
                <LightboxImage src="/Design/jams/Dashboard/Home%20-%20Future.version3.png" alt="JAMS home redesign — final version" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <div className="flex items-center gap-[10px] mb-[32px]">
              <span className="bg-[#EBF2FF] text-[#4583DA] text-[11px] uppercase tracking-widest px-[10px] py-[4px] rounded-full">After · v3</span>
              <span className="text-[#6B7280] text-[13px]">Simplified to the essentials — quick actions and resources front-and-center, zero noise.</span>
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <div className="transition-all duration-300 hover:-translate-y-[2px]">
                  <div className="rounded-[12px] overflow-hidden border border-black/[0.06] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                    <LightboxImage src="/Design/jams/Dashboard/Home%20-%20Future.png" alt="JAMS home redesign v1" style={{ width: "100%", display: "block" }} />
                  </div>
                </div>
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <span className="bg-[#F3F4F6] text-[#9AA3AF] text-[11px] uppercase tracking-widest px-[8px] py-[3px] rounded-full">v1</span>
                  <span className="text-[#9AA3AF] text-[12px]">Full dashboard with live metrics and agent list</span>
                </div>
              </div>
              <div>
                <div className="transition-all duration-300 hover:-translate-y-[2px]">
                  <div className="rounded-[12px] overflow-hidden border border-black/[0.06] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                    <LightboxImage src="/Design/jams/Dashboard/Home%20-%20Future.version2.png" alt="JAMS home redesign v2" style={{ width: "100%", display: "block" }} />
                  </div>
                </div>
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <span className="bg-[#F3F4F6] text-[#9AA3AF] text-[11px] uppercase tracking-widest px-[8px] py-[3px] rounded-full">v2</span>
                  <span className="text-[#9AA3AF] text-[12px]">Tightened layout, improved status hierarchy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor — before / after */}
          <div>
            <p className="text-black text-[17px] mb-[6px]">Monitor Page</p>
            <p className="text-[#6B7280] text-[15px] leading-[1.7] mb-[32px]">Added a stats header for immediate situational awareness, smart filters to surface failures fast, and persistent pagination so operators don&apos;t lose their place.</p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <div className="transition-all duration-300 hover:-translate-y-[2px]">
                  <div className="rounded-[12px] overflow-hidden border border-black/[0.06] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                    <LightboxImage src="/Design/jams/Monitor/Monitor%20-%20Original.png" alt="Monitor original" style={{ width: "100%", display: "block" }} />
                  </div>
                </div>
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <span className="bg-[#F3F4F6] text-[#6B7280] text-[11px] uppercase tracking-widest px-[8px] py-[3px] rounded-full">Before</span>
                  <span className="text-[#9AA3AF] text-[12px]">Dense table, no context or quick filters</span>
                </div>
              </div>
              <div>
                <div className="transition-all duration-300 hover:-translate-y-[2px]">
                  <div className="rounded-[12px] overflow-hidden border border-black/[0.06] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                    <LightboxImage src="/Design/jams/Monitor/Monitor%20-%20Future.png" alt="Monitor redesigned" style={{ width: "100%", display: "block" }} />
                  </div>
                </div>
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <span className="bg-[#EBF2FF] text-[#4583DA] text-[11px] uppercase tracking-widest px-[8px] py-[3px] rounded-full">After</span>
                  <span className="text-[#9AA3AF] text-[12px]">Stats at a glance, smart filters, clear actions</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer nav */}
        <FadeIn>
          <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
            <Link href="/" className="text-[#6B7280] text-[15px] hover:text-black transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to Portfolio
            </Link>
            <a href="https://www.jamsscheduler.com" target="_blank" rel="noopener noreferrer" className="text-[#4583DA] text-[15px] hover:opacity-70 transition-opacity flex items-center gap-2">
              View JAMS Live
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}
