import {
  Map,
  Landmark,
  Building2,
  Spade,
  Handshake,
  Scale,
  Users,
  Heart,
  HeartHandshake,
  Coins,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  summary: string;
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
    id: 'strategic-planning',
    title: 'Strategic Planning & Business Performance',
    summary: 'Direction, performance and the priorities that strengthen the business.',
    desc: 'Clear direction for the business: where it is performing, where it should go, and the priorities required to get there.',
    icon: Map,
  },
  {
    id: 'financial-modelling',
    title: 'Financial Modelling & Commercial Feasibility',
    summary: 'Viability, projections, capital requirements and expected returns.',
    desc: 'Independent testing of commercial viability, financial projections, cash flow, capital requirements and expected returns.',
    icon: Landmark,
  },
  {
    id: 'master-planning',
    title: 'Master Planning & Development Strategy',
    summary: 'How a venue should develop, and where investment should go.',
    desc: 'A practical development direction for the venue or precinct, including priorities, staging and how investment should be sequenced.',
    icon: Building2,
  },
  {
    id: 'gaming-strategy',
    title: 'Gaming Strategy & Optimisation',
    summary: 'Gaming performance and the returns from gaming investment.',
    desc: 'Specialist advice on gaming performance, layout, product mix, operational settings and investment priorities.',
    icon: Spade,
  },
  {
    id: 'strategy-implementation',
    title: 'Strategy Implementation & Advisory',
    summary: 'Support to deliver the agreed strategy with management.',
    desc: 'Work alongside management and specialist partners to help deliver the agreed strategy.',
    icon: Handshake,
  },
];

export const specialists: Specialist[] = [
  {
    title: 'Customer Experience & Hospitality Advisory',
    lead: 'Craig Butler',
    icon: Heart,
  },
  {
    title: 'Leadership & Culture',
    lead: 'Brian Dickinson',
    icon: HeartHandshake,
  },
  {
    title: 'Market Research & Consumer Insights',
    lead: 'Norrelle Goldring',
    icon: Users,
  },
  {
    title: 'EGM Brokerage',
    lead: 'Margaret Carew',
    icon: Coins,
  },
  {
    title: 'Governance & Amalgamations',
    lead: 'Peter McLean',
    icon: Scale,
  },
];
