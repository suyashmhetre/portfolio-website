import { z } from 'zod'

const envSchema = z.object({
  // Sanity Configuration
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
  
  // Server-only Sanity secrets
  SANITY_PROJECT_ID: z.string().min(1),
  SANITY_DATASET: z.string().min(1),
  SANITY_API_VERSION: z.string().optional(),
  SANITY_READ_TOKEN: z.string().optional(),
  SANITY_WEBHOOK_SECRET: z.string().min(1),
  SANITY_PREVIEW_SECRET: z.string().min(1),
  
  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
})

export type Env = z.infer<typeof envSchema>

export function validateEnv(): Env {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    console.error('Invalid environment variables:', error)
    throw new Error('Environment validation failed. Check your .env file.')
  }
}

// Validate on import
export const env = validateEnv()