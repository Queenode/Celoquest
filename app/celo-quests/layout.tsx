import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celo Quests | CeloQuest',
  description: 'Embark on quests to learn about the Celo ecosystem',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}