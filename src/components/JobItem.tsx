import type { JobProps } from '@/components/Jobs'

export default function JobItem({
  job,
}: {
  job: JobProps
}) {
  return (
    <>
      <h2 className="text-lg font-bold">{job.role}</h2>
      {job.company && (
        <p className="text-muted-foreground">
          <a
            className="underline text-foreground hover:text-foreground/90"
            href={job.companyUrl}
          >
            {job.company}
          </a>{' '}
          • {job.location}
        </p>
      )}
      <p className="text-muted-foreground">
        {job.startDate} - {job.endDate} {job.duration && `• ${job.duration}`}
      </p>
    </>
  )
}
