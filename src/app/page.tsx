import ExpertiseSection from "@/components/expertise/ExpertiseSection";
import Header from "@/components/header/Header";
import Missoins from "@/components/mission/Missions";
import Works from "@/components/works/Works";


export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ExpertiseSection />
        <Missoins />
        <Works />
      </main>
    </div>
  );
}
