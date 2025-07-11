from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional
import os
import logging
from pathlib import Path
from datetime import datetime
import asyncio

# Import models
from .models.location import Location, LocationCreate, LocationUpdate, SearchQuery
from .models.bookmark import Bookmark, BookmarkCreate, BookmarkUpdate
from .models.route import Route, RouteRequest, RouteInstruction, SavedRoute
from .models.offline_area import OfflineArea, OfflineAreaCreate, OfflineAreaUpdate, DownloadRequest
from .models.poi import PointOfInterest, POICreate, POIUpdate, POISearch

# Import services
from .services.database import DatabaseService

ROOT_DIR = Path(__file__).parent
load_dotenv = lambda path: None  # Simple placeholder

# Load environment variables
try:
    from dotenv import load_dotenv
    load_dotenv(ROOT_DIR / '.env')
except ImportError:
    pass

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'offline_navigation')

client = AsyncIOMotorClient(mongo_url)
db_service = DatabaseService(client, db_name)

# Create the main app
app = FastAPI(title="Offline Navigation API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "Offline Navigation API is running"}

# Location endpoints
@api_router.get("/locations/search", response_model=List[Location])
async def search_locations(
    query: str = Query(..., description="Search query"),
    limit: int = Query(10, ge=1, le=100),
    offset: int = Query(0, ge=0)
):
    """Search locations by name, address, or category"""
    try:
        locations = await db_service.search_locations(query, limit, offset)
        return locations
    except Exception as e:
        logger.error(f"Error searching locations: {e}")
        raise HTTPException(status_code=500, detail="Failed to search locations")

@api_router.get("/locations/{location_id}", response_model=Location)
async def get_location(location_id: str):
    """Get a specific location by ID"""
    try:
        location = await db_service.get_location_by_id(location_id)
        if not location:
            raise HTTPException(status_code=404, detail="Location not found")
        return location
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting location: {e}")
        raise HTTPException(status_code=500, detail="Failed to get location")

@api_router.get("/locations/region/{region}", response_model=List[Location])
async def get_locations_by_region(
    region: str,
    limit: int = Query(100, ge=1, le=500)
):
    """Get locations by region"""
    try:
        locations = await db_service.get_locations_by_region(region, limit)
        return locations
    except Exception as e:
        logger.error(f"Error getting locations by region: {e}")
        raise HTTPException(status_code=500, detail="Failed to get locations")

@api_router.post("/locations", response_model=Location)
async def create_location(location: LocationCreate):
    """Create a new location"""
    try:
        location_dict = location.dict()
        location_dict["created_at"] = datetime.utcnow()
        location_dict["updated_at"] = datetime.utcnow()
        result = await db_service.create_location(location_dict)
        return result
    except Exception as e:
        logger.error(f"Error creating location: {e}")
        raise HTTPException(status_code=500, detail="Failed to create location")

# Bookmark endpoints
@api_router.get("/bookmarks", response_model=List[Bookmark])
async def get_bookmarks(limit: int = Query(100, ge=1, le=500)):
    """Get all bookmarks"""
    try:
        bookmarks = await db_service.get_bookmarks(limit)
        return bookmarks
    except Exception as e:
        logger.error(f"Error getting bookmarks: {e}")
        raise HTTPException(status_code=500, detail="Failed to get bookmarks")

@api_router.get("/bookmarks/category/{category}", response_model=List[Bookmark])
async def get_bookmarks_by_category(category: str):
    """Get bookmarks by category"""
    try:
        bookmarks = await db_service.get_bookmarks_by_category(category)
        return bookmarks
    except Exception as e:
        logger.error(f"Error getting bookmarks by category: {e}")
        raise HTTPException(status_code=500, detail="Failed to get bookmarks")

@api_router.post("/bookmarks", response_model=Bookmark)
async def create_bookmark(bookmark: BookmarkCreate):
    """Create a new bookmark"""
    try:
        bookmark_dict = bookmark.dict()
        bookmark_dict["date_added"] = datetime.utcnow()
        result = await db_service.create_bookmark(bookmark_dict)
        return result
    except Exception as e:
        logger.error(f"Error creating bookmark: {e}")
        raise HTTPException(status_code=500, detail="Failed to create bookmark")

@api_router.delete("/bookmarks/{bookmark_id}")
async def delete_bookmark(bookmark_id: str):
    """Delete a bookmark"""
    try:
        success = await db_service.delete_bookmark(bookmark_id)
        if not success:
            raise HTTPException(status_code=404, detail="Bookmark not found")
        return {"message": "Bookmark deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting bookmark: {e}")
        raise HTTPException(status_code=500, detail="Failed to delete bookmark")

# Route endpoints
@api_router.post("/routes/calculate", response_model=Route)
async def calculate_route(route_request: RouteRequest):
    """Calculate a route between two points"""
    try:
        # Mock route calculation
        from_coords = route_request.from_coordinates
        to_coords = route_request.to_coordinates
        
        # Calculate basic distance (this is a simplified calculation)
        lat_diff = abs(from_coords[0] - to_coords[0])
        lng_diff = abs(from_coords[1] - to_coords[1])
        distance_km = ((lat_diff ** 2 + lng_diff ** 2) ** 0.5) * 111  # Rough conversion
        
        # Create mock route data
        route_data = {
            "from_location": {
                "name": route_request.from_name,
                "address": route_request.from_address,
                "coordinates": from_coords
            },
            "to_location": {
                "name": route_request.to_name,
                "address": route_request.to_address,
                "coordinates": to_coords
            },
            "distance": f"{distance_km:.1f} km",
            "duration": f"{int(distance_km * 2)} minutes",
            "coordinates": [from_coords, to_coords],  # Simplified line
            "instructions": [
                {
                    "id": 1,
                    "instruction": f"Head from {route_request.from_name}",
                    "distance": f"{distance_km/2:.1f} km",
                    "duration": f"{int(distance_km)} minutes",
                    "direction": "straight",
                    "icon": "arrow-up"
                },
                {
                    "id": 2,
                    "instruction": f"Arrive at {route_request.to_name}",
                    "distance": f"{distance_km/2:.1f} km",
                    "duration": f"{int(distance_km)} minutes",
                    "direction": "arrive",
                    "icon": "map-pin"
                }
            ],
            "route_type": route_request.route_type,
            "traffic_level": "moderate",
            "fuel_cost": f"${distance_km * 0.15:.2f}",
            "created_at": datetime.utcnow()
        }
        
        result = await db_service.create_route(route_data)
        return result
    except Exception as e:
        logger.error(f"Error calculating route: {e}")
        raise HTTPException(status_code=500, detail="Failed to calculate route")

@api_router.get("/routes/{route_id}", response_model=Route)
async def get_route(route_id: str):
    """Get a specific route by ID"""
    try:
        route = await db_service.get_route_by_id(route_id)
        if not route:
            raise HTTPException(status_code=404, detail="Route not found")
        return route
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting route: {e}")
        raise HTTPException(status_code=500, detail="Failed to get route")

# Offline area endpoints
@api_router.get("/offline-areas", response_model=List[OfflineArea])
async def get_offline_areas(limit: int = Query(100, ge=1, le=500)):
    """Get all offline areas"""
    try:
        areas = await db_service.get_offline_areas(limit)
        return areas
    except Exception as e:
        logger.error(f"Error getting offline areas: {e}")
        raise HTTPException(status_code=500, detail="Failed to get offline areas")

@api_router.get("/offline-areas/region/{region}", response_model=List[OfflineArea])
async def get_offline_areas_by_region(region: str):
    """Get offline areas by region"""
    try:
        areas = await db_service.get_offline_areas_by_region(region)
        return areas
    except Exception as e:
        logger.error(f"Error getting offline areas by region: {e}")
        raise HTTPException(status_code=500, detail="Failed to get offline areas")

@api_router.post("/offline-areas", response_model=OfflineArea)
async def create_offline_area(area: OfflineAreaCreate):
    """Create a new offline area"""
    try:
        area_dict = area.dict()
        area_dict["created_at"] = datetime.utcnow()
        area_dict["last_updated"] = datetime.utcnow().strftime("%Y-%m-%d")
        result = await db_service.create_offline_area(area_dict)
        return result
    except Exception as e:
        logger.error(f"Error creating offline area: {e}")
        raise HTTPException(status_code=500, detail="Failed to create offline area")

@api_router.post("/offline-areas/{area_id}/download")
async def download_offline_area(area_id: str):
    """Start downloading an offline area"""
    try:
        # Mock download process
        update_data = {
            "status": "downloading",
            "progress": 0,
            "last_updated": datetime.utcnow().strftime("%Y-%m-%d")
        }
        
        success = await db_service.update_offline_area(area_id, update_data)
        if not success:
            raise HTTPException(status_code=404, detail="Offline area not found")
        
        # In a real implementation, this would trigger an actual download process
        return {"message": "Download started", "area_id": area_id}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error starting download: {e}")
        raise HTTPException(status_code=500, detail="Failed to start download")

@api_router.delete("/offline-areas/{area_id}")
async def delete_offline_area(area_id: str):
    """Delete an offline area"""
    try:
        success = await db_service.delete_offline_area(area_id)
        if not success:
            raise HTTPException(status_code=404, detail="Offline area not found")
        return {"message": "Offline area deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting offline area: {e}")
        raise HTTPException(status_code=500, detail="Failed to delete offline area")

# POI endpoints
@api_router.get("/pois/search", response_model=List[PointOfInterest])
async def search_pois(
    query: Optional[str] = Query(None),
    poi_type: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    city: Optional[str] = Query(None),
    limit: int = Query(10, ge=1, le=100),
    offset: int = Query(0, ge=0)
):
    """Search POIs"""
    try:
        pois = await db_service.search_pois(query, poi_type, region, city, limit, offset)
        return pois
    except Exception as e:
        logger.error(f"Error searching POIs: {e}")
        raise HTTPException(status_code=500, detail="Failed to search POIs")

@api_router.get("/pois/type/{poi_type}", response_model=List[PointOfInterest])
async def get_pois_by_type(
    poi_type: str,
    limit: int = Query(50, ge=1, le=200)
):
    """Get POIs by type"""
    try:
        pois = await db_service.get_pois_by_type(poi_type, limit)
        return pois
    except Exception as e:
        logger.error(f"Error getting POIs by type: {e}")
        raise HTTPException(status_code=500, detail="Failed to get POIs")

@api_router.post("/pois", response_model=PointOfInterest)
async def create_poi(poi: POICreate):
    """Create a new POI"""
    try:
        poi_dict = poi.dict()
        poi_dict["created_at"] = datetime.utcnow()
        poi_dict["updated_at"] = datetime.utcnow()
        result = await db_service.create_poi(poi_dict)
        return result
    except Exception as e:
        logger.error(f"Error creating POI: {e}")
        raise HTTPException(status_code=500, detail="Failed to create POI")

# Include the router in the main app
app.include_router(api_router)

# Startup event to initialize data
@app.on_event("startup")
async def startup_event():
    """Initialize database with mock data on startup"""
    try:
        await db_service.initialize_data()
        logger.info("Database initialized with mock data")
    except Exception as e:
        logger.error(f"Error initializing database: {e}")

# Shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    """Close database connection on shutdown"""
    client.close()
    logger.info("Database connection closed")
