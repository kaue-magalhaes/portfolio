# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o Projeto

**Portfólio pessoal do Kaue** - um site profissional para impressionar recrutadores e empresas. O objetivo é fazer quem visita pensar: *"Que site foda, quero contratar esse cara."*

Este não é um portfólio genérico. É uma vitrine completa com:
- Histórico profissional e projetos entregues
- Estudos de caso detalhados (planejado)
- Previews interativos de funcionalidades (planejado)
- Blog técnico para artigos (planejado)

**O site ficará no ar permanentemente e será constantemente evoluído.**

## Documentação Detalhada

Antes de implementar qualquer feature, leia os documentos em `.claude/knowledge/`:

| Documento | Conteúdo |
|-----------|----------|
| **VISION.md** | Visão do produto, objetivos, público-alvo |
| **ARCHITECTURE.md** | Arquitetura técnica, decisões, estrutura de pastas |
| **DESIGN.md** | Inspirações visuais, paleta, tipografia, decisões de design |
| **ROADMAP.md** | Features planejadas, backlog, próximos passos |
| **PATTERNS.md** | Padrões de código, convenções, anti-patterns |
| **CONTENT.md** | Como gerenciar conteúdo (jobs, works, etc.) |

## Comandos

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Lint + format com Biome
```

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS** + **shadcn/ui** (estilo "new-york")
- **Motion** (animações) + **Biome** (linting)

## Arquitetura Rápida

```
src/
├── app/           # Páginas (Server Components)
├── components/
│   ├── ui/        # shadcn (NÃO editar diretamente)
│   └── ...        # Feature components
├── constants/     # CONTEÚDO DO SITE (jobs, works, etc.)
├── types/         # Interfaces TypeScript
├── contexts/      # React Context (CommandBar)
├── hooks/         # Custom hooks
└── lib/utils.ts   # Utilitário cn()
```

## Regras Críticas

1. **Conteúdo vive em `constants/`** - Não hardcode textos em componentes
2. **shadcn/ui é read-only** - Use wrappers ou props para customizar
3. **`'use client'` só quando necessário** - Hooks, contexto, animações
4. **AnimationContainer para hovers** - Usar `animationId` único por grupo

## Code Style (Biome)

- Single quotes, sem semicolons
- 2 espaços, 80 chars por linha
- Path alias: `@/*` → `src/*`

## Adicionando Conteúdo

```typescript
// Novo job em src/constants/jobs.ts (mais recente primeiro)
{
  key: 'empresa-2024',
  company: 'Nome',
  role: 'Cargo',
  period: '2024 - Presente',
  description: 'Conquistas...',
}

// Novo projeto em src/constants/works.ts
{
  key: 'projeto-2024',
  title: 'Nome',
  description: 'Descrição impactante',
  image: { path: '/images/projects/x.png', alt: '...' },
}
```

## Status Atual

O site está **funcional mas desatualizado**. Prioridades:
1. Atualizar jobs e works com informações reais
2. Implementar página Resume (PDF)
3. Adicionar estudos de caso
4. Implementar blog
