export interface Message {
  id: number;
  content: string;
  user_id: number;
  is_bot: boolean;
  created_at: string;
}

export interface ChatError {
  message: string;
} 