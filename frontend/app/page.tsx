'use client';
import { ChatContainer } from '@/components/chat';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <ChatContainer />
    </main>
  );
}
