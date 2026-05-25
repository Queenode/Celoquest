import { Lock } from "lucide-react"

interface ComingSoonOverlayProps {
  title: string
  description: string
}

export function ComingSoonOverlay({ title, description }: ComingSoonOverlayProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
      {/* Blur Backdrop */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md" />
      
      {/* Content Box */}
      <div className="relative glass-card holographic rounded-2xl p-8 md:p-12 max-w-2xl text-center border-2 border-glow-amber/50 shadow-glow-secondary transform transition-all hover:scale-105 duration-500">
        <div className="absolute inset-0 bg-stone-900/80 rounded-2xl -z-10" />
        
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-glow-amber/20 border-2 border-glow-amber flex items-center justify-center animate-glow-pulse shadow-glow-secondary">
            <Lock className="w-10 h-10 text-glow-amber" />
          </div>
        </div>
        
        <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-3xl md:text-5xl font-black text-glow-amber mb-6 text-glow-sm">
          Coming Soon
        </h2>
        
        <h3 className="font-[family-name:var(--font-cinzel)] text-xl md:text-2xl font-bold text-stone-200 mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-glow-amber animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" style={{ animationDelay: "300ms" }} />
          <div className="w-2 h-2 rounded-full bg-glow-purple animate-pulse" style={{ animationDelay: "600ms" }} />
        </div>
      </div>
    </div>
  )
}
