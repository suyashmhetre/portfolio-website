import { z } from 'zod';

const envSchema = z.object({
  SANITY_PROJECT_ID: z.string(),
  SANITY_DATASET: z.string(),
  SANITY_API_VERSION: z.string(),
  SANITY_WEBHOOK_SECRET: z.string(),
  SANITY_PREVIEW_SECRET: z.string(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);