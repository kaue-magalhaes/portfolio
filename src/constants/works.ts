import type { Work } from '@/types/work'

export const works: Work[] = [
  {
    key: 'meta-por-mapa',
    title: 'Meta por Mapa',
    description:
      'Tier list de Brawl Stars para cada mapa, montada com dados públicos de partidas ranqueadas e de troféus do Brawl Time Ninja. Mostra a taxa de vitória comparada com a média do mapa, os confrontos e as escolhas que se ajustam conforme os personagens são banidos. Se atualiza sozinha a cada 3 horas.',
    url: 'https://kaue-magalhaes.github.io/meta-por-mapa/',
    image: {
      path: '/images/projects/meta-por-mapa.png',
      alt: 'Meta por Mapa: tier list de Brawl Stars por mapa',
    },
  },
  {
    key: 'doafarma',
    title: 'DoaFarma',
    description:
      'Plataforma full-stack de doação de medicamentos que conecta médicos e pacientes. Tem registro de atividades, notificações push e criptografia de dados de acordo com a LGPD.',
    image: {
      path: '/images/me.jpg',
      alt: 'DoaFarma: plataforma de doação de medicamentos',
    },
  },
  {
    key: 'oneburguer',
    title: 'OneBurguer',
    description:
      'Plataforma de pedidos em produção para uma hamburgueria. Cardápio com personalização de produtos, carrinho e painel administrativo para a operação da loja.',
    image: {
      path: '/images/me.jpg',
      alt: 'OneBurguer: plataforma de pedidos de comida',
    },
  },
  {
    key: 'crm-livewire',
    title: 'Sistema CRM',
    description:
      'Sistema de gestão de relacionamento com clientes, com componentes reativos em Livewire 3, trilha de auditoria, controle de acesso por papel e gestão completa de usuários e clientes.',
    image: {
      path: '/images/me.jpg',
      alt: 'Sistema CRM: gestão de relacionamento com clientes',
    },
  },
]
