"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Users, Globe, Award } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/office-collaboration.jpg";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Candidates Placed", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, value: 45, suffix: "+", label: "Countries Covered", color: "from-accent to-emerald-500" },
    { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction", color: "from-purple-500 to-pink-500" },
  ];

  const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const heroInView = useInView(heroRef, { once: true, amount: 0.5 });

    useEffect(() => {
      if (heroInView) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [value, heroInView]);

    return (
      <span>
        {prefix}{count}{suffix}
      </span>
    );
  };
  
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://picsum.photos/seed/hero/1920/1080"
        alt="Office collaboration"
        fill
        quality={100}
        className="absolute inset-0 z-0 object-cover"
        style={{
            filter: 'brightness(0.4)',
        }}
        data-ai-hint="office collaboration"
        priority
      />
       <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-1" />
      <ParticlesBackground />

      {/* Floating gradient orbs with 3D parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div className="section-container py-24 text-center relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full cursor-pointer group"
          >
            <motion.span 
              className="text-accent font-semibold text-xs sm:text-sm inline-flex items-center gap-2"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(0,196,154,0)",
                  "0 0 10px rgba(0,196,154,0.5)",
                  "0 0 0px rgba(0,196,154,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              
              Trusted by <AnimatedCounter value={50} suffix="+"/> Global Partners
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              whileInView={{ rotateX: [10, 0], rotateY: [10, 0] }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d", display: "inline-block" }}
            >
              Your Strategic Partner in
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Global Talent Acquisition
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            We don't just fill positions; we build the teams that drive your
            success. Talent Pros connects international businesses with the
            world-class professionals needed to achieve their vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="cta"
                size="lg"
                className="text-sm px-6 py-5 h-auto shadow-[var(--shadow-glow)] group relative overflow-hidden"
                onClick={() => scrollToSection("contact")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center">
                  Find Your Ideal Candidate
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-sm px-6 py-5 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                onClick={() => scrollToSection("process")}
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats with ultra advanced 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  z: 20,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 group cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Animated gradient background */}
                 <motion.div 
                    className="absolute -inset-px bg-gradient-to-br from-accent/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                  />
                
                <motion.div
                  className="relative z-10"
                >
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mx-auto mb-3 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105"
                  >
                    <stat.icon className="w-6 h-6 text-accent transition-all duration-300 group-hover:text-white" />
                  </motion.div>

                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 15px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Advanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          whileHover={{ scale: 1.2 }}
          className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center cursor-pointer group"
          onClick={() => scrollToSection("services")}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-2 bg-accent rounded-full mt-1.5 group-hover:bg-white transition-colors"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
