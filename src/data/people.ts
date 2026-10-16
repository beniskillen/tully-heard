import { assetUrl } from '@/lib/assets';

export type Person = {
  name: string;
  role: string;
  image: string;
  bio: string[];
  teaser: string;
};

export const team: Person[] = [
  {
    name: 'John Tully',
    role: 'Director',
    image: assetUrl('/jt-headshot.jpg'),
    teaser:
      "John has more than 25 years' experience in hospitality leadership, business transformation, and strategic consulting.",
    bio: [
      "John has more than 25 years' experience in hospitality leadership, business transformation, and strategic consulting.",
      'His career includes serving as Managing Director of a high-profile hotel, property and media group, and CEO of a registered club where he pioneered significant industry transformation. He has also owned leading restaurants in Sydney and Melbourne.',
      'As a Director of Tully Heard, John draws on this hands-on experience to advise Boards and senior management teams across NSW, Queensland, Victoria and the ACT on strategic direction, growth opportunities, and major investment decisions.',
      'His expertise lies in strategic planning, venue repositioning, master planning, and business transformation, with a strong focus on customer experience and commercial outcomes. John is also a regular presenter at industry conferences and forums, sharing insights on hospitality trends and business transformation.',
    ],
  },
  {
    name: 'Luke Heard',
    role: 'Director',
    image: assetUrl('/lh-headshot.jpg'),
    teaser:
      "Luke has more than 20 years' experience in hospitality operations, business strategy, and investment, supported by a professional background in law and finance, including experience in private equity.",
    bio: [
      "Luke has more than 20 years' experience in hospitality operations, business strategy, and investment, supported by a professional background in law and finance, including experience in private equity.",
      "An experienced hospitality entrepreneur, Luke pioneered Sydney's small bar movement, establishing a successful group of venues, and has owned and operated restaurants in Sydney and Melbourne.",
      "As a Director of Tully Heard, Luke leads the development and delivery of the firm's strategic advisory work, including financial modelling, investment feasibility, and long-term business planning.",
      'With an exceptional understanding of the registered club and hotel sectors across NSW, Queensland, Victoria and the ACT, Luke combines commercial and financial analysis with a strong appreciation of economic conditions, market trends, and operational realities to guide major strategic and investment decisions.',
      'Luke also contributes to industry education and professional development programs, sharing his expertise in business strategy, financial performance, and investment planning.',
    ],
  },
  {
    name: 'Craig Butler',
    role: 'Principal Consultant - Gaming Advisory & Customer Experience',
    image: assetUrl('/cb-headshot.jpg'),
    teaser:
      "Craig is a highly regarded gaming industry specialist with more than 25 years' experience spanning venue operations, gaming technology, commercial strategy, and customer experience.",
    bio: [
      "Craig is a highly regarded gaming industry specialist with more than 25 years' experience spanning venue operations, gaming technology, commercial strategy, and customer experience.",
      'His career includes senior executive roles with industry leaders Aristocrat Technologies and eBet, providing extensive expertise in gaming performance, technology, data analytics, and regulatory compliance.',
      'As a Principal Consultant with Tully Heard, Craig helps clubs optimise gaming performance through detailed data analysis, effective use of gaming systems and improved operational practices.',
      'Craig has a particular ability to translate complex gaming data into clear commercial insights, helping CEOs and Boards make informed decisions and ensure gaming investments deliver appropriate returns.',
      'Passionate about customer experience, Craig combines technical expertise with strategic business planning and a practical understanding of what drives successful and profitable gaming operations.',
    ],
  },
  {
    name: 'Peter McLean',
    role: 'Principal Consultant - Governance & Amalgamations',
    image: assetUrl('/pm-headshot.jpg'),
    teaser:
      "Peter has more than 30 years' experience advising the registered club, hospitality, and tourism industries, with specialist expertise in corporate governance, financial management and strategic consulting.",
    bio: [
      "Peter has more than 30 years' experience advising the registered club, hospitality, and tourism industries, with specialist expertise in corporate governance, financial management and strategic consulting.",
      'A Fellow of Chartered Accountants Australia and New Zealand, CPA Australia and the Governance Institute of Australia, Peter brings considerable commercial and technical expertise to his consulting work.',
      'As a Principal Consultant with Tully Heard, Peter advises Club Boards and management teams on governance, strategic planning, amalgamations, and due diligence.',
      "Having overseen more than 100 successful club amalgamations, Peter is one of the industry's most experienced advisers in this specialised field.",
    ],
  },
  {
    name: 'Margaret Carew',
    role: 'EGM Brokerage & Gaming Advisory Specialist',
    image: assetUrl('/margaret-carew-headshot.jpg'),
    teaser:
      "Margaret has more than 30 years' experience in the registered club industry, with a strong background in club management, operations, and specialist gaming advisory services.",
    bio: [
      "Margaret has more than 30 years' experience in the registered club industry, with a strong background in club management, operations, and specialist gaming advisory services.",
      'Her career includes senior advisory roles with professional services firms PKF and Lawler Partners, where she established a strong reputation for industry knowledge, integrity, and trusted client relationships.',
      'Associated with Tully Heard since its establishment, Margaret specialises in electronic gaming machine (EGM) brokerage and the management of associated transactions and regulatory processes.',
      'Her extensive industry knowledge and practical understanding of this complex and highly regulated market help clubs navigate transactions with confidence and achieve sound commercial outcomes.',
    ],
  },
  {
    name: 'Norrelle Goldring',
    role: 'Market Research & Customer Insights Specialist',
    image: assetUrl('/ng-headshot.jpg'),
    teaser:
      'Norrelle is an experienced market research and customer insights specialist, with a strong background in consumer behaviour, market strategy, and customer experience.',
    bio: [
      'Norrelle is an experienced market research and customer insights specialist, with a strong background in consumer behaviour, market strategy, and customer experience.',
      'Her career includes senior leadership roles with global research consultancy GfK, including Regional Director across Asia Pacific, as well as founding and leading her own specialist research consultancy.',
      'Associated with Tully Heard for more than six years, Norrelle provides qualitative and quantitative market research services to metropolitan and regional clubs, supporting strategic planning, market positioning, and investment decisions.',
      'Her expertise in understanding customer needs, behaviours and emerging market opportunities helps clubs develop more relevant offerings and identify opportunities for future growth.',
    ],
  },
  {
    name: 'Brian Dickinson',
    role: 'Principal Consultant - Leadership & Organisational Culture',
    image: assetUrl('/bd-headshot.jpg'),
    teaser:
      'Brian is an experienced leadership and organisational development consultant, specialising in building leadership capability, strengthening workplace culture, and improving business performance.',
    bio: [
      'Brian is an experienced leadership and organisational development consultant, specialising in building leadership capability, strengthening workplace culture, and improving business performance.',
      "As part of Tully Heard's specialist consulting team for more than five years, Brian has supported Club Boards and management teams in developing effective leaders, building stronger teams, and driving positive organisational change.",
      'His approach recognises that exceptional customer experiences start with strong leadership and a positive workplace culture. Brian helps clubs align their people and leadership practices with their strategic objectives, creating more engaged teams, improved customer experiences, and stronger business performance.',
    ],
  },
];

export const directors = team.filter((person) => person.role === 'Director');
