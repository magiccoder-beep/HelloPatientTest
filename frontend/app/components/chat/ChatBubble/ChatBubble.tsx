import { ChatBubbleProps } from './ChatBubble.types';
import { getBubbleStyles } from './ChatBubble.styles';

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => (
  <div className={getBubbleStyles(message.is_bot)}>
    {message.content}
  </div>
); 