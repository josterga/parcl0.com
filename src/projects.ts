export interface AnswerKeyEntry {
  word: string;
  definition: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  year?: number;
  tags?: string[];
  url?: string;
  images?: string[];
  answerKey?: AnswerKeyEntry[];
}

export const projects: Project[] = [
  {
    title: 'Packet Pressure',
    slug: 'packet-pressure',
    description: 'A competitive card game of contested route-building. Routes are shared infrastructure — any player can extend any open route at any time.',
    year: 2024,
    tags: ['game'],
    url: 'https://packetpressure.com',
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
    answerKey: [
      { word: 'Scintillating', definition: 'Sparkling or brilliantly clever.' },
      { word: 'Reticent', definition: 'Reserved or unwilling to share thoughts.' },
      { word: 'Aspersions', definition: 'Damaging or slanderous remarks.' },
      { word: 'Supercilious', definition: 'Arrogantly disdainful or haughty.' },
      { word: 'Extemporaneously', definition: 'Spoken or performed without preparation.' },
      { word: 'Dalliance', definition: 'A casual romantic or flirtatious relationship.' },
      { word: 'Proffered', definition: 'Offered for acceptance or consideration.' },
      { word: 'Ensconced', definition: 'Settled securely or comfortably.' },
      { word: 'Coiffed', definition: 'Styled or arranged hair elaborately.' },
      { word: 'Volition', definition: 'The power of choosing or deciding; willpower.' },
      { word: 'Reneged', definition: 'Went back on a promise or agreement.' },
      { word: 'Decolletage', definition: 'A low neckline on a woman\'s dress or top.' },
      { word: 'Bawdy', definition: 'Humorously indecent or obscene.' },
      { word: 'Cachet', definition: 'Prestige, distinction, or a mark of quality.' },
      { word: 'Absconded', definition: 'Left hurriedly and secretly, often to avoid capture.' },
      { word: 'Proclivity', definition: 'A natural inclination or tendency toward something.' },
      { word: 'Soused', definition: 'Drunk or soaked in liquid (often alcohol).' },
      { word: 'Coquettish', definition: 'Flirtatious in a playful or teasing manner.' },
      { word: 'Haberdasher', definition: 'A dealer in men\'s clothing and accessories.' },
      { word: 'Anathema', definition: 'Something detested or cursed; an object of loathing.' },
      { word: 'Extricate', definition: 'To free from a difficult situation or entanglement.' },
      { word: 'Impugn', definition: 'To challenge as false; to cast doubt upon something\'s validity.' },
      { word: 'Tantamount', definition: 'Equivalent in value, significance, or effect.' },
      { word: 'Derision', definition: 'Mockery, ridicule, or scornful laughter at someone\'s expense.' },
      { word: 'Capricious', definition: 'Prone to sudden and unpredictable changes in mood or behavior.' },
    ],
  },
  {
    title: 'Instagram Filters',
    slug: 'ig-filters',
    description: 'Augmented reality filters designed and prototyped as a commercial side practice during the COVID-19 pandemic. Clients included dental and medical practices, Cholula Hot Sauce, and Warner Music.',
    tags: ['ar'],
    images: [],
  },
];
