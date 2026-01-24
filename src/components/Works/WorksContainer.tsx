import type { Work } from '@/types/work'
import WorkItem from './WorkItem'
import AnimationContainer from '../Animation/AnimationContainer'

interface WorksContainerProps {
  works: Work[]
}

export default function WorksContainer({ works }: WorksContainerProps) {
  return (
    <div className="grid sm:grid-cols-2">
      {works.map(work => (
        <AnimationContainer
          key={work.key}
          itemKey={work.key}
          animationId="work-container"
          className="rounded-lg text-card-foreground shadow h-full flex flex-col border-0"
        >
          <WorkItem work={work} />
        </AnimationContainer>
      ))}
    </div>
  )
}
