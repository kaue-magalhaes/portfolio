export interface PostMetadata {
  title: string
  description: string
  date: string
  project?: string
  draft?: boolean
}

export interface Post {
  slug: string
  metadata: PostMetadata
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

function requireText(
  slug: string,
  data: Record<string, unknown>,
  field: 'title' | 'description'
): string {
  const value = data[field]
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Post "${slug}": o campo "${field}" é obrigatório e precisa ser um texto.`
    )
  }
  return value
}

function isCalendarDate(value: unknown): value is string {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) {
    return false
  }
  const parsed = new Date(value)
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  )
}

const POST_EXTENSION = '.mdx'

/**
 * Turns a file name from the posts folder into a post slug. Files starting
 * with "_" are not posts: the folder always keeps _modelo.mdx, because
 * Turbopack cannot build the dynamic import of posts when no .mdx file exists.
 */
export function slugFromFileName(fileName: string): string | undefined {
  if (!fileName.endsWith(POST_EXTENSION) || fileName.startsWith('_')) {
    return undefined
  }
  return fileName.slice(0, -POST_EXTENSION.length)
}

/**
 * Validates the `metadata` export of a post file and returns it typed.
 * Throws with the post slug in the message, so a broken post fails the build
 * and says which file to fix.
 */
export function parsePostMetadata(
  slug: string,
  raw: unknown,
  projectKeys: readonly string[]
): PostMetadata {
  if (typeof raw !== 'object' || raw === null) {
    throw new Error(
      `Post "${slug}": falta o "export const metadata" no topo do arquivo.`
    )
  }
  const data = raw as Record<string, unknown>
  const title = requireText(slug, data, 'title')
  const description = requireText(slug, data, 'description')
  const { date, project, draft } = data

  if (!isCalendarDate(date)) {
    throw new Error(
      `Post "${slug}": o campo "date" precisa ser uma data real no formato AAAA-MM-DD.`
    )
  }
  if (
    project !== undefined &&
    (typeof project !== 'string' || !projectKeys.includes(project))
  ) {
    throw new Error(
      `Post "${slug}": o projeto "${String(project)}" não existe em src/constants/works.ts.`
    )
  }
  if (draft !== undefined && typeof draft !== 'boolean') {
    throw new Error(
      `Post "${slug}": o campo "draft" precisa ser true ou false.`
    )
  }

  return { title, description, date, project, draft }
}

function newestFirst(a: Post, b: Post): number {
  return (
    b.metadata.date.localeCompare(a.metadata.date) ||
    a.slug.localeCompare(b.slug)
  )
}

/**
 * Returns the posts a reader can see, newest first, without touching the input.
 */
export function selectVisiblePosts(
  posts: readonly Post[],
  { includeDrafts }: { includeDrafts: boolean }
): Post[] {
  return posts
    .filter(post => includeDrafts || !post.metadata.draft)
    .sort(newestFirst)
}

/**
 * Maps each project key to the address of its newest post.
 */
export function projectStoryHrefs(
  posts: readonly Post[]
): Partial<Record<string, string>> {
  const hrefs: Partial<Record<string, string>> = {}
  for (const post of [...posts].sort(newestFirst)) {
    const { project } = post.metadata
    if (project && !hrefs[project]) {
      hrefs[project] = postHref(post.slug)
    }
  }
  return hrefs
}

/**
 * Formats an AAAA-MM-DD date in Portuguese. Uses UTC because the string is
 * parsed as UTC midnight, which is still the previous day in Brasília.
 */
export function formatPostDate(date: string): string {
  return dateFormatter.format(new Date(date))
}

export function postHref(slug: string): string {
  return `/blog/${slug}`
}
