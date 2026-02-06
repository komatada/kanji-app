import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3年生漢字マスター',
    short_name: '漢字マスター',
    description: '小学3年生のための楽しい漢字学習アプリ',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0F9FF', // Sky blue tint
    theme_color: '#F0F9FF',
    orientation: 'landscape',
    icons: [
      {
        src: '/icon.png', // We will need to add an icon later
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png', 
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
