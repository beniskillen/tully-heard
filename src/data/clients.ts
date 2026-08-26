export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  /** Reverse / light marks that need a dark plate on the light ticker. */
  onDark?: boolean;
};

/**
 * John's approved client list (email of 19 Aug 2026 / Notion task).
 * Kept in full even when the ticker uses a representative mix.
 */
export const approvedClientNames = [
  'The Lions (AFL)',
  'Cabra Club Resort',
  'Bankstown Sports',
  'Gosford RSL',
  "Chatswood RSL, including Yogi's",
  "Taffey's / The Oaks Hotel Neutral Bay",
  'Mulwala Water Ski Club',
  'Dubbo Golf Club',
  'Corrimal RSL',
  'Ettalong Diggers',
  'Doylo Lifestyle Group',
  'The Coast Golf Club',
  'Ballina RSL',
  'Broken Hill Musicians Club',
  'South Tweed Sports',
  'Toukley RSL',
  'Club Sapphire',
  'East Maitland Bowling Club',
  'St Georges Basin Country Club',
  'Corowa RSL',
  'Kiama Golf Club',
  'Twin Towns',
  'Wests Ashfield',
  'Long Reef Golf Club',
  'Narromine USMC',
  'Souths Juniors',
  'Strathfield Sports',
  'Karuah Ex-Services',
  'Club Mosman',
  'Pottsville Sports',
  'Pittwater RSL',
  'Manly Leagues Club',
  'Greta Workers',
  'West Wyalong Ex-Services',
  'Easts Leagues Club',
  'Mollymook Golf Club',
  'Briars Sports',
  'Milton Ulladulla Ex Servos',
  'Lightning Ridge Bowling Club',
  'Norths Leagues',
  'Bondi Icebergs Club',
  'Southern Cross Club Canberra',
  'Fraternity Club',
  'Vikings Group Canberra',
  'Moorebank Sports',
  'Belmont 16s',
  'Parramatta Leagues Club',
  'Burwood RSL',
  'Club Mudgee',
  'Brothers Cairns',
  'ClubsNSW, Corporate Partner',
  'CMAA, Sponsorship',
] as const;

/**
 * Representative mix for the homepage ticker.
 * Official-site logos only; names follow John's approved punctuation.
 * Excluded from the strip (still on the full list above):
 * missing official marks, ambiguous sourcing, unusable files, and the Cabra
 * file which resolved to a Novotel wordmark rather than the club mark.
 */
export const tickerClients: ClientLogo[] = [
  { id: 'lions-afl', name: 'The Lions (AFL)', src: '/clients/lions-afl.svg' },
  { id: 'bankstown-sports', name: 'Bankstown Sports', src: '/clients/bankstown-sports.webp' },
  { id: 'gosford-rsl', name: 'Gosford RSL', src: '/clients/gosford-rsl.svg' },
  { id: 'chatswood-rsl', name: "Chatswood RSL, including Yogi's", src: '/clients/chatswood-rsl.webp' },
  { id: 'oaks-taffeys', name: "Taffey's / The Oaks Hotel Neutral Bay", src: '/clients/oaks-taffeys.webp' },
  { id: 'mulwala-water-ski-club', name: 'Mulwala Water Ski Club', src: '/clients/mulwala-water-ski-club.webp' },
  { id: 'corrimal-rsl', name: 'Corrimal RSL', src: '/clients/corrimal-rsl.webp' },
  { id: 'ettalong-diggers', name: 'Ettalong Diggers', src: '/clients/ettalong-diggers.webp' },
  { id: 'broken-hill-musicians-club', name: 'Broken Hill Musicians Club', src: '/clients/broken-hill-musicians-club.webp' },
  { id: 'toukley-rsl', name: 'Toukley RSL', src: '/clients/toukley-rsl.webp' },
  { id: 'club-sapphire', name: 'Club Sapphire', src: '/clients/club-sapphire.webp' },
  { id: 'corowa-rsl', name: 'Corowa RSL', src: '/clients/corowa-rsl.webp' },
  { id: 'kiama-golf-club', name: 'Kiama Golf Club', src: '/clients/kiama-golf-club.webp', onDark: true },
  { id: 'long-reef-golf-club', name: 'Long Reef Golf Club', src: '/clients/long-reef-golf-club.webp' },
  { id: 'narromine-usmc', name: 'Narromine USMC', src: '/clients/narromine-usmc.webp' },
  { id: 'souths-juniors', name: 'Souths Juniors', src: '/clients/souths-juniors.webp' },
  { id: 'strathfield-sports', name: 'Strathfield Sports', src: '/clients/strathfield-sports.webp' },
  { id: 'karuah-ex-services', name: 'Karuah Ex-Services', src: '/clients/karuah-ex-services.webp' },
  { id: 'club-mosman', name: 'Club Mosman', src: '/clients/club-mosman.svg' },
  { id: 'pottsville-sports', name: 'Pottsville Sports', src: '/clients/pottsville-sports.webp' },
  { id: 'pittwater-rsl', name: 'Pittwater RSL', src: '/clients/pittwater-rsl.svg' },
  { id: 'manly-leagues-club', name: 'Manly Leagues Club', src: '/clients/manly-leagues-club.webp' },
  { id: 'mollymook-golf-club', name: 'Mollymook Golf Club', src: '/clients/mollymook-golf-club.webp' },
  { id: 'briars-sports', name: 'Briars Sports', src: '/clients/briars-sports.webp' },
  { id: 'milton-ulladulla-ex-servos', name: 'Milton Ulladulla Ex Servos', src: '/clients/milton-ulladulla-ex-servos.webp' },
  { id: 'lightning-ridge-bowling-club', name: 'Lightning Ridge Bowling Club', src: '/clients/lightning-ridge-bowling-club.webp' },
  { id: 'norths-leagues', name: 'Norths Leagues', src: '/clients/norths-leagues.svg' },
  { id: 'bondi-icebergs-club', name: 'Bondi Icebergs Club', src: '/clients/bondi-icebergs-club.webp' },
  { id: 'southern-cross-club-canberra', name: 'Southern Cross Club Canberra', src: '/clients/southern-cross-club-canberra.svg', onDark: true },
  { id: 'fraternity-club', name: 'Fraternity Club', src: '/clients/fraternity-club.webp' },
  { id: 'vikings-group-canberra', name: 'Vikings Group Canberra', src: '/clients/vikings-group-canberra.webp' },
  { id: 'moorebank-sports', name: 'Moorebank Sports', src: '/clients/moorebank-sports.webp' },
  { id: 'belmont-16s', name: 'Belmont 16s', src: '/clients/belmont-16s.webp' },
  { id: 'parramatta-leagues-club', name: 'Parramatta Leagues Club', src: '/clients/parramatta-leagues-club.webp' },
  { id: 'burwood-rsl', name: 'Burwood RSL', src: '/clients/burwood-rsl.webp' },
  { id: 'brothers-cairns', name: 'Brothers Cairns', src: '/clients/brothers-cairns.webp' },
  { id: 'clubsnsw', name: 'ClubsNSW, Corporate Partner', src: '/clients/clubsnsw.webp' },
  { id: 'cmaa', name: 'CMAA, Sponsorship', src: '/clients/cmaa.svg' },
];
