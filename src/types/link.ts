export interface BaseLink {
  key: string
  label: string
  href: string
}

export interface NavigationLink extends BaseLink {}

export interface ContactLink extends BaseLink {}
