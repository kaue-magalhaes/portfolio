import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AnimationGroup } from '@/contexts/AnimationGroupContext'
import AnimationContainer from './AnimationContainer'

// Mock motion/react to avoid animation complexities in tests
vi.mock('motion/react', () => ({
  motion: {
    div: ({
      children,
      className,
      onHoverStart,
      onHoverEnd,
      ...props
    }: {
      children: React.ReactNode
      className?: string
      onHoverStart?: () => void
      onHoverEnd?: () => void
    }) => (
      // biome-ignore lint/a11y/noStaticElementInteractions: mock component for testing
      <div
        className={className}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        data-testid="motion-div"
        {...props}
      >
        {children}
      </div>
    ),
  },
}))

describe('AnimationContainer', () => {
  describe('without AnimationGroup (fallback to local state)', () => {
    it('should render children', () => {
      render(
        <AnimationContainer itemKey="test-item" animationId="test-group">
          <p>Test content</p>
        </AnimationContainer>
      )

      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should apply custom className', () => {
      render(
        <AnimationContainer
          itemKey="test-item"
          animationId="test-group"
          className="custom-class"
        >
          <p>Content</p>
        </AnimationContainer>
      )

      const container = screen.getByTestId('motion-div')
      expect(container).toHaveClass('custom-class')
    })

    it('should have relative positioning', () => {
      render(
        <AnimationContainer itemKey="test-item" animationId="test-group">
          <p>Content</p>
        </AnimationContainer>
      )

      const container = screen.getByTestId('motion-div')
      expect(container).toHaveClass('relative')
    })

    it('should show background on hover', () => {
      const { container } = render(
        <AnimationContainer itemKey="test-item" animationId="test-group">
          <p>Content</p>
        </AnimationContainer>
      )

      const motionDiv = screen.getByTestId('motion-div')

      // Before hover - only the container motion div
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(1)

      // Trigger hover
      fireEvent.mouseEnter(motionDiv)

      // After hover - background element should appear (mocked as another div)
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(2)
    })
  })

  describe('with AnimationGroup (shared state)', () => {
    it('should share hover state between siblings', () => {
      const { container } = render(
        <AnimationGroup>
          <AnimationContainer itemKey="item-1" animationId="test-group">
            <p>Item 1</p>
          </AnimationContainer>
          <AnimationContainer itemKey="item-2" animationId="test-group">
            <p>Item 2</p>
          </AnimationContainer>
        </AnimationGroup>
      )

      const motionDivs = container.querySelectorAll(
        '[data-testid="motion-div"]'
      )
      expect(motionDivs).toHaveLength(2)

      // Hover first item
      fireEvent.mouseEnter(motionDivs[0])

      // Should show background on first item only
      // (3 divs total: 2 containers + 1 background)
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(3)
    })

    it('should move highlight when hovering different items', () => {
      const { container } = render(
        <AnimationGroup>
          <AnimationContainer itemKey="item-1" animationId="test-group">
            <p>Item 1</p>
          </AnimationContainer>
          <AnimationContainer itemKey="item-2" animationId="test-group">
            <p>Item 2</p>
          </AnimationContainer>
        </AnimationGroup>
      )

      const motionDivs = container.querySelectorAll(
        '[data-testid="motion-div"]'
      )

      // Hover first item
      fireEvent.mouseEnter(motionDivs[0])
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(3)

      // Move to second item
      fireEvent.mouseLeave(motionDivs[0])
      fireEvent.mouseEnter(motionDivs[1])

      // Still should have 3 divs (highlight moved, not duplicated)
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(3)
    })

    it('should remove highlight when mouse leaves all items', () => {
      const { container } = render(
        <AnimationGroup>
          <AnimationContainer itemKey="item-1" animationId="test-group">
            <p>Item 1</p>
          </AnimationContainer>
        </AnimationGroup>
      )

      const motionDiv = screen.getByTestId('motion-div')

      // Hover
      fireEvent.mouseEnter(motionDiv)
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(2)

      // Leave
      fireEvent.mouseLeave(motionDiv)
      expect(
        container.querySelectorAll('[data-testid="motion-div"]')
      ).toHaveLength(1)
    })
  })
})
