'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
  summarizeRegulations,
  type SummarizeRegulationsOutput,
} from '@/ai/flows/summarize-regulations';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ComplianceClient() {
  const [location, setLocation] = useState('');
  const [regulatoryArea, setRegulatoryArea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SummarizeRegulationsOutput | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const output = await summarizeRegulations({ location, regulatoryArea });
      setResult(output);
    } catch (err) {
      setError('An error occurred while fetching the summary.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline">Query Regulations</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., California, USA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regulatoryArea">Regulatory Area</Label>
              <Input
                id="regulatoryArea"
                placeholder="e.g., Employment Law"
                value={regulatoryArea}
                onChange={(e) => setRegulatoryArea(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Analyzing...' : 'Get Summary'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="md:col-span-2">
        {loading && (
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed p-8">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <p className="text-muted-foreground">
                Generating regulatory summary...
              </p>
            </div>
          </div>
        )}
        {error && (
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Error</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
          </Card>
        )}
        {result && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Regulatory Summary</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>{result.summary}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Recommended Course of Action</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>{result.courseOfAction}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
