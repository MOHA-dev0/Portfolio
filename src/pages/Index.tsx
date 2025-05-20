import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  useEffect(() => {
    document.title = "Mohammad Ramez | Portfolio";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BackgroundShapes />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
