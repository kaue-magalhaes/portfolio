import ContentContainer from '@/components/ContentContainer'
import JobsContainer from '@/components/Jobs/JobsContainer'
import PageTransition from '@/components/PageTransition'
import { jobs } from '@/constants/jobs'
import { pageContent } from '@/constants/pageContent'

export default function About() {
  const { headline, videoAlt, careerTitle } = pageContent.about

  return (
    <PageTransition>
      <ContentContainer className="py-10">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded"
              aria-label={videoAlt}
            >
              <source src="/images/me.mp4" type="video/mp4" />
            </video>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                <span className="text-foreground">
                  I'm a full-stack developer
                </span>{' '}
                with a big dream: to one day work at top tech companies like
                Google or Meta.
              </p>
              <p className="text-lg text-muted-foreground">
                In my{' '}
                <span className="text-foreground">
                  almost 3 years of experience
                </span>{' '}
                I'm constantly growing by studying every day and challenging
                myself to go beyond what I know.
              </p>
              <p className="text-lg text-muted-foreground">
                What drives me the most is my{' '}
                <span className="text-foreground">love for technology</span> and
                my <span className="text-foreground">passion for learning</span>
                . I thrive in environments where curiosity, collaboration, and
                innovation are at the center.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, I enjoy watching movies, playing soccer
                with my friends, and{' '}
                <span className="text-foreground">drinking coffee</span>.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-2xl font-bold tracking-tight">
            {careerTitle}
          </h1>
          <JobsContainer jobs={jobs} />
        </div>
      </ContentContainer>
    </PageTransition>
  )
}
