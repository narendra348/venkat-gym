import { Medal, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">ABOUT <span className="text-primary">VENKAT'S FITZONE</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Our mission is to provide a transformative fitness experience that elevates your physical and mental wellbeing through expert guidance, innovative programs, and a supportive community.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <img 
                src="/image18.webp"
                alt="Modern fitness studio with equipment" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-montserrat font-bold text-2xl">EST. 2013</p>
                <p>A decade of excellence</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            <h3 className="font-montserrat font-bold text-3xl mb-4">Our Philosophy</h3>
            <p className="text-lg mb-4">At Venkat's Fitzone, we believe fitness is more than just exercise—it's a lifestyle that empowers you to reach your full potential. Our holistic approach combines cutting-edge training methods, nutritional guidance, and wellness support.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <Medal className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-xl">Premium Experience</h4>
                  <p>State-of-the-art equipment in a luxurious, motivating environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <Users className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-xl">Expert Guidance</h4>
                  <p>Certified trainers dedicated to your success and safety.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <Heart className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-xl">Supportive Community</h4>
                  <p>A welcoming atmosphere where everyone belongs and thrives together.</p>
                </div>
              </div>
            </div>
            
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold rounded-full"
            >
              <a href="#contact">JOIN OUR COMMUNITY</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
