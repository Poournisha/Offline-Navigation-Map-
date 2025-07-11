from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class RouteInstruction(BaseModel):
    id: int
    instruction: str
    distance: str
    duration: str
    direction: str  # straight, left, right, u-turn, arrive
    icon: str

class Route(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    from_location: dict  # Location object
    to_location: dict    # Location object
    distance: str
    duration: str
    coordinates: List[List[float]]  # Array of [lat, lng] coordinates
    instructions: List[RouteInstruction]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    route_type: str = Field("fastest", description="fastest, shortest, scenic")
    traffic_level: str = Field("moderate", description="light, moderate, heavy")
    fuel_cost: Optional[str] = None

class RouteRequest(BaseModel):
    from_coordinates: List[float] = Field(..., min_items=2, max_items=2)
    to_coordinates: List[float] = Field(..., min_items=2, max_items=2)
    from_name: str
    to_name: str
    from_address: str
    to_address: str
    route_type: Optional[str] = Field("fastest", description="fastest, shortest, scenic")

class SavedRoute(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    route_id: str
    name: str
    saved_at: datetime = Field(default_factory=datetime.utcnow)
    user_id: Optional[str] = None