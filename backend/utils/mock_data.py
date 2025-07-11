from datetime import datetime
from typing import List, Dict

def get_mock_locations() -> List[Dict]:
    """Get mock location data for database initialization"""
    return [
        # Seoul, South Korea
        {
            "id": "1",
            "name": "Seoul Station",
            "address": "405 Hangang-daero, Jung-gu, Seoul",
            "coordinates": [37.5563, 126.9723],
            "type": "transportation",
            "category": "Railway Station",
            "rating": 4.2,
            "reviews": 2500,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "2",
            "name": "Myeongdong Cathedral",
            "address": "74 Myeongdong-gil, Jung-gu, Seoul",
            "coordinates": [37.5633, 126.9784],
            "type": "religious",
            "category": "Church",
            "rating": 4.5,
            "reviews": 1800,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "3",
            "name": "Dongdaemun Design Plaza",
            "address": "281 Eulji-ro, Jung-gu, Seoul",
            "coordinates": [37.5665, 126.9780],
            "type": "landmark",
            "category": "Cultural Center",
            "rating": 4.3,
            "reviews": 3200,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "4",
            "name": "Hongdae Park",
            "address": "188 Yanghwa-ro, Mapo-gu, Seoul",
            "coordinates": [37.5563, 126.9236],
            "type": "park",
            "category": "Recreation",
            "rating": 4.1,
            "reviews": 1500,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "5",
            "name": "Lotte World Tower",
            "address": "300 Olympic-ro, Songpa-gu, Seoul",
            "coordinates": [37.5125, 127.1025],
            "type": "landmark",
            "category": "Skyscraper",
            "rating": 4.6,
            "reviews": 4500,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "6",
            "name": "Gangnam Station",
            "address": "396 Gangnam-daero, Gangnam-gu, Seoul",
            "coordinates": [37.4979, 127.0276],
            "type": "transportation",
            "category": "Subway Station",
            "rating": 4.0,
            "reviews": 1200,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Mumbai, India
        {
            "id": "9",
            "name": "Gateway of India",
            "address": "Apollo Bandar, Colaba, Mumbai, Maharashtra",
            "coordinates": [18.9220, 72.8347],
            "type": "landmark",
            "category": "Monument",
            "rating": 4.4,
            "reviews": 5600,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "10",
            "name": "Chhatrapati Shivaji Terminus",
            "address": "Dr Dadabhai Naoroji Rd, Fort, Mumbai, Maharashtra",
            "coordinates": [18.9401, 72.8355],
            "type": "transportation",
            "category": "Railway Station",
            "rating": 4.3,
            "reviews": 3400,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Chennai, Tamil Nadu
        {
            "id": "21",
            "name": "Marina Beach",
            "address": "Marina Beach, Chennai, Tamil Nadu",
            "coordinates": [13.0489, 80.2519],
            "type": "beach",
            "category": "Beach",
            "rating": 4.2,
            "reviews": 8900,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "22",
            "name": "Kapaleeshwarar Temple",
            "address": "Mylapore, Chennai, Tamil Nadu",
            "coordinates": [13.0339, 80.2619],
            "type": "religious",
            "category": "Temple",
            "rating": 4.6,
            "reviews": 6700,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "23",
            "name": "Fort St. George",
            "address": "Fort St George, Chennai, Tamil Nadu",
            "coordinates": [13.0827, 80.2707],
            "type": "landmark",
            "category": "Historical Fort",
            "rating": 4.1,
            "reviews": 2300,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Madurai, Tamil Nadu
        {
            "id": "28",
            "name": "Meenakshi Amman Temple",
            "address": "Madurai Main, Madurai, Tamil Nadu",
            "coordinates": [9.9195, 78.1193],
            "type": "religious",
            "category": "Temple",
            "rating": 4.8,
            "reviews": 12000,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "29",
            "name": "Thirumalai Nayakkar Palace",
            "address": "Palace Rd, Madurai, Tamil Nadu",
            "coordinates": [9.9252, 78.1198],
            "type": "landmark",
            "category": "Palace",
            "rating": 4.4,
            "reviews": 3500,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Coimbatore, Tamil Nadu
        {
            "id": "25",
            "name": "Marudhamalai Temple",
            "address": "Marudhamalai, Coimbatore, Tamil Nadu",
            "coordinates": [11.0510, 76.8936],
            "type": "religious",
            "category": "Temple",
            "rating": 4.5,
            "reviews": 2800,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Kodaikanal, Tamil Nadu
        {
            "id": "56",
            "name": "Kodaikanal Lake",
            "address": "Kodaikanal, Tamil Nadu",
            "coordinates": [10.2381, 77.4892],
            "type": "lake",
            "category": "Lake",
            "rating": 4.4,
            "reviews": 4200,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Kanyakumari, Tamil Nadu
        {
            "id": "51",
            "name": "Kanyakumari Beach",
            "address": "Kanyakumari, Tamil Nadu",
            "coordinates": [8.0883, 77.5385],
            "type": "beach",
            "category": "Beach",
            "rating": 4.3,
            "reviews": 6500,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "52",
            "name": "Vivekananda Rock Memorial",
            "address": "Kanyakumari, Tamil Nadu",
            "coordinates": [8.0773, 77.5496],
            "type": "landmark",
            "category": "Memorial",
            "rating": 4.7,
            "reviews": 8900,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]

def get_mock_bookmarks() -> List[Dict]:
    """Get mock bookmark data for database initialization"""
    return [
        {
            "id": "1",
            "name": "Home",
            "address": "123 Apartment Complex, Gangnam-gu, Seoul",
            "coordinates": [37.4979, 127.0276],
            "category": "home",
            "date_added": datetime.utcnow(),
            "notes": "My home address"
        },
        {
            "id": "2",
            "name": "Office",
            "address": "456 Business Tower, Jung-gu, Seoul",
            "coordinates": [37.5665, 126.9780],
            "category": "work",
            "date_added": datetime.utcnow(),
            "notes": "Main office location"
        },
        {
            "id": "11",
            "name": "Meenakshi Temple",
            "address": "Madurai Main, Madurai, Tamil Nadu",
            "coordinates": [9.9195, 78.1193],
            "category": "religious",
            "date_added": datetime.utcnow(),
            "notes": "Famous temple in Madurai"
        },
        {
            "id": "13",
            "name": "Kodaikanal Lake",
            "address": "Kodaikanal, Tamil Nadu",
            "coordinates": [10.2381, 77.4892],
            "category": "recreation",
            "date_added": datetime.utcnow(),
            "notes": "Beautiful hill station lake"
        },
        {
            "id": "15",
            "name": "Kanyakumari Beach",
            "address": "Kanyakumari, Tamil Nadu",
            "coordinates": [8.0883, 77.5385],
            "category": "favorite",
            "date_added": datetime.utcnow(),
            "notes": "Southernmost tip of India"
        },
        {
            "id": "9",
            "name": "Marina Beach",
            "address": "Marina Beach, Chennai, Tamil Nadu",
            "coordinates": [13.0489, 80.2519],
            "category": "favorite",
            "date_added": datetime.utcnow(),
            "notes": "One of the longest beaches in the world"
        }
    ]

def get_mock_offline_areas() -> List[Dict]:
    """Get mock offline area data for database initialization"""
    return [
        {
            "id": "1",
            "name": "Seoul City Center",
            "description": "Downtown Seoul including Myeongdong and Jung-gu",
            "coordinates": [37.5665, 126.9780],
            "size": "125 MB",
            "last_updated": "2024-01-15",
            "status": "downloaded",
            "progress": 100,
            "region": "South Korea",
            "city": "Seoul",
            "created_at": datetime.utcnow()
        },
        {
            "id": "13",
            "name": "Chennai IT Corridor",
            "description": "OMR and IT parks including Sholinganallur and Siruseri",
            "coordinates": [12.9010, 80.2279],
            "size": "95 MB",
            "last_updated": "2024-02-20",
            "status": "downloaded",
            "progress": 100,
            "region": "Tamil Nadu",
            "city": "Chennai",
            "created_at": datetime.utcnow()
        },
        {
            "id": "15",
            "name": "Madurai Heritage",
            "description": "Historic Madurai including Meenakshi Temple and Palace",
            "coordinates": [9.9195, 78.1193],
            "size": "76 MB",
            "last_updated": "2024-02-25",
            "status": "downloaded",
            "progress": 100,
            "region": "Tamil Nadu",
            "city": "Madurai",
            "created_at": datetime.utcnow()
        },
        {
            "id": "22",
            "name": "Kodaikanal Hill Station",
            "description": "Complete Kodaikanal including lake and viewpoints",
            "coordinates": [10.2381, 77.4892],
            "size": "38 MB",
            "last_updated": "2024-03-12",
            "status": "downloaded",
            "progress": 100,
            "region": "Tamil Nadu",
            "city": "Kodaikanal",
            "created_at": datetime.utcnow()
        },
        {
            "id": "14",
            "name": "Coimbatore City",
            "description": "Coimbatore including RS Puram and Gandhipuram",
            "coordinates": [11.0168, 76.9558],
            "size": "87 MB",
            "last_updated": "2024-02-22",
            "status": "available",
            "progress": 0,
            "region": "Tamil Nadu",
            "city": "Coimbatore",
            "created_at": datetime.utcnow()
        }
    ]

def get_mock_pois() -> List[Dict]:
    """Get mock POI data for database initialization"""
    return [
        {
            "id": "6",
            "name": "Apollo Hospital Chennai",
            "type": "hospital",
            "coordinates": [13.0358, 80.2297],
            "rating": 4.7,
            "reviews": 3450,
            "address": "21 Greams Lane, Off Greams Road, Chennai",
            "phone": "+91-44-2829-3333",
            "hours": "24/7",
            "region": "Tamil Nadu",
            "city": "Chennai",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "7",
            "name": "Saravana Bhavan",
            "type": "restaurant",
            "coordinates": [13.0827, 80.2707],
            "rating": 4.4,
            "reviews": 2890,
            "address": "Multiple locations in Chennai",
            "phone": "+91-44-2811-2222",
            "hours": "6:00 AM - 11:00 PM",
            "region": "Tamil Nadu",
            "city": "Chennai",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "14",
            "name": "Meenakshi Mission Hospital",
            "type": "hospital",
            "coordinates": [9.9195, 78.1193],
            "rating": 4.5,
            "reviews": 1890,
            "address": "Lake Area, Melur Main Road, Madurai",
            "phone": "+91-452-2580-581",
            "hours": "24/7",
            "region": "Tamil Nadu",
            "city": "Madurai",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "11",
            "name": "Kovai Medical Center",
            "type": "hospital",
            "coordinates": [11.0168, 76.9558],
            "rating": 4.6,
            "reviews": 2340,
            "address": "99 Avanashi Road, Coimbatore",
            "phone": "+91-422-4324-324",
            "hours": "24/7",
            "region": "Tamil Nadu",
            "city": "Coimbatore",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "id": "2",
            "name": "Starbucks Myeongdong",
            "type": "cafe",
            "coordinates": [37.5633, 126.9784],
            "rating": 4.2,
            "reviews": 890,
            "address": "Myeongdong, Seoul",
            "phone": "+82-2-123-4567",
            "hours": "6:00 AM - 11:00 PM",
            "region": "South Korea",
            "city": "Seoul",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]