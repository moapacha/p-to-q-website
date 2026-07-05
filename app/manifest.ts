import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: '[p→q]',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#dddddd',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
