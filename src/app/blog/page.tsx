import type { Metadata } from 'next'
import Link from 'next/link'
import ContentContainer from '@/components/ContentContainer'
import PageTransition from '@/components/PageTransition'
import { pageContent } from '@/constants/pageContent'
import { routes } from '@/constants/routes'
import { siteOpenGraph, siteTwitter } from '@/constants/seo'
import { formatPostDate, getPosts, postHref } from '@/lib/blog'

const { headline: title, description } = pageContent.blog

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...siteOpenGraph,
    type: 'website',
    url: routes.blog,
    title,
    description,
  },
  twitter: { ...siteTwitter, title, description },
}

export default async function Blog() {
  const { emptyMessage } = pageContent.blog
  const posts = await getPosts()

  return (
    <PageTransition>
      <ContentContainer className="py-10">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">{emptyMessage}</p>
        ) : (
          <ul className="space-y-8">
            {posts.map(post => (
              <li key={post.slug}>
                <Link
                  href={postHref(post.slug)}
                  className="group block space-y-1"
                >
                  <h2 className="text-xl font-semibold group-hover:underline">
                    {post.metadata.title}
                  </h2>
                  <time
                    dateTime={post.metadata.date}
                    className="block text-sm text-muted-foreground"
                  >
                    {formatPostDate(post.metadata.date)}
                  </time>
                  <p className="text-muted-foreground">
                    {post.metadata.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ContentContainer>
    </PageTransition>
  )
}
