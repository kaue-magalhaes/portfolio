import Image from 'next/image'
import { CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import type { Work } from '@/types/work'

interface WorkItemProps {
  work: Work
}

export default function WorkItem({ work }: WorkItemProps) {
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
          {work.title}
        </CardTitle>
        <CardDescription>{work.description}</CardDescription>
      </CardContent>
    </>
  )
}
