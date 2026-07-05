import { siteUrl } from '@/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'BingBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        userAgent: 'Bytedance',
        allow: '/',
      },
      {
        userAgent: 'TikTokBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
      },
      {
        userAgent: 'PetalBot',
        allow: '/',
      },
      // Yandex
      {
        userAgent: 'YandexBot',
        allow: '/',
      },
      // Baidu
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      // Sogou
      {
        userAgent: 'Sogou',
        allow: '/',
      },
      // 360 Search
      {
        userAgent: '360Spider',
        allow: '/',
      },
      // Naver
      {
        userAgent: 'Yeti',
        allow: '/',
      },
      // Meta / Facebook
      {
        userAgent: 'FacebookExternalHit',
        allow: '/',
      },
      // Twitter / X
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      // LinkedIn
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      // Internet Archive
      {
        userAgent: 'ia_archiver',
        allow: '/',
      },
      // SEO tools
      {
        userAgent: 'SemrushBot',
        allow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        allow: '/',
      },
      {
        userAgent: 'MJ12bot',
        allow: '/',
      },
      // DeepSeek
      {
        userAgent: 'DeepSeek',
        allow: '/',
      },
      // Google AI
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
