export type Person = {
  name: string;
  role: string;
  image: string;
  bio: string;
  teaser: string;
  needsPhoto?: boolean;
  needsBio?: boolean;
};

export const team: Person[] = [
  {
    name: 'John Tully',
    role: 'Director',
    image: '/jt-headshot.jpg',
    teaser:
      'John has over 20 years experience in leadership and consulting positions to the hospitality, entertainment and leisure industry focusing on innovation, business transformation, asset & management performance and operational improvement.',
    bio: 'John has over 20 years experience in leadership and consulting positions to the hospitality, entertainment and leisure industry focusing on innovation, business transformation, asset & management performance and operational improvement. John has a particular skill set in identifying and solving strategic, cultural and operational issues inhibiting business growth and performance.',
  },
  {
    name: 'Luke Heard',
    role: 'Director',
    image: '/lh-headshot.png',
    teaser:
      'Luke has first-hand experience in starting and establishing hospitality and hospitality-related businesses and technical experience in business advisory including management consulting, private equity and formerly law.',
    bio: 'Luke has first-hand experience in starting and establishing hospitality and hospitality-related businesses and technical experience in business advisory including management consulting, private equity and formerly law. Luke has been involved with various existing and new businesses, including profit improvement & capital raising mainly focusing on hospitality & property.',
  },
  {
    name: 'Peter McLean',
    role: 'Principal',
    image: '/pm-headshot.png',
    teaser:
      'With over 30 years of experience in the hospitality industry, Peter is an acknowledged expert in the area of Registered Clubs.',
    bio: "With over 30 years of experience in the hospitality industry, Peter is an acknowledged expert in the area of Registered Clubs with extensive experience in the Club, hotel, hospitality & tourism industries as well as in audit and financial review of private and public companies. Peter's experience includes corporate governance, operational issues, strategic planning, amalgamations and takeovers, due diligence, taxation, financial review and management accounting.",
  },
  {
    name: 'Craig Butler',
    role: 'Gaming Consultant',
    image: '/placeholder.svg',
    teaser: 'Biography awaiting client approval.',
    bio: 'Biography awaiting client approval.',
    needsPhoto: true,
    needsBio: true,
  },
  {
    name: 'Norrelle Goldring',
    role: 'Market Research Consultant',
    image: '/ng-headshot.png',
    teaser:
      'Norrelle has 17 years experience in advising retail and consulting businesses, combining research, customer and category insights with strategy, marketing and sales operations.',
    bio: "Norrelle has 17 years experience in advising retail and consulting businesses. Norrelle's background combines research, customer and category insights with strategy, marketing and sales operations. Norrelle brings perspectives from multiple industry sectors including hospitality, FMCG, retail, consumer durables, technology and telco.",
  },
  {
    name: 'Margaret Carew',
    role: 'Consultant',
    image: '/placeholder.svg',
    teaser:
      "Margaret has in excess of 30 years' experience in the hospitality industry including hands-on roles as Secretary Manager of clubs and General Manager of pubs.",
    bio: "Margaret has in excess of 30 years' experience in the hospitality industry including hands-on roles as Secretary Manager of clubs and General Manager of pubs. Margaret has worked as a consultant in the registered club industry advising in strategic and operational consulting including gaming machine entitlement exchange. Margaret has technical and operational qualifications in accounting and financial consulting and provides a wealth of technical and practical advice to our hospitality clients.",
    needsPhoto: true,
  },
  {
    name: 'Brian Dickinson',
    role: 'Leadership and Culture',
    image: '/placeholder.svg',
    teaser: 'Biography awaiting client approval.',
    bio: 'Biography awaiting client approval.',
    needsPhoto: true,
    needsBio: true,
  },
];

export const directors = team.filter((person) => person.role === 'Director');
