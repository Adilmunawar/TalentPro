'use server';

/**
 * @fileOverview Passport correctness verification flow.
 *
 * - verifyPassportCorrectness - A function that verifies the correctness of a passport.
 * - VerifyPassportCorrectnessInput - The input type for the verifyPassportCorrectness function.
 * - VerifyPassportCorrectnessOutput - The return type for the verifyPassportCorrectness function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyPassportCorrectnessInputSchema = z.object({
  passportDataUri: z
    .string()
    .describe(
      'A photo of a passport, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});

export type VerifyPassportCorrectnessInput = z.infer<
  typeof VerifyPassportCorrectnessInputSchema
>;

const VerifyPassportCorrectnessOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the passport is valid or not.'),
  feedback: z
    .string()
    .describe(
      'Feedback on the passport, including any errors or warnings. If passport is valid, include a confirmation message.'
    ),
});

export type VerifyPassportCorrectnessOutput = z.infer<
  typeof VerifyPassportCorrectnessOutputSchema
>;

export async function verifyPassportCorrectness(
  input: VerifyPassportCorrectnessInput
): Promise<VerifyPassportCorrectnessOutput> {
  return verifyPassportCorrectnessFlow(input);
}

const prompt = ai.definePrompt({
  name: 'verifyPassportCorrectnessPrompt',
  input: {schema: VerifyPassportCorrectnessInputSchema},
  output: {schema: VerifyPassportCorrectnessOutputSchema},
  prompt: `You are an expert in verifying the correctness of passports based on standard passport layouts.

You will receive a photo of a passport, and you will need to determine if it is valid and follows the standard passport layout.

If the passport is valid, return isValid: true and include a confirmation message in the feedback.
If the passport is invalid, return isValid: false and provide specific feedback on what is wrong with the passport and how to correct it.

Passport Photo: {{media url=passportDataUri}}
`,
});

const verifyPassportCorrectnessFlow = ai.defineFlow(
  {
    name: 'verifyPassportCorrectnessFlow',
    inputSchema: VerifyPassportCorrectnessInputSchema,
    outputSchema: VerifyPassportCorrectnessOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
