import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Users,
  FileText,
  Globe2,
  ShieldCheck,
  Star,
  MoveUpRight,
} from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  const testimonials = [
    {
      name: 'Sarah L.',
      title: 'Marketing Director, TechCorp',
      quote:
        'Talent Pros transformed our hiring process. We found the perfect candidate in a fraction of the time it used to take. Their platform is intuitive and the quality of talent is exceptional.',
      avatar: 'https://picsum.photos/seed/t1/100/100',
      dataAiHint: 'woman smiling',
    },
    {
      name: 'David Chen',
      title: 'CEO, Innovate Solutions',
      quote:
        'The AI-powered compliance and document verification features are game-changers. It has saved us countless hours and given us peace of mind when hiring internationally. Highly recommended!',
      avatar: 'https://picsum.photos/seed/t2/100/100',
      dataAiHint: 'man portrait',
    },
    {
      name: 'Maria Garcia',
      title: 'HR Manager, Global Reach',
      quote:
        'An indispensable tool for any company looking to expand its global workforce. The support team is responsive, and the platform continuously evolves with features that matter.',
      avatar: 'https://picsum.photos/seed/t3/100/100',
      dataAiHint: 'professional headshot',
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[70vh] w-full flex items-center justify-center text-center text-white bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight animate-slide-up-fade">
              Talent Pros: Your Global HR Partner
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 animate-slide-up-fade animation-delay-300">
              Connecting you with top-tier international talent and simplifying
              complex hiring processes with cutting-edge AI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up-fade animation-delay-600">
              <Button size="lg" className="px-10 py-6 text-lg group hover:scale-105 transition-transform">
                Find Talent <MoveUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="px-10 py-6 text-lg hover:scale-105 transition-transform"
              >
                Explore Jobs
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold">
                Why Choose Talent Pros?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
                We streamline international hiring with a comprehensive suite of
                tools and expertise, so you can focus on what matters most.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Briefcase className="h-8 w-8" />}
                title="Vast Job Listings"
                description="Access a wide range of opportunities from leading international companies."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Qualified Candidate Pool"
                description="Connect with vetted professionals from around the globe."
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8" />}
                title="Effortless Applications"
                description="A smooth and simple application process for candidates and recruiters."
              />
              <FeatureCard
                icon={<Globe2 className="h-8 w-8" />}
                title="Global Compliance"
                description="Navigate international hiring regulations with our AI-powered compliance tools."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-8 w-8" />}
                title="Verified Documents"
                description="Ensure candidate authenticity with our secure document verification system."
              />
              <FeatureCard
                icon={<Star className="h-8 w-8" />}
                title="AI-Powered Matching"
                description="Our smart algorithms match the right talent to the right role, saving you time and effort."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-bold">
                Loved by Teams Worldwide
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
                Hear what our clients have to say about their success with
                Talent Pros.
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={testimonial.avatar}
                              data-ai-hint={testimonial.dataAiHint}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold font-headline">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-muted-foreground">
                            "{testimonial.quote}"
                          </p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-bold">
              Ready to find your next opportunity?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Join our platform today to connect with global companies and
              discover your dream job.
            </p>
            <Button size="lg" className="mt-8 px-10 py-6 text-lg group hover:scale-105 transition-transform">
              Get Started Now
              <MoveUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-lg hover:scale-105 hover:bg-primary/5 transition-all duration-300 ease-in-out">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-2xl font-headline font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
