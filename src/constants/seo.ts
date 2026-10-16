const siteImage = {
  url: '/images/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Kauê de Magalhães - Desenvolvedor Full Stack',
}

/**
 * Open Graph fields every page repeats. A page that sets its own openGraph
 * replaces the layout one entirely, so it must spread this.
 */
export const siteOpenGraph = {
  locale: 'pt_BR',
  siteName: 'Kauê de Magalhães',
  images: [siteImage],
}

/** Same rule as siteOpenGraph, for the twitter card. */
export const siteTwitter = {
  card: 'summary_large_image' as const,
  images: [siteImage.url],
}
