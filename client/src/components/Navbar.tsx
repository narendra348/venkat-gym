import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Achievements", href: "#achievements" },
    { name: "Feedback", href: "#feedback" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'} bg-light bg-opacity-90 bg-blur`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-primary">VENKAT'S FITZONE</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="font-montserrat font-semibold text-dark hover:text-primary transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-dark hover:text-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={`md:hidden bg-white w-full transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`font-montserrat font-semibold text-dark hover:text-primary py-2 ${index < navLinks.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
