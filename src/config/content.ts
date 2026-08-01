export const SITE = {
  name: 'Gawvestor',
} as const

export const HERO = {
  name: 'Gawvestor',
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

export const DISCORD_LINK = {
  label: 'Discord',
  handle: 'Chat live with investors',
  description: 'Talk markets, ask questions, and connect with other investors.',
  href: '#',
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
    name: 'Webull',
    cta: 'Commission-free trades',
    description: 'Commission-free platform I use to track and execute trades.',
    href: 'https://www.webull.com/',
  },
  {
    name: 'TradingView',
    cta: 'Free real-time charts',
    description: 'Real-time charts and market analysis I use to track stocks and trends.',
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

export const NEWSLETTER = {
  heading: 'Stay in the loop',
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
  lastUpdated: '[Date]',
  reviewBanner:
    'PLACEHOLDER TEXT. Should be reviewed by an attorney before publication, especially given social media/FTC disclosure requirements for sponsored content.',
  disclaimer: [
    'Brandon Gaw is a content creator and is not a registered investment advisor, broker-dealer, or financial planner.',
    'Content on this site and associated social media is for educational and entertainment purposes only and does not constitute financial, investment, tax, or legal advice.',
    'Viewers should consult a licensed professional before making investment decisions.',
    'Any stocks, companies, or investments mentioned are not recommendations to buy or sell.',
  ],
  privacy: [
    {
      heading: 'Information we collect',
      body: 'When you fill out the contact form or subscribe to the newsletter on this site, we collect the information you provide directly, such as your name, email address, phone number, and message content. We do not collect payment information, and we do not knowingly collect information from children under 13.',
    },
    {
      heading: 'Cookies',
      body: 'This site may use cookies or similar local storage technologies to remember basic preferences and to understand how visitors use the site. You can disable cookies in your browser settings; doing so may affect some site functionality.',
    },
    {
      heading: 'How we use your information',
      body: 'Information submitted through forms on this site is used solely to respond to your inquiry, send the newsletter you signed up for, or evaluate media and partnership requests. We do not sell your personal information to third parties.',
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
