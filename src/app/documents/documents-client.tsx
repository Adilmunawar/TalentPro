'use client';

import { useState } from 'react';
import { CheckCircle, Loader2, Upload, XCircle } from 'lucide-react';

import {
  verifyPassportCorrectness,
  type VerifyPassportCorrectnessOutput,
} from '@/ai/flows/verify-passport-correctness';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export function DocumentsClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyPassportCorrectnessOutput | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleVerification = async () => {
    if (!file || !preview) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const output = await verifyPassportCorrectness({
        passportDataUri: preview,
      });
      setResult(output);
    } catch (err) {
      setError('An error occurred during verification.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Passport Verification</CardTitle>
        <CardDescription>
          Upload a passport image to verify its layout and correctness.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Upload className="h-10 w-10 text-muted-foreground" />
          </div>
          <Input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Passport preview"
              className="mt-4 max-h-48 rounded-md"
            />
          )}
          <Button
            onClick={handleVerification}
            disabled={!file || loading}
            className="mt-4 w-full"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Verifying...' : 'Verify Document'}
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/50 p-8">
          {loading && (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <p className="text-muted-foreground">Analyzing document...</p>
            </div>
          )}

          {!loading && !result && !error && (
            <div className="text-center text-muted-foreground">
              <p>Verification results will appear here.</p>
            </div>
          )}

          {error && (
            <div className="text-center text-destructive">
              <XCircle className="mx-auto h-12 w-12" />
              <h3 className="mt-4 text-lg font-semibold">Verification Failed</h3>
              <p className="mt-2 text-sm">{error}</p>
            </div>
          )}

          {result && (
            <div
              className={`text-center ${
                result.isValid ? 'text-green-600' : 'text-destructive'
              }`}
            >
              {result.isValid ? (
                <CheckCircle className="mx-auto h-12 w-12" />
              ) : (
                <XCircle className="mx-auto h-12 w-12" />
              )}
              <h3 className="mt-4 text-lg font-semibold">
                {result.isValid ? 'Passport is Valid' : 'Passport is Invalid'}
              </h3>
              <p className="mt-2 text-sm text-foreground">{result.feedback}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
