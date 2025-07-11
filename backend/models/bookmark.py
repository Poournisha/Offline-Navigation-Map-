from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Bookmark(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    address: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)  # [lat, lng]
    category: str  # home, work, restaurant, fitness, custom, favorite, recreation, religious
    date_added: datetime = Field(default_factory=datetime.utcnow)
    user_id: Optional[str] = None  # For future user management
    notes: Optional[str] = None

class BookmarkCreate(BaseModel):
    name: str
    address: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)
    category: str
    notes: Optional[str] = None

class BookmarkUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None
    coordinates: Optional[List[float]] = Field(None, min_items=2, max_items=2)
    category: Optional[str] = None
    notes: Optional[str] = None