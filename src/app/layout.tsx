import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

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
    <html lang="en" suppressHydrationWarning>
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
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
            </nav>
            <Button>Get Started</Button>
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
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold font-headline">Legal</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
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