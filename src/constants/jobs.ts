import type { Job } from '@/types/job'

export const jobs: Job[] = [
  {
    key: 'freelance',
    role: 'Full Stack Developer (Freelance)',
    period: {
      start: 'July 2024',
      end: 'Present',
    },
  },
  {
    key: 'intern',
    role: 'Full Stack Developer Intern',
    company: {
      name: 'Ministério Publico do Amapá',
      url: 'https://www.mpap.mp.br/',
    },
    location: 'Amapá, Brazil',
    period: {
      start: 'April 2023',
      end: 'May 2024',
      duration: '1 yr 1 mos',
    },
  },
]
