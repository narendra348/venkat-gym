import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a server
    toast({
      title: "Newsletter Subscription",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-6">venkat's fitzone</h3>
            <p className="mb-6">Elevating fitness experiences through expert guidance, innovative programs, and a supportive community.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BQZVfnDSa/" className="text-white hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/venkat_fitzonegym_mylavaram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
          
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-primary transition-all">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Programs</a></li>
              <li><a href="#trainers" className="hover:text-primary transition-all">Trainers</a></li>
             
              <li><a href="#feedback" className="hover:text-primary transition-all">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-all">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="hover:text-primary transition-all">HIIT Revolution</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Power Yoga</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Strength Mastery</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Cycle Intensity</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Combat Cardio</a></li>
              <li><a href="#programs" className="hover:text-primary transition-all">Mind & Body Balance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for fitness tips, special offers, and more.</p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-r-none text-dark"
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 rounded-l-none"
                >
                  <Send size={16} />
                </Button>
              </div>
            </form>
            <p className="text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} venkat's fitzone. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-primary transition-all">Terms of Service</a>
            <a href="#" className="text-sm hover:text-primary transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
