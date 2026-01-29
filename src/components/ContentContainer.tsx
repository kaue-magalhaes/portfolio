import { cn } from '@/lib/utils'

interface ContentContainerProps {
  className?: string
  children: React.ReactNode
}

export default function ContentContainer({
  className,
  children,
}: ContentContainerProps) {
  return (
    <section className={cn('flex flex-col justify-center px-4', className)}>
      <div className="max-w-4xl mx-auto w-full space-y-8">{children}</div>
    </section>
  )
}
