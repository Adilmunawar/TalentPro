import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Talent Pros',
  description: 'International Human Resource Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Literata:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <Logo />
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors relative group">
                Features
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors relative group">
                Testimonials
                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors relative group">
                Contact
                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </nav>
            <Button className="group hover:scale-105 transition-transform">
              Get Started <MoveUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="bg-background border-t">
            <div className="container mx-auto px-4 sm:px-6 py-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <Logo />
                  <p className="mt-2 text-sm text-muted-foreground">
                    International Human Resource Solutions.
                  </p>
                </div>
                 <div className="grid grid-cols-2 md:col-span-2 gap-8">
                    <div>
                      <h4 className="font-semibold font-headline">Company</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold font-headline">Legal</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                      </ul>
                    </div>
                 </div>
              </div>
               <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                 <p>&copy; {new Date().getFullYear()} Talent Pros. All rights reserved.</p>
               </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
