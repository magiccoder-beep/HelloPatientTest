from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from ...core.database import get_db
from ...services.message_service import MessageService
from ...services.user_service import UserService
from ...schemas.message import MessageCreate, MessageRead

router = APIRouter()

@router.get("/", response_model=list[MessageRead])
async def get_messages(db: AsyncSession = Depends(get_db)):
    async with db.begin():
        message_service = MessageService(db)
        return await message_service.get_messages()

@router.post("/", response_model=list[MessageRead])
async def create_message(
    message: MessageCreate,
    db: AsyncSession = Depends(get_db)
):
    async with db.begin():
        user_service = UserService(db)
        message_service = MessageService(db)
        
        # Get current user
        user = await user_service.get_current_user()
        
        # Create messages
        return await message_service.create_message(message, user) 