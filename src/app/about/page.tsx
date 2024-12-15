import Image from 'next/image'
import me from '../../../public/images/me.gif'
import ContentContainer from '@/components/ContentContainer'
import JobsContainer from '@/components/Jobs/JobsContainer'
import { jobs } from '@/constants/jobs'

export default function About() {
  return (
    <ContentContainer className="py-10">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Living to code. Loving to learn.
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <Image src={me} alt="Kauê de Magalhães" className="rounded" />
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <span className="text-foreground">
                I'm a full-stack developer
              </span>{' '}
              with a big dream: to one day work at top tech companies like
              Google or Meta.
            </p>
            <p>
              In my{' '}
              <span className="text-foreground">1.5 years of experience</span>{' '}
              I'm constantly growing by studying every day and challenging
              myself to go beyond what I know.
            </p>
            <p>
              What drives me the most is my{' '}
              <span className="text-foreground">love for technology</span> and
              my <span className="text-foreground">passion for learning</span>.
              I thrive in environments where curiosity, collaboration, and
              innovation are at the center.
            </p>
            <p>
              When I'm not coding, I enjoy watching movies, playing soccer with
              my friends, and{' '}
              <span className="text-foreground">drinking coffee.</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-2xl font-bold tracking-tight">
          Career
        </h1>
        <JobsContainer jobs={jobs} />
      </div>
    </ContentContainer>
  )
}
