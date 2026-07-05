import { SITE_CONFIG } from '@/lib/constants'
import { siteUrl } from '@/lib/site'
import { SITE_LAST_UPDATED_ISO } from '@/lib/build-info'

const items = [
  {
    title: 'Strange Tools',
    description: 'Tools whose strangeness continues to pay rent.',
    path: '/writing/strange-tools',
  },
  {
    title: 'The Forest and the Interface',
    description: 'A forest has an interface that is not user-friendly.',
    path: '/writing/the-forest-and-the-interface',
  },
]

export async function GET() {
  const itemsXml = items
    .map(
      (item) => `    <item>
      <title>${item.title}</title>
      <link>${siteUrl}${item.path}</link>
      <description>${item.description}</description>
      <guid>${siteUrl}${item.path}</guid>
    </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.title}</title>
    <link>${siteUrl}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date(SITE_LAST_UPDATED_ISO).toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
