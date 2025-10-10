import { Button } from '@/components/ui/button';
import { Briefcase, Users, FileText, Globe2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')"}}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
              Talent Pros: Your Global HR Partner
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
              Connecting you with top-tier international talent and simplifying complex hiring processes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Find Talent</Button>
              <Button size="lg" variant="secondary">
                Explore Jobs
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">
                Why Choose Talent Pros?
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                We streamline international hiring with a comprehensive suite of tools and expertise.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Vast Job Listings</h3>
                <p className="mt-2 text-muted-foreground">
                  Access a wide range of opportunities from leading international companies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Qualified Candidate Pool</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect with vetted professionals from around the globe.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Effortless Applications</h3>
                <p className="mt-2 text-muted-foreground">
                  A smooth and simple application process for candidates and recruiters.
                </p>
              </div>
               <div className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Globe2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Global Compliance</h3>
                <p className="mt-2 text-muted-foreground">
                  Navigate international hiring regulations with our AI-powered compliance tools.
                </p>
              </div>
               <div className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-headline font-semibold">Verified Documents</h3>
                <p className="mt-2 text-muted-foreground">
                  Ensure candidate authenticity with our secure document verification system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold">
              Ready to find your next opportunity?
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Join our platform today to connect with global companies and discover your dream job.
            </p>
            <Button size="lg" className="mt-6">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}