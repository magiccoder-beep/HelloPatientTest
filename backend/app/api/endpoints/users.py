from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ...core.database import get_db
from ...services.user_service import UserService
from ...schemas.user import UserRead

router = APIRouter()

@router.get("/me", response_model=UserRead)
async def get_my_user(db: AsyncSession = Depends(get_db)):
    async with db.begin():
        user_service = UserService(db)
        return await user_service.get_current_user() 