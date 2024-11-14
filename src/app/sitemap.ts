import type { MetadataRoute } from 'next';

import { ENV } from '@/constant/env';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ENV.BASE_URL || '',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
