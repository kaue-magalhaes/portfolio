import { readdir } from 'node:fs/promises'
import path from 'node:path'
import type { MDXContent } from 'mdx/types'
import { works } from '@/constants/works'
import {
  type Post,
  parsePostMetadata,
  selectVisiblePosts,
  slugFromFileName,
} from './rules'

export {
  formatPostDate,
  type Post,
  postHref,
  projectStoryHrefs,
} from './rules'

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog/pt')
const projectKeys = works.map(work => work.key)
const includeDrafts = process.env.NODE_ENV !== 'production'

interface PostModule {
  default: MDXContent
  metadata?: unknown
}

function importPost(slug: string): Promise<PostModule> {
  return import(`@/content/blog/pt/${slug}.mdx`)
}

async function readSlugs(): Promise<string[]> {
  const files = await readdir(POSTS_DIR)
  return files.flatMap(file => slugFromFileName(file) ?? [])
}

/**
 * Returns the posts a reader can see, newest first. Drafts show up only
 * outside production. Throws if any post has invalid metadata.
 */
export async function getPosts(): Promise<Post[]> {
  const slugs = await readSlugs()
  const posts = await Promise.all(
    slugs.map(async slug => {
      const { metadata } = await importPost(slug)
      return { slug, metadata: parsePostMetadata(slug, metadata, projectKeys) }
    })
  )
  return selectVisiblePosts(posts, { includeDrafts })
}

/**
 * Returns a visible post and its rendered content, or undefined when the
 * slug does not exist or is a draft in production.
 */
export async function getPost(
  slug: string
): Promise<{ post: Post; Content: MDXContent } | undefined> {
  const post = (await getPosts()).find(candidate => candidate.slug === slug)
  if (!post) {
    return undefined
  }
  const { default: Content } = await importPost(slug)
  return { post, Content }
}
