// ═══════════════════════════════════════════════════════════════════════
//  MEDIA KIT + PRESS: the only file to edit when numbers change.
//  Every number here was read off the live profile on the date noted.
//  Update the number AND the date together so the kit never goes stale.
// ═══════════════════════════════════════════════════════════════════════

export const PRESS = {
  outlet: 'Reuters',
  headline: 'Ahead of the US midterms, Gen Z investors are making portfolio changes',
  author: 'Hani Richter',
  date: 'Oct 22, 2026',
  href: 'https://www.reuters.com/markets/on-the-money/ahead-us-midterms-gen-z-investors-are-making-portfolio-changes-2026-10-22/',
  blurb: 'Featured in Reuters on how Gen Z investors are handling the midterms.',
} as const

// Read from each public profile on Oct 28, 2026.
export const METRICS_AS_OF = 'Oct 2026'

export const PLATFORMS = [
  { label: 'TikTok', handle: '@gawvestor', followers: '24.1K', extra: '218K likes', href: 'https://www.tiktok.com/@gawvestor' },
  { label: 'Instagram', handle: '@gawvestor', followers: '1.5K', extra: '36 posts', href: 'https://www.instagram.com/gawvestor' },
  { label: 'YouTube', handle: '@gawvestor', followers: '324', extra: '74 Shorts', href: 'https://www.youtube.com/@gawvestor' },
] as const

// Headline stats. Keep these sums honest: 24.1K + 1.5K + 324 ≈ 26K.
export const HEADLINE_STATS = [
  { value: '26K+', label: 'Followers across platforms' },
  { value: '1.9M+', label: 'Views on top 8 videos' },
  { value: '543K', label: 'Views on best video' },
  { value: '218K', label: 'TikTok likes' },
] as const

// From TikTok Studio analytics, Aug 2026.
export const AUDIENCE = [
  { value: '18–24', label: 'Largest age group (~45%)' },
  { value: '~70%+', label: 'Male audience' },
  { value: 'US', label: 'Core market, plus tech-hub search traffic' },
] as const

// TikTok profile sorted by Popular, Oct 28, 2026.
export const TOP_VIDEOS = [
  { title: 'Top 3 stocks to watch in August', views: '543.2K', category: 'Stock picks', href: 'https://www.tiktok.com/@gawvestor/video/7668719382452833549' },
  { title: 'Top chip stocks to watch', views: '513.7K', category: 'Semiconductors', href: 'https://www.tiktok.com/@gawvestor/video/7651348275534040334' },
  { title: '3 stocks while the market stays resilient', views: '206.6K', category: 'Markets', href: 'https://www.tiktok.com/@gawvestor/video/7660538904814128397' },
  { title: 'Small caps for your watchlist', views: '198.5K', category: 'Stock picks', href: 'https://www.tiktok.com/@gawvestor/video/7654358396480670989' },
  { title: 'Solid picks for tomorrow', views: '148.1K', category: 'Stock picks', href: 'https://www.tiktok.com/@gawvestor/video/7673152300721917198' },
  { title: 'Top 3 credit cards', views: '125.4K', category: 'Personal finance', href: 'https://www.tiktok.com/@gawvestor/video/7669807839304633614' },
] as const

export const PARTNERS = ['Coinbase Wallet', 'Money.com', 'Blossom', 'Freeport Markets'] as const

export const OFFERINGS = [
  { title: 'Integrated TikTok / Reel', body: 'Your product folded into a normal Gawvestor video, so it reads like content, not an ad.' },
  { title: 'Dedicated video', body: 'A full walkthrough or screen-recorded demo of your app.' },
  { title: 'Link-in-bio placement', body: 'A card on gawvestor.com, where my traffic from TikTok and Instagram lands.' },
] as const
