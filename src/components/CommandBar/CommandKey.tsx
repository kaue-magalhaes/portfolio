interface CommandKeyProps {
  children: React.ReactNode
}

export default function CommandKey({ children }: CommandKeyProps) {
  return (
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
      <span className="text-xs">{children}</span>
    </kbd>
  )
}
