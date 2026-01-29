import ItemsContainer from '@/components/ItemsContainer'
import JobItem from '@/components/Jobs/JobItem'
import type { Job } from '@/types/job'

interface JobsContainerProps {
  jobs: Job[]
}

export default function JobsContainer({ jobs }: JobsContainerProps) {
  return (
    <ItemsContainer
      items={jobs}
      animationId="job-container"
      itemClassName="p-4 rounded-lg"
      renderItem={job => <JobItem job={job} />}
      emptyMessage="No professional experience yet."
    />
  )
}
