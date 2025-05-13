import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrainersSection from "@/components/TrainersSection";

import FeedbackSection from "@/components/FeedbackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  // Scroll reveal animation
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((reveal) => {
        const revealTop = (reveal as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    // Initialize on mount
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", revealOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <ScheduleSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
