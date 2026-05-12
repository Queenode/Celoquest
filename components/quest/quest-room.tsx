'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface QuestRoomProps {
  title: string;
  description: string;
  letter: string;
  nextUrl: string;
  questType: 'celo' | 'ethereum';
}

export function QuestRoom({ title, description, letter, nextUrl, questType }: QuestRoomProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 sm:p-8 text-center">
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-4xl font-bold text-cyan-400 mb-4">
          {letter}
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
          <Link href={nextUrl}>
            Continue Your Journey
          </Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link href="/quests">
            Back to Quests
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-muted/30 text-sm text-muted-foreground">
        <p>Quest Type: <span className="text-cyan-400">{questType.toUpperCase()}</span></p>
      </div>
    </div>
  );
}
