import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Achievements from '@/components/sections/Achievements';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section with flowing transition */}
      <About />
      
      {/* Timeline Section for work experience */}
      <Timeline />
      
      {/* Achievements Section */}
      <Achievements />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </main>
  );
}
