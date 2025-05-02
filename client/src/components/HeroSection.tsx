import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Fitness equipment in a modern gym" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl text-white text-shadow mb-6 animate-fade-in-up">
          ELEVATE YOUR <span className="text-accent">FITNESS</span> JOURNEY
        </h1>
        <p className="font-opensans text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Discover a premium fitness experience designed to transform your body, mind, and life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-full hover:scale-105 transition-all"
          >
            <a href="#contact">START TODAY</a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold rounded-full"
          >
            <a href="#programs">EXPLORE PROGRAMS</a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <a href="#about" className="text-white text-3xl">
            <ChevronDown size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}
