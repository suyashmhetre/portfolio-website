import "server-only"
import { client, previewClient } from "./client"
import type { QueryParams } from "next-sanity"

/**
 * Fetch data from Sanity with optional preview mode
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
  preview = false,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
  preview?: boolean
  fallback?: QueryResponse
}): Promise<QueryResponse> {
  const isDevelopment = process.env.NODE_ENV === "development"
  const isPreview = preview || isDevelopment

  const activeClient = isPreview ? previewClient : client

  try {
    return await activeClient.fetch<QueryResponse>(query, params, {
      next: {
        revalidate: isPreview ? 0 : 3600, // No cache in preview, 1 hour cache in production
        tags,
      },
    })
  } catch (err) {
    // If fetching fails (e.g. missing credentials or dataset), return a safe fallback
    // Heuristic: if the query requests a single item (contains "[0]"), return null-like fallback, otherwise an empty array.
    console.warn("sanityFetch failed:", err)
    const requestsSingle = String(query).includes("[0]") || /\bfirst\(/i.test(String(query))
    if (typeof ({} as QueryResponse) === 'object') {
      // If caller provided an explicit fallback, return it.
      if (arguments[0] && (arguments[0] as any).fallback !== undefined) {
        return (arguments[0] as any).fallback
      }
    }
    return (requestsSingle ? (null as any) : ([]) as any) as QueryResponse
  }
}

/**
 * Helper to create cache tags for on-demand revalidation
 */
export function createCacheTags(type: string, id?: string) {
  const tags = [type]
  if (id) {
    tags.push(`${type}:${id}`)
  }
  return tags
}

