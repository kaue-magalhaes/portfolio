import ContentContainer from '@/components/ContentContainer'
import PageTransition from '@/components/PageTransition'
import WorksContainer from '@/components/Works/WorksContainer'
import { pageContent } from '@/constants/pageContent'
import { works } from '@/constants/works'

export default function Work() {
  const { headline } = pageContent.work

  return (
    <PageTransition>
      <ContentContainer className="py-10">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>
          <p className="text-muted-foreground">
            I'm passionate about developing software. Here you can find{' '}
            <span className="text-foreground">some of the projects</span> I've
            worked on.
          </p>
        </div>
        <WorksContainer works={works} />
      </ContentContainer>
    </PageTransition>
  )
}
