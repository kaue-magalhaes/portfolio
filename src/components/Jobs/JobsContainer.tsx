import type { Job } from '@/types/job'
import JobItem from '@/components/Jobs/JobItem'
import AnimationContainer from '../Animation/AnimationContainer'

interface JobsContainerProps {
  jobs: Job[]
}

export default function JobsContainer({ jobs }: JobsContainerProps) {
  return (
    <div>
      {jobs.map(job => (
        <AnimationContainer
          key={job.key}
          itemKey={job.key}
          animationId="job-container"
          className="p-4 rounded-lg"
        >
          <JobItem job={job} />
        </AnimationContainer>
      ))}
    </div>
  )
}
