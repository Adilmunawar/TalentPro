'use server';

/**
 * @fileOverview Suggests ideal job positions based on a user's profile, skills, and experience.
 *
 * - suggestIdealPositions - A function that suggests ideal job positions.
 * - SuggestIdealPositionsInput - The input type for the suggestIdealPositions function.
 * - SuggestIdealPositionsOutput - The return type for the suggestIdealPositions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestIdealPositionsInputSchema = z.object({
  profile: z
    .string()
    .describe('The user profile, including skills, experience, and preferences.'),
  jobListings: z
    .string()
    .describe('A list of available job positions with detailed descriptions and requirements.'),
});
export type SuggestIdealPositionsInput = z.infer<
  typeof SuggestIdealPositionsInputSchema
>;

const SuggestIdealPositionsOutputSchema = z.object({
  suggestedPositions: z
    .string()
    .describe('A list of job positions that match the user profile.'),
});
export type SuggestIdealPositionsOutput = z.infer<
  typeof SuggestIdealPositionsOutputSchema
>;

export async function suggestIdealPositions(
  input: SuggestIdealPositionsInput
): Promise<SuggestIdealPositionsOutput> {
  return suggestIdealPositionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestIdealPositionsPrompt',
  input: {schema: SuggestIdealPositionsInputSchema},
  output: {schema: SuggestIdealPositionsOutputSchema},
  prompt: `You are an expert career advisor. Based on the user's profile and available job listings, you will identify the most suitable job positions for the user.

User Profile: {{{profile}}}

Job Listings: {{{jobListings}}}

Suggested Positions:`,
});

const suggestIdealPositionsFlow = ai.defineFlow(
  {
    name: 'suggestIdealPositionsFlow',
    inputSchema: SuggestIdealPositionsInputSchema,
    outputSchema: SuggestIdealPositionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
