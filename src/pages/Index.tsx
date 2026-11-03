import Navbar from '@/components/Navbar';
import Welcome from '@/components/Welcome';
import ProjectCarousel from '@/components/ProjectCarousel';
import About from '@/components/About';
import Games from '@/components/Games';
import SectionDivider from '@/components/SectionDivider';
import FirstDivider from '@/components/FirstDivider';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Welcome />
        <FirstDivider />
        <ProjectCarousel />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Games />
      </main>
    </div>
  );
};

export default Index;
