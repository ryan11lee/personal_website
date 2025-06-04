import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  description,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        centered ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}
