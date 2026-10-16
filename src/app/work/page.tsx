import ContentContainer from '@/components/ContentContainer'
import PageTransition from '@/components/PageTransition'
import WorksContainer from '@/components/Works/WorksContainer'
import { pageContent } from '@/constants/pageContent'
import { works } from '@/constants/works'
import { getPosts, projectStoryHrefs } from '@/lib/blog'

export default async function Work() {
  const { headline } = pageContent.work
  const storyHrefs = projectStoryHrefs(await getPosts())

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
            Sou apaixonado por desenvolver software. Aqui estão{' '}
            <span className="text-foreground">alguns dos projetos</span> em que
            trabalhei.
          </p>
        </div>
        <WorksContainer works={works} storyHrefs={storyHrefs} />
      </ContentContainer>
    </PageTransition>
  )
}
