"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const ClientLogosAdvanced = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const clients = [
    { name: "Infotech", logo: "https://picsum.photos/seed/infotech/150/50" },
    { name: "Apex Solutions", logo: "https://picsum.photos/seed/apex/150/50" },
    { name: "Creative Minds", logo: "https://picsum.photos/seed/creative/150/50" },
    { name: "Digital Scapes", logo: "https://picsum.photos/seed/digital/150/50" },
    { name: "Quantum Leap", logo: "https://picsum.photos/seed/quantum/150/50" },
    { name: "Summit Innovations", logo: "https://picsum.photos/seed/summit/150/50" },
    { name: "Visionary Works", logo: "https://picsum.photos/seed/visionary/150/50" },
    { name: "Zenith Group", logo: "https://picsum.photos/seed/zenith/150/50" },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const inView = useInView(sectionRef, { once: true, amount: 0.5 });
  
    useEffect(() => {
      if (inView) {
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
    }, [value, inView]);
  
    return (
      <span>
        {prefix}{count}{suffix}
      </span>
    );
  };

  const stats = [
    { value: 72, suffix: "+", label: "Companies Served" },
    { value: 40, suffix: "+", label: "Industry Sectors" },
    { value: 99.2, suffix: "%", label: "Client Retention" },
    { value: 24, suffix: "/7", label: "Global Support" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <motion.div 
        style={{ y: y }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" 
      />
      <motion.div 
        style={{ y: y, scale }}
        className="absolute top-10 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), scale }}
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" 
      />

      <motion.div className="section-container" style={{ opacity, scale }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileInView={{ rotateX: [5, 0], rotateY: [5, 0] }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          Trusted by <span className="gradient-text">Industry Leaders</span> Across the Globe
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto text-lg"
        >
          Join hundreds of forward-thinking companies who've transformed their hiring with Talent Pros
        </motion.p>

        <div className="relative">
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: ["0%", "-33.33%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <motion.div 
                    className="group px-8 py-6 bg-background rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/30 min-w-[200px] flex items-center justify-center grayscale hover:grayscale-0"
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      rotateX: 5,
                      z: 50,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="h-12 w-auto object-contain"
                      width={150}
                      height={50}
                      data-ai-hint="logo"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-muted via-muted/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-muted via-muted/50 to-transparent pointer-events-none z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotateZ: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="text-center p-6 bg-background rounded-xl border-2 border-border hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(0,0,0,0)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(0,0,0,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.value === 24 ? '' : undefined} />
                </motion.div>
                <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientLogosAdvanced;
