export const SITE = {
  name: 'Gawvestor',
} as const

export const HERO = {
  name: 'Gawvestor',
  tagline: 'Stocks, Tech & Personal Finance',
} as const

export const SOCIAL_LINKS = [
  {
    label: 'TikTok',
    handle: '@gawvestor',
    hook: 'Stock picks & explainers',
    description: 'Stock picks and investing explainers',
    href: 'https://www.tiktok.com/@gawvestor',
  },
  {
    label: 'Instagram',
    handle: '@gawvestor',
    hook: 'Behind-the-scenes content',
    description: 'Behind-the-scenes and short-form breakdowns',
    href: 'https://www.instagram.com/gawvestor',
  },
  {
    label: 'YouTube',
    handle: '@gawvestor',
    hook: 'In-depth video breakdowns',
    description: 'Long-form videos and deeper dives',
    href: 'https://www.youtube.com/@gawvestor',
  },
] as const

// The only Discord tile on the site. It points at the Wealth Collective
// community, not a server we run, so the affiliate disclosure in the
// description is the sole disclosure — keep it in that copy.
export const AFFILIATE_COMMUNITY = {
  label: 'Discord',
  description:
    "A trading community I'm part of — trade alerts, market chat, and analysis. (Paid membership, affiliate link.)",
  href: 'https://discord.gg/dHwmR6Ktw2',
} as const

export const HELP_LINKS = [
  {
    label: 'Contact',
    hook: 'General questions',
    description: 'I personally respond, reach out with anything.',
  },
  {
    label: 'Brand Partnerships',
    hook: 'Brand & Outreach',
    description:
      'Sponsored content, affiliate partnerships, and collaborations relevant to finance, investing, and tech.',
  },
] as const

export const TOOLS = [
  {
    name: 'TradingView',
    cta: 'Free real-time charts',
    // Lead sentence kept short so the affiliate disclosure always fits on the tile.
    description:
      'Real-time charts I use to track stocks and trends. Affiliate link — I may earn a commission.',
    href: 'https://www.tradingview.com/?aff_id=168754',
  },
] as const

export const CONTACT = {
  heading: 'Get in touch',
  subheading:
    "Have a question, a story idea, or a partnership in mind? I'd love to hear from you.",
  investmentInterests: [
    'Market trends & commentary',
    'Personal investing basics',
    'Brand partnership',
    'Media / press',
    'Other',
  ],
} as const

export const FOOTER = {
  email: 'hello@gawvestor.com',
  copyrightName: 'Gawvestor',
  disclaimerNote:
    "Content on this site is for educational and entertainment purposes only and isn't financial advice.",
  links: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Not Financial Advice', href: '/disclaimer' },
  ],
} as const

export const LEGAL = {
  // NOTE (internal, not shown on site): this copy has not been reviewed by an
  // attorney. It's reasonable boilerplate for an educational finance creator,
  // but get it reviewed once paid 1:1 calls and brand deals are running —
  // especially the FTC/SEC/FINRA-facing disclosure language.
  lastUpdated: 'August 12, 2026',
  disclaimer: [
    'Brandon Gaw is a content creator and is not a registered investment advisor, broker-dealer, or financial planner.',
    'Content on this site and associated social media is for educational and entertainment purposes only and does not constitute financial, investment, tax, or legal advice.',
    'Viewers should consult a licensed professional before making investment decisions.',
    'Any stocks, companies, or investments mentioned are not recommendations to buy or sell.',
    'Paid 1:1 calls booked through this site are educational conversations only. They do not constitute personalized investment advice and are not a substitute for consulting a licensed financial professional.',
    'Some links on this site (such as TradingView and the Discord trading community) are affiliate links. Brandon Gaw may earn a commission if you sign up through them, at no extra cost to you.',
    'The Discord community linked from this site is a paid third-party community operated by an independent partner, not by Brandon Gaw. Brandon Gaw does not run that server, and does not control its content, alerts, or membership terms.',
  ],
  privacy: [
    {
      heading: 'Information we collect',
      body: 'When you fill out the contact form on this site, we collect the information you provide directly, such as your name, email address, phone number, and message content. We do not collect payment information, and we do not knowingly collect information from children under 13.',
    },
    {
      heading: 'Cookies',
      body: 'This site may use cookies or similar local storage technologies to remember basic preferences and to understand how visitors use the site. You can disable cookies in your browser settings; doing so may affect some site functionality.',
    },
    {
      heading: 'How we use your information',
      body: 'Information submitted through forms on this site is used solely to respond to your inquiry or evaluate media and partnership requests. We do not sell your personal information to third parties.',
    },
    {
      heading: 'Data requests & contact',
      body: `To request access to, correction of, or deletion of your personal data, contact ${FOOTER.email}. We will respond to verified requests within a reasonable time as required by applicable law.`,
    },
  ],
  terms: [
    {
      heading: 'Acceptance of terms',
      body: 'By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.',
    },
    {
      heading: 'No investment advice',
      body: 'Content on this site is provided for educational and entertainment purposes only and does not constitute financial, investment, tax, or legal advice. See the Disclaimer page for more detail.',
    },
    {
      heading: 'Limitation of liability',
      body: 'To the fullest extent permitted by law, Brandon Gaw shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on any content published on it.',
    },
    {
      heading: 'Changes to these terms',
      body: 'These Terms may be updated from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.',
    },
    {
      heading: 'Contact',
      body: `Questions about these Terms can be sent to ${FOOTER.email}.`,
    },
  ],
} as const
