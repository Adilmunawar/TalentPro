"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Target, Zap, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Reach, Local Expertise",
      description:
        "Access a worldwide talent pool backed by deep market knowledge in key regions. Our network spans continents, ensuring you find the perfect fit regardless of location.",
      stats: "45+ Countries",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description:
        "Our proprietary vetting process goes beyond the resume. We assess technical skills, cultural fit, and long-term potential to ensure every candidate aligns with your company's unique DNA.",
      stats: "98% Success Rate",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "We accelerate your hiring timeline without compromising quality. From initial briefing to final offer, our streamlined process delivers results in weeks, not months.",
      stats: "14 Days Average",
    },
  ];

  const benefits = [
    "No upfront costs or hidden fees",
    "Dedicated account manager",
    "90-day replacement guarantee",
    "Cultural fit assessment included",
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full"
            >
              <span className="text-accent font-semibold text-sm">WHY CHOOSE US</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              The Right Hire, <br />
              <span className="gradient-text">Without the Hassle</span>
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Finding exceptional talent is a full-time job. Our mission is to
              make it our full-time job, so it doesn't have to be yours. We
              eliminate the complexities of global recruitment, delivering
              precisely matched candidates ready to make an impact from day one.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative card-hover p-8 bg-card rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-4 rounded-xl flex-shrink-0 shadow-lg">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true, amount: 'all' }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 1 }}
                      className="h-full bg-gradient-to-r from-accent to-blue-400"
                    />
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

export default WhyChooseUs;
