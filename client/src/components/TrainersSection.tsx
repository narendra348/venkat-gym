import { 
  Instagram, 
  Linkedin, 
  Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trainers } from "@/lib/data";

export default function TrainersSection() {
  // Use local data directly
  const data = trainers;
  const isLoading = false;

  return (
    <section id="trainers" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">EXPERT <span className="text-primary">TRAINERS</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Meet our team of certified fitness professionals dedicated to helping you achieve your goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading ? (
            // Show loading skeleton
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg h-[460px] animate-pulse">
                <div className="bg-gray-300 w-full h-80"></div>
                <div className="p-5 bg-white space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="flex space-x-3">
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            data?.map((trainer, index) => (
              <div 
                key={trainer.id}
                className="trainer-card rounded-lg overflow-hidden shadow-lg group relative reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={trainer.image} 
                  alt={`${trainer.name} - ${trainer.specialty}`} 
                  className="w-full h-80 object-cover transition-all duration-500"
                />
                
                <div className="p-5 bg-white">
                  <h3 className="font-montserrat font-bold text-xl mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-sm mb-3">{trainer.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-secondary hover:text-primary transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-secondary hover:text-primary transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-secondary hover:text-primary transition-all">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="trainer-overlay absolute inset-0 bg-gradient-to-t from-primary/90 to-secondary/80 flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-300">
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{trainer.name}</h3>
                  <p className="text-accent font-semibold mb-3">{trainer.specialty}</p>
                  <p className="text-white text-center mb-4">"{trainer.quote}"</p>
                  <Button
                    asChild
                    className="bg-accent text-secondary font-semibold rounded-full hover:bg-white transition-all"
                  >
                    <a href="#contact">Book a Session</a>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold rounded-full"
          >
            <a href="#contact">MEET THE FULL TEAM</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
