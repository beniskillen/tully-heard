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
    headline: 'A more dynamic, multi-generational venue experience',
    intro:
      'A sports and entertainment concept at Chatswood RSL, bringing together viewing, casual dining and social occasions.',
    image: yogisImg,
    logo: assetUrl('/clients/chatswood-rsl.webp'),
    result: 'Sports and social venue',
  },
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    headline: 'Strategic direction for a major venue transformation',
    intro:
      'A major redevelopment on the Central Coast, bringing dining, events, sport and community spaces into one venue.',
    image: gosfordImg,
    logo: assetUrl('/clients/gosford-rsl.svg'),
    result: 'Venue transformation',
  },
  {
    id: 'shoalhaven',
    title: 'Shoalhaven Ex-Servos / The Growers',
    headline: 'A regional food and beverage destination',
    intro:
      'A locally led dining concept for Shoalhaven Ex-Servos, shaped around regional produce and a broader social offer.',
    image: shoalhavenImg,
    logo: growersLogo,
    result: 'Regional dining concept',
  },
  {
    id: 'club-mudgee',
    title: 'Club Mudgee / The Hub Sports Bar',
    headline: 'Revitalising a historic club space for modern community use',
    intro:
      'A sports bar and community hub that gave an existing area of Club Mudgee a clearer role in the venue.',
    image: mudgeeImg,
    logo: mudgeeLogo,
    result: 'Sports and community hub',
  },
  {
    id: 'bankstown',
    title: 'Bankstown Sports / Basement Brewhouse',
    headline: 'Repositioning an underused space for a new audience',
    intro:
      'A craft beer and casual dining concept that gave an existing sports bar at Bankstown Sports a more contemporary role.',
    image: bankstownImg,
    logo: assetUrl('/clients/bankstown-sports.webp'),
    result: 'Craft beer and dining',
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
