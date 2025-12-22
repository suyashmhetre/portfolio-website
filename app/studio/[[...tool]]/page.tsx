import dynamic from 'next/dynamic'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * Dynamically imported with ssr: false to prevent server-side rendering issues.
 */

const StudioClient = dynamic(() => import('@/components/studio-client'), {
  ssr: false,
})

export default function StudioPage() {
  return <StudioClient />
}
