from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional, Dict, Any
import os
from datetime import datetime
import re

class DatabaseService:
    def __init__(self, client: AsyncIOMotorClient, db_name: str):
        self.client = client
        self.db = client[db_name]
    
    # Location Services
    async def create_location(self, location_data: dict) -> dict:
        """Create a new location"""
        result = await self.db.locations.insert_one(location_data)
        location_data['_id'] = str(result.inserted_id)
        return location_data
    
    async def search_locations(self, query: str, limit: int = 10, offset: int = 0) -> List[dict]:
        """Search locations by name or address"""
        search_pattern = re.compile(query, re.IGNORECASE)
        cursor = self.db.locations.find({
            "$or": [
                {"name": {"$regex": search_pattern}},
                {"address": {"$regex": search_pattern}},
                {"category": {"$regex": search_pattern}},
                {"type": {"$regex": search_pattern}}
            ]
        }).skip(offset).limit(limit)
        
        locations = []
        async for location in cursor:
            location['_id'] = str(location['_id'])
            locations.append(location)
        return locations
    
    async def get_location_by_id(self, location_id: str) -> Optional[dict]:
        """Get location by ID"""
        location = await self.db.locations.find_one({"id": location_id})
        if location:
            location['_id'] = str(location['_id'])
        return location
    
    async def get_locations_by_region(self, region: str, limit: int = 100) -> List[dict]:
        """Get locations by region"""
        cursor = self.db.locations.find({
            "address": {"$regex": region, "$options": "i"}
        }).limit(limit)
        
        locations = []
        async for location in cursor:
            location['_id'] = str(location['_id'])
            locations.append(location)
        return locations
    
    # Bookmark Services
    async def create_bookmark(self, bookmark_data: dict) -> dict:
        """Create a new bookmark"""
        result = await self.db.bookmarks.insert_one(bookmark_data)
        bookmark_data['_id'] = str(result.inserted_id)
        return bookmark_data
    
    async def get_bookmarks(self, limit: int = 100) -> List[dict]:
        """Get all bookmarks"""
        cursor = self.db.bookmarks.find({}).limit(limit)
        bookmarks = []
        async for bookmark in cursor:
            bookmark['_id'] = str(bookmark['_id'])
            bookmarks.append(bookmark)
        return bookmarks
    
    async def get_bookmarks_by_category(self, category: str) -> List[dict]:
        """Get bookmarks by category"""
        cursor = self.db.bookmarks.find({"category": category})
        bookmarks = []
        async for bookmark in cursor:
            bookmark['_id'] = str(bookmark['_id'])
            bookmarks.append(bookmark)
        return bookmarks
    
    async def delete_bookmark(self, bookmark_id: str) -> bool:
        """Delete a bookmark"""
        result = await self.db.bookmarks.delete_one({"id": bookmark_id})
        return result.deleted_count > 0
    
    # Route Services
    async def create_route(self, route_data: dict) -> dict:
        """Create a new route"""
        result = await self.db.routes.insert_one(route_data)
        route_data['_id'] = str(result.inserted_id)
        return route_data
    
    async def get_route_by_id(self, route_id: str) -> Optional[dict]:
        """Get route by ID"""
        route = await self.db.routes.find_one({"id": route_id})
        if route:
            route['_id'] = str(route['_id'])
        return route
    
    async def get_saved_routes(self, limit: int = 50) -> List[dict]:
        """Get saved routes"""
        cursor = self.db.saved_routes.find({}).limit(limit)
        routes = []
        async for route in cursor:
            route['_id'] = str(route['_id'])
            routes.append(route)
        return routes
    
    async def save_route(self, route_data: dict) -> dict:
        """Save a route"""
        result = await self.db.saved_routes.insert_one(route_data)
        route_data['_id'] = str(result.inserted_id)
        return route_data
    
    # Offline Area Services
    async def create_offline_area(self, area_data: dict) -> dict:
        """Create a new offline area"""
        result = await self.db.offline_areas.insert_one(area_data)
        area_data['_id'] = str(result.inserted_id)
        return area_data
    
    async def get_offline_areas(self, limit: int = 100) -> List[dict]:
        """Get all offline areas"""
        cursor = self.db.offline_areas.find({}).limit(limit)
        areas = []
        async for area in cursor:
            area['_id'] = str(area['_id'])
            areas.append(area)
        return areas
    
    async def get_offline_areas_by_region(self, region: str) -> List[dict]:
        """Get offline areas by region"""
        cursor = self.db.offline_areas.find({"region": region})
        areas = []
        async for area in cursor:
            area['_id'] = str(area['_id'])
            areas.append(area)
        return areas
    
    async def update_offline_area(self, area_id: str, update_data: dict) -> bool:
        """Update offline area"""
        result = await self.db.offline_areas.update_one(
            {"id": area_id},
            {"$set": update_data}
        )
        return result.modified_count > 0
    
    async def delete_offline_area(self, area_id: str) -> bool:
        """Delete offline area"""
        result = await self.db.offline_areas.delete_one({"id": area_id})
        return result.deleted_count > 0
    
    # POI Services
    async def create_poi(self, poi_data: dict) -> dict:
        """Create a new POI"""
        result = await self.db.pois.insert_one(poi_data)
        poi_data['_id'] = str(result.inserted_id)
        return poi_data
    
    async def search_pois(self, query: Optional[str] = None, poi_type: Optional[str] = None, 
                         region: Optional[str] = None, city: Optional[str] = None,
                         limit: int = 10, offset: int = 0) -> List[dict]:
        """Search POIs"""
        filters = {}
        
        if query:
            search_pattern = re.compile(query, re.IGNORECASE)
            filters["$or"] = [
                {"name": {"$regex": search_pattern}},
                {"address": {"$regex": search_pattern}},
                {"type": {"$regex": search_pattern}}
            ]
        
        if poi_type:
            filters["type"] = poi_type
        
        if region:
            filters["region"] = region
        
        if city:
            filters["city"] = city
        
        cursor = self.db.pois.find(filters).skip(offset).limit(limit)
        pois = []
        async for poi in cursor:
            poi['_id'] = str(poi['_id'])
            pois.append(poi)
        return pois
    
    async def get_pois_by_type(self, poi_type: str, limit: int = 50) -> List[dict]:
        """Get POIs by type"""
        cursor = self.db.pois.find({"type": poi_type}).limit(limit)
        pois = []
        async for poi in cursor:
            poi['_id'] = str(poi['_id'])
            pois.append(poi)
        return pois
    
    # Initialization method to populate mock data
    async def initialize_data(self):
        """Initialize database with mock data"""
        # Check if data already exists
        locations_count = await self.db.locations.count_documents({})
        if locations_count > 0:
            return  # Data already exists
        
        # Import mock data
        from ..utils.mock_data import get_mock_locations, get_mock_bookmarks, get_mock_offline_areas, get_mock_pois
        
        # Insert locations
        locations = get_mock_locations()
        if locations:
            await self.db.locations.insert_many(locations)
        
        # Insert bookmarks
        bookmarks = get_mock_bookmarks()
        if bookmarks:
            await self.db.bookmarks.insert_many(bookmarks)
        
        # Insert offline areas
        offline_areas = get_mock_offline_areas()
        if offline_areas:
            await self.db.offline_areas.insert_many(offline_areas)
        
        # Insert POIs
        pois = get_mock_pois()
        if pois:
            await self.db.pois.insert_many(pois)