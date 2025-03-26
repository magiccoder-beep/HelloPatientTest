from datetime import datetime
from pydantic import BaseModel

class MessageCreate(BaseModel):
    content: str

class MessageRead(BaseModel):
    id: int
    content: str
    user_id: int
    is_bot: bool
    created_at: datetime

    class Config:
        from_attributes = True 