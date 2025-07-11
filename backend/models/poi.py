from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class PointOfInterest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    type: str  # hospital, cafe, fuel, shopping, restaurant, convenience, hotel
    coordinates: List[float] = Field(..., min_items=2, max_items=2)  # [lat, lng]
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)
    address: Optional[str] = None
    phone: Optional[str] = None
    hours: Optional[str] = None
    website: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    region: str  # e.g., "South Korea", "Tamil Nadu", "India"
    city: str    # e.g., "Seoul", "Chennai", "Mumbai"

class POICreate(BaseModel):
    name: str
    type: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)
    address: Optional[str] = None
    phone: Optional[str] = None
    hours: Optional[str] = None
    website: Optional[str] = None
    region: str
    city: str

class POIUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    coordinates: Optional[List[float]] = Field(None, min_items=2, max_items=2)
    rating: Optional[float] = Field(None, ge=0, le=5)
    reviews: Optional[int] = Field(None, ge=0)
    address: Optional[str] = None
    phone: Optional[str] = None
    hours: Optional[str] = None
    website: Optional[str] = None
    region: Optional[str] = None
    city: Optional[str] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class POISearch(BaseModel):
    query: Optional[str] = None
    type: Optional[str] = None
    region: Optional[str] = None
    city: Optional[str] = None
    limit: Optional[int] = Field(10, ge=1, le=100)
    offset: Optional[int] = Field(0, ge=0)