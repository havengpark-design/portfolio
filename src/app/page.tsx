import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import JamsCard from "@/components/JamsCard";
import PorticoCard from "@/components/PorticoCard";
import MermoryCard from "@/components/MermoryCard";
import Storytelling1Card from "@/components/Storytelling1Card";
import Storytelling2Card from "@/components/Storytelling2Card";
import HashSectionOpener from "@/components/HashSectionOpener";
import ArtGallery from "@/components/ArtGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <HashSectionOpener />

      {/* Hero is full-width so text can fill the screen */}
      <div className="w-full pt-[68px]">
        <Hero />
      </div>

      {/* 80% container for everything below */}
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col pt-[80px] pb-[120px]">
          <div id="design">
            <ProjectGrid
              title="Design"
              subtitle="Complex systems made intuitive."
              defaultOpen={true}
              sectionId="design"
              firstCard={<JamsCard />}
              secondCard={<PorticoCard />}
              thirdCard={<MermoryCard />}
            />
          </div>

          <div id="storytelling">
            <ProjectGrid
              title="Storytelling"
              subtitle="Exploring identity, culture, and growth."
              defaultOpen={false}
              sectionId="storytelling"
              firstCard={<Storytelling1Card />}
              secondCard={<Storytelling2Card />}
            />
          </div>

          <div id="creating">
            <ArtGallery />
          </div>
        </div>
      </div>
    </main>
  );
}
