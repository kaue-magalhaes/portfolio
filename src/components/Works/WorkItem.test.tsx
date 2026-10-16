import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { Work } from '@/types/work'
import WorkItem from './WorkItem'

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // biome-ignore lint/performance/noImgElement: mock component for testing
    <img src={src} alt={alt} />
  ),
}))

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

const work: Work = {
  key: 'meta-por-mapa',
  title: 'Meta por Mapa',
  description: 'Tier list por mapa.',
  image: { path: '/images/projects/meta-por-mapa.png', alt: 'Meta por Mapa' },
}

describe('WorkItem', () => {
  it('links to the story when the project has a post', () => {
    render(<WorkItem work={work} storyHref="/blog/como-montei" />)

    expect(screen.getByRole('link', { name: /Como eu fiz/ })).toHaveAttribute(
      'href',
      '/blog/como-montei'
    )
  })

  it('shows no story link when the project has no post', () => {
    render(<WorkItem work={work} />)

    expect(
      screen.queryByRole('link', { name: /Como eu fiz/ })
    ).not.toBeInTheDocument()
  })
})
