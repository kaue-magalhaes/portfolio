/**
 * Animation Constants
 *
 * Centralized animation values for consistency across the application.
 * Based on Material Design motion guidelines:
 * - Fast: 0.1-0.2s (microinteractions)
 * - Normal: 0.2-0.4s (transitions)
 * - Slow: 0.4-0.6s (page transitions)
 */

export const ANIMATION_DURATION = {
  FAST: 0.15,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const

export const ANIMATION_DELAY = {
  NONE: 0,
  SHORT: 0.1,
  MEDIUM: 0.2,
} as const

export const ANIMATION_OFFSET = {
  SMALL: 10,
  MEDIUM: 20,
  LARGE: 40,
} as const

export const ANIMATION_EASING = {
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
  EASE_OUT: [0, 0, 0.2, 1],
  EASE_IN: [0.4, 0, 1, 1],
} as const

export const wavingHandAnimation = {
  rotate: [0, 14, -8, 14, -4, 10, 0],
  transition: {
    duration: 2.5,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: 'loop' as const,
    ease: 'linear' as const,
  },
}
