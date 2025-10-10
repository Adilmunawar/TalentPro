import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';

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
        <SidebarProvider>
          <div className="relative flex min-h-screen w-full">
            <Sidebar collapsible="icon" className="hidden border-r bg-background md:flex">
              <SidebarHeader>
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <MainNav />
              </SidebarContent>
            </Sidebar>
             <div className="flex w-full flex-col">
              <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
                <div className="flex items-center gap-2">
                   <SidebarTrigger className="md:hidden"/>
                   <div className="hidden md:block">
                     {/* The sidebar will be here on desktop */}
                   </div>
                </div>
                 <div className="flex-1">
                   {/* We can add breadcrumbs or a page title here in the future */}
                 </div>
                <UserNav />
              </header>
              <main className="flex-1 overflow-auto p-4 sm:p-6">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
