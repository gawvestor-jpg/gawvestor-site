import { useEffect, useState } from 'react'

export type Stats = {
  tiktok: number
  tiktokLikes: number
  instagram: number
  youtube: number
  total: number
  asOf: string
}

// Shown instantly and used if /api/stats can't be reached. Keep in sync with
// FALLBACK in functions/api/stats.js.
export const STATIC_STATS: Stats = {
  tiktok: 24100,
  tiktokLikes: 218000,
  instagram: 1539,
  youtube: 324,
  total: 24100 + 1539 + 324,
  asOf: '2026-10-28',
}

const SESSION_KEY = 'gw-stats'

/** Always rounds DOWN so a public number is never higher than the real one. 24,960 -> "24K+". */
export function floorK(n: number): string {
  if (n < 1000) return n.toLocaleString('en-US')
  if (n < 1_000_000) return `${Math.floor(n / 1000)}K+`
  return `${Math.floor(n / 100_000) / 10}M+`
}

/** Precise-ish display for a single platform tile: 24.1K, 1.5K, 324. Rounds down. */
export function compact(n: number): string {
  if (n < 1000) return n.toLocaleString('en-US')
  if (n < 1_000_000) return `${Math.floor(n / 100) / 10}K`
  return `${Math.floor(n / 100_000) / 10}M`
}

function readSession(): Stats | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    return raw ? (JSON.parse(raw) as Stats) : null
  } catch {
    return null
  }
}

export function useStats(): Stats {
  const [stats, setStats] = useState<Stats>(() => readSession() ?? STATIC_STATS)

  useEffect(() => {
    let cancelled = false
    fetch('/api/stats')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data || typeof data.tiktok !== 'number') return
        const next: Stats = {
          tiktok: data.tiktok,
          tiktokLikes: data.tiktokLikes ?? STATIC_STATS.tiktokLikes,
          instagram: data.instagram ?? STATIC_STATS.instagram,
          youtube: data.youtube ?? STATIC_STATS.youtube,
          total: data.total ?? data.tiktok + (data.instagram ?? 0) + (data.youtube ?? 0),
          asOf: data.asOf ?? STATIC_STATS.asOf,
        }
        setStats(next)
        try {
          sessionStorage.setItem(SESSION_KEY, JSON.stringify(next))
        } catch {
          /* storage unavailable */
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return stats
}
