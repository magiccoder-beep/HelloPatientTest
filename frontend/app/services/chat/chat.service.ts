import { Message } from '@/types';
import { ApiService } from '../base/api.service';
import { IChatService, SendMessageRequest } from './chat.types';

export class ChatService extends ApiService implements IChatService {
  private static instance: ChatService;
  private readonly endpoints = {
    messages: '/messages',
  } as const;

  private constructor() {
    super();
  }

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  public async getMessages(): Promise<Message[]> {
    const { data } = await this.api.get<Message[]>(this.endpoints.messages);
    return data;
  }

  public async sendMessage(content: string): Promise<Message[]> {
    const { data } = await this.api.post<Message[], any, SendMessageRequest>(
      this.endpoints.messages,
      { content }
    );
    return data;
  }
} 