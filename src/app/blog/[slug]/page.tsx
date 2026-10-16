import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContentContainer from '@/components/ContentContainer'
import PageTransition from '@/components/PageTransition'
import { pageContent } from '@/constants/pageContent'
import { routes } from '@/constants/routes'
import { siteOpenGraph, siteTwitter } from '@/constants/seo'
import { works } from '@/constants/works'
import { formatPostDate, getPost, getPosts, postHref } from '@/lib/blog'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const result = await getPost(slug)
  if (!result) {
    return {}
  }
  const { title, description, date } = result.post.metadata

  return {
    title,
    description,
    openGraph: {
      ...siteOpenGraph,
      type: 'article',
      url: postHref(slug),
      title,
      description,
      publishedTime: date,
    },
    twitter: { ...siteTwitter, title, description },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const result = await getPost(slug)
  if (!result) {
    notFound()
  }
  const { post, Content } = result
  const { title, date, project } = post.metadata
  const work = works.find(candidate => candidate.key === project)
  const { projectLabel, backToList } = pageContent.post

  return (
    <PageTransition>
      <ContentContainer className="py-10">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground">
            <time dateTime={date}>{formatPostDate(date)}</time>
            {work && (
              <>
                {' • '}
                {projectLabel}{' '}
                <Link
                  href={routes.work}
                  className="underline hover:text-foreground"
                >
                  {work.title}
                </Link>
              </>
            )}
          </p>
        </header>
        <article className="prose prose-invert max-w-none">
          <Content />
        </article>
        <Link
          href={routes.blog}
          className="text-muted-foreground hover:text-foreground"
        >
          {backToList}
        </Link>
      </ContentContainer>
    </PageTransition>
  )
}
