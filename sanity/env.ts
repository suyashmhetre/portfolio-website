export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-10'
// Provide safe fallbacks for build environments where env vars may be missing.
// Replace these defaults with real values in production (via environment variables).
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo'
