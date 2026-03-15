import Link from "next/link";
import Nav from "@/components/Nav";

export default function Storytelling2Page() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[20px] mb-[72px]">
          <span className="text-[#4583DA] text-[13px] font-medium tracking-widest uppercase">Storytelling</span>
          <h1 className="text-black text-[56px] font-normal leading-[1.05]">Choosing to Love</h1>
          <p className="text-[#6B7280] text-[19px] font-normal leading-relaxed">
            On choosing love — not as something that happens to you, but as something you decide, again and again, despite it all.
          </p>
          <div className="flex gap-[48px] pt-[8px] text-[14px]">
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Platform</span>
              <span className="text-black">Instagram</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Format</span>
              <span className="text-black">Short-form Video</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#9AA3AF] uppercase tracking-widest">Theme</span>
              <span className="text-black">Love · Choice · Resilience</span>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="flex justify-center mb-[96px]">
          <iframe
            src="https://www.instagram.com/reel/DRYe6fakb57/embed/"
            width="400"
            height="710"
            frameBorder="0"
            scrolling="no"
            style={{ borderRadius: "16px", overflow: "hidden" }}
          />
        </div>

        {/* Footer nav */}
        <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
          <Link href="/" className="text-[#6B7280] text-[15px] hover:text-black transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Portfolio
          </Link>
          <a href="https://www.instagram.com/reel/DRYe6fakb57/" target="_blank" rel="noopener noreferrer" className="text-[#4583DA] text-[15px] hover:opacity-70 transition-opacity flex items-center gap-2">
            Instagram
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </main>
  );
}
