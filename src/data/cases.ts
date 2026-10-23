import { assetUrl } from '@/lib/assets';
import gosfordImg from '@/assets/cases/gosford-rsl.jpeg';
import yogisImg from '@/assets/cases/yogis-chatswood.webp';
import shoalhavenImg from '@/assets/cases/shoalhaven.png';
import mudgeeImg from '@/assets/cases/club-mudgee.webp';
import bankstownImg from '@/assets/cases/bankstown.jpg';
import growersLogo from '@/assets/logos/the-growers-by-ponte.png';
import mudgeeLogo from '@/assets/logos/club-mudgee.svg';
import cabraLogo from '@/assets/logos/cabra-vale-diggers.svg';
import wollongongLogo from '@/assets/logos/wollongong-city-of-innovation.svg';
import moorePkLogo from '@/assets/logos/moore-park.svg';
import centralRealLogo from '@/assets/logos/central-real-capital.svg';

export type FeaturedCase = {
  id: string;
  title: string;
  headline: string;
  intro: string;
  outcome: string;
  image: string;
  logo?: string;
  result: string;
};

export type MoreWorkItem = {
  title: string;
  body: string;
  logo?: string;
};

export const featuredCases: FeaturedCase[] = [
  {
    id: 'chatswood-rsl',
    title: 'Chatswood RSL / Yogi’s Sports Bar',
    headline: 'Repositioning the venue to attract new markets and drive business growth.',
    intro:
      "Part of a broader TH-led strategy to strengthen Chatswood RSL's existing business while attracting a younger audience through a contemporary sports bar and hospitality experience.",
    outcome:
      'The work strengthened the existing club business and delivered strong commercial results, while opening a contemporary hospitality offer for a younger audience.',
    image: yogisImg,
    logo: assetUrl('/clients/chatswood-rsl.webp'),
    result: 'New-market growth',
  },
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    headline: 'Setting the commercial direction for a major venue investment.',
    intro:
      "A TH-led strategy for Gosford RSL's redevelopment, testing how dining, events, sport and community spaces could strengthen the club's long-term business.",
    outcome:
      'The strategy gave the Board a clear commercial direction before committing to a major investment in the venue.',
    image: gosfordImg,
    logo: assetUrl('/clients/gosford-rsl.svg'),
    result: 'Major investment strategy',
  },
  {
    id: 'shoalhaven',
    title: 'Shoalhaven Ex-Servos / The Growers',
    headline: "Building a hospitality offer that broadens the club's trade.",
    intro:
      'The Growers was developed as a commercial food and beverage strategy for Shoalhaven Ex-Servos, using regional produce to attract a wider social audience.',
    outcome:
      'The concept gave the club a distinct hospitality business and a practical way to grow food and beverage trade beyond its existing members.',
    image: shoalhavenImg,
    logo: growersLogo,
    result: 'Hospitality growth',
  },
  {
    id: 'club-mudgee',
    title: 'Club Mudgee / The Hub Sports Bar',
    headline: 'Putting an existing space to work for the business.',
    intro:
      'The Hub Sports Bar gave an underused area of Club Mudgee a clearer commercial role, connecting sport and community use with day-to-day trade.',
    outcome:
      'An existing part of the club now contributes more directly to trade, rather than sitting underused.',
    image: mudgeeImg,
    logo: mudgeeLogo,
    result: 'Stronger use of the venue',
  },
  {
    id: 'bankstown',
    title: 'Bankstown Sports / Basement Brewhouse',
    headline: 'Diversifying the offer to reach a new audience.',
    intro:
      'The Basement Brewhouse repositioned an existing sports bar at Bankstown Sports, creating a craft beer and casual dining business for a broader market.',
    outcome:
      'The new offer gave an existing space a contemporary role and supported a more diversified club business.',
    image: bankstownImg,
    logo: assetUrl('/clients/bankstown-sports.webp'),
    result: 'A wider commercial offer',
  },
];

/** First four featured cases for the homepage carousel. */
export const homeCaseTeasers = featuredCases.slice(0, 4);

export const moreWork: MoreWorkItem[] = [
  {
    title: 'Cabra Vale Diggers Club',
    body: 'Strategic planning process(es) and feasibility review for major club integrated development.',
    logo: cabraLogo,
  },
  {
    title: 'Karuah RSL Club',
    body: 'Premises optimisation plan and execution to transform the Club and maximise growth opportunity from surrounding catchment (Ongoing).',
    logo: assetUrl('/clients/karuah-ex-services.webp'),
  },
  {
    title: 'Oaks Hotel Neutral Bay',
    body: "Site premises plan, concept development and execution, including Taffy's sports bar.",
    logo: assetUrl('/clients/oaks-taffeys.webp'),
  },
  {
    title: 'Oak Point Golf Club',
    body: 'Strategic planning and modelling including for new course transition.',
  },
  {
    title: 'Wollongong Council Theatre Site',
    body: 'Hospitality advisory support for a government-led venue and precinct opportunity.',
    logo: wollongongLogo,
  },
  {
    title: 'Moore Park Golf Club',
    body: 'Hospitality assistance for the NSW State Government Moore Park Golf Club redevelopment.',
    logo: moorePkLogo,
  },
  {
    title: 'Cabra Vale Diggers Club Novotel',
    body: 'Financial modelling assistance.',
    logo: cabraLogo,
  },
  {
    title: 'Central Real Capital',
    body: 'Integrated resort feasibility and assessment.',
    logo: centralRealLogo,
  },
  {
    title: 'Club Mosman / The Fernery',
    body: 'Premises optimisation, concept development and execution, including The Fernery rooftop venue.',
    logo: assetUrl('/clients/club-mosman.svg'),
  },
];
