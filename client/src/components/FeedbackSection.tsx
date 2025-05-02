import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { testimonials as testimonialData } from "@/lib/data";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  rating: z.number().min(1, "Please select a rating").max(5),
  feedback: z.string().min(10, "Feedback must be at least 10 characters"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function FeedbackSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const { toast } = useToast();
  const [localTestimonials, setLocalTestimonials] = useState(testimonialData);
  const isLoading = false;

  // Setup form with react-hook-form
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: 0,
      feedback: "",
    },
  });

  // Rating stars functionality
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  };
  
  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    form.setValue("rating", rating);
  };

  // Simulate submit feedback (store in state for demo)
  const handleSubmitFeedback = (values: FeedbackFormValues) => {
    // Create a new testimonial object from the form values
    const newTestimonial = {
      id: localTestimonials.length + 1,
      name: values.name,
      status: "New Member",
      rating: values.rating,
      text: values.feedback,
      image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`,
    };
    
    // Add the new testimonial to our local state
    setLocalTestimonials([newTestimonial, ...localTestimonials]);
    
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
    form.reset();
    setSelectedRating(0);
  };

  // Autoplay functionality for testimonials
  useEffect(() => {
    if (!autoplayEnabled || !localTestimonials.length) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % localTestimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplayEnabled, localTestimonials.length]);

  // Handle previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? localTestimonials.length - 1 : prev - 1
    );
  };

  // Handle next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      (prev + 1) % localTestimonials.length
    );
  };

  // Handle form submission
  const onSubmit = (values: FeedbackFormValues) => {
    handleSubmitFeedback(values);
  };

  return (
    <section id="feedback" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">MEMBER <span className="text-primary">FEEDBACK</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Hear what our community has to say about their Elevate experience.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Testimonial Carousel */}
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <div 
              className="testimonial-carousel relative"
              onMouseEnter={() => setAutoplayEnabled(false)}
              onMouseLeave={() => setAutoplayEnabled(true)}
            >
              {isLoading ? (
                // Loading skeleton
                <div className="animate-pulse space-y-4">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 mr-1 bg-gray-300 rounded-full"></div>
                    ))}
                  </div>
                  <div className="h-32 bg-gray-300 rounded"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="h-5 bg-gray-300 rounded w-24 mb-1"></div>
                      <div className="h-4 bg-gray-300 rounded w-36"></div>
                    </div>
                  </div>
                </div>
              ) : localTestimonials?.length ? (
                <>
                  {/* Testimonial Items */}
                  <div className="min-h-[250px]">
                    <div className="mb-6">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className="text-yellow-400 fill-yellow-400" 
                            size={20}
                          />
                        ))}
                      </div>
                      <p className="italic text-lg mb-4">"{localTestimonials[activeTestimonial].text}"</p>
                      <div className="flex items-center">
                        <img 
                          src={localTestimonials[activeTestimonial].image} 
                          alt={localTestimonials[activeTestimonial].name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-montserrat font-bold">{localTestimonials[activeTestimonial].name}</h4>
                          <p className="text-sm text-gray-600">{localTestimonials[activeTestimonial].status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevTestimonial}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-primary/90 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-primary/90 transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Dots */}
                  <div className="flex justify-center mt-6">
                    {localTestimonials.map((_, i) => (
                      <span 
                        key={i}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all ${i === activeTestimonial ? 'bg-primary' : 'bg-gray-300'}`}
                        onClick={() => setActiveTestimonial(i)}
                      ></span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-center py-10">No testimonials available yet. Be the first to share your experience!</p>
              )}
            </div>
          </div>
          
          {/* Submit Feedback Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <h3 className="font-montserrat font-bold text-2xl mb-6">Share Your Experience</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          {...field} 
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Email" 
                          type="email" 
                          {...field} 
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Your Rating</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <Star
                              key={rating}
                              onClick={() => handleRatingClick(rating)}
                              onMouseEnter={() => handleRatingHover(rating)}
                              onMouseLeave={() => handleRatingHover(0)}
                              className={`text-2xl cursor-pointer transition-all ${
                                (hoveredRating ? hoveredRating >= rating : selectedRating >= rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              size={28}
                            />
                          ))}
                          <input 
                            type="hidden" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your experience with us" 
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-full w-full"
                >
                  SUBMIT FEEDBACK
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
