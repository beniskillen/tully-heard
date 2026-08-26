import {
  Map,
  Landmark,
  Gauge,
  Hammer,
  Spade,
  Users,
  HeartHandshake,
  Coins,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type Specialist = {
  title: string;
  lead: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Strategy & Commercial Planning',
    desc: 'Clear, practical strategies that define where the business is going, where growth will come from and the priorities required to get there.',
    icon: Map,
  },
  {
    title: 'Investment, Feasibility & Financial Modelling',
    desc: 'Independent assessment of major investment decisions, testing commercial viability, capital requirements, staging, funding and projected financial outcomes.',
    icon: Landmark,
  },
  {
    title: 'Venue Performance & Optimisation',
    desc: 'Identifying what is driving performance, where opportunities exist and how venues, assets and operations can deliver stronger commercial outcomes.',
    icon: Gauge,
  },
  {
    title: 'Development & Implementation',
    desc: 'Turning strategy into delivered outcomes, from establishing the commercial brief and development priorities through to implementation and project advisory.',
    icon: Hammer,
  },
  {
    title: 'Gaming Strategy & Optimisation',
    desc: 'Specialist advice on gaming performance, layout, product mix, operational settings and investment priorities to improve commercial performance.',
    icon: Spade,
  },
];

export const specialists: Specialist[] = [
  {
    title: 'Member and consumer research and focus groups',
    lead: 'Norrelle Goldring',
    icon: Users,
  },
  {
    title: 'Leadership and culture',
    lead: 'Brian Dickinson',
    icon: HeartHandshake,
  },
  {
    title: 'EGM brokerage',
    lead: 'Margaret Carew',
    icon: Coins,
  },
];
