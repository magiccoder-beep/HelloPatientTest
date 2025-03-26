from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import HTTPException
from ..models.user import User
from .base_service import BaseService

class UserService(BaseService):
    async def get_current_user(self) -> User:
        result = await self.db.execute(select(User))
        user = result.scalars().first()
        
        if user is None:
            raise HTTPException(status_code=404, detail="User not found")
        
        return user 