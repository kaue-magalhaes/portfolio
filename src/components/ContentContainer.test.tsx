import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ContentContainer from './ContentContainer'

describe('ContentContainer', () => {
  it('should render children', () => {
    render(
      <ContentContainer>
        <p>Test content</p>
      </ContentContainer>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <ContentContainer className="custom-class">
        <p>Content</p>
      </ContentContainer>
    )

    const section = container.querySelector('section')
    expect(section).toHaveClass('custom-class')
  })

  it('should have default layout classes', () => {
    const { container } = render(
      <ContentContainer>
        <p>Content</p>
      </ContentContainer>
    )

    const section = container.querySelector('section')
    expect(section).toHaveClass('flex', 'flex-col', 'justify-center', 'px-4')
  })

  it('should wrap content in max-width container', () => {
    const { container } = render(
      <ContentContainer>
        <p>Content</p>
      </ContentContainer>
    )

    const innerDiv = container.querySelector('section > div')
    expect(innerDiv).toHaveClass('max-w-4xl', 'mx-auto', 'w-full')
  })
})
