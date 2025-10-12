import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Slogan */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-xl">TP</span>
              </div>
              <span className="text-2xl font-bold text-primary">Talent Pros</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Your Strategic Partner in Global Talent Acquisition
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Our Process", id: "process" },
                { label: "Services", id: "services" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-4">
              <p className="text-foreground/70 text-sm">
                <strong>Email:</strong> contact@talentpros.com
              </p>
              <p className="text-foreground/70 text-sm">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Talent Pros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
