import { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"
import { projectsQuery, pressQuery, awardsQuery } from "@/sanity/lib/queries"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const [projects, press, awards] = await Promise.all([
    client.fetch<{ slug?: { current: string } }[]>(projectsQuery),
    client.fetch<{ slug?: { current: string } }[]>(pressQuery),
    client.fetch<{ slug?: { current: string } }[]>(awardsQuery),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/works",
    "/gallery",
    "/recognition",
    "/faq",
    "/process",
    "/contact",
    "/studio",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  const projectRoutes =
    projects?.filter((p) => p.slug?.current).map((p) => ({
      url: `${baseUrl}/works/${p.slug!.current}`,
      lastModified: new Date(),
    })) || []

  const pressRoutes =
    press?.filter((p) => p.slug?.current).map((p) => ({
      url: `${baseUrl}/recognition`,
      lastModified: new Date(),
    })) || []

  const awardRoutes =
    awards?.filter((p) => p.slug?.current).map((p) => ({
      url: `${baseUrl}/recognition`,
      lastModified: new Date(),
    })) || []

  return [...staticRoutes, ...projectRoutes, ...pressRoutes, ...awardRoutes]
}



