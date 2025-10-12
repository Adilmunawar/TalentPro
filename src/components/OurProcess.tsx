"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const OurProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Deep Dive & Discovery",
      description:
        "We begin with a comprehensive analysis of your company culture, technical requirements, and strategic goals. This foundation ensures we understand not just what you need, but why you need it.",
      color: "text-blue-500",
      glowColor: "shadow-blue-500/50",
    },
    {
      number: "02",
      icon: Users,
      title: "Strategic Global Sourcing",
      description:
        "Leveraging our extensive network and advanced search methodologies, we identify top-tier talent across global markets. Our approach combines AI-powered screening with human expertise.",
      color: "text-accent",
      glowColor: "shadow-accent/50",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Rigorous Vetting & Assessment",
      description:
        "Each candidate undergoes multi-stage evaluation including technical assessments, behavioral interviews, and reference verification. Only the best make it through our quality gateway.",
      color: "text-purple-500",
      glowColor: "shadow-purple-500/50",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Curated Shortlist & Integration",
      description:
        "We present a curated shortlist of pre-vetted candidates with detailed profiles. Our support continues through offer negotiation and onboarding to ensure smooth integration.",
      color: "text-orange-500",
      glowColor: "shadow-orange-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-block mb-6 px-6 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full"
          >
            <span className="text-accent font-semibold text-sm tracking-wider">OUR PROCESS</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Our Blueprint for <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Our strategic approach is built on a foundation of deep discovery and
            rigorous execution, ensuring every hire contributes to your long-term
            vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className="relative group h-full"
            >
              <motion.div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-accent/50 to-blue-500/50 blur-lg transition-opacity duration-500",
                  hoveredStep === index ? "opacity-50" : "opacity-0"
                )}
              />
              <div className="relative bg-background p-8 rounded-2xl border-2 border-border group-hover:border-accent/50 transition-all duration-300 h-full flex flex-col card-hover">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-muted shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <span className="text-7xl font-bold text-primary/10 select-none group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold mb-4 text-primary group-hover:gradient-text transition-colors`}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="mt-8 h-1 w-full bg-border rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-accent to-blue-400`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredStep === index ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;