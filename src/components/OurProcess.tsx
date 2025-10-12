"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, CheckCircle, Sparkles } from "lucide-react";

const OurProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Deep Dive & Discovery",
      description:
        "We begin with a comprehensive analysis of your company culture, technical requirements, and strategic goals. This foundation ensures we understand not just what you need, but why you need it.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      number: "02",
      icon: Users,
      title: "Strategic Global Sourcing",
      description:
        "Leveraging our extensive network and advanced search methodologies, we identify top-tier talent across global markets. Our approach combines AI-powered screening with human expertise.",
      color: "from-accent to-emerald-500",
      bgColor: "bg-accent",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Rigorous Vetting & Assessment",
      description:
        "Each candidate undergoes multi-stage evaluation including technical assessments, behavioral interviews, and reference verification. Only the best make it through our quality gateway.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Curated Shortlist & Seamless Integration",
      description:
        "We present a carefully curated shortlist of pre-vetted candidates, complete with detailed profiles. Our support continues through offer negotiation and onboarding to ensure smooth integration.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              onMouseEnter={() => setActiveStep(index)}
              className="relative group"
            >
              {activeStep === index && (
                <motion.div
                  layoutId="activeGlow"
                  className={`absolute -inset-2 bg-gradient-to-br ${step.color} opacity-20 blur-2xl rounded-3xl`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div
                className={`relative bg-background p-8 rounded-2xl border-2 transition-all duration-500 h-full ${
                  activeStep === index
                    ? "border-accent shadow-2xl"
                    : "border-border hover:border-accent/40"
                }`}
              >
                <div className="absolute top-6 right-6 text-8xl font-bold opacity-5 leading-none select-none">
                  {step.number}
                </div>

                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${step.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="relative text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="relative text-foreground/70 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={activeStep === index ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                    className={`h-full ${step.bgColor}`}
                  />
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-4 z-20">
                  <motion.div
                    animate={{
                      x: activeStep === index ? [0, 8, 0] : 0,
                      opacity: activeStep === index ? [0.4, 1, 0.4] : 0.2,
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-accent"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4"
        >
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="group relative flex items-center gap-2"
              aria-label={`Show step ${index + 1}`}
            >
              <div
                className={`w-16 h-2 rounded-full transition-all duration-500 ${
                  activeStep === index 
                    ? `${step.bgColor} shadow-lg` 
                    : "bg-border group-hover:bg-accent/40"
                }`}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
