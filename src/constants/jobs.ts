import type { Job } from '@/types/job'

export const jobs: Job[] = [
  {
    key: 'proesc',
    role: 'Desenvolvedor Full Stack Júnior',
    company: {
      name: 'Proesc',
      url: 'https://proesc.com/',
    },
    location: 'Amapá, Brasil (Híbrido)',
    period: {
      start: 'Abril de 2025',
      end: 'Atual',
    },
  },
  {
    key: 'freelance',
    role: 'Desenvolvedor Full Stack (Freelancer)',
    period: {
      start: 'Julho de 2024',
      end: 'Março de 2025',
      duration: '9 meses',
    },
  },
  {
    key: 'intern',
    role: 'Estagiário de Desenvolvimento Full Stack',
    company: {
      name: 'Ministério Público do Estado do Amapá',
      url: 'https://www.mpap.mp.br/',
    },
    location: 'Amapá, Brasil',
    period: {
      start: 'Abril de 2023',
      end: 'Maio de 2024',
      duration: '1 ano e 1 mês',
    },
  },
]
