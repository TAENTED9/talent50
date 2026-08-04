export interface GroupLink { label: string; value: string; }
export interface StatItem { value: string; text: string; }

export const groupLinks: GroupLink[] = [
  { label: 'Teams', value: 'Live' },
  { label: 'Media', value: 'Live' },
  { label: 'Tech', value: 'Live' },
];

export const marketStats: StatItem[] = [
  { value: '$12B', text: 'African sports market today, projected to surpass $20B by 2035.' },
  { value: '600M+', text: 'Sports fans across the continent.' },
  { value: '88%', text: 'Mobile phone adoptation by 2030, creating a fully matured, digital-native sports community.' },
  { value: '<2%', text: 'Of athlete IP currently monetised.' },
];

export const targetItems: StatItem[] = [
  { value: '500+', text: 'Youth athletes on structured pathways' },
  { value: '5', text: 'Academy & league hubs' },
  { value: '1000+', text: 'Direct & indirect jobs created' },
];