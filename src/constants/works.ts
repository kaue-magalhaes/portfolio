import type { Work } from '@/types/work'

export const works: Work[] = [
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
