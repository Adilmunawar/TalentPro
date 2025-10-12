"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const clients = [
    { name: "TechCorp", color: "#0A2540" },
    { name: "InnovateCorp", color: "#0A2540" },
    { name: "GlobalTech", color: "#0A2540" },
    { name: "NextGen", color: "#0A2540" },
    { name: "FutureWorks", color: "#0A2540" },
    { name: "ProSystems", color: "#0A2540" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary"
        >
          Trusted by Industry Leaders Across the Globe
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          Join hundreds of forward-thinking companies who've transformed their hiring with Talent Pros
        </motion.p>

        {/* Infinite scroll container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="px-8 py-6 bg-background rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 group border border-border min-w-[200px] hover-lift">
                    <span
                      className="text-2xl font-bold group-hover:text-accent transition-colors duration-300"
                      style={{ color: client.color }}
                    >
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-muted to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-muted to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
