import Link from "next/link";
import Nav from "@/components/Nav";

export default function JamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[80%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[24px] mb-[80px]">
          <div className="flex items-center gap-3">
            <span className="text-[#4583DA] text-[14px] font-medium tracking-widest uppercase">Case Study</span>
          </div>
          <h1 className="text-black text-[64px] font-normal leading-[1.05]">JAMS Scheduler</h1>
          <p className="text-[#4A5565] text-[22px] font-normal leading-relaxed max-w-[700px]">
            Strategic UX improvements for an enterprise workload automation platform — modernizing the experience without a foundational rebuild.
          </p>

          {/* Meta */}
          <div className="flex gap-[60px] pt-[16px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] text-[13px] uppercase tracking-widest">Role</span>
              <span className="text-black text-[16px]">UX Designer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] text-[13px] uppercase tracking-widest">Timeline</span>
              <span className="text-black text-[16px]">8 Weeks (Oct – Dec)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] text-[13px] uppercase tracking-widest">Focus Areas</span>
              <span className="text-black text-[16px]">Home · Monitor · Job Creation</span>
            </div>
          </div>
        </div>

        {/* Video hero */}
        <div className="w-full rounded-[39px] overflow-hidden mb-[100px]" style={{ aspectRatio: "16/9", background: "#0f0f0f" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/jams-thumbnail.mp4"
          />
        </div>

        {/* Overview */}
        <section className="mb-[100px]">
          <div className="flex flex-col gap-[32px] max-w-[760px]">
            <h2 className="text-black text-[36px] font-normal">Overview</h2>
            <p className="text-[#4A5565] text-[18px] leading-[1.8]">
              JAMS is an enterprise workload automation platform used by IT teams across industries — from financial services to healthcare — to schedule, orchestrate, and monitor critical business jobs across Windows, Linux, and UNIX environments.
            </p>
            <p className="text-[#4A5565] text-[18px] leading-[1.8]">
              This project was a strategic UX engagement focused on modernizing the JAMS web client experience. The goal: identify friction points, surface quick wins, and deliver design concepts that demonstrate the opportunity — all without requiring a foundational rebuild of the product.
            </p>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-[100px]">
          <h2 className="text-black text-[36px] font-normal mb-[48px]">Project Goals</h2>
          <div className="flex gap-[32px]">
            <div className="flex-1 p-[40px] rounded-[32px] bg-[#F7F9FC] flex flex-col gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#4583DA] flex items-center justify-center text-white text-[16px] font-medium">1</div>
              <h3 className="text-black text-[20px] font-normal">Deliver a modern, trustworthy UX</h3>
              <p className="text-[#4A5565] text-[16px] leading-[1.7]">Refresh key interface and interaction patterns to reflect a contemporary, high-quality experience — ensuring the design system, hierarchy, and workflows are cohesive, scalable, and intuitive.</p>
            </div>
            <div className="flex-1 p-[40px] rounded-[32px] bg-[#F7F9FC] flex flex-col gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#4583DA] flex items-center justify-center text-white text-[16px] font-medium">2</div>
              <h3 className="text-black text-[20px] font-normal">Reduce friction in critical workflows</h3>
              <p className="text-[#4A5565] text-[16px] leading-[1.7]">Study how administrators and automation engineers perform critical tasks to identify usability issues and reveal opportunities that enhance efficiency beyond a simple facelift.</p>
            </div>
          </div>
        </section>

        {/* Users */}
        <section className="mb-[100px]">
          <h2 className="text-black text-[36px] font-normal mb-[16px]">Who uses JAMS</h2>
          <p className="text-[#4A5565] text-[18px] leading-[1.8] max-w-[700px] mb-[48px]">Three distinct user types interact with JAMS — each with different goals, behaviors, and pain points.</p>

          <div className="flex flex-col gap-[24px]">
            {/* Business User */}
            <div className="p-[40px] rounded-[32px] border border-black/8 flex gap-[40px]">
              <div className="w-[200px] shrink-0 flex flex-col gap-[8px]">
                <span className="text-[#4583DA] text-[12px] uppercase tracking-widest font-medium">Primary Focus</span>
                <h3 className="text-black text-[22px] font-normal">Business User</h3>
                <p className="text-[#9AA3AF] text-[14px]">The Developer</p>
              </div>
              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-[#4A5565] text-[16px] leading-[1.7]">Designs and builds job logic that powers business automation. Focused on creating repeatable, efficient workflows that remove manual steps for other teams.</p>
                <div className="flex flex-wrap gap-[8px] pt-[8px]">
                  {["Creates & edits jobs", "Schedules workflows", "Tests before deployment", "Manages job logic"].map(tag => (
                    <span key={tag} className="px-[14px] py-[6px] rounded-full bg-[#F0F4FA] text-[#4583DA] text-[13px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Operator */}
            <div className="p-[40px] rounded-[32px] border border-black/8 flex gap-[40px]">
              <div className="w-[200px] shrink-0 flex flex-col gap-[8px]">
                <span className="text-[#4583DA] text-[12px] uppercase tracking-widest font-medium">Daily Operations</span>
                <h3 className="text-black text-[22px] font-normal">Operator</h3>
                <p className="text-[#9AA3AF] text-[14px]">The Babysitter</p>
              </div>
              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-[#4A5565] text-[16px] leading-[1.7]">Monitors job execution to ensure everything runs smoothly day-to-day. Quickly investigates and resolves failed or unexpected runs to keep business operations on track.</p>
                <div className="flex flex-wrap gap-[8px] pt-[8px]">
                  {["Monitors dashboards", "Resolves failures", "Re-runs jobs", "Responds to alerts"].map(tag => (
                    <span key={tag} className="px-[14px] py-[6px] rounded-full bg-[#F0F4FA] text-[#4583DA] text-[13px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Admin */}
            <div className="p-[40px] rounded-[32px] border border-black/8 flex gap-[40px]">
              <div className="w-[200px] shrink-0 flex flex-col gap-[8px]">
                <span className="text-[#4583DA] text-[12px] uppercase tracking-widest font-medium">Infrastructure</span>
                <h3 className="text-black text-[22px] font-normal">Admin</h3>
                <p className="text-[#9AA3AF] text-[14px]">IT / System Admin</p>
              </div>
              <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-[#4A5565] text-[16px] leading-[1.7]">Maintains the infrastructure and permissions that keep JAMS stable and secure. Configures servers, agents, and access controls so teams can work without interruption.</p>
                <div className="flex flex-wrap gap-[8px] pt-[8px]">
                  {["Configures servers", "Manages permissions", "Plans upgrades", "Troubleshoots outages"].map(tag => (
                    <span key={tag} className="px-[14px] py-[6px] rounded-full bg-[#F0F4FA] text-[#4583DA] text-[13px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-[100px]">
          <h2 className="text-black text-[36px] font-normal mb-[16px]">Key Findings</h2>
          <p className="text-[#4A5565] text-[18px] leading-[1.8] max-w-[700px] mb-[48px]">A heuristic evaluation across the Monitor, Jobs, and Home pages surfaced recurring patterns of friction.</p>

          <div className="grid grid-cols-2 gap-[24px]">
            {[
              { title: "Lack of at-a-glance visibility", desc: "The homepage offers no system-wide overview. Users land with no immediate insight into job health, agent status, or recent activity." },
              { title: "Hard to find jobs", desc: "Heavy dependence on folder structure with no saved filters, search, or quick access to failed jobs — slowing down operators during incidents." },
              { title: "Unclear error messages", desc: "Error logs lack hierarchy, direct links, and guidance. Users can't quickly identify what broke or how to fix it without hunting through multiple screens." },
              { title: "Configuration paralysis", desc: "Job creation exposes 60+ job types with no filtering or context. New and non-technical users face overwhelming options without direction." },
              { title: "Inconsistent interaction patterns", desc: "Pagination defaults to 10, action columns are hidden off-screen, and global vs. single-item actions are grouped together — creating confusion." },
              { title: "Mixed read/edit experiences", desc: "Editable and read-only pages use the same visual treatment, giving users no clear indication of what's actionable and what's informational." },
            ].map((item) => (
              <div key={item.title} className="p-[32px] rounded-[24px] bg-[#F7F9FC] flex flex-col gap-[12px]">
                <h3 className="text-black text-[18px] font-normal">{item.title}</h3>
                <p className="text-[#4A5565] text-[15px] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Recommendations */}
        <section className="mb-[100px]">
          <h2 className="text-black text-[36px] font-normal mb-[16px]">Design Recommendations</h2>
          <p className="text-[#4A5565] text-[18px] leading-[1.8] max-w-[700px] mb-[48px]">Focus on high-value changes that respect the existing information architecture — taking a phased approach to improvement.</p>

          <div className="flex flex-col gap-[16px]">
            {[
              { label: "Home / Landing Page", desc: "Transform the homepage into a unified jumping-off point with system-wide status, agent health, job history summaries, and at-a-glance insight." },
              { label: "Monitor Page", desc: "Improve scannability with better status visibility, persistent pagination, accessible action columns, and quick filters for failed jobs." },
              { label: "Job Entry / Log View", desc: "Leverage AI to surface error context, recommended next steps, and direct links — helping operators resolve issues faster without escalating." },
              { label: "Jobs Landing", desc: "Improve job findability with saved filters, quick search, and smarter default sort orders that surface what matters most." },
              { label: "Job Creation Flow", desc: "Introduce dynamic, execution-method-based guidance and AI-assisted job creation to reduce option paralysis for new users." },
              { label: "Job Details: Summary", desc: "Replace the current flat summary with meaningful context: last run, next run, total rules, failure rate, and job type at a glance." },
            ].map((item, i) => (
              <div key={item.label} className="flex gap-[24px] items-start p-[32px] rounded-[24px] border border-black/8 hover:border-[#4583DA]/30 hover:bg-[#F7F9FC] transition-all duration-200">
                <span className="text-[#4583DA] text-[14px] font-medium w-[28px] shrink-0 pt-[2px]">0{i + 1}</span>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-black text-[18px] font-normal">{item.label}</h3>
                  <p className="text-[#4A5565] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mb-[100px]">
          <div
            className="p-[60px] rounded-[39px] flex flex-col gap-[24px]"
            style={{
              background: "rgba(69, 131, 218, 0.08)",
              border: "1px solid rgba(69, 131, 218, 0.15)",
            }}
          >
            <span className="text-[#4583DA] text-[13px] uppercase tracking-widest font-medium">Executive Summary</span>
            <p className="text-black text-[22px] leading-[1.7] font-normal max-w-[760px]">
              This evaluation identified high-impact UX improvements that can significantly reduce operator friction, improve system confidence, and modernize JAMS&apos; experience — without requiring a foundational rebuild.
            </p>
            <div className="flex gap-[40px] pt-[8px]">
              <div className="flex flex-col gap-[4px]">
                <span className="text-[#4583DA] text-[28px] font-normal">8 wks</span>
                <span className="text-[#4A5565] text-[14px]">Project duration</span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[#4583DA] text-[28px] font-normal">3</span>
                <span className="text-[#4A5565] text-[14px]">User personas researched</span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[#4583DA] text-[28px] font-normal">6</span>
                <span className="text-[#4A5565] text-[14px]">Key design deliverables</span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="text-[#4583DA] text-[28px] font-normal">10+</span>
                <span className="text-[#4A5565] text-[14px]">Heuristic violations identified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
          <Link href="/" className="text-[#4A5565] text-[16px] hover:text-black transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Portfolio
          </Link>
          <a href="https://www.jamsscheduler.com" target="_blank" rel="noopener noreferrer" className="text-[#4583DA] text-[16px] hover:opacity-70 transition-opacity flex items-center gap-2">
            View JAMS Live
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
