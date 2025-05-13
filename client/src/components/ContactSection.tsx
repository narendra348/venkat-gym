import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Setup form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    },
  });
  
  // Handle form submission (frontend demo)
  const handleSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  // Handle form submission
  const onSubmit = (values: ContactFormValues) => {
    handleSubmit(values);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 text-white reveal">GET IN <span className="text-accent">TOUCH</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto text-white/90 reveal">Have questions or ready to start your fitness journey? Reach out to our team for personalized assistance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Our Location</h4>
                  <p>opp gromour boys hostle Vijayawada Road,<br/>Mylavaram</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Phone Number</h4>
                  <p>+91 8247366831</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Email Address</h4>
                  <p>venkatsfitzone@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Operating Hours</h4>
                  <p>Monday - Saturday: 5:30 AM - 10:00 AM AND 4:00 PM to 9:00 PM<br/>
                   Sunday: 5:30 AM - 9:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-montserrat font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1BQZVfnDSa/" className="bg-secondary hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  /> Facebook size={18} 
                </a>
                <a href="https://www.instagram.com/venkat_fitzonegym_mylavaram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-secondary hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  /> Instagram size={18} 
                </a>
             
                
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <h3 className="font-montserrat font-bold text-2xl mb-6">Send Us a Message</h3>
            <Form {...form}>
              <form action="https://formspree.io/f/xjkwyggn" className="space-y-4" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Phone Number" 
                          type="tel" 
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Subject</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="membership">Membership Inquiry</SelectItem>
                          <SelectItem value="trial">Free Trial Session</SelectItem>
                          <SelectItem value="personal-training">Personal Training</SelectItem>
                          <SelectItem value="classes">Class Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your Message" 
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to being contacted by Elevate Fitness.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-full w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
