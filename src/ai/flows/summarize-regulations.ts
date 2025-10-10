'use server';

/**
 * @fileOverview A tool to summarize international regulations based on location.
 *
 * - summarizeRegulations - A function that summarizes regulations for a given location.
 * - SummarizeRegulationsInput - The input type for the summarizeRegulations function.
 * - SummarizeRegulationsOutput - The return type for the summarizeRegulations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeRegulationsInputSchema = z.object({
  location: z.string().describe('The location for which to summarize regulations.'),
  regulatoryArea: z.string().describe('The specific regulatory area to focus on (e.g., employment law, tax law).'),
});
export type SummarizeRegulationsInput = z.infer<typeof SummarizeRegulationsInputSchema>;

const SummarizeRegulationsOutputSchema = z.object({
  summary: z.string().describe('A summary of the relevant regulations for the specified location and regulatory area.'),
  courseOfAction: z.string().describe('A recommended course of action based on the regulatory summary.'),
});
export type SummarizeRegulationsOutput = z.infer<typeof SummarizeRegulationsOutputSchema>;

export async function summarizeRegulations(input: SummarizeRegulationsInput): Promise<SummarizeRegulationsOutput> {
  return summarizeRegulationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeRegulationsPrompt',
  input: {schema: SummarizeRegulationsInputSchema},
  output: {schema: SummarizeRegulationsOutputSchema},
  prompt: `You are an expert in international regulations. Summarize the regulations for the following location and regulatory area, and suggest a course of action.

Location: {{{location}}}
Regulatory Area: {{{regulatoryArea}}}

Summary: A summary of the relevant regulations.
Course of Action: A recommended course of action based on the regulatory summary.`,
});

const summarizeRegulationsFlow = ai.defineFlow(
  {
    name: 'summarizeRegulationsFlow',
    inputSchema: SummarizeRegulationsInputSchema,
    outputSchema: SummarizeRegulationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
