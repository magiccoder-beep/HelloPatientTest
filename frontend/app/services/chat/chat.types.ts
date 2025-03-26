import { Message } from '@/types';

export interface IChatService {
  getMessages(): Promise<Message[]>;
  sendMessage(content: string): Promise<Message[]>;
}

export interface SendMessageRequest {
  content: string;
} 