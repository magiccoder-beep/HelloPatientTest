import { useState, useEffect, useCallback } from 'react';
import { Message, ChatError } from '@/types';
import { ChatService } from '@/services';
import { FAILED_TO_LOAD_MESSAGES, FAILED_TO_SEND_MESSAGE } from '@/constants/chat';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ChatError | null>(null);

  const chatService = ChatService.getInstance();

  const fetchMessages = useCallback(async () => {
    try {
      setError(null);
      const data = await chatService.getMessages();
      setMessages(data);
    } catch (err) {
      setError({ message: FAILED_TO_LOAD_MESSAGES });
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const newMessages = await chatService.sendMessage(content.trim());
      setMessages(prev => [...prev, ...newMessages]);
      return true;
    } catch (err) {
      setError({ message: FAILED_TO_SEND_MESSAGE });
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return {
    messages,
    loading,
    error,
    sendMessage,
  };
}; 