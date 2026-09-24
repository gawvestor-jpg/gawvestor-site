// ═══════════════════════════════════════════════════════════════════════
//  FEATURED CONTENT — the only file you edit to change the homepage's
//  "Recent breakdowns" section.
//
//  HOW TO ADD A TIKTOK (or YouTube/Instagram piece):
//
//  1. Take a vertical screenshot of the video (a frame that looks good —
//     any roughly-vertical crop works) and save it into:
//         src/assets/featured/
//     e.g. src/assets/featured/market-dip.jpg
//
//  2. Import it below with the others, like:
//         import marketDip from '../assets/featured/market-dip.jpg'
//
//  3. Add (or edit) an entry in FEATURED_ITEMS:
//         {
//           category: 'Markets',
//           title: 'Why the market dipped this week',
//           platform: 'TikTok',
//           href: 'https://www.tiktok.com/@gawvestor/video/1234567890',
//           thumbnail: marketDip,
//         },
//
//  4. Save. The site rebuilds automatically (dev server) or on the next
//     build. That's it — no component or layout changes ever needed.
//
//  NOTES
//  • The first three entries are shown, newest/best first — reorder by
//    moving entries up or down.
//  • `thumbnail` is optional: entries without one render a designed
//    placeholder, so partial swaps look fine.
//  • `description` is optional: one short line shown under the title.
//  • `platform` must be exactly 'TikTok', 'YouTube', or 'Instagram'
//    (TypeScript will complain if it's misspelled).
// ═══════════════════════════════════════════════════════════════════════

export type FeaturedItem = {
  category: string
  /** The hook — one line, written like a headline. */
  title: string
  platform: 'TikTok' | 'YouTube' | 'Instagram'
  /** Direct link to the video/post. */
  href: string
  /** Optional image imported above (see the guide at the top). */
  thumbnail?: string
  /** Optional one-line description shown under the title. */
  description?: string
}

export const FEATURED_ITEMS: FeaturedItem[] = [
  // ↓↓↓ Replace these placeholders with real content ↓↓↓
  {
    category: 'Markets',
    title: 'Placeholder — What this week’s market move actually means',
    platform: 'TikTok',
    href: 'https://www.tiktok.com/@gawvestor',
  },
  {
    category: 'Technology',
    title: 'Placeholder — The chip supply chain, explained in 60 seconds',
    platform: 'TikTok',
    href: 'https://www.tiktok.com/@gawvestor',
  },
  {
    category: 'Personal Finance',
    title: 'Placeholder — The first account to open before you invest',
    platform: 'YouTube',
    href: 'https://www.youtube.com/@gawvestor',
  },
]

// Section header copy.
export const FEATURED = {
  eyebrow: 'Featured',
  heading: 'Recent breakdowns',
  items: FEATURED_ITEMS,
}
