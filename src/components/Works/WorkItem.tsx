import Image from 'next/image'
import Link from 'next/link'
import { pageContent } from '@/constants/pageContent'
import type { Work } from '@/types/work'
import { CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface WorkItemProps {
  work: Work
  storyHref?: string
}

export default function WorkItem({ work, storyHref }: WorkItemProps) {
  return (
    <>
      <CardHeader>
        <div className="overflow-hidden">
          <Image
            src={work.image.path}
            alt={work.image.alt}
            width={800}
            height={450}
            className="w-full h-96 object-cover transition-transform duration-300"
            unoptimized={work.image.path.endsWith('.gif')}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-semibold text-xl mb-2">
          {work.url ? (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {work.title} ↗
            </a>
          ) : (
            work.title
          )}
        </CardTitle>
        <CardDescription>{work.description}</CardDescription>
        {storyHref && (
          <Link
            href={storyHref}
            className="mt-3 inline-block text-sm text-foreground underline hover:text-foreground/90"
          >
            {pageContent.work.storyLabel}
          </Link>
        )}
      </CardContent>
    </>
  )
}
