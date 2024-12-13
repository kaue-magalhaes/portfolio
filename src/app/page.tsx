import WavingHandEmoji from '@/components/WavingHandEmoji'
import CommandBarButton from '@/components/CommandBar/CommandBarButton'
import ContentContainer from '@/components/ContentContainer'

export default function Home() {
  return (
    <ContentContainer className="py-20 min-h-[70vh]">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Hi, I&apos;m Kauê <WavingHandEmoji />
      </h1>

      <div className="space-y-4">
        <p className="text-xl text-gray-400">
          a full-stack developer with a passion for creating solutions
        </p>
        <CommandBarButton />
      </div>
    </ContentContainer>
  )
}
