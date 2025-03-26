import { ChatMessagesProps } from './ChatMessages.types';
import { MESSAGES_STYLES } from './ChatMessages.styles';
import { ChatBubble } from '../ChatBubble';

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => (
  <div className={MESSAGES_STYLES.container}>
    {messages.map((message) => (
      <ChatBubble key={message.id} message={message} />
    ))}
  </div>
); 