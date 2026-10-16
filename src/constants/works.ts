import type { Work } from '@/types/work'

export const works: Work[] = [
  {
    key: 'meta-por-mapa',
    title: 'Meta por Mapa',
    description:
      'Live Brawl Stars tier list for every map, built from public ranked and trophy match data from Brawl Time Ninja. Shows win rate against the map average, matchups, and picks that adjust as brawlers get banned. Rebuilds itself every 3 hours.',
    url: 'https://kaue-magalhaes.github.io/meta-por-mapa/',
    image: {
      path: '/images/projects/meta-por-mapa.png',
      alt: 'Meta por Mapa - Brawl Stars tier list by map',
    },
  },
  {
    key: 'doafarma',
    title: 'DoaFarma',
    description:
      'Full-stack medication donation platform connecting doctors with patients. Features include activity logging, push notifications, and LGPD-compliant data encryption.',
    image: {
      path: '/images/me.jpg',
      alt: 'DoaFarma - Medication Donation Platform',
    },
  },
  {
    key: 'oneburguer',
    title: 'OneBurguer',
    description:
      'Production-ready e-commerce platform for a burger restaurant. Customer menu with product customization, shopping cart, and admin dashboard for store operations.',
    image: {
      path: '/images/me.jpg',
      alt: 'OneBurguer - Food Ordering Platform',
    },
  },
  {
    key: 'crm-livewire',
    title: 'CRM Sistema',
    description:
      'Customer Relationship Management with reactive UI components using Livewire 3, audit trail tracking, role-based access control, and complete user/customer management.',
    image: {
      path: '/images/me.jpg',
      alt: 'CRM Sistema - Customer Relationship Management',
    },
  },
]
