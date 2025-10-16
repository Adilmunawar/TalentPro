"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const OurProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Deep Dive & Discovery",
      description:
        "We begin with a comprehensive analysis of your company culture, technical requirements, and strategic goals to ensure perfect alignment.",
      color: "blue",
    },
    {
      number: "02",
      icon: Users,
      title: "Strategic Global Sourcing",
      description:
        "Leveraging our extensive network and AI, we identify and engage top-tier talent from global markets, tailored to your needs.",
      color: "green",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Rigorous Vetting & Assessment",
      description:
        "Each candidate undergoes multi-stage technical and behavioral evaluation. Only the most qualified and aligned candidates proceed.",
      color: "purple",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Curated Shortlist & Integration",
      description:
        "We present a refined shortlist of pre-vetted candidates and provide support through hiring and onboarding for a seamless integration.",
      color: "orange",
    },
  ];
  
  const stepColors = {
    blue: {
      text: "text-blue-500",
      shadow: "shadow-blue-500/50",
      border: "border-blue-500/50",
      bg: "bg-blue-500/10",
      icon:"bg-blue-100 dark:bg-blue-900/30"
    },
    green: {
      text: "text-accent",
      shadow: "shadow-accent/50",
      border: "border-accent/50",
      bg: "bg-accent/10",
       icon:"bg-accent/10 dark:bg-accent/20"
    },
    purple: {
      text: "text-purple-500",
      shadow: "shadow-purple-500/50",
      border: "border-purple-500/50",
      bg: "bg-purple-500/10",
      icon:"bg-purple-100 dark:bg-purple-900/30"
    },
    orange: {
      text: "text-orange-500",
      shadow: "shadow-orange-500/50",
      border: "border-orange-500/50",
      bg: "bg-orange-500/10",
      icon:"bg-orange-100 dark:bg-orange-900/30"
    },
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [isVisible, steps.length]);

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
          <div
            className="inline-block mb-6 px-6 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full"
          >
            <span className="text-accent font-semibold text-sm tracking-wider">OUR PROCESS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Our Blueprint for <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Our strategic approach is built on a foundation of deep discovery and
            rigorous execution, ensuring every hire contributes to your long-term
            vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const colors = stepColors[step.color as keyof typeof stepColors];
            
            return (
              <motion.div
                key={step.number}
                onMouseEnter={() => setActiveStep(index)}
                className="relative group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, type: "spring", stiffness: 100, damping: 12 }}
              >
                <motion.div
                  className={cn(
                    "absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-accent to-blue-500 blur-lg transition-opacity duration-500",
                    isActive ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                  )}
                />
                <div className={cn(
                  "relative bg-card p-8 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col card-hover",
                  isActive ? colors.border : "border-border group-hover:border-accent/30"
                )}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      `w-16 h-16 rounded-xl flex items-center justify-center shadow-md transition-all duration-300`,
                      isActive ? cn(colors.icon, colors.shadow, "scale-110") : "bg-muted"
                      )}>
                      <step.icon className={cn(`w-8 h-8`, isActive ? colors.text : "text-primary/70")} />
                    </div>
                    <span className="text-7xl font-bold text-primary/10 select-none group-hover:text-primary/20 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className={cn(
                      `text-2xl font-bold mb-4 text-primary transition-colors`,
                      isActive ? colors.text : "group-hover:text-accent"
                      )}>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key={activeStep}
                          className={cn("h-full bg-gradient-to-r from-accent to-blue-400")}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3, ease: "linear" }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
