import ItemsContainer from '@/components/ItemsContainer'
import type { Work } from '@/types/work'
import WorkItem from './WorkItem'

interface WorksContainerProps {
  works: Work[]
  storyHrefs?: Partial<Record<string, string>>
}

export default function WorksContainer({
  works,
  storyHrefs = {},
}: WorksContainerProps) {
  return (
    <ItemsContainer
      items={works}
      animationId="work-container"
      containerClassName="grid sm:grid-cols-2"
      itemClassName="rounded-lg text-card-foreground shadow-sm h-full flex flex-col border-0"
      renderItem={work => (
        <WorkItem work={work} storyHref={storyHrefs[work.key]} />
      )}
      emptyMessage="Nenhum projeto ainda."
    />
  )
}
