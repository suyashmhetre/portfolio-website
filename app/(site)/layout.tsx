import type React from "react"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { PageTransition } from "@/components/page-transition"
import { ScrollProgress } from "@/components/scroll-progress"
import { PaperTexture } from "@/components/paper-texture"
import { HeroGradient } from "@/components/hero-gradient"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PreviewBar } from "@/components/preview-bar"
import { sanityFetch } from "@/sanity/lib/fetch"
import { siteSettingsQuery, contactInfoQuery } from "@/sanity/lib/queries"
import type { SiteSettings, ContactInfo } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
    preview: false,
  }).catch(() => null)

  const title =
    settings?.defaultSeo?.title ||
    settings?.siteTitle ||
    "Badhuche — Monumental Art & Public Installations"
  const description =
    settings?.defaultSeo?.description ||
    "Transforming spaces into cultural landmarks. Award-winning monumental art, public installations, and sculptural works across India."

  const ogImage = settings?.defaultSeo?.ogImage?.asset?.url

  return {
    title,
    description,
    keywords: [
      "monumental art",
      "public installations",
      "sculpture",
      "mural",
      "Ayodhya",
      "airport art",
      "cultural landmarks",
    ],
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage, alt: settings?.defaultSeo?.ogImage?.alt || title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  }
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const draft = await draftMode()
  const isPreview = draft.isEnabled

  const [settings, contactInfo] = await Promise.all([
    sanityFetch<SiteSettings>({
      query: siteSettingsQuery,
      tags: ["siteSettings"],
      preview: isPreview,
    }).catch(() => null),
    sanityFetch<ContactInfo>({
      query: contactInfoQuery,
      tags: ["contactInfo"],
      preview: isPreview,
    }).catch(() => null),
  ])

  return (
    <>
      <HeroGradient />
      <PaperTexture />
      <CustomCursor />
      <ScrollProgress />
      <Navigation settings={settings} contactInfo={contactInfo} />
      <SmoothScroll>
        <PageTransition>{children}</PageTransition>
      </SmoothScroll>
      <Footer settings={settings} contactInfo={contactInfo} />
      {isPreview && <PreviewBar />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: settings?.siteTitle || "Badhuche Art Studio",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            description:
              settings?.description ||
              "Transforming spaces into cultural landmarks with monumental art, sculpture, and public installations.",
            sameAs: settings?.social?.map((s) => s.url).filter(Boolean) || [],
            logo: settings?.logo?.asset?.url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: settings?.siteTitle || "Badhuche Art Studio",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            potentialAction: {
              "@type": "SearchAction",
              target: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/works?query={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Analytics />
    </>
  )
}
