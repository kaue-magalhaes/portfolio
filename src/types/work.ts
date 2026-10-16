export interface Work {
  key: string
  title: string
  description: string
  url?: string
  image: {
    path: string
    alt: string
  }
}
