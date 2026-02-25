import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import JamsCard from "@/components/JamsCard";
import PorticoCard from "@/components/PorticoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Single 80% container, centered */}
      <div className="w-[80%] mx-auto pt-[68px]">
        <Hero />

        <div className="flex flex-col pt-[80px] pb-[120px]">
          <ProjectGrid
            title="Design"
            subtitle="Complex systems made intuitive."
            defaultOpen={true}
            firstCard={<JamsCard />}
            secondCard={<PorticoCard />}
          />

          <ProjectGrid
            title="Storytelling"
            subtitle="Exploring identity, culture, and growth."
            defaultOpen={false}
          />

          <ProjectGrid
            title="Creating"
            subtitle="Making art to feel."
            defaultOpen={false}
          />
        </div>
      </div>
    </main>
  );
}
