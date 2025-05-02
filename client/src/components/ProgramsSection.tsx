import { Button } from "@/components/ui/button";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  // Use local data directly
  const data = programs;
  const isLoading = false;

  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">OUR <span className="text-primary">PROGRAMS</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Discover our diverse range of fitness programs designed to challenge, inspire, and transform your body and mind.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show loading skeleton
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden h-[380px] animate-pulse">
                <div className="bg-gray-300 w-full h-64"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-300 rounded w-20"></div>
                    <div className="h-6 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            data?.map((program, index) => (
              <div 
                key={program.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={program.image} 
                  alt={program.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-2xl mb-3">{program.name}</h3>
                  <p className="mb-4">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{program.duration} MIN</span>
                    <button className="text-secondary hover:text-primary font-montserrat font-semibold transition-all">Learn More →</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-full"
          >
            <a href="#schedule">VIEW FULL SCHEDULE</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
