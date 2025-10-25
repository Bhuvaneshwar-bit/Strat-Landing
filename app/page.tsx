import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import CorePillars from '@/components/sections/CorePillars';
import MuAISpotlight from '@/components/sections/MuAISpotlight';
import Partners from '@/components/sections/Partners';
import CampusExperience from '@/components/sections/CampusExperience';
import IACETribe from '@/components/sections/IACETribe';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <CorePillars />
      <MuAISpotlight />
      <Partners />
      <CampusExperience />
      <IACETribe />
      <Footer />
    </main>
  );
}
