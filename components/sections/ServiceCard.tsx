import { Service } from "@/data/content"


export function ServiceCard({ service, index }: { service: Service, index?: number }) {
  const Icon = service.icon
  const displayIndex = index !== undefined ? (index + 1).toString().padStart(2, '0') : null;

  return (
    <div className="group relative overflow-hidden bg-background/50 p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full rounded-none lg:rounded-sm">
      <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-10 pointer-events-none">
        <Icon className="w-32 h-32" />
      </div>
      
      <div className="flex justify-between items-start mb-12 relative z-10">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        {displayIndex && (
          <span className="text-3xl font-extrabold text-muted-foreground/30 font-mono tracking-tighter">
            {displayIndex}
          </span>
        )}
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
        <p className="mb-8 text-base text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>
        
        {service.features.length > 0 && (
          <ul className="space-y-3 mt-auto pt-6 border-t border-border/50">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start text-sm text-muted-foreground/90 font-medium group/item">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 transition-colors group-hover/item:bg-primary" />
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
