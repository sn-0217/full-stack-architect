import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2024 Sai Santosh Kumar Battula. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
