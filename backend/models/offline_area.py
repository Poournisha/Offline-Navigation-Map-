from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class OfflineArea(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)  # Center coordinates
    size: str  # e.g., "125 MB"
    last_updated: str  # Date string
    status: str  # downloaded, available, downloading
    progress: Optional[int] = Field(None, ge=0, le=100)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    region: str  # e.g., "South Korea", "Tamil Nadu", "India"
    city: str    # e.g., "Seoul", "Chennai", "Mumbai"

class OfflineAreaCreate(BaseModel):
    name: str
    description: str
    coordinates: List[float] = Field(..., min_items=2, max_items=2)
    size: str
    region: str
    city: str
    status: str = Field("available", description="available, downloading, downloaded")

class OfflineAreaUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    coordinates: Optional[List[float]] = Field(None, min_items=2, max_items=2)
    size: Optional[str] = None
    last_updated: Optional[str] = None
    status: Optional[str] = None
    progress: Optional[int] = Field(None, ge=0, le=100)
    region: Optional[str] = None
    city: Optional[str] = None

class DownloadRequest(BaseModel):
    area_id: str