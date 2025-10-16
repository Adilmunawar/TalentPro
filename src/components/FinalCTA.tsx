"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, message } = formData;
    const whatsappMessage = `Hello, I'm ${name} from ${company}.\n\nMy email is ${email}.\n\nMy message is: ${message}`;
    const whatsappUrl = `https://wa.me/923248406582?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@talent.pro.pk" },
    { icon: MapPin, label: "Office", value: "Lahore, Pakistan" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          >
            <span className="text-accent font-semibold text-sm">GET IN TOUCH</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-accent">Dream Team?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stop searching and start building. Let us connect you with the talent
            that will define your company's future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Full Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Company Name</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent resize-none"
                  placeholder="Tell us about your hiring needs..."
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full text-lg py-6 shadow-[var(--shadow-glow)] group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">{info.label}</p>
                      <p className="text-white font-medium text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-white/80 mb-6">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-accent/20 rounded-full">
                  <span className="text-accent font-semibold text-sm">24h Response Time</span>
                </div>
                <div className="px-4 py-2 bg-accent/20 rounded-full">
                  <span className="text-accent font-semibold text-sm">Free Consultation</span>
                </div>
                <div className="px-4 py-2 bg-accent/20 rounded-full">
                  <span className="text-accent font-semibold text-sm">No Obligation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
