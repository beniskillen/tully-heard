import { assetUrl } from '@/lib/assets';
import gosfordImg from '@/assets/cases/gosford-rsl.jpeg';
import yogisImg from '@/assets/cases/yogis-chatswood.webp';
import shoalhavenImg from '@/assets/cases/shoalhaven.png';
import mudgeeImg from '@/assets/cases/club-mudgee.webp';
import bankstownImg from '@/assets/cases/bankstown.jpg';
import doyloImg from '@/assets/cases/doylo.jpg';
import growersLogo from '@/assets/logos/the-growers-by-ponte.png';
import mudgeeLogo from '@/assets/logos/club-mudgee.svg';
import yogisLogo from '@/assets/logos/doylos-sports-bar.png';
import doyloLogo from '@/assets/logos/doylo-lifestyle-group.svg';
import cabraLogo from '@/assets/logos/cabra-vale-diggers.svg';
import wollongongLogo from '@/assets/logos/wollongong-city-of-innovation.svg';
import moorePkLogo from '@/assets/logos/moore-park.svg';
import centralRealLogo from '@/assets/logos/central-real-capital.svg';

export type CaseStat = { value: string; label: string };

export type FeaturedCase = {
  id: string;
  title: string;
  headline: string;
  intro: string;
  image: string;
  logo?: string;
  result: string;
  stats: CaseStat[];
  challenge: string;
  role: string;
  outcome: string;
  proof: string[];
};

export type MoreWorkItem = {
  title: string;
  body: string;
  logo?: string;
};

