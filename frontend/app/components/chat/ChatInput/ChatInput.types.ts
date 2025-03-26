export interface ChatInputProps {
  onSend: (message: string) => Promise<void>;
  loading: boolean;
} 