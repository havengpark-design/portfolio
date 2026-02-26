import Link from "next/link";
import Nav from "@/components/Nav";

export default function Storytelling1Page() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="w-[60%] mx-auto pt-[120px] pb-[120px]">

        {/* Hero */}
        <div className="flex flex-col gap-[20px] mb-[72px]">
          <span className="text-[#4583DA] text-[13px] font-medium tracking-widest uppercase">Storytelling</span>
          <h1 className="text-black text-[56px] font-normal leading-[1.05]">Title</h1>
          <p className="text-[#6B7280] text-[19px] font-normal leading-relaxed">
            Description of this piece — what it&apos;s about, why it matters.
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
              <span className="text-black">Identity · Culture · Growth</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full rounded-[32px] overflow-hidden mb-[96px]" style={{ aspectRatio: "16/9", background: "#f5f5f5" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Storytelling/Storytelling1.png" alt="Storytelling" className="w-full h-full object-cover" />
        </div>

        {/* Context */}
        <section className="mb-[80px]">
          <p className="text-[#4A5565] text-[17px] leading-[1.85] mb-[20px]">
            Write about the context and story behind this piece here.
          </p>
        </section>

        <hr className="border-black/8 mb-[80px]" />

        {/* Instagram embed */}
        <section className="mb-[96px]">
          <h2 className="text-[13px] uppercase tracking-widest text-[#9AA3AF] mb-[32px]">The Reel</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/reel/DUjPR6vEsMt/embed/"
              width="400"
              height="710"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              style={{ borderRadius: "12px", overflow: "hidden" }}
            />
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex justify-between items-center pt-[40px] border-t border-black/8">
          <Link href="/" className="text-[#6B7280] text-[15px] hover:text-black transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Portfolio
          </Link>
          <a href="https://www.instagram.com/reel/DUjPR6vEsMt/" target="_blank" rel="noopener noreferrer" className="text-[#4583DA] text-[15px] hover:opacity-70 transition-opacity flex items-center gap-2">
            View on Instagram
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </main>
  );
}
