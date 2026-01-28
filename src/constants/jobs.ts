import type { Job } from '@/types/job'

export const jobs: Job[] = [
  {
    key: 'proesc',
    role: 'Full Stack Developer Junior',
    company: {
      name: 'Proesc',
      url: 'https://proesc.com/',
    },
    location: 'Remote, Brazil',
    period: {
      start: 'April 2025',
      end: 'Present',
    },
  },
  {
    key: 'freelance',
    role: 'Full Stack Developer (Freelance)',
    period: {
      start: 'July 2024',
      end: 'March 2025',
      duration: '9 mos',
    },
  },
  {
    key: 'intern',
    role: 'Full Stack Developer Intern',
    company: {
      name: 'Ministério Público do Estado do Amapá',
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
