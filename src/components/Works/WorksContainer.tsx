import ItemsContainer from '@/components/ItemsContainer'
import type { Work } from '@/types/work'
import WorkItem from './WorkItem'

interface WorksContainerProps {
  works: Work[]
}

export default function WorksContainer({ works }: WorksContainerProps) {
  return (
    <ItemsContainer
      items={works}
      animationId="work-container"
      containerClassName="grid sm:grid-cols-2"
      itemClassName="rounded-lg text-card-foreground shadow-sm h-full flex flex-col border-0"
      renderItem={work => <WorkItem work={work} />}
      emptyMessage="No projects yet."
    />
  )
}
