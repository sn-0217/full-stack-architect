import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      
      <footer className="border-t border-border/50 py-10 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 Sai Santosh Kumar Battula. Built with precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
