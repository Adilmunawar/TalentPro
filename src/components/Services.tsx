"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Building2, GraduationCap, Briefcase, Code, Heart, TrendingUp, Shield } from "lucide-react";
import Image from "next/image";
import teamWorkspace from "@/assets/team-workspace.jpg";

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: "Tech & Engineering",
      description: "Full-stack developers, DevOps engineers, data scientists, and technical architects for cutting-edge projects.",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Executive Search",
      description: "C-suite and senior leadership positions filled with visionary leaders who drive transformation.",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Sales & Marketing",
      description: "Revenue-driving professionals who understand your market and can scale your customer base.",
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: Building2,
      title: "Finance & Operations",
      description: "CFOs, controllers, and operations managers who optimize efficiency and drive growth.",
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "HR & Talent",
      description: "People operations experts who build cultures and attract top talent at scale.",
      gradient: "from-indigo-500 to-purple-500",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Healthcare Professionals",
      description: "Medical specialists, healthcare administrators, and clinical research experts.",
      gradient: "from-rose-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Product & Design",
      description: "Product managers, UX/UI designers, and creative directors who shape exceptional experiences.",
      gradient: "from-teal-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Legal advisors, compliance officers, and regulatory experts who protect your interests.",
      gradient: "from-slate-600 to-gray-700",
      iconBg: "bg-gradient-to-br from-slate-600 to-gray-700",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

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
            className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full"
          >
            <span className="text-accent font-semibold text-sm">OUR EXPERTISE</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Specialized Recruitment <br />
            <span className="gradient-text">Across Every Industry</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, we deliver specialized talent across every sector and seniority level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
              
              <div className="relative bg-background rounded-2xl p-8 border-2 border-border hover:border-accent/50 transition-all duration-300 hover-lift h-full">
                <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-10" />
          <Image 
            src={teamWorkspace} 
            alt="Professional team workspace" 
            layout="fill"
            objectFit="cover"
            className="w-full h-[500px]"
          />
          <div className="absolute inset-0 z-20 flex items-end p-12">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-bold text-white mb-4">
                Every Role. Every Level. <span className="text-accent">Every Time.</span>
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                Whether you're hiring your first employee or building an entire department, we have the expertise, network, and proven process to deliver exceptional talent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