export const featuredCases: FeaturedCase[] = [
  {
    id: 'gosford-rsl',
    title: 'Gosford RSL',
    headline: 'Strategic direction for a major venue transformation',
    intro:
      'A major redevelopment that repositioned the club as a leading dining, entertainment and community destination on the Central Coast.',
    image: gosfordImg,
    logo: assetUrl('/clients/gosford-rsl.svg'),
    result: 'Major venue transformation',
    stats: [
      { value: '4', label: 'Destination drivers: dining, events, sport and brewery' },
      { value: '36,000+', label: 'Member community reached by the new venue' },
      { value: 'Regional', label: 'Broader visitation across the Central Coast' },
    ],
    challenge:
      'Gosford RSL needed to make a major long-term decision about the future of its venue. The opportunity was not simply to refresh the existing club, but to assess whether a more substantial redevelopment could better serve members, attract new audiences and position the club for future relevance.',
    role: 'Tully Heard supported the strategic research and feasibility process, helping the club test the market opportunity, understand member and guest expectations, and evaluate the commercial logic of a more substantial transformation.',
    outcome:
      'The completed venue now brings together modern dining, event facilities, a sports bar, alfresco areas, a brewery and community-focused spaces. The project has helped reposition Gosford RSL as a stronger regional destination and a more contemporary club experience.',
    proof: [
      'Major venue transformation',
      'Stronger regional destination positioning',
      'Broader dining and entertainment offer',
      'Improved member and guest experience',
      'Long-term strategic repositioning',
      'Contemporary club environment',
    ],
  },
  {
    id: 'chatswood-rsl',
    title: 'Chatswood RSL / Yogi’s Sports Bar',
    headline: 'A more dynamic, multi-generational venue experience',
    intro:
      'A revitalised sports and entertainment concept designed to broaden appeal while strengthening the club’s role as a social destination.',
    image: yogisImg,
    logo: yogisLogo,
    result: 'Broader audience appeal',
    stats: [
      { value: '200%', label: 'Increase in visitation' },
      { value: '18–45', label: 'Younger audience attendance focus' },
      { value: '4', label: 'Social layers: sport, dining, arcade and events' },
    ],
    challenge:
      'Chatswood RSL needed to stay relevant to changing customer expectations while continuing to serve its established member base. The opportunity was to create a more vibrant, contemporary experience that could attract younger patrons, support social occasions and lift the energy of the broader venue.',
    role: 'Tully Heard supported the strategic development of a concept that combined sports viewing, casual dining, bar service, events and interactive entertainment into a more engaging and flexible venue experience.',
    outcome:
      'Yogi’s Sports Bar has helped Chatswood RSL present a more modern, multi-generational offer. The concept supports social dining, sports viewing, events and interactive entertainment, giving the venue a stronger platform to connect with younger audiences.',
    proof: [
      'Younger audience engagement',
      'Stronger sports and entertainment offer',
      'More dynamic use of venue space',
      'Broader multi-generational appeal',
      'Improved social and event experience',
      'Contemporary hospitality concept',
    ],
  },
  {
    id: 'shoalhaven',
    title: 'Shoalhaven Ex-Servos / The Growers',
    headline: 'A regional food and beverage destination',
    intro:
      'A locally led hospitality concept designed to broaden appeal, strengthen community connection and create a more distinctive venue experience.',
    image: shoalhavenImg,
    logo: growersLogo,
    result: 'Regional destination positioning',
    stats: [
      { value: '2', label: 'Visitor markets targeted: Sydney and Canberra' },
      { value: '30s', label: 'Younger female audience opportunity' },
      { value: 'Local-first', label: 'Produce, suppliers and regional identity' },
    ],
    challenge:
      'Shoalhaven Ex-Servos had an opportunity to elevate a venue asset into a more distinctive dining and social experience. The challenge was to create a concept that felt authentic to the region, appealed to both locals and visitors, and strengthened the club’s broader hospitality offer.',
    role: 'Tully Heard supported the concept and strategic direction, with a focus on local produce, destination appeal, brand positioning and a more contemporary customer experience.',
    outcome:
      'The Growers helped create a more regionally distinctive hospitality offer, with stronger links to local producers, a broader dining experience and a clearer destination proposition.',
    proof: [
      'Regional destination positioning',
      'Local produce and supplier story',
      'Broader dining appeal',
      'Stronger community connection',
      'Contemporary food and beverage experience',
      'Clearer destination proposition',
    ],
  },
  {
    id: 'club-mudgee',
    title: 'Club Mudgee / The Hub Sports Bar',
    headline: 'Revitalising a historic club space for modern community use',
    intro:
      'A repositioned sports bar and community hub that gave an underutilised area a clearer role in the venue.',
    image: mudgeeImg,
    logo: mudgeeLogo,
    result: 'Improved venue utilisation',
    stats: [
      { value: 'Local', label: 'Sports-led concept to bring new energy into the venue' },
      { value: '3', label: 'Connected zones: sports bar, beer garden and gaming' },
      { value: '70+ yrs', label: 'Community relevance modernised for the next generation' },
    ],
    challenge:
      'Club Mudgee wanted to revitalise a historic section of the club and make better use of space that had previously served different purposes over time. The goal was to respect the club’s history while creating a more contemporary and relevant venue experience.',
    role: 'Tully Heard supported the planning and strategic direction for a sports and community hub that could improve utilisation, create stronger social energy and support the club’s broader role in the local community.',
    outcome:
      'The Hub Sports Bar created a more active and engaging area within the club, supporting sport, casual dining, social connection and community use. The project shows how thoughtful adaptation of existing spaces can strengthen relevance.',
    proof: [
      'Improved use of an existing venue area',
      'Stronger community and sports positioning',
      'More active social environment',
      'Better alignment with member behaviour',
      'Adaptive reuse of a historic club space',
      'Clearer role for an existing asset',
    ],
  },
  {
    id: 'bankstown',
    title: 'Bankstown Sports / Basement Brewhouse',
    headline: 'Repositioning an underused space for a new audience',
    intro:
      'A craft beer and casual dining concept that helped shift the role of an existing sports bar and broaden the venue’s appeal.',
    image: bankstownImg,
    logo: assetUrl('/clients/bankstown-sports.webp'),
    result: 'Underused space repositioned',
    stats: [
      { value: '18–45', label: 'Younger demographic targeted through the new concept' },
      { value: '30', label: 'Beers on tap creating a stronger craft-led experience' },
      { value: '7', label: 'House-brewed beers — a distinct reason to visit' },
    ],
    challenge:
      'The existing sports bar environment had become less aligned with changing customer expectations. The opportunity was to create a more relevant venue that could appeal to a younger and more diverse audience while still fitting within the broader club ecosystem.',
    role: 'Tully Heard supported the strategic thinking behind a more contemporary hospitality concept, drawing on trends in craft beer, casual dining, social experience and venue repositioning.',
    outcome:
      'The Basement Brewhouse helped create a more distinctive hospitality offer within Bankstown Sports. The concept gave the club a stronger platform to engage new audiences, activate an underused space and present a more modern experience.',
    proof: [
      'Underused space repositioned',
      'Broader customer appeal',
      'Contemporary craft beer and dining concept',
      'Stronger social venue experience',
      'Audience diversification',
      'More distinctive hospitality offer',
    ],
  },
  {
    id: 'doylo',
    title: 'The Doylo / Ready’s Bar',
    headline: 'Bringing competitive socialising into the club environment',
    intro:
      'An entertainment-led hospitality concept designed to increase engagement, broaden appeal and create a more interactive venue experience.',
    image: doyloImg,
    logo: doyloLogo,
    result: 'Experience-led venue positioning',
    stats: [
      { value: '7', label: 'Interactive sports simulations increasing reasons to visit' },
      { value: '3', label: 'Experience layers: sport, dining and games' },
      { value: 'Under-40', label: 'Younger audience relevance through competitive socialising' },
    ],
    challenge:
      'The Doylo had an opportunity to diversify its offer and create a more engaging reason for different audiences to visit, stay and return. The challenge was to move beyond a conventional food and beverage offer into something more interactive and experience-led.',
    role: 'Tully Heard supported the strategic direction behind a competitive socialising concept that could sit naturally within the club environment and appeal to a broader customer base.',
    outcome:
      'Ready’s Bar created a more dynamic entertainment and dining experience, giving the venue a new way to engage guests through live sport, simulated games, casual dining and social activity.',
    proof: [
      'Competitive socialising concept',
      'Broader entertainment offer',
      'More interactive guest experience',
      'Younger audience relevance',
      'Better use of hospitality space',
      'Experience-led venue positioning',
    ],
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
