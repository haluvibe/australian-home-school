import type { Metadata } from "next";
import MessageQuestGame from "@/components/games/MessageQuestGame";

export const metadata: Metadata = {
  title: "Message Quest",
  description: "Deliver messages around a village by following clues! Read instructions carefully to find the right NPC based on their name, role, appearance, and location.",
  keywords: ["reading comprehension game", "following instructions game", "homeschool English game", "literacy game", "Year 1 English"],
  alternates: { canonical: "/games/message-quest" },
  openGraph: {
    title: "Message Quest | AI Native School",
    description: "A village exploration game where kids deliver messages by following increasingly complex instructions.",
    url: "/games/message-quest",
  },
};

export default function MessageQuestPage() {
  return <MessageQuestGame />;
}
