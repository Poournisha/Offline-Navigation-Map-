from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Coordinates(BaseModel):
    latitude: float = Field(..., ge=-90, le=90)
    longitude: float = Field(..., ge=-180, le=180)

class Location(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    address: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)  # [lat, lng]
    type: str
    category: str
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class LocationCreate(BaseModel):
    name: str
    address: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)
    type: str
    category: str
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)

class LocationUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None
    coordinates: Optional[List[float]] = Field(None, min_items=2, max_items=2)
    type: Optional[str] = None
    category: Optional[str] = None
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class SearchQuery(BaseModel):
    query: str = Field(..., min_length=1)
    limit: Optional[int] = Field(10, ge=1, le=100)
    offset: Optional[int] = Field(0, ge=0)