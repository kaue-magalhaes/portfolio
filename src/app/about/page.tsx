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
                  Sou desenvolvedor full-stack
                </span>{' '}
                com um grande sonho: trabalhar um dia em grandes empresas de
                tecnologia, como Google ou Meta.
              </p>
              <p className="text-lg text-muted-foreground">
                Em{' '}
                <span className="text-foreground">
                  quase 3 anos de experiência
                </span>
                , venho crescendo estudando todo dia e me desafiando a ir além
                do que já sei.
              </p>
              <p className="text-lg text-muted-foreground">
                O que mais me move é o meu{' '}
                <span className="text-foreground">amor por tecnologia</span> e a
                minha{' '}
                <span className="text-foreground">paixão por aprender</span>.
                Rendo melhor em ambientes onde curiosidade, colaboração e
                inovação estão no centro.
              </p>
              <p className="text-lg text-muted-foreground">
                Quando não estou programando, gosto de assistir filmes, jogar
                bola com os amigos e{' '}
                <span className="text-foreground">tomar café</span>.
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
