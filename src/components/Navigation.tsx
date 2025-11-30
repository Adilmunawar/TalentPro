"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ["home", "services", "process", "testimonials", "contact"];
        let currentSection = "";
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sectionId;
              break;
            }
          }
        }
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "Home", id: "home", href: "/" },
    { label: "Our Process", id: "process", href: "/#process" },
    { label: "Services", id: "services", href: "/#services" },
    { label: "Careers", id: "careers", href: "/careers"},
    { label: "Contact Us", id: "contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || pathname !== '/'
          ? "bg-background/80 backdrop-blur-xl shadow-lg py-3 border-b border-border"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            <Image 
              src="/upscalemedia-transformed.png" 
              alt="Talent Pros Logo" 
              width={isScrolled || pathname !== '/' ? 48 : 56} 
              height={isScrolled || pathname !== '/' ? 48 : 56} 
              className="transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname === '/' && activeSection === link.id);
              if (link.id === 'careers') {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={cn(`relative font-medium transition-all duration-300`,
                      isActive ? "text-accent" : isScrolled || pathname !== '/' ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(`relative font-medium transition-all duration-300`,
                    isActive ? "text-accent" : isScrolled || pathname !== '/' ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="shadow-[var(--shadow-glow)]"
            >
              Find Your Ideal Candidate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={cn(`md:hidden`,
              isScrolled || pathname !== '/' ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 bg-background/95 backdrop-blur-lg rounded-lg p-4"
          >
            {navLinks.map((link) => {
               const isActive = pathname === link.href || (pathname === '/' && activeSection === link.id);
               if (link.id === 'careers') {
                 return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(`block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2`,
                        isActive ? "text-accent" : ""
                      )}
                    >
                      {link.label}
                    </Link>
                 )
               }
              return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(`block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2`,
                  isActive ? "text-accent" : ""
                )}
              >
                {link.label}
              </button>
            )})}
            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Find Your Ideal Candidate
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
