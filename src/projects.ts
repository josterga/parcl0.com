export interface Project {
  title: string;
  slug: string;
  description: string;
  year?: number | string;
  tags?: string[];
  url?: string;
  images?: string[];
  pdf?: string;
}

export const projects: Project[] = [
  {
    title: 'Packet Pressure',
    slug: 'packet-pressure',
    description: '<em>Packet Pressure</em> is an original physical card game that turns internet routing into social play. Players build shared paths through a network, hold endpoints, and negotiate when routes collapse. The logic of how packets actually move, made tangible.',
    year: 2026,
    tags: ['game'],
    url: 'https://packetpressure.com',
    images: ['/projects/packet-pressure/screenshot.png'],
  },
  {
    title: 'Takeout',
    slug: 'takeout',
    description: '<em>Takeout</em> is a photographic record of fast food consumption across 2024. Images shot in the car, between drive-thru window and home, accumulate into a portrait of a year spent eating on the move.',
    year: 2025,
    tags: ['zine', 'print'],
    images: ['/projects/takeout/screenshot.png'],
    pdf: '/projects/takeout/takeout.pdf',
  },
  {
    title: 'Seinfeld Crossword',
    slug: 'seinfeld-crossword',
    description: '<em>Seinfeld Crossword</em> tests players on the surprisingly sophisticated vocabulary woven through the show\'s dialogue: words like <em>supercilious</em>, <em>proclivity</em>, and <em>anathema</em> delivered mid-argument or mid-scheme.',
    year: 2024,
    tags: ['game'],
    images: ['/projects/seinfeld-crossword/crossword.png'],
    pdf: '/projects/seinfeld-crossword/seinfeld-crossword.pdf',
  },
];

export const archivedProjects: Project[] = [
  {
    title: 'parclomusic',
    slug: 'parclomusic',
    description: 'Lofi music produced and released to Spotify under the parclomusic alias during the COVID-19 pandemic.',
    year: '2019–2020',
    tags: ['music'],
    url: 'https://open.spotify.com/artist/4ADpqFrA7cjcB68WwZdC93',
    images: [],
  },
  {
    title: 'Instagram Filters',
    slug: 'ig-filters',
    description: 'Collection of Spark AR filters designed and developed as a commercial practice during the COVID-19 pandemic. Worked with food and music distribution clients from mockup through to published filters used in ad campaigns. Spark AR was discontinued by Meta in 2025.',
    year: 2022,
    tags: ['ar'],
    images: [],
  },
];
