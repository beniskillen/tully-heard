import { assetUrl } from '@/lib/assets';

/**
 * Excerpts from the two letters John supplied in the 19 Aug 2026 TH Website
 * email. Full letters are not published. The Hoschke paragraph on visitation
 * and profitability is omitted because those figures are not approved for
 * public use.
 */
export type Proof = {
  organisation: string;
  person: string;
  role: string;
  focus: string;
  paragraphs: string[];
  image: string;
  linkedin?: string;
};

export const proofs: Proof[] = [
  {
    organisation: 'Chatswood RSL Club',
    person: 'Andrew Hoschke',
    role: 'Chief Executive Officer',
    focus: 'Strategic clarity, commercial judgement and implementation',
    image: assetUrl('/ah-headshot.png'),
    paragraphs: [
      'The strategy they helped create provided clear direction around investment priorities, customer engagement, venue utilisation, and revenue diversification. Importantly, they ensured that the recommendations were realistic, commercially viable, and aligned with the Club’s long-term vision and values.',
      'What set John and Luke apart was their commitment to implementation. Rather than delivering a report and moving on, they remained actively involved in helping the Club progress key initiatives, providing guidance, support, and accountability throughout the process.',
      'Over the years, John and Luke have continued to be trusted advisers to both myself and the Board. Their advice is consistently practical, informed, and commercially focused.',
    ],
  },
  {
    organisation: 'Bankstown Sports',
    person: 'Mark Condi',
    role: 'Former Chief Executive Officer',
    focus: 'Strategy, long-term planning and trusted adviser',
    image: assetUrl('/mc-headshot.jpg'),
    linkedin: 'https://au.linkedin.com/in/mark-condi-bba75430',
    paragraphs: [
      'During my time as CEO, we engaged TH to assist with our longer-term strategic planning and help establish a clear direction for the Club.',
      'John and Luke became trusted advisers to both myself and the Club. They developed a strong understanding of our business, our organisational culture, and our stakeholder dynamics — making them a valuable sounding board for the CEO and Board as we considered our future direction and significant investment decisions.',
      'Importantly, they helped ensure we had clarity around our strategy before committing significant capital.',
    ],
  },
];
