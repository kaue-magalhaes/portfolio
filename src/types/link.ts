export interface BaseLink {
  key: string
  label: string
  href: string
}

// Type aliases for semantic clarity
// These allow future extension if specific fields are needed
export type NavigationLink = BaseLink

export type ContactLink = BaseLink
