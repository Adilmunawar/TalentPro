import { config } from 'dotenv';
config();

import '@/ai/flows/verify-passport-correctness.ts';
import '@/ai/flows/summarize-regulations.ts';
import '@/ai/flows/suggest-ideal-positions.ts';