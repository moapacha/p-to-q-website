import { siteUrl } from '@/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
    ],
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
