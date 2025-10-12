import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const TestimonialsAdvanced = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "Talent Pros transformed our hiring process completely. They delivered three exceptional senior engineers in a market where we had struggled for months. Their understanding of our technical requirements and company culture was absolutely exceptional.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechVision Inc.",
      rating: 5,
      image: testimonial1,
    },
    {
      quote:
        "The level of professionalism and attention to detail is truly unmatched. Every candidate they presented was not only technically qualified but also aligned perfectly with our team dynamics. It's like they have a sixth sense for cultural fit.",
      name: "Michael Chen",
      title: "VP of Engineering",
      company: "DataFlow Systems",
      rating: 5,
      image: testimonial2,
    },
    {
      quote:
        "Working with Talent Pros has been a complete game-changer for our expansion into European markets. Their global network and local expertise gave us access to talent we couldn't have found on our own. Absolutely phenomenal service.",
      name: "Emma Williams",
      title: "Head of Talent Acquisition",
      company: "GlobalTech Solutions",
      rating: 5,
      image: testimonial3,
    },
    {
      quote:
        "We've worked with many recruitment agencies, but Talent Pros stands out in every way. They don't just fill positions—they build teams. Their strategic approach to talent acquisition has been instrumental in our 300% growth this year.",
      name: "David Martinez",
      title: "CEO",
      company: "InnovateCorp",
      rating: 5,
      image: testimonial4,
    },
    {
      quote:
        "The quality of candidates and the speed of delivery exceeded all our expectations. Talent Pros filled five critical positions in under three weeks, each with outstanding professionals who integrated seamlessly into our organization.",
      name: "Lisa Park",
      title: "Director of HR",
      company: "FutureWorks International",
      rating: 5,
      image: testimonial5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(nextTestimonial, 6000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-block mb-6 px-6 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full"
          >
            <span className="text-accent font-semibold text-sm tracking-wider">CLIENT TESTIMONIALS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about their transformative experience with Talent Pros.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-background via-background to-accent/5 p-12 md:p-16 rounded-3xl border-2 border-accent/20 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,196,154,0.3)] transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute -top-8 -left-8 bg-gradient-to-br from-accent via-accent to-accent/70 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Quote className="w-10 h-10 text-white" />
                </div>

                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                  {/* Author Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-background shadow-xl"
                    />
                  </motion.div>

                  <div>
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium mb-8 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Author Info */}
                    <div>
                      <p className="font-bold text-2xl text-primary mb-1">{testimonials[currentIndex].name}</p>
                      <p className="text-lg text-foreground/70">
                        {testimonials[currentIndex].title} at <span className="text-accent font-semibold">{testimonials[currentIndex].company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full hover-lift border-2 border-accent/30 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full hover-lift border-2 border-accent/30 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-accent shadow-lg"
                    : "w-3 h-3 bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {[
            { value: "850+", label: "Happy Clients Worldwide" },
            { value: "12,000+", label: "Successful Placements" },
            { value: "99.1%", label: "Client Success Rate" },
            { value: "4.95/5", label: "Average Client Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center p-8 bg-background rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsAdvanced;
