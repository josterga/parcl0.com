export interface Project {
  title: string;
  slug: string;
  description: string;
  year?: number;
  tags?: string[];
  url?: string;
  images?: string[];
  pdf?: string;
}

export const projects: Project[] = [
  {
    title: 'Packet Pressure',
    slug: 'packet-pressure',
    description: 'A competitive card game of contested route-building. Routes are shared infrastructure — any player can extend any open route at any time.',
    year: 2024,
    tags: ['game'],
    url: 'https://packetpressure.com',
    images: ['/projects/packet-pressure/screenshot.png'],
  },
  {
    title: 'Takeout',
    slug: 'takeout',
    description: '<em>Takeout</em> is a photographic record of fast food consumption across 2024. Images shot in the car between drive-thru pickup and home document a year of consumption choices.',
    tags: ['zine', 'print'],
    images: ['/projects/takeout/screenshot.png'],
  },
  {
    title: 'Seinfeld Crossword',
    slug: 'seinfeld-crossword',
    description: 'Seinfeld Crossword invites players to reminisce on the colorful and brilliant vocabulary found in the dialogue spoken by the characters of Seinfeld.',
    tags: ['game'],
    images: ['/projects/seinfeld-crossword/crossword.png'],
    pdf: '/projects/seinfeld-crossword/seinfeld-crossword.pdf',
  },
  {
    title: 'Instagram Filters',
    slug: 'ig-filters',
    description: 'Augmented reality filters designed and prototyped as a commercial side practice during the COVID-19 pandemic. Clients included dental and medical practices, Cholula Hot Sauce, and Warner Music.',
    tags: ['ar'],
    images: [],
  },
];
