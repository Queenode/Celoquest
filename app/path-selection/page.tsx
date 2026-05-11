import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PathSelectionPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/ancient-library-dark-mystical.jpg')] bg-cover bg-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fog to-background/50" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-4xl md:text-5xl font-black text-primary text-glow mb-4 tracking-wider">
              CHOOSE YOUR PATH
            </h1>
            <div className="mt-6 w-48 h-1 mx-auto bg-linear-to-r from-transparent via-primary to-transparent animate-shimmer mb-8" />
            <p className="font-[family-name:var(--font-cinzel)] text-center max-w-md mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed">
              Select your journey into the world of CeloQuest. Your adventure begins here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Ethereum Path - Recommended for New Users */}
            <div className="relative group bg-white/5 border border-primary/30 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:shadow-glow-primary">
              <div className="absolute -top-3 -right-3 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                RECOMMENDED
              </div>
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-primary mb-4 tracking-wider">Ethereum Explorer</h3>
                <p className="font-[family-name:var(--font-cinzel)] text-foreground/80 mb-6">
                  New to blockchain? Start with Ethereum, the foundation of decentralized applications. 
                  Learn the fundamentals in a structured, beginner-friendly way.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Perfect for beginners
                  </li>
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Learn core blockchain concepts
                  </li>
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
                    Step-by-step guidance
                  </li>
                </ul>
              </div>
              <Link 
                href="/quests"
                className="inline-flex items-center justify-center w-full py-3 px-6 text-center font-medium bg-linear-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-background rounded-lg transition-all duration-200 group-hover:shadow-glow-primary font-[family-name:var(--font-cinzel)] tracking-wider"
              >
                Begin Ethereum Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Celo Path - For Advanced Users */}
            <div className="relative group glass-card holographic rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] shadow-glow-secondary">
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-secondary mb-4 tracking-wider text-glow-sm">Celo Adventurer</h3>
                <p className="font-[family-name:var(--font-cinzel)] text-foreground/80 mb-6">
                  Ready for the future of mobile finance? Dive into Celo's unique ecosystem 
                  and scaling solutions for a mobile-first world.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-secondary" />
                    Mobile-first financial tools
                  </li>
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-secondary" />
                    Learn about Celo stablecoins
                  </li>
                  <li className="flex items-center text-foreground/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-secondary" />
                    Ethereum L2 transition
                  </li>
                </ul>
              </div>
              <Link 
                href="/celo-quests"
                className="inline-flex items-center justify-center w-full py-3 px-6 text-center font-medium bg-linear-to-r from-secondary to-secondary/80 hover:from-secondary/80 hover:to-secondary text-background rounded-lg transition-all duration-200 group-hover:shadow-glow-secondary font-[family-name:var(--font-cinzel)] tracking-wider"
              >
                Start Celo Adventure
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-[family-name:var(--font-cinzel)] text-foreground/60 text-sm tracking-wider">
              Not sure which to choose? Start with Ethereum to learn the basics, 
              or switch paths anytime from the main menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
