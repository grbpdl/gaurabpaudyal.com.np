interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-4 border-l">
          <div className="absolute left-[-8px] h-4 w-4 rounded-full bg-primary" />
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                {item.duration}
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {item.company}
            </p>
            <p className="text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}