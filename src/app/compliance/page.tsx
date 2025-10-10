import { ComplianceClient } from './compliance-client';

export default function CompliancePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Global Regulatory Compliance
        </h1>
        <p className="text-muted-foreground">
          Understand regulations with AI-powered summaries. Enter a location and
          regulatory area to get started.
        </p>
      </div>

      <ComplianceClient />
    </div>
  );
}
