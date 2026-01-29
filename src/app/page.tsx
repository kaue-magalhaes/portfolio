import CommandBarButton from '@/components/CommandBar/CommandBarButton'
import ContentContainer from '@/components/ContentContainer'
import PageTransition from '@/components/PageTransition'
import WavingHandEmoji from '@/components/WavingHandEmoji'
import { pageContent } from '@/constants/pageContent'

export default function Home() {
  const { greeting, description } = pageContent.home

  return (
    <PageTransition>
      <ContentContainer className="py-20 min-h-[70vh]">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          {greeting} <WavingHandEmoji />
        </h1>

        <div className="space-y-4">
          <p className="text-xl text-gray-400">{description}</p>
          <CommandBarButton />
        </div>
      </ContentContainer>
    </PageTransition>
  )
}
