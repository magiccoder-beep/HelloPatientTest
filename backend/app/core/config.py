from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://postgres:123456789@localhost:5432/user_db"
    API_PREFIX: str = "/api"

settings = Settings() 