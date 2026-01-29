import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from './page'

// Mock motion/react
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
    span: ({
      children,
      style,
    }: {
      children: React.ReactNode
      style?: React.CSSProperties
    }) => <span style={style}>{children}</span>,
  },
}))

// Mock CommandBarContext
vi.mock('@/contexts/CommandBarContext', () => ({
  useCommandBar: () => ({
    isOpen: false,
    toggleCommandBar: vi.fn(),
    closeCommandBar: vi.fn(),
  }),
}))

describe('Home Page', () => {
  it('should render greeting with name', () => {
    render(<Home />)

    expect(screen.getByText(/Hi, I'm Kauê/)).toBeInTheDocument()
  })

  it('should render waving hand emoji', () => {
    render(<Home />)

    expect(screen.getByText('👋')).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<Home />)

    expect(
      screen.getByText(
        /a full-stack developer with a passion for creating solutions/
      )
    ).toBeInTheDocument()
  })

  it('should render command bar button', () => {
    render(<Home />)

    expect(screen.getByText('Press')).toBeInTheDocument()
    expect(screen.getByText('Ctrl')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })

  it('should have main heading as h1', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Hi, I'm Kauê/)
  })
})
