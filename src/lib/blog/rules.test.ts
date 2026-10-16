import { describe, expect, it } from 'vitest'
import {
  formatPostDate,
  type Post,
  parsePostMetadata,
  postHref,
  projectStoryHrefs,
  selectVisiblePosts,
  slugFromFileName,
} from './rules'

const projectKeys = ['meta-por-mapa', 'doafarma']

const valid = {
  title: 'Como montei o Meta por Mapa',
  description: 'Uma tier list que se atualiza sozinha.',
  date: '2026-10-20',
}

function post(slug: string, date: string, extra: object = {}): Post {
  return {
    slug,
    metadata: { title: slug, description: 'resumo', date, ...extra },
  }
}

describe('parsePostMetadata', () => {
  it('returns the fields of a valid post', () => {
    const metadata = parsePostMetadata(
      'meta',
      { ...valid, project: 'meta-por-mapa', draft: true },
      projectKeys
    )

    expect(metadata).toEqual({
      ...valid,
      project: 'meta-por-mapa',
      draft: true,
    })
  })

  it('fails when the file has no metadata export', () => {
    expect(() => parsePostMetadata('meta', undefined, projectKeys)).toThrow(
      /export const metadata/
    )
  })

  it('fails when the title is missing', () => {
    const { title: _title, ...withoutTitle } = valid

    expect(() => parsePostMetadata('meta', withoutTitle, projectKeys)).toThrow(
      /Post "meta".*"title"/
    )
  })

  it('fails when the description is blank', () => {
    expect(() =>
      parsePostMetadata('meta', { ...valid, description: '  ' }, projectKeys)
    ).toThrow(/"description"/)
  })

  it('fails when the date is not AAAA-MM-DD', () => {
    expect(() =>
      parsePostMetadata('meta', { ...valid, date: '20/10/2026' }, projectKeys)
    ).toThrow(/AAAA-MM-DD/)
  })

  it('fails when the date does not exist in the calendar', () => {
    expect(() =>
      parsePostMetadata('meta', { ...valid, date: '2026-02-30' }, projectKeys)
    ).toThrow(/AAAA-MM-DD/)
  })

  it('fails when the project does not exist', () => {
    expect(() =>
      parsePostMetadata('meta', { ...valid, project: 'nope' }, projectKeys)
    ).toThrow(/"nope" não existe/)
  })

  it('fails when draft is not a boolean', () => {
    expect(() =>
      parsePostMetadata('meta', { ...valid, draft: 'yes' }, projectKeys)
    ).toThrow(/"draft"/)
  })
})

describe('selectVisiblePosts', () => {
  const posts = [
    post('old', '2026-01-10'),
    post('draft', '2026-12-01', { draft: true }),
    post('new', '2026-10-20'),
  ]

  it('lists newest first and hides drafts', () => {
    const visible = selectVisiblePosts(posts, { includeDrafts: false })

    expect(visible.map(p => p.slug)).toEqual(['new', 'old'])
  })

  it('keeps drafts when asked', () => {
    const visible = selectVisiblePosts(posts, { includeDrafts: true })

    expect(visible.map(p => p.slug)).toEqual(['draft', 'new', 'old'])
  })

  it('does not reorder the list it received', () => {
    selectVisiblePosts(posts, { includeDrafts: true })

    expect(posts.map(p => p.slug)).toEqual(['old', 'draft', 'new'])
  })
})

describe('projectStoryHrefs', () => {
  it('points each project to its newest post', () => {
    const hrefs = projectStoryHrefs([
      post('first-take', '2026-01-10', { project: 'meta-por-mapa' }),
      post('no-project', '2026-11-01'),
      post('second-take', '2026-10-20', { project: 'meta-por-mapa' }),
    ])

    expect(hrefs).toEqual({ 'meta-por-mapa': '/blog/second-take' })
  })
})

describe('formatPostDate', () => {
  it('shows the day written in the file, in Portuguese', () => {
    expect(formatPostDate('2026-10-20')).toBe('20 de outubro de 2026')
  })
})

describe('postHref', () => {
  it('builds the post address', () => {
    expect(postHref('como-montei')).toBe('/blog/como-montei')
  })
})

describe('slugFromFileName', () => {
  it('turns a post file into its slug', () => {
    expect(slugFromFileName('como-montei.mdx')).toBe('como-montei')
  })

  it('ignores files that are not posts', () => {
    for (const fileName of ['_modelo.mdx', '.gitkeep', 'notas.md']) {
      expect(slugFromFileName(fileName)).toBeUndefined()
    }
  })
})
