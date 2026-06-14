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
    description: '<em>Packet Pressure</em> is an original card game about building shared routes and holding the endpoint when they close.',
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
    pdf: '/projects/takeout/takeout.pdf',
  },
  {
    title: 'Seinfeld Crossword',
    slug: 'seinfeld-crossword',
    description: '<em>Seinfeld Crossword</em> invites players to reminisce on the colorful and brilliant vocabulary found in the dialogue spoken by the characters of Seinfeld.',
    tags: ['game'],
    images: ['/projects/seinfeld-crossword/crossword.png'],
    pdf: '/projects/seinfeld-crossword/seinfeld-crossword.pdf',
  },
  {
    title: 'Instagram Filters',
    slug: 'ig-filters',
    description: 'Collection of Spark AR filters designed and developed as a commercial side practice during the COVID-19 pandemic. Worked with major food and music distribution clients as a design and art consultant — delivering mockups through to published filters used in ad campaigns.',
    tags: ['ar'],
    images: [],
  },
];
