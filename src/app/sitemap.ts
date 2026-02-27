import type { MetadataRoute } from 'next';
import { TOOL_LIST } from './tool-list';

const BASE_URL = 'https://tidywebtools.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            changeFrequency: 'weekly',
        },
        {
            url: `${BASE_URL}/about`,
            changeFrequency: 'weekly',
        },
    ];

    const toolPages: MetadataRoute.Sitemap = TOOL_LIST.map((tool) => ({
        url: `${BASE_URL}${tool.route}`,
        changeFrequency: 'weekly',
    }));

    return [...staticPages, ...toolPages];
}
