"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import openings from "@/lib/openings.json";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

interface Job {
  title: string;
  location?: string;
  contract: string;
  function?: string;
  status: "Hiring" | "Closed";
  details: {
    salary?: string;
    overview: string;
  };
}

const CurrentOpenings = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: true })])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleApply = () => {
    if (selectedJob) {
      const message = `I'm interested for the "${selectedJob.title}"`;
      const whatsappUrl = `https://wa.me/923248406582?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
    setSelectedJob(null);
  };
  
  return (
    <section ref={sectionRef} id="openings" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full">
            <span className="text-accent font-semibold text-sm">CAREERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Join Our <span className="gradient-text">Global Team</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore exciting career opportunities and become part of a team that's shaping the future of talent acquisition.
          </p>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto overflow-hidden relative group" ref={emblaRef}>
           <div className="flex gap-4 py-4">
            {openings.map((job, index) => (
              <div key={`${job.title}-${index}`} className="flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 p-1">
                <button
                  onClick={() => setSelectedJob(job as Job)}
                  className="w-full text-left bg-card p-8 rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 card-hover h-full flex flex-col group/item"
                >
                  <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-primary group-hover/item:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <Badge variant={job.status === "Hiring" ? "default" : "secondary"} className={cn(
                          job.status === "Hiring" ? "bg-accent/20 text-accent border-accent/30" : "bg-muted text-muted-foreground border-border"
                      )}>
                          {job.status}
                      </Badge>
                  </div>

                  <div className="flex flex-col gap-2 text-foreground/70 flex-grow">
                    {job.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{job.location}</span>
                      </div>
                    )}
                    {job.function && (
                      <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-accent" />
                          <span>{job.function}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-accent" />
                      <span>{job.contract}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end items-center">
                      <span className="text-accent font-semibold flex items-center gap-2 group-hover/item:gap-3 transition-all">
                          View Details <ArrowRight className="w-4 h-4" />
                      </span>
                  </div>
                </button>
              </div>
            ))}
           </div>
        </div>
      </div>

      <Dialog open={!!selectedJob} onOpenChange={(isOpen) => !isOpen && setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[600px] bg-card text-card-foreground p-0">
            {selectedJob && (
                <>
                    <DialogHeader className="p-6 pb-0">
                        <div className="flex justify-between items-center">
                            <DialogTitle className="text-3xl font-bold text-primary">{selectedJob.title}</DialogTitle>
                              <Badge variant={selectedJob.status === "Hiring" ? "default" : "secondary"} className={cn(
                                "text-base",
                                selectedJob.status === "Hiring" ? "bg-accent/20 text-accent border-accent/30" : "bg-muted text-muted-foreground border-border"
                            )}>
                                {selectedJob.status}
                            </Badge>
                        </div>
                        <DialogDescription className="text-lg text-foreground/70 pt-2">
                            {selectedJob.location && <p className="flex items-center gap-2 mb-1"><MapPin size={16} className="text-accent"/> {selectedJob.location}</p>}
                            {selectedJob.function && <p className="flex items-center gap-2 mb-1"><Briefcase size={16} className="text-accent"/> {selectedJob.function}</p>}
                            <p className="flex items-center gap-2 mb-1"><Briefcase size={16} className="text-accent"/> {selectedJob.contract}</p>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-xl text-primary mb-2">Role Overview</h4>
                                <p className="text-foreground/80 leading-relaxed">{selectedJob.details.overview}</p>
                            </div>

                            {selectedJob.details.salary && (
                                <div>
                                    <h4 className="font-semibold text-xl text-primary mb-2">Salary & Benefits</h4>
                                    <p className="text-foreground/80 leading-relaxed">{selectedJob.details.salary}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-6 flex justify-end gap-4 bg-muted/50 rounded-b-lg">
                        <Button 
                        variant="cta" 
                        onClick={handleApply} 
                        disabled={selectedJob.status === "Closed"}>
                            {selectedJob.status === 'Hiring' ? 'Apply Now' : 'Application Closed'}
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                        </DialogClose>
                    </div>
                </>
            )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CurrentOpenings;

    