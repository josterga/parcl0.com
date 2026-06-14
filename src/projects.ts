export interface Project {
  title: string;
  slug: string;
  description: string;
  year?: number;
  tags?: string[];
  url?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: 'Packet Pressure',
    slug: 'packet-pressure',
    description: 'A game.',
    year: 2024,
    tags: ['game'],
    url: 'https://packetpressure.com',
  },
  {
    title: 'Takeout',
    slug: 'takeout',
    description: 'A zine.',
    tags: ['zine', 'print'],
    images: ['/projects/takeout/screenshot.png'],
  },
  {
    title: 'Instagram Filters',
    slug: 'ig-filters',
    description: 'AR filters.',
    tags: ['ar'],
    images: [],
  },
];
