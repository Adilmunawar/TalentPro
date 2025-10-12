import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientLogosAdvanced from "@/components/ClientLogosAdvanced";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import TestimonialsAdvanced from "@/components/TestimonialsAdvanced";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <ClientLogosAdvanced />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <TestimonialsAdvanced />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
