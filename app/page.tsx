import Hero from "@/components/home/Hero";
import Marquee from "@/components/layout/Marquee";
import Flagship from "@/components/home/Flagship";
import SelectedWork from "@/components/home/SelectedWork";
import Philosophy from "@/components/home/Philosophy";
import Timeline from "@/components/home/Timeline";
import OpenSource from "@/components/home/OpenSource";
import SkillField from "@/components/home/SkillField";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main id="main-content" data-testid="home-page">
      <Hero />
      <Marquee />
      <Flagship />
      <SelectedWork />
      <Philosophy />
      <Timeline />
      <OpenSource />
      <SkillField />
      <Contact />
    </main>
  );
}
