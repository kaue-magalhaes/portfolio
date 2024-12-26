import ContentContainer from '@/components/ContentContainer'
import me from '../../../public/images/me.gif'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Work() {
  return (
    <ContentContainer className="py-10">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent">
            Crafting code. Creating impact.
          </span>
        </h1>
        <p className="text-muted-foreground">
          I'm passionate about developing software. Here you can find{' '}
          <span className="text-foreground">some of the projects</span> I've
          worked on.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-foreground/20 hover:scale-105 transition-all duration-300">
          <CardHeader className="p-0">
            <div className="overflow-hidden">
              <Image src={me} alt="Kauê de Magalhães" className="w-full h-96 object-cover transition-transform duration-300" />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className='font-semibold text-xl mb-2'>Kauê de Magalhães</CardTitle>
            <CardDescription>I'm testing this card component.</CardDescription>
          </CardContent>
        </Card>
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-foreground/20 hover:scale-105 transition-all duration-300">
          <CardHeader className="p-0">
            <div className="overflow-hidden">
              <Image src={me} alt="Kauê de Magalhães" className="w-full h-96 object-cover transition-transform duration-300" />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className='font-semibold text-xl mb-2'>Kauê de Magalhães</CardTitle>
            <CardDescription>I'm testing this card component.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </ContentContainer>
  )
}
