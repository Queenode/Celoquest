import Link from "next/link"
import { GameButton } from "@/components/game-button"
import { Volume2, Settings, ChevronDown } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-dark">
      {/* Animated background with premium gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-secondary/20" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Particles/stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(53,208,127,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Top controls */}
      <div className="absolute top-6 right-6 flex gap-4 z-20">
        <button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all hover:scale-110">
          <Volume2 className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all hover:scale-110">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo with glow effect */}
        <div className="mb-12 text-center">
          <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-7xl md:text-9xl font-black text-primary drop-shadow-[0_0_25px_rgba(53,208,127,0.5)] mb-2 tracking-wider animate-in fade-in slide-in-from-top-10 duration-1000">
            CELO 
          </h1>
          <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-6xl md:text-8xl font-black text-secondary drop-shadow-[0_0_20px_rgba(251,204,92,0.4)] tracking-widest animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            QUEST
          </h2>
          <div className="mt-6 w-48 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </div>

        {/* Description */}
        <p className="font-[family-name:var(--font-outfit)] text-center max-w-md md:max-w-lg text-foreground/80 text-lg md:text-xl leading-relaxed mb-12 text-balance animate-in fade-in zoom-in duration-1000 delay-500">
          Embark on a high-stakes journey into the Celo ecosystem. Master the protocols of prosperity, solve complex puzzles, and unlock the future of finance.
        </p>

        <Link href="/path-selection">
          <GameButton size="lg" className="text-xl md:text-2xl px-12 py-6 mb-8 group overflow-hidden">
            <span className="relative z-10">Start Adventure</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </GameButton>
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-[family-name:var(--font-outfit)] tracking-widest uppercase">Explore System</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Bottom instructions section (visible on scroll) */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 bg-background/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="font-[family-name:var(--font-cinzel-decorative)] text-5xl font-bold text-primary drop-shadow-[0_0_15px_rgba(53,208,127,0.3)]">
            System Protocols
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <h4 className="text-2xl font-bold text-secondary mb-4 group-hover:scale-110 transition-transform">💎 Acquire XP</h4>
              <p className="text-foreground/70 font-[family-name:var(--font-outfit)]">Complete high-value tasks to earn governance-ready XP tokens.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <h4 className="text-2xl font-bold text-secondary mb-4 group-hover:scale-110 transition-transform">⚡ Deploy Assets</h4>
              <p className="text-foreground/70 font-[family-name:var(--font-outfit)]">Interact with Celo smart contracts to verify your on-chain expertise.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <h4 className="text-2xl font-bold text-secondary mb-4 group-hover:scale-110 transition-transform">🏆 Rise in Rank</h4>
              <p className="text-foreground/70 font-[family-name:var(--font-outfit)]">Compete on the global leaderboard and secure your spot as a top Talent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
