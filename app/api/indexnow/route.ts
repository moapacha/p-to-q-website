import { siteUrl } from '@/lib/site'

const INDEXNOW_KEY = '565d375ed0c2ecbf770bba85ee337d57'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const urls: string[] = body?.urls ?? []

  // If no URLs provided, submit all sitemap URLs
  const urlList =
    urls.length > 0
      ? urls
      : [
          `${siteUrl}/`,
          `${siteUrl}/work`,
          `${siteUrl}/writing`,
          `${siteUrl}/writing/strange-tools`,
          `${siteUrl}/writing/the-forest-and-the-interface`,
        ]

  const payload = {
    host: new URL(siteUrl).host,
    key: INDEXNOW_KEY,
    keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList,
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  return Response.json(
    {
      status: res.status,
      submitted: urlList.length,
      urls: urlList,
    },
    { status: res.ok || res.status === 202 ? 200 : res.status }
  )
}
