import { useState } from 'react';
import { Button, Input } from '@/components/common';
import { ChatInputProps } from './ChatInput.types';
import { INPUT_STYLES } from './ChatInput.styles';
import { INPUT_DEFAULTS } from './ChatInput.constants';

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, loading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await onSend(message)) {
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={INPUT_STYLES.form}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={INPUT_DEFAULTS.placeholder}
        disabled={loading}
      />
      <Button type="submit" loading={loading}>
        Send
      </Button>
    </form>
  );
}; 