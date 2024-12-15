export interface Job {
  key: string
  role: string
  company?: {
    name: string
    url?: string
  }
  location?: string
  period: {
    start: string
    end: string
    duration?: string
  }
}
