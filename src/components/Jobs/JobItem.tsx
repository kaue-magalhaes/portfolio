import type { Job } from '@/types/job'

interface JobItemProps {
  job: Job
}

export default function JobItem({ job }: JobItemProps) {
  return (
    <>
      <h2 className="text-lg font-bold">{job.role}</h2>
      {job.company && (
        <p className="text-muted-foreground">
          {job.company.url ? (
            <a
              className="underline text-foreground hover:text-foreground/90"
              target="_blank"
              rel="noopener noreferrer"
              href={job.company.url}
            >
              {job.company.name}
            </a>
          ) : (
            job.company.name
          )}{' '}
          {job.location && `• ${job.location}`}
        </p>
      )}
      <p className="text-muted-foreground">
        {job.period.start} - {job.period.end}{' '}
        {job.period.duration && `• ${job.period.duration}`}
      </p>
    </>
  )
}
