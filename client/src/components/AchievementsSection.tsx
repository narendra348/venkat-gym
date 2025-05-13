import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function AchievementsSection() {
  const achievements = [
    { id: 1, image: "/image10.webp", title: "Awarded Best Gym 2025" },
    { id: 2, image: "/image12.webp", title: "1000+ Members Strong" },
    { id: 3, image: "/image13.webp", title: "Certified Trainers" },
    { id: 4, image: "/image14.webp", title: "State-of-the-Art Equipment" },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">OUR <span className="text-primary">ACHIEVEMENTS</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Celebrating milestones and accomplishments that define our journey towards excellence.</p>
        </div>

        <Carousel className="reveal">
          <CarouselContent>
            {achievements.map((achievements) => (
              <CarouselItem key={achievements.id} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={achievements.image}
                    alt={achievements.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-montserrat font-bold text-xl">{achievements.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
