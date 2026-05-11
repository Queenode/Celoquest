import QuestRoom from "@/components/quest-room"
import { celoQuestRooms } from "@/lib/celo-quest-data"
import { notFound } from "next/navigation"

interface CeloQuestRoomPageProps {
  params: Promise<{ id: string }>
}

export default async function CeloQuestRoomPage({ params }: CeloQuestRoomPageProps) {
  const { id } = await params
  const questData = celoQuestRooms[id as keyof typeof celoQuestRooms]

  if (!questData) {
    notFound()
  }

  return <QuestRoom questId={id} questType="celo" />
}

export async function generateStaticParams() {
  return Object.keys(celoQuestRooms).map((id) => ({ id }))
}