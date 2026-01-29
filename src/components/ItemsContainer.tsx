import AnimationContainer from '@/components/Animation/AnimationContainer'
import { AnimationGroup } from '@/contexts/AnimationGroupContext'
import { cn } from '@/lib/utils'

interface ItemsContainerProps<T extends { key: string }> {
  items: T[]
  animationId: string
  renderItem: (item: T) => React.ReactNode
  containerClassName?: string
  itemClassName?: string
  emptyMessage?: string
}

export default function ItemsContainer<T extends { key: string }>({
  items,
  animationId,
  renderItem,
  containerClassName,
  itemClassName,
  emptyMessage = 'No items yet.',
}: ItemsContainerProps<T>) {
  if (items.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        {emptyMessage}
      </div>
    )
  }

  return (
    <AnimationGroup>
      <div className={cn(containerClassName)}>
        {items.map(item => (
          <AnimationContainer
            key={item.key}
            itemKey={item.key}
            animationId={animationId}
            className={itemClassName}
          >
            {renderItem(item)}
          </AnimationContainer>
        ))}
      </div>
    </AnimationGroup>
  )
}
