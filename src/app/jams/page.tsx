import Link from "next/link";
import Nav from "@/components/Nav";

export default function JamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[20px] mb-[72px]">
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
        </div>

        {/* Video */}
        <div className="w-full rounded-[32px] overflow-hidden mb-[96px]" style={{ aspectRatio: "16/9", background: "#0f0f0f" }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="/Design/jams/jams%20thumbnail.mp4" />
        </div>

        {/* Overview */}
        <section className="mb-[80px]">
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[20px]">
            JAMS is an enterprise workload automation platform used by IT teams across industries — from financial services to healthcare — to schedule, orchestrate, and monitor critical business jobs across Windows, Linux, and UNIX environments.
          </p>
          <p className="text-[#4A5565] text-[17px] leading-[1.85]">
            This was a strategic UX engagement focused on modernizing the JAMS web client. The goal: identify friction points, surface quick wins, and deliver design concepts that demonstrate the opportunity — without requiring a foundational rebuild.
          </p>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Goals */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Goals</h2>
          <div className="flex flex-col gap-[28px]">
            <div className="flex gap-[20px]">
              <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px]">01</span>
              <div>
                <p className="text-black text-[17px] mb-[6px]">Deliver a modern, trustworthy UX</p>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">Refresh key interface patterns to reflect a contemporary experience — ensuring the design system, hierarchy, and workflows are cohesive and intuitive.</p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px]">02</span>
              <div>
                <p className="text-black text-[17px] mb-[6px]">Reduce friction in critical workflows</p>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">Study how administrators and automation engineers perform key tasks to identify usability issues and reveal opportunities beyond a simple facelift.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Users */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Who uses JAMS</h2>
          <div className="flex flex-col gap-[24px]">
            {[
              { name: "Business User", subtitle: "The Developer", desc: "Designs and builds job logic that powers business automation. Focused on creating repeatable, efficient workflows that remove manual steps for other teams." },
              { name: "Operator", subtitle: "The Babysitter", desc: "Monitors job execution day-to-day. Quickly investigates and resolves failed or unexpected runs to keep business operations on track." },
              { name: "Admin", subtitle: "IT / System Admin", desc: "Maintains the infrastructure and permissions that keep JAMS stable and secure — configuring servers, agents, and access controls." },
            ].map((user) => (
              <div key={user.name} className="flex gap-[20px]">
                <div className="w-[160px] shrink-0">
                  <p className="text-black text-[15px]">{user.name}</p>
                  <p className="text-[#9AA3AF] text-[13px]">{user.subtitle}</p>
                </div>
                <p className="text-[#6B7280] text-[15px] leading-[1.7]">{user.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Findings */}
        <section className="mb-[80px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Key Findings</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            A heuristic evaluation across the Monitor, Jobs, and Home pages surfaced recurring patterns of friction.
          </p>
          <div className="flex flex-col gap-[20px]">
            {[
              { title: "No system-wide overview", desc: "The homepage offers no insight into job health, agent status, or recent activity. Users land with nothing actionable." },
              { title: "Hard to find jobs", desc: "Heavy dependence on folder structure with no saved filters, search, or quick access to failed jobs." },
              { title: "Unclear error messages", desc: "Error logs lack hierarchy and guidance. Users can't quickly identify what broke or how to fix it without hunting through multiple screens." },
              { title: "Configuration paralysis", desc: "Job creation exposes 60+ job types with no filtering or context — overwhelming for new and non-technical users." },
              { title: "Inconsistent interaction patterns", desc: "Pagination defaults to 10, action columns hide off-screen, and global vs. item-level actions are grouped — creating confusion." },
              { title: "Mixed read/edit experiences", desc: "Editable and read-only pages share the same visual treatment, giving no indication of what's actionable." },
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

        {/* Recommendations */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">Design Recommendations</h2>
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[32px]">
            High-value changes that respect the existing information architecture — a phased approach to improvement.
          </p>
          <div className="flex flex-col gap-[20px]">
            {[
              { label: "Home / Landing Page", desc: "Transform into a unified jumping-off point with system-wide status, agent health, job history, and at-a-glance insight." },
              { label: "Monitor Page", desc: "Improve scannability with better status visibility, persistent pagination, accessible action columns, and quick filters for failed jobs." },
              { label: "Job Entry / Log View", desc: "Surface error context, recommended next steps, and direct links — helping operators resolve issues faster." },
              { label: "Jobs Landing", desc: "Improve findability with saved filters, quick search, and smarter default sort orders." },
              { label: "Job Creation Flow", desc: "Introduce execution-method-based guidance and AI-assisted creation to reduce option paralysis." },
              { label: "Job Details: Summary", desc: "Replace the flat summary with meaningful context: last run, next run, failure rate, and job type at a glance." },
            ].map((item, i) => (
              <div key={item.label} className="flex gap-[20px]">
                <span className="text-[#4583DA] text-[13px] shrink-0 mt-[3px] w-[20px]">0{i + 1}</span>
                <div>
                  <p className="text-black text-[15px] mb-[4px]">{item.label}</p>
                  <p className="text-[#6B7280] text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
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

      </div>
    </main>
  );
}
