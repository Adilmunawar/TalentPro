import { DocumentsClient } from './documents-client';

export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Document Verification
        </h1>
        <p className="text-muted-foreground">
          Use our AI-powered tool to screen documents for correctness.
        </p>
      </div>
      <DocumentsClient />
    </div>
  );
}
