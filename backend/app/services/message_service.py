from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import random
from ..models.message import Message
from ..models.user import User
from ..schemas.message import MessageCreate, MessageRead
from .base_service import BaseService

BOT_RESPONSES = [
    "That's interesting! Tell me more.",
    "I understand. How does that make you feel?",
    "Let me think about that...",
    "I see what you mean.",
    "That's a great point!"
]

class MessageService(BaseService):
    async def get_messages(self) -> list[Message]:
        result = await self.db.execute(
            select(Message).order_by(Message.created_at)
        )
        return result.scalars().all()

    async def create_message(self, message: MessageCreate, user: User) -> list[Message]:
        user_message = Message(
            content=message.content,
            user_id=user.id,
            is_bot=False
        )
        self.db.add(user_message)
        
        bot_message = Message(
            content=random.choice(BOT_RESPONSES),
            user_id=user.id,
            is_bot=True
        )
        self.db.add(bot_message)
        
        await self.db.flush()
        return [user_message, bot_message] 