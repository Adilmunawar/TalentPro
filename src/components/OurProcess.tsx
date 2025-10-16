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
      }, 4000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
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

        <div className="grid md:grid-cols-2 gap-8 items-start">
            <AnimatePresence>
                <motion.div
                    key={activeStep}
                    className="relative order-first md:order-last"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <div className="bg-card p-8 rounded-3xl border-2 border-border min-h-[300px]">
                        <div className="flex justify-between items-start mb-6">
                            <div className={cn(
                                `w-16 h-16 rounded-xl flex items-center justify-center shadow-lg`,
                                stepColors[steps[activeStep].color as keyof typeof stepColors].icon,
                                stepColors[steps[activeStep].color as keyof typeof stepColors].shadow
                                )}>
                            <steps[activeStep].icon className={cn(`w-8 h-8`, stepColors[steps[activeStep].color as keyof typeof stepColors].text)} />
                            </div>
                            <span className="text-8xl font-bold text-primary/10 select-none">
                            {steps[activeStep].number}
                            </span>
                        </div>
                        <h3 className={cn(
                            `text-3xl font-bold mb-4 transition-colors`,
                            stepColors[steps[activeStep].color as keyof typeof stepColors].text
                            )}>
                            {steps[activeStep].title}
                        </h3>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            {steps[activeStep].description}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="space-y-4">
            {steps.map((step, index) => (
                <motion.div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(index)}
                    className="relative group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                >
                    <div className="relative bg-card p-6 rounded-2xl border-2 border-border transition-all duration-300 cursor-pointer overflow-hidden">
                        <AnimatePresence>
                        {index === activeStep && (
                            <motion.div
                                layoutId="active-process-highlight"
                                className="absolute inset-0 bg-accent/10 border-accent/30 border-2 rounded-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                        </AnimatePresence>
                        <div className="relative flex items-center gap-6">
                            <span className={cn(
                                "text-4xl font-bold transition-colors",
                                index === activeStep ? stepColors[step.color as keyof typeof stepColors].text : "text-primary/30 group-hover:text-accent"
                            )}>
                                {step.number}
                            </span>
                            <h3 className={cn(
                                "text-2xl font-bold transition-colors",
                                index === activeStep ? "text-primary" : "text-foreground/70 group-hover:text-primary"
                            )}>
                                {step.title}
                            </h3>
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;