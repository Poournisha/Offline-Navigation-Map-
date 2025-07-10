import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Star, 
  Navigation, 
  Plus, 
  Minus,
  RotateCcw,
  Layers,
  Target,
  Fuel,
  Utensils,
  Hospital,
  Coffee,
  ShoppingCart
} from 'lucide-react';

const MapComponent = ({ 
  currentLocation, 
  selectedLocation, 
  route, 
  bookmarks, 
  mapStyle, 
  isNavigating, 
  searchResults,
  onLocationSelect 
}) => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [zoom, setZoom] = useState(13);
  const [center, setCenter] = useState([37.5665, 126.9780]); // Seoul coordinates
  const [showPOIs, setShowPOIs] = useState(true);
  const [markers, setMarkers] = useState([]);

  // Mock POI data
  const mockPOIs = [
    { id: 1, name: 'Gas Station', type: 'fuel', coordinates: [37.5675, 126.9785], icon: Fuel },
    { id: 2, name: 'Restaurant', type: 'restaurant', coordinates: [37.5655, 126.9775], icon: Utensils },
    { id: 3, name: 'Hospital', type: 'hospital', coordinates: [37.5645, 126.9790], icon: Hospital },
    { id: 4, name: 'Coffee Shop', type: 'cafe', coordinates: [37.5670, 126.9770], icon: Coffee },
    { id: 5, name: 'Shopping Mall', type: 'shopping', coordinates: [37.5660, 126.9800], icon: ShoppingCart }
  ];

  useEffect(() => {
    // Mock map initialization
    console.log('Map initialized with OpenStreetMap');
    setMapInstance({ initialized: true });
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      setCenter(selectedLocation.coordinates);
      setZoom(15);
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (currentLocation) {
      setCenter(currentLocation.coordinates);
    }
  }, [currentLocation]);

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 18));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 3));
  };

  const handleRecenter = () => {
    if (currentLocation) {
      setCenter(currentLocation.coordinates);
      setZoom(15);
    }
  };

  const handleMapClick = (coordinates) => {
    const newLocation = {
      name: 'Custom Location',
      address: `${coordinates[0].toFixed(4)}, ${coordinates[1].toFixed(4)}`,
      coordinates: coordinates,
      type: 'custom'
    };
    onLocationSelect(newLocation);
  };

  const getMapStyleClass = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'bg-gradient-to-br from-green-900 via-green-700 to-green-600';
      case 'hybrid':
        return 'bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500';
      default:
        return 'bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50';
    }
  };

  const renderMarker = (location, type = 'default') => {
    const getMarkerColor = () => {
      switch (type) {
        case 'current':
          return 'bg-blue-500 border-blue-600';
        case 'selected':
          return 'bg-red-500 border-red-600';
        case 'bookmark':
          return 'bg-yellow-500 border-yellow-600';
        case 'search':
          return 'bg-purple-500 border-purple-600';
        default:
          return 'bg-gray-500 border-gray-600';
      }
    };

    const getMarkerIcon = () => {
      switch (type) {
        case 'current':
          return <Target className="h-3 w-3 text-white" />;
        case 'bookmark':
          return <Star className="h-3 w-3 text-white" />;
        case 'selected':
          return <MapPin className="h-3 w-3 text-white" />;
        default:
          return <MapPin className="h-3 w-3 text-white" />;
      }
    };

    return (
      <div 
        key={`${type}-${location.id || location.name}`}
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer z-10 ${getMarkerColor()}`}
        style={{
          left: `${((location.coordinates[1] - center[1]) / 0.01) * 50 + 50}%`,
          top: `${((center[0] - location.coordinates[0]) / 0.01) * 50 + 50}%`,
        }}
        onClick={() => onLocationSelect(location)}
      >
        {getMarkerIcon()}
      </div>
    );
  };

  const renderPOIMarker = (poi) => {
    const Icon = poi.icon;
    return (
      <div 
        key={`poi-${poi.id}`}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-green-500 border-2 border-green-600 flex items-center justify-center cursor-pointer z-5"
        style={{
          left: `${((poi.coordinates[1] - center[1]) / 0.01) * 50 + 50}%`,
          top: `${((center[0] - poi.coordinates[0]) / 0.01) * 50 + 50}%`,
        }}
        title={poi.name}
      >
        <Icon className="h-2 w-2 text-white" />
      </div>
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className={`w-full h-full ${getMapStyleClass()} relative overflow-hidden cursor-crosshair`}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.02;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.02;
          const coordinates = [center[0] - y, center[1] + x];
          handleMapClick(coordinates);
        }}
      >
        {/* Grid overlay for street view */}
        {mapStyle === 'street' && (
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        )}

        {/* Mock streets for street view */}
        {mapStyle === 'street' && (
          <>
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 transform -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-400 transform -translate-x-1/2" />
            <div className="absolute top-1/4 left-1/4 right-1/4 h-1 bg-gray-300" />
            <div className="absolute top-3/4 left-1/4 right-1/4 h-1 bg-gray-300" />
          </>
        )}

        {/* Current Location Marker */}
        {currentLocation && renderMarker(currentLocation, 'current')}

        {/* Selected Location Marker */}
        {selectedLocation && renderMarker(selectedLocation, 'selected')}

        {/* Bookmark Markers */}
        {bookmarks.map(bookmark => renderMarker(bookmark, 'bookmark'))}

        {/* Search Result Markers */}
        {searchResults.map(result => renderMarker(result, 'search'))}

        {/* POI Markers */}
        {showPOIs && mockPOIs.map(poi => renderPOIMarker(poi))}

        {/* Route Line */}
        {route && (
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              <path
                d={`M 30% 40% Q 50% 30% 70% 60%`}
                stroke="#2563eb"
                strokeWidth="4"
                fill="none"
                strokeDasharray={isNavigating ? "10,5" : "none"}
                className={isNavigating ? "animate-pulse" : ""}
              />
            </svg>
          </div>
        )}

        {/* Zoom Level Indicator */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg p-2 text-sm font-medium">
          Zoom: {zoom}
        </div>

        {/* Coordinates Display */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-2 text-xs font-mono">
          {center[0].toFixed(4)}, {center[1].toFixed(4)}
        </div>

        {/* Navigation Compass */}
        {isNavigating && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">
            <Navigation className="h-6 w-6 text-blue-600" style={{ transform: 'rotate(45deg)' }} />
          </div>
        )}
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleZoomIn}
          className="w-10 h-10 p-0 bg-white"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleZoomOut}
          className="w-10 h-10 p-0 bg-white"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleRecenter}
          className="w-10 h-10 p-0 bg-white"
        >
          <Target className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowPOIs(!showPOIs)}
          className="w-10 h-10 p-0 bg-white"
        >
          <Layers className="h-4 w-4" />
        </Button>
      </div>

      {/* Selected Location Info */}
      {selectedLocation && (
        <Card className="absolute bottom-4 right-4 max-w-xs">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{selectedLocation.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{selectedLocation.address}</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Star className="h-3 w-3 mr-1" />
                Save
              </Button>
              <Button size="sm">
                <Navigation className="h-3 w-3 mr-1" />
                Navigate
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MapComponent;