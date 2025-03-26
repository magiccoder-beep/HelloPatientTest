import { ChatContainerProps } from './ChatContainer.types';
import { CONTAINER_STYLES } from './ChatContainer.styles';
import { ChatMessages } from '../ChatMessages';
import { ChatInput } from '../ChatInput';
import { ErrorMessage } from '@/components/common';
import { useChat } from '@/hooks/useChat';

export const ChatContainer: React.FC<ChatContainerProps> = ({ className = '' }) => {
  const { messages, loading, error, sendMessage } = useChat();

  return (
    <div className={`${CONTAINER_STYLES.wrapper} ${className}`}>
      {error && <ErrorMessage message={error.message} />}
      <div className={CONTAINER_STYLES.container}>
        <ChatMessages messages={messages} />
        <ChatInput onSend={sendMessage} loading={loading} />
      </div>
    </div>
  );
}; 