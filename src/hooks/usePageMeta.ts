import { useEffect } from 'react'

const DEFAULT_TITLE = 'Gawvestor | Stocks, Tech & Personal Finance'
const DEFAULT_DESCRIPTION =
  'Gawvestor breaks down markets, investing, tech supply chains, and personal finance into clear, jargon-free stories for young adults. Follow along or get in touch.'

// This is a client-rendered SPA, so per-route titles/descriptions are set via
// the DOM. Crawlers that don't run JS still see the defaults from index.html.
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Gawvestor` : DEFAULT_TITLE

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) {
      meta.content = description ?? DEFAULT_DESCRIPTION
    }

    return () => {
      document.title = DEFAULT_TITLE
      if (meta) {
        meta.content = DEFAULT_DESCRIPTION
      }
    }
  }, [title, description])
}
