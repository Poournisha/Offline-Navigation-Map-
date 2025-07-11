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
    },
    // Coimbatore, Tamil Nadu
    {
      id: 25,
      name: 'Marudhamalai Temple',
      address: 'Marudhamalai, Coimbatore, Tamil Nadu',
      coordinates: [11.0510, 76.8936],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 26,
      name: 'Brookefields Mall',
      address: 'Brookefields, Coimbatore, Tamil Nadu',
      coordinates: [11.0168, 76.9558],
      type: 'commercial',
      category: 'Shopping Mall'
    },
    {
      id: 27,
      name: 'Coimbatore Junction',
      address: 'Railway Station Road, Coimbatore, Tamil Nadu',
      coordinates: [11.0021, 76.9648],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Madurai, Tamil Nadu
    {
      id: 28,
      name: 'Meenakshi Amman Temple',
      address: 'Madurai Main, Madurai, Tamil Nadu',
      coordinates: [9.9195, 78.1193],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 29,
      name: 'Thirumalai Nayakkar Palace',
      address: 'Palace Rd, Madurai, Tamil Nadu',
      coordinates: [9.9252, 78.1198],
      type: 'landmark',
      category: 'Palace'
    },
    {
      id: 30,
      name: 'Madurai Junction',
      address: 'Railway Station Road, Madurai, Tamil Nadu',
      coordinates: [9.9258, 78.1090],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Tiruchirappalli (Trichy), Tamil Nadu
    {
      id: 31,
      name: 'Rockfort Temple',
      address: 'Rock Fort, Tiruchirappalli, Tamil Nadu',
      coordinates: [10.8054, 78.6918],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 32,
      name: 'Srirangam Temple',
      address: 'Srirangam, Tiruchirappalli, Tamil Nadu',
      coordinates: [10.8624, 78.6952],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 33,
      name: 'Trichy Junction',
      address: 'Junction Railway Station, Tiruchirappalli, Tamil Nadu',
      coordinates: [10.8082, 78.6855],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Salem, Tamil Nadu
    {
      id: 34,
      name: 'Yercaud',
      address: 'Yercaud, Salem, Tamil Nadu',
      coordinates: [11.7849, 78.2081],
      type: 'hill_station',
      category: 'Hill Station'
    },
    {
      id: 35,
      name: 'Salem Junction',
      address: 'Railway Station Road, Salem, Tamil Nadu',
      coordinates: [11.6854, 78.1462],
      type: 'transportation',
      category: 'Railway Station'
    },
    {
      id: 36,
      name: 'Mettur Dam',
      address: 'Mettur, Salem, Tamil Nadu',
      coordinates: [11.7898, 77.8007],
      type: 'landmark',
      category: 'Dam'
    },
    // Tirunelveli, Tamil Nadu
    {
      id: 37,
      name: 'Nellaiappar Temple',
      address: 'Tirunelveli, Tamil Nadu',
      coordinates: [8.7139, 77.7567],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 38,
      name: 'Tirunelveli Junction',
      address: 'Railway Station Road, Tirunelveli, Tamil Nadu',
      coordinates: [8.7093, 77.7568],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Vellore, Tamil Nadu
    {
      id: 39,
      name: 'Vellore Fort',
      address: 'Fort Road, Vellore, Tamil Nadu',
      coordinates: [12.9184, 79.1325],
      type: 'landmark',
      category: 'Historical Fort'
    },
    {
      id: 40,
      name: 'Golden Temple Vellore',
      address: 'Sripuram, Vellore, Tamil Nadu',
      coordinates: [12.9249, 79.1302],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 41,
      name: 'Vellore Cantonment',
      address: 'Cantonment, Vellore, Tamil Nadu',
      coordinates: [12.9163, 79.1290],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Erode, Tamil Nadu
    {
      id: 42,
      name: 'Erode Junction',
      address: 'Railway Station Road, Erode, Tamil Nadu',
      coordinates: [11.3410, 77.7172],
      type: 'transportation',
      category: 'Railway Station'
    },
    {
      id: 43,
      name: 'Thindal Murugan Temple',
      address: 'Thindal, Erode, Tamil Nadu',
      coordinates: [11.3293, 77.7085],
      type: 'religious',
      category: 'Temple'
    },
    // Tirupur, Tamil Nadu
    {
      id: 44,
      name: 'Tirupur',
      address: 'Tirupur, Tamil Nadu',
      coordinates: [11.1085, 77.3411],
      type: 'commercial',
      category: 'Textile City'
    },
    {
      id: 45,
      name: 'Avinashi Road',
      address: 'Avinashi Road, Tirupur, Tamil Nadu',
      coordinates: [11.1055, 77.3498],
      type: 'commercial',
      category: 'Commercial Area'
    },
    // Thanjavur, Tamil Nadu
    {
      id: 46,
      name: 'Brihadeeswarar Temple',
      address: 'Thanjavur, Tamil Nadu',
      coordinates: [10.7825, 79.1313],
      type: 'religious',
      category: 'Temple'
    },
    {
      id: 47,
      name: 'Thanjavur Palace',
      address: 'East Main St, Thanjavur, Tamil Nadu',
      coordinates: [10.7881, 79.1378],
      type: 'landmark',
      category: 'Palace'
    },
    {
      id: 48,
      name: 'Thanjavur Junction',
      address: 'Railway Station Road, Thanjavur, Tamil Nadu',
      coordinates: [10.7858, 79.1382],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Dindigul, Tamil Nadu
    {
      id: 49,
      name: 'Dindigul Rock Fort',
      address: 'Dindigul, Tamil Nadu',
      coordinates: [10.3624, 77.9694],
      type: 'landmark',
      category: 'Fort'
    },
    {
      id: 50,
      name: 'Dindigul Junction',
      address: 'Railway Station Road, Dindigul, Tamil Nadu',
      coordinates: [10.3673, 77.9803],
      type: 'transportation',
      category: 'Railway Station'
    },
    // Kanyakumari, Tamil Nadu
    {
      id: 51,
      name: 'Kanyakumari Beach',
      address: 'Kanyakumari, Tamil Nadu',
      coordinates: [8.0883, 77.5385],
      type: 'beach',
      category: 'Beach'
    },
    {
      id: 52,
      name: 'Vivekananda Rock Memorial',
      address: 'Kanyakumari, Tamil Nadu',
      coordinates: [8.0773, 77.5496],
      type: 'landmark',
      category: 'Memorial'
    },
    {
      id: 53,
      name: 'Thiruvalluvar Statue',
      address: 'Kanyakumari, Tamil Nadu',
      coordinates: [8.0773, 77.5496],
      type: 'landmark',
      category: 'Statue'
    },
    // Puducherry (nearby, often associated with TN)
    {
      id: 54,
      name: 'Promenade Beach',
      address: 'Beach Road, Puducherry',
      coordinates: [11.9139, 79.8145],
      type: 'beach',
      category: 'Beach'
    },
    {
      id: 55,
      name: 'Aurobindo Ashram',
      address: 'Rue de la Marine, Puducherry',
      coordinates: [11.9416, 79.8083],
      type: 'spiritual',
      category: 'Ashram'
    },
    // Kodaikanal, Tamil Nadu
    {
      id: 56,
      name: 'Kodaikanal Lake',
      address: 'Kodaikanal, Tamil Nadu',
      coordinates: [10.2381, 77.4892],
      type: 'lake',
      category: 'Lake'
    },
    {
      id: 57,
      name: 'Coaker\'s Walk',
      address: 'Kodaikanal, Tamil Nadu',
      coordinates: [10.2325, 77.4864],
      type: 'viewpoint',
      category: 'Viewpoint'
    },
    // Ooty (Udhagamandalam), Tamil Nadu
    {
      id: 58,
      name: 'Ooty Lake',
      address: 'Ooty, Tamil Nadu',
      coordinates: [11.4086, 76.6950],
      type: 'lake',
      category: 'Lake'
    },
    {
      id: 59,
      name: 'Botanical Gardens Ooty',
      address: 'Ooty, Tamil Nadu',
      coordinates: [11.4127, 76.7085],
      type: 'garden',
      category: 'Botanical Garden'
    },
    {
      id: 60,
      name: 'Nilgiri Mountain Railway',
      address: 'Ooty, Tamil Nadu',
      coordinates: [11.4102, 76.6950],
      type: 'transportation',
      category: 'Heritage Railway'
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
    },
    {
      id: 5,
      name: 'Mumbai Office',
      address: 'Bandra Kurla Complex, Mumbai, Maharashtra',
      coordinates: [19.0596, 72.8656],
      category: 'work',
      dateAdded: '2024-02-01T14:00:00Z'
    },
    {
      id: 6,
      name: 'Gateway of India',
      address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra',
      coordinates: [18.9220, 72.8347],
      category: 'favorite',
      dateAdded: '2024-02-05T11:30:00Z'
    },
    {
      id: 7,
      name: 'Delhi Home',
      address: 'Connaught Place, New Delhi',
      coordinates: [28.6315, 77.2167],
      category: 'home',
      dateAdded: '2024-02-10T08:00:00Z'
    },
    {
      id: 8,
      name: 'Bangalore Tech Park',
      address: 'Electronic City, Bengaluru, Karnataka',
      coordinates: [12.8456, 77.6603],
      category: 'work',
      dateAdded: '2024-02-15T16:45:00Z'
    },
    {
      id: 9,
      name: 'Marina Beach',
      address: 'Marina Beach, Chennai, Tamil Nadu',
      coordinates: [13.0489, 80.2519],
      category: 'favorite',
      dateAdded: '2024-02-20T18:00:00Z'
    },
    {
      id: 10,
      name: 'Lalbagh Garden',
      address: 'Mavalli, Bengaluru, Karnataka',
      coordinates: [12.9507, 77.5848],
      category: 'recreation',
      dateAdded: '2024-02-25T07:30:00Z'
    },
    {
      id: 11,
      name: 'Meenakshi Temple',
      address: 'Madurai Main, Madurai, Tamil Nadu',
      coordinates: [9.9195, 78.1193],
      category: 'religious',
      dateAdded: '2024-03-01T09:00:00Z'
    },
    {
      id: 12,
      name: 'Coimbatore Office',
      address: 'Avinashi Road, Coimbatore, Tamil Nadu',
      coordinates: [11.0168, 76.9558],
      category: 'work',
      dateAdded: '2024-03-05T14:30:00Z'
    },
    {
      id: 13,
      name: 'Kodaikanal Lake',
      address: 'Kodaikanal, Tamil Nadu',
      coordinates: [10.2381, 77.4892],
      category: 'recreation',
      dateAdded: '2024-03-10T16:00:00Z'
    },
    {
      id: 14,
      name: 'Ooty Botanical Gardens',
      address: 'Ooty, Tamil Nadu',
      coordinates: [11.4127, 76.7085],
      category: 'recreation',
      dateAdded: '2024-03-15T11:45:00Z'
    },
    {
      id: 15,
      name: 'Kanyakumari Beach',
      address: 'Kanyakumari, Tamil Nadu',
      coordinates: [8.0883, 77.5385],
      category: 'favorite',
      dateAdded: '2024-03-20T17:30:00Z'
    },
    {
      id: 16,
      name: 'Trichy Rock Fort',
      address: 'Rock Fort, Tiruchirappalli, Tamil Nadu',
      coordinates: [10.8054, 78.6918],
      category: 'favorite',
      dateAdded: '2024-03-25T12:15:00Z'
    },
    {
      id: 17,
      name: 'Salem Home',
      address: 'Five Roads, Salem, Tamil Nadu',
      coordinates: [11.6854, 78.1462],
      category: 'home',
      dateAdded: '2024-03-30T08:00:00Z'
    },
    {
      id: 18,
      name: 'Vellore Fort',
      address: 'Fort Road, Vellore, Tamil Nadu',
      coordinates: [12.9184, 79.1325],
      category: 'favorite',
      dateAdded: '2024-04-01T10:30:00Z'
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
    // South Korea
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
    },
    // India
    {
      id: 6,
      name: 'Mumbai Central',
      description: 'South Mumbai including Colaba, Fort, and Marine Drive',
      coordinates: [18.9220, 72.8347],
      size: '156 MB',
      lastUpdated: '2024-02-01',
      status: 'downloaded'
    },
    {
      id: 7,
      name: 'Bandra-Kurla Complex',
      description: 'Mumbai business district with offices and malls',
      coordinates: [19.0596, 72.8656],
      size: '89 MB',
      lastUpdated: '2024-02-05',
      status: 'available'
    },
    {
      id: 8,
      name: 'New Delhi Central',
      description: 'Central Delhi including Connaught Place and India Gate',
      coordinates: [28.6315, 77.2167],
      size: '142 MB',
      lastUpdated: '2024-02-08',
      status: 'downloaded'
    },
    {
      id: 9,
      name: 'Old Delhi',
      description: 'Historic Delhi including Red Fort and Chandni Chowk',
      coordinates: [28.6562, 77.2410],
      size: '78 MB',
      lastUpdated: '2024-02-10',
      status: 'available'
    },
    {
      id: 10,
      name: 'Bangalore IT Corridor',
      description: 'Electronic City and Whitefield tech hubs',
      coordinates: [12.8456, 77.6603],
      size: '134 MB',
      lastUpdated: '2024-02-12',
      status: 'available'
    },
    {
      id: 11,
      name: 'Bangalore City Center',
      description: 'MG Road, Brigade Road, and Cubbon Park area',
      coordinates: [12.9719, 77.5937],
      size: '95 MB',
      lastUpdated: '2024-02-15',
      status: 'downloaded'
    },
    {
      id: 12,
      name: 'Chennai Central',
      description: 'Central Chennai including T. Nagar and Marina Beach',
      coordinates: [13.0489, 80.2519],
      size: '118 MB',
      lastUpdated: '2024-02-18',
      status: 'available'
    },
    {
      id: 13,
      name: 'Chennai IT Corridor',
      description: 'OMR and IT parks including Sholinganallur and Siruseri',
      coordinates: [12.9010, 80.2279],
      size: '95 MB',
      lastUpdated: '2024-02-20',
      status: 'downloaded'
    },
    {
      id: 14,
      name: 'Coimbatore City',
      description: 'Coimbatore including RS Puram and Gandhipuram',
      coordinates: [11.0168, 76.9558],
      size: '87 MB',
      lastUpdated: '2024-02-22',
      status: 'available'
    },
    {
      id: 15,
      name: 'Madurai Heritage',
      description: 'Historic Madurai including Meenakshi Temple and Palace',
      coordinates: [9.9195, 78.1193],
      size: '76 MB',
      lastUpdated: '2024-02-25',
      status: 'downloaded'
    },
    {
      id: 16,
      name: 'Tiruchirappalli Central',
      description: 'Trichy including Rock Fort and Srirangam Temple',
      coordinates: [10.8054, 78.6918],
      size: '68 MB',
      lastUpdated: '2024-02-28',
      status: 'available'
    },
    {
      id: 17,
      name: 'Salem City',
      description: 'Salem city center and nearby Yercaud hill station',
      coordinates: [11.6854, 78.1462],
      size: '59 MB',
      lastUpdated: '2024-03-01',
      status: 'available'
    },
    {
      id: 18,
      name: 'Tirunelveli District',
      description: 'Tirunelveli including Nellaiappar Temple area',
      coordinates: [8.7139, 77.7567],
      size: '54 MB',
      lastUpdated: '2024-03-03',
      status: 'available'
    },
    {
      id: 19,
      name: 'Vellore Region',
      description: 'Vellore Fort and Golden Temple areas',
      coordinates: [12.9184, 79.1325],
      size: '45 MB',
      lastUpdated: '2024-03-05',
      status: 'available'
    },
    {
      id: 20,
      name: 'Erode-Tirupur Belt',
      description: 'Textile hub including Erode and Tirupur cities',
      coordinates: [11.3410, 77.7172],
      size: '72 MB',
      lastUpdated: '2024-03-08',
      status: 'available'
    },
    {
      id: 21,
      name: 'Thanjavur Cultural Zone',
      description: 'Big Temple and Thanjavur Palace heritage area',
      coordinates: [10.7825, 79.1313],
      size: '49 MB',
      lastUpdated: '2024-03-10',
      status: 'available'
    },
    {
      id: 22,
      name: 'Kodaikanal Hill Station',
      description: 'Complete Kodaikanal including lake and viewpoints',
      coordinates: [10.2381, 77.4892],
      size: '38 MB',
      lastUpdated: '2024-03-12',
      status: 'downloaded'
    },
    {
      id: 23,
      name: 'Ooty Nilgiris',
      description: 'Ooty town, botanical gardens and toy train route',
      coordinates: [11.4086, 76.6950],
      size: '42 MB',
      lastUpdated: '2024-03-15',
      status: 'downloaded'
    },
    {
      id: 24,
      name: 'Kanyakumari Tip',
      description: 'Southernmost tip including beaches and memorials',
      coordinates: [8.0883, 77.5385],
      size: '31 MB',
      lastUpdated: '2024-03-18',
      status: 'available'
    },
    {
      id: 25,
      name: 'Puducherry French Quarter',
      description: 'Heritage Puducherry including Promenade and Ashram',
      coordinates: [11.9139, 79.8145],
      size: '35 MB',
      lastUpdated: '2024-03-20',
      status: 'available'
    },
    {
      id: 26,
      name: 'Dindigul Region',
      description: 'Dindigul Rock Fort and surrounding areas',
      coordinates: [10.3624, 77.9694],
      size: '41 MB',
      lastUpdated: '2024-03-22',
      status: 'available'
    },
    {
      id: 27,
      name: 'Kolkata Central',
      description: 'Central Kolkata including Park Street and Victoria Memorial',
      coordinates: [22.5726, 88.3639],
      size: '102 MB',
      lastUpdated: '2024-02-20',
      status: 'available'
    },
    {
      id: 28,
      name: 'Hyderabad HITEC City',
      description: 'Cyberabad area with IT companies and malls',
      coordinates: [17.4435, 78.3772],
      size: '87 MB',
      lastUpdated: '2024-02-22',
      status: 'available'
    },
    {
      id: 29,
      name: 'Pune IT Parks',
      description: 'Hinjewadi and Magarpatta IT park areas',
      coordinates: [18.5912, 73.7389],
      size: '76 MB',
      lastUpdated: '2024-02-25',
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
    },
    // Tamil Nadu POIs
    {
      id: 6,
      name: 'Apollo Hospital Chennai',
      type: 'hospital',
      coordinates: [13.0358, 80.2297],
      rating: 4.7,
      reviews: 3450
    },
    {
      id: 7,
      name: 'Saravana Bhavan',
      type: 'restaurant',
      coordinates: [13.0827, 80.2707],
      rating: 4.4,
      reviews: 2890
    },
    {
      id: 8,
      name: 'Indian Oil Petrol Pump',
      type: 'fuel',
      coordinates: [13.0489, 80.2519],
      rating: 4.1,
      reviews: 567
    },
    {
      id: 9,
      name: 'Phoenix MarketCity Chennai',
      type: 'shopping',
      coordinates: [13.0569, 80.2570],
      rating: 4.5,
      reviews: 4200
    },
    {
      id: 10,
      name: 'Cafe Coffee Day Marina',
      type: 'cafe',
      coordinates: [13.0489, 80.2519],
      rating: 4.0,
      reviews: 1200
    },
    {
      id: 11,
      name: 'Kovai Medical Center',
      type: 'hospital',
      coordinates: [11.0168, 76.9558],
      rating: 4.6,
      reviews: 2340
    },
    {
      id: 12,
      name: 'Annapoorna Restaurant',
      type: 'restaurant',
      coordinates: [11.0021, 76.9648],
      rating: 4.3,
      reviews: 1890
    },
    {
      id: 13,
      name: 'HP Petrol Pump Coimbatore',
      type: 'fuel',
      coordinates: [11.0510, 76.8936],
      rating: 4.0,
      reviews: 345
    },
    {
      id: 14,
      name: 'Meenakshi Mission Hospital',
      type: 'hospital',
      coordinates: [9.9195, 78.1193],
      rating: 4.5,
      reviews: 1890
    },
    {
      id: 15,
      name: 'Murugan Idli Shop',
      type: 'restaurant',
      coordinates: [9.9252, 78.1198],
      rating: 4.6,
      reviews: 3200
    },
    {
      id: 16,
      name: 'Bharath Petroleum Madurai',
      type: 'fuel',
      coordinates: [9.9258, 78.1090],
      rating: 3.9,
      reviews: 289
    },
    {
      id: 17,
      name: 'Trichy SRM Hospital',
      type: 'hospital',
      coordinates: [10.8054, 78.6918],
      rating: 4.4,
      reviews: 1560
    },
    {
      id: 18,
      name: 'Vasantha Bhavan',
      type: 'restaurant',
      coordinates: [10.8082, 78.6855],
      rating: 4.2,
      reviews: 1123
    },
    {
      id: 19,
      name: 'Reliance Petrol Pump',
      type: 'fuel',
      coordinates: [10.8624, 78.6952],
      rating: 4.1,
      reviews: 456
    },
    {
      id: 20,
      name: 'Salem Government Hospital',
      type: 'hospital',
      coordinates: [11.6854, 78.1462],
      rating: 4.0,
      reviews: 1234
    },
    {
      id: 21,
      name: 'Hotel Selvam',
      type: 'restaurant',
      coordinates: [11.7849, 78.2081],
      rating: 4.3,
      reviews: 890
    },
    {
      id: 22,
      name: 'Essar Petrol Pump Salem',
      type: 'fuel',
      coordinates: [11.7898, 77.8007],
      rating: 3.8,
      reviews: 234
    },
    {
      id: 23,
      name: 'Tirunelveli Medical College',
      type: 'hospital',
      coordinates: [8.7139, 77.7567],
      rating: 4.2,
      reviews: 1567
    },
    {
      id: 24,
      name: 'Vellore CMC Hospital',
      type: 'hospital',
      coordinates: [12.9184, 79.1325],
      rating: 4.8,
      reviews: 5600
    },
    {
      id: 25,
      name: 'Adyar Ananda Bhavan',
      type: 'restaurant',
      coordinates: [12.9249, 79.1302],
      rating: 4.4,
      reviews: 2100
    },
    {
      id: 26,
      name: 'Shell Petrol Pump Vellore',
      type: 'fuel',
      coordinates: [12.9163, 79.1290],
      rating: 4.2,
      reviews: 345
    },
    {
      id: 27,
      name: 'Thanjavur Medical College',
      type: 'hospital',
      coordinates: [10.7825, 79.1313],
      rating: 4.1,
      reviews: 1890
    },
    {
      id: 28,
      name: 'Sree Ariya Bhavan',
      type: 'restaurant',
      coordinates: [10.7881, 79.1378],
      rating: 4.5,
      reviews: 1678
    },
    {
      id: 29,
      name: 'Kodaikanal Club Resort',
      type: 'hotel',
      coordinates: [10.2381, 77.4892],
      rating: 4.6,
      reviews: 1234
    },
    {
      id: 30,
      name: 'Ooty Savoy Hotel',
      type: 'hotel',
      coordinates: [11.4086, 76.6950],
      rating: 4.7,
      reviews: 2340
    }
  ]
};