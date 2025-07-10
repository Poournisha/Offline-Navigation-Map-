export const mockData = {
  currentLocation: {
    id: 'current',
    name: 'Current Location',
    address: '123 Main St, Seoul, South Korea',
    coordinates: [37.5665, 126.9780],
    type: 'current'
  },

  searchResults: [
    // Seoul, South Korea
    {
      id: 1,
      name: 'Seoul Station',
      address: '405 Hangang-daero, Jung-gu, Seoul',
      coordinates: [37.5563, 126.9723],
      type: 'transportation',
      category: 'Railway Station'
    },
    {
      id: 2,
      name: 'Myeongdong Cathedral',
      address: '74 Myeongdong-gil, Jung-gu, Seoul',
      coordinates: [37.5633, 126.9784],
      type: 'religious',
      category: 'Church'
    },
    {
      id: 3,
      name: 'Dongdaemun Design Plaza',
      address: '281 Eulji-ro, Jung-gu, Seoul',
      coordinates: [37.5665, 126.9780],
      type: 'landmark',
      category: 'Cultural Center'
    },
    {
      id: 4,
      name: 'Hongdae Park',
      address: '188 Yanghwa-ro, Mapo-gu, Seoul',
      coordinates: [37.5563, 126.9236],
      type: 'park',
      category: 'Recreation'
    },
    {
      id: 5,
      name: 'Lotte World Tower',
      address: '300 Olympic-ro, Songpa-gu, Seoul',
      coordinates: [37.5125, 127.1025],
      type: 'landmark',
      category: 'Skyscraper'
    },
    {
      id: 6,
      name: 'Gangnam Station',
      address: '396 Gangnam-daero, Gangnam-gu, Seoul',
      coordinates: [37.4979, 127.0276],
      type: 'transportation',
      category: 'Subway Station'
    },
    {
      id: 7,
      name: 'Itaewon',
      address: 'Itaewon-dong, Yongsan-gu, Seoul',
      coordinates: [37.5349, 126.9947],
      type: 'district',
      category: 'Entertainment District'
    },
    {
      id: 8,
      name: 'Cheonggyecheon Stream',
      address: 'Jung-gu, Seoul',
      coordinates: [37.5693, 126.9775],
      type: 'nature',
      category: 'Stream'
    },
    // Mumbai, India
    {
      id: 9,
      name: 'Gateway of India',
      address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra',
      coordinates: [18.9220, 72.8347],
      type: 'landmark',
      category: 'Monument'
    },
    {
      id: 10,
      name: 'Chhatrapati Shivaji Terminus',
      address: 'Dr Dadabhai Naoroji Rd, Fort, Mumbai, Maharashtra',
      coordinates: [18.9401, 72.8355],
      type: 'transportation',
      category: 'Railway Station'
    },
    {
      id: 11,
      name: 'Marine Drive',
      address: 'Netaji Subhash Chandra Bose Rd, Mumbai, Maharashtra',
      coordinates: [18.9439, 72.8230],
      type: 'landmark',
      category: 'Promenade'
    },
    {
      id: 12,
      name: 'Juhu Beach',
      address: 'Juhu, Mumbai, Maharashtra',
      coordinates: [19.0990, 72.8265],
      type: 'beach',
      category: 'Beach'
    },
    // Delhi, India
    {
      id: 13,
      name: 'Red Fort',
      address: 'Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi',
      coordinates: [28.6562, 77.2410],
      type: 'landmark',
      category: 'Historical Monument'
    },
    {
      id: 14,
      name: 'India Gate',
      address: 'Rajpath, India Gate, New Delhi',
      coordinates: [28.6129, 77.2295],
      type: 'landmark',
      category: 'War Memorial'
    },
    {
      id: 15,
      name: 'Connaught Place',
      address: 'Connaught Place, New Delhi',
      coordinates: [28.6315, 77.2167],
      type: 'commercial',
      category: 'Shopping District'
    },
    {
      id: 16,
      name: 'Lotus Temple',
      address: 'Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi',
      coordinates: [28.5535, 77.2588],
      type: 'religious',
      category: 'Temple'
    },
    // Bangalore, India
    {
      id: 17,
      name: 'Lalbagh Botanical Garden',
      address: 'Mavalli, Bengaluru, Karnataka',
      coordinates: [12.9507, 77.5848],
      type: 'park',
      category: 'Botanical Garden'
    },
    {
      id: 18,
      name: 'Bangalore Palace',
      address: 'Vasanth Nagar, Bengaluru, Karnataka',
      coordinates: [12.9981, 77.5925],
      type: 'landmark',
      category: 'Palace'
    },
    {
      id: 19,
      name: 'Cubbon Park',
      address: 'Kasturba Rd, Sampangi Rama Nagar, Bengaluru, Karnataka',
      coordinates: [12.9719, 77.5937],
      type: 'park',
      category: 'Public Park'
    },
    {
      id: 20,
      name: 'UB City Mall',
      address: 'UB City, Vittal Mallya Rd, Bengaluru, Karnataka',
      coordinates: [12.9719, 77.5937],
      type: 'commercial',
      category: 'Shopping Mall'
    },
    // Chennai, India
    {
      id: 21,
      name: 'Marina Beach',
      address: 'Marina Beach, Chennai, Tamil Nadu',
      coordinates: [13.0489, 80.2519],
      type: 'beach',
      category: 'Beach'
    },
    {
      id: 22,
      name: 'Kapaleeshwarar Temple',
      address: 'Mylapore, Chennai, Tamil Nadu',
      coordinates: [13.0339, 80.2619],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 23,
      name: 'Fort St. George',
      address: 'Fort St George, Chennai, Tamil Nadu',
      coordinates: [13.0827, 80.2707],
      type: 'landmark',
      category: 'Historical Fort'
    },
    {
      id: 24,
      name: 'Express Avenue Mall',
      address: 'Express Avenue, Royapettah, Chennai, Tamil Nadu',
      coordinates: [13.0569, 80.2570],
      type: 'commercial',
      category: 'Shopping Mall'
    }
  ],

  bookmarks: [
    {
      id: 1,
      name: 'Home',
      address: '123 Apartment Complex, Gangnam-gu, Seoul',
      coordinates: [37.4979, 127.0276],
      category: 'home',
      dateAdded: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      name: 'Office',
      address: '456 Business Tower, Jung-gu, Seoul',
      coordinates: [37.5665, 126.9780],
      category: 'work',
      dateAdded: '2024-01-16T09:00:00Z'
    },
    {
      id: 3,
      name: 'Favorite Restaurant',
      address: '789 Food Street, Myeongdong, Seoul',
      coordinates: [37.5633, 126.9784],
      category: 'restaurant',
      dateAdded: '2024-01-20T19:30:00Z'
    },
    {
      id: 4,
      name: 'Gym',
      address: '321 Fitness Center, Hongdae, Seoul',
      coordinates: [37.5563, 126.9236],
      category: 'fitness',
      dateAdded: '2024-01-25T18:00:00Z'
    }
  ],

  routeCoordinates: [
    [37.5665, 126.9780],
    [37.5663, 126.9782],
    [37.5660, 126.9785],
    [37.5657, 126.9787],
    [37.5655, 126.9790],
    [37.5650, 126.9792],
    [37.5645, 126.9795],
    [37.5640, 126.9798],
    [37.5635, 126.9800],
    [37.5630, 126.9803]
  ],

  routeInstructions: [
    {
      id: 1,
      instruction: 'Head north on Main Street',
      distance: '0.5 km',
      duration: '2 minutes',
      direction: 'straight',
      icon: 'arrow-up'
    },
    {
      id: 2,
      instruction: 'Turn right onto Broadway',
      distance: '1.2 km',
      duration: '4 minutes',
      direction: 'right',
      icon: 'arrow-right'
    },
    {
      id: 3,
      instruction: 'Continue straight through intersection',
      distance: '0.8 km',
      duration: '3 minutes',
      direction: 'straight',
      icon: 'arrow-up'
    },
    {
      id: 4,
      instruction: 'Turn left onto Park Avenue',
      distance: '2.1 km',
      duration: '6 minutes',
      direction: 'left',
      icon: 'arrow-left'
    },
    {
      id: 5,
      instruction: 'Turn right onto Destination Street',
      distance: '0.3 km',
      duration: '1 minute',
      direction: 'right',
      icon: 'arrow-right'
    },
    {
      id: 6,
      instruction: 'Arrive at destination on the left',
      distance: '0.1 km',
      duration: '30 seconds',
      direction: 'arrive',
      icon: 'map-pin'
    }
  ],

  offlineAreas: [
    {
      id: 1,
      name: 'Seoul City Center',
      description: 'Downtown Seoul including Myeongdong and Jung-gu',
      coordinates: [37.5665, 126.9780],
      size: '125 MB',
      lastUpdated: '2024-01-15',
      status: 'downloaded'
    },
    {
      id: 2,
      name: 'Gangnam District',
      description: 'Gangnam-gu area including shopping and business districts',
      coordinates: [37.4979, 127.0276],
      size: '98 MB',
      lastUpdated: '2024-01-20',
      status: 'downloaded'
    },
    {
      id: 3,
      name: 'Hongdae Area',
      description: 'University area with nightlife and entertainment',
      coordinates: [37.5563, 126.9236],
      size: '67 MB',
      lastUpdated: '2024-01-25',
      status: 'available'
    },
    {
      id: 4,
      name: 'Itaewon International District',
      description: 'International district with restaurants and shops',
      coordinates: [37.5349, 126.9947],
      size: '45 MB',
      lastUpdated: '2024-01-28',
      status: 'available'
    },
    {
      id: 5,
      name: 'Insadong Cultural District',
      description: 'Traditional Korean culture and art district',
      coordinates: [37.5717, 126.9851],
      size: '38 MB',
      lastUpdated: '2024-01-30',
      status: 'available'
    }
  ],

  pointsOfInterest: [
    {
      id: 1,
      name: 'Seoul National University Hospital',
      type: 'hospital',
      coordinates: [37.5665, 126.9780],
      rating: 4.5,
      reviews: 1250
    },
    {
      id: 2,
      name: 'Starbucks Myeongdong',
      type: 'cafe',
      coordinates: [37.5633, 126.9784],
      rating: 4.2,
      reviews: 890
    },
    {
      id: 3,
      name: 'GS25 Convenience Store',
      type: 'convenience',
      coordinates: [37.5563, 126.9236],
      rating: 4.0,
      reviews: 456
    },
    {
      id: 4,
      name: 'Seoul Gas Station',
      type: 'fuel',
      coordinates: [37.5349, 126.9947],
      rating: 3.8,
      reviews: 234
    },
    {
      id: 5,
      name: 'Hyundai Department Store',
      type: 'shopping',
      coordinates: [37.5125, 127.1025],
      rating: 4.3,
      reviews: 2100
    }
  ]
};