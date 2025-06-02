import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function EquipmentSection() {
  // Updated paths to remove 'public' prefix
  const equipments = [
    { id: 1, image: "/image1.jpeg", title: "Awarded Best Gym 2025" },
    { id: 2, image: "/image2.jpeg", title: "1000+ Members Strong" },
    { id: 3, image: "/dumbell.webp", title: "Certified Trainers" },
    { id: 4, image: "/gymtrainer.webp", title: "State-of-the-Art Equipment" },
    { id: 5, image: "/image3.jpeg", title: "State-of-the-Art Equipment" },
    { id: 6, image: "/image4.jpeg", title: "State-of-the-Art Equipment" },
    { id: 7, image: "/image6.jpeg", title: "State-of-the-Art Equipment" },
    { id: 8, image: "/image7.jpeg", title: "State-of-the-Art Equipment" },
    { id: 9, image: "/gym.jpeg", title: "State-of-the-Art Equipment" },
    { id: 10, image: "/image18.webp", title: "State-of-the-Art Equipment" },
    { id: 11, image: "/image19.webp", title: "State-of-the-Art Equipment" },
    { id: 12, image: "/strength.webp", title: "State-of-the-Art Equipment" },
    { id: 13, image: "/training.webp", title: "State-of-the-Art Equipment" },
    { id: 14, image: "/gym1.webm", title: "State-of-the-Art Equipment" },
    { id: 15, image: "/gym2.webm", title: "State-of-the-Art Equipment" },
    { id: 16, image: "/gym3.webm", title: "State-of-the-Art Equipment" },
    { id: 17, image: "/gym4.webm", title: "State-of-the-Art Equipment" },
    { id: 18, image: "/gym5.webm", title: "State-of-the-Art Equipment" },
    { id: 19, image: "/gym6.webm", title: "State-of-the-Art Equipment" },
  ];

  return (
    <section id="equipments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">OUR <span className="text-primary">EQUIPMENT</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Celebrating milestones and accomplishments that define our journey towards excellence.</p>
        </div>

        <Carousel className="reveal">
          <CarouselContent>
            {equipments.map((equipment) => (
              <CarouselItem key={equipment.id} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {equipment.image.endsWith('.webm') ? (
                    <video
                      src={equipment.image}
                      alt={equipment.title}
                      className="w-full h-64 object-cover"
                      controls
                    />
                  ) : (
                    <img
                      src={equipment.image}
                      alt={equipment.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold">{equipment.title}</h3>
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
