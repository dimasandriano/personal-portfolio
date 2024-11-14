import type { MetadataRoute } from 'next';

import { ENV } from '@/constant/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: ENV.BASE_URL + '/sitemap.xml',
  };
}
