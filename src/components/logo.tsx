import { Briefcase } from 'lucide-react';

export function Logo() {
  return (
    <a
      href="/"
      className="group flex items-center gap-2 text-lg font-semibold text-primary"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
        <Briefcase className="h-5 w-5" />
      </div>
      <span className="font-headline text-foreground">Talent Pros</span>
    </a>
  );
}
