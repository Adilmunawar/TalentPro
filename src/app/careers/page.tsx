import { ResumeSubmitForm } from "@/components/ResumeSubmitForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Join Our Global Talent Network</h1>
                <p className="text-lg text-muted-foreground">
                We are always looking for exceptional individuals to join our network of professionals. Submit your resume to be considered for current and future opportunities.
                </p>
            </div>
            
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border">
              <ResumeSubmitForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
