import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Navigation, 
  MapPin, 
  Star, 
  Download, 
  Layers, 
  Settings, 
  Menu,
  Route,
  Compass,
  Clock,
  Fuel,
  Utensils,
  Hospital,
  Coffee,
  ShoppingCart,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Target,
  BookOpen,
  Trash2,
  Plus
} from 'lucide-react';
import MapComponent from './MapComponent';
import SearchPanel from './SearchPanel';
import NavigationPanel from './NavigationPanel';
import RoutePanel from './RoutePanel';
import BookmarksPanel from './BookmarksPanel';
import OfflinePanel from './OfflinePanel';

// Import API services
import { 
  searchLocations, 
  getBookmarks, 
  getOfflineAreas, 
  calculateRoute,
  createBookmark,
  deleteBookmark,
  downloadOfflineArea,
  deleteOfflineArea 
} from '../services/api';

const MapApp = () => {
  const [activePanel, setActivePanel] = useState('search');
  const [searchResults, setSearchResults] = useState([]);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    id: 'current',
    name: 'Current Location',
    address: '123 Main St, Chennai, Tamil Nadu',
    coordinates: [13.0827, 80.2707],
    type: 'current'
  });
  const [mapStyle, setMapStyle] = useState('street');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [routeInstructions, setRouteInstructions] = useState([]);
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const [offlineAreas, setOfflineAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      const [bookmarksData, offlineAreasData] = await Promise.all([
        getBookmarks(),
        getOfflineAreas()
      ]);
      setBookmarks(bookmarksData);
      setOfflineAreas(offlineAreasData);
    } catch (err) {
      setError('Failed to load initial data');
      console.error('Error loading initial data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      const results = await searchLocations(query, 20);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search locations');
      console.error('Error searching locations:', err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRouteCalculation = async (from, to) => {
    try {
      setLoading(true);
      setError(null);
      
      const routeRequest = {
        from_name: from.name,
        from_address: from.address,
        from_coordinates: from.coordinates,
        to_name: to.name,
        to_address: to.address,
        to_coordinates: to.coordinates,
        route_type: 'fastest'
      };

      const route = await calculateRoute(routeRequest);
      setCurrentRoute(route);
      setRouteInstructions(route.instructions || []);
      setActivePanel('route');
    } catch (err) {
      setError('Failed to calculate route');
      console.error('Error calculating route:', err);
    } finally {
      setLoading(false);
    }
  };

  const startNavigation = () => {
    setIsNavigating(true);
    setActivePanel('navigation');
    setCurrentInstruction(0);
  };

  const stopNavigation = () => {
    setIsNavigating(false);
    setActivePanel('search');
    setCurrentInstruction(0);
  };

  const addBookmark = async (location) => {
    try {
      setLoading(true);
      const newBookmark = {
        name: location.name,
        address: location.address,
        coordinates: location.coordinates,
        category: 'custom',
        notes: 'Added from map'
      };
      
      const createdBookmark = await createBookmark(newBookmark);
      setBookmarks([...bookmarks, createdBookmark]);
    } catch (err) {
      setError('Failed to add bookmark');
      console.error('Error adding bookmark:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeBookmark = async (id) => {
    try {
      setLoading(true);
      await deleteBookmark(id);
      setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
    } catch (err) {
      setError('Failed to remove bookmark');
      console.error('Error removing bookmark:', err);
    } finally {
      setLoading(false);
    }
  };

  const downloadOfflineAreaHandler = async (area) => {
    try {
      setLoading(true);
      await downloadOfflineArea(area.id);
      
      // Update local state to show downloading
      const updatedAreas = offlineAreas.map(item => 
        item.id === area.id 
          ? { ...item, status: 'downloading', progress: 0 }
          : item
      );
      setOfflineAreas(updatedAreas);

      // Simulate download progress
      simulateDownloadProgress(area.id);
    } catch (err) {
      setError('Failed to start download');
      console.error('Error downloading offline area:', err);
    } finally {
      setLoading(false);
    }
  };

  const simulateDownloadProgress = (areaId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setOfflineAreas(prev => prev.map(item => 
        item.id === areaId 
          ? { ...item, progress }
          : item
      ));

      if (progress >= 100) {
        clearInterval(interval);
        setOfflineAreas(prev => prev.map(item => 
          item.id === areaId 
            ? { ...item, status: 'downloaded', progress: 100 }
            : item
        ));
      }
    }, 500);
  };

  const deleteOfflineAreaHandler = async (id) => {
    try {
      setLoading(true);
      await deleteOfflineArea(id);
      setOfflineAreas(offlineAreas.filter(area => area.id !== id));
    } catch (err) {
      setError('Failed to delete offline area');
      console.error('Error deleting offline area:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (loading && bookmarks.length === 0) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Loading OfflineNav...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Error Banner */}
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-2 text-center z-50">
          {error}
          <button 
            onClick={() => setError(null)}
            className="ml-2 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div className={`${isFullscreen ? 'hidden' : 'w-80'} bg-white shadow-lg border-r border-gray-200 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-bold text-gray-800">OfflineNav</h1>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setAudioEnabled(!audioEnabled)}
              >
                {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <Tabs value={activePanel} onValueChange={setActivePanel} className="w-full">
            <TabsList className="grid w-full grid-cols-5 text-xs">
              <TabsTrigger value="search" className="p-2">
                <Search className="h-3 w-3" />
              </TabsTrigger>
              <TabsTrigger value="route" className="p-2">
                <Route className="h-3 w-3" />
              </TabsTrigger>
              <TabsTrigger value="navigation" className="p-2">
                <Navigation className="h-3 w-3" />
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="p-2">
                <Star className="h-3 w-3" />
              </TabsTrigger>
              <TabsTrigger value="offline" className="p-2">
                <Download className="h-3 w-3" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Panel Content */}
        <div className="flex-1 overflow-y-auto">
          <Tabs value={activePanel} onValueChange={setActivePanel}>
            <TabsContent value="search" className="mt-0">
              <SearchPanel 
                onSearch={handleSearch}
                searchResults={searchResults}
                onLocationSelect={setSelectedLocation}
                onRouteRequest={handleRouteCalculation}
                onBookmarkAdd={addBookmark}
                currentLocation={currentLocation}
                loading={loading}
              />
            </TabsContent>
            <TabsContent value="route" className="mt-0">
              <RoutePanel 
                route={currentRoute}
                onStartNavigation={startNavigation}
                onClearRoute={() => setCurrentRoute(null)}
              />
            </TabsContent>
            <TabsContent value="navigation" className="mt-0">
              <NavigationPanel 
                isNavigating={isNavigating}
                instructions={routeInstructions}
                currentInstruction={currentInstruction}
                onStopNavigation={stopNavigation}
                audioEnabled={audioEnabled}
                route={currentRoute}
              />
            </TabsContent>
            <TabsContent value="bookmarks" className="mt-0">
              <BookmarksPanel 
                bookmarks={bookmarks}
                onLocationSelect={setSelectedLocation}
                onRemoveBookmark={removeBookmark}
                onRouteRequest={handleRouteCalculation}
                currentLocation={currentLocation}
                loading={loading}
              />
            </TabsContent>
            <TabsContent value="offline" className="mt-0">
              <OfflinePanel 
                offlineAreas={offlineAreas}
                onDownloadArea={downloadOfflineAreaHandler}
                onDeleteArea={deleteOfflineAreaHandler}
                loading={loading}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Target className="h-3 w-3" />
                <span>GPS: Active</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {mapStyle === 'street' ? 'Street' : 'Satellite'}
              </Badge>
            </div>
            <Select value={mapStyle} onValueChange={setMapStyle}>
              <SelectTrigger className="w-24 h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="street">Street</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <MapComponent 
          currentLocation={currentLocation}
          selectedLocation={selectedLocation}
          route={currentRoute}
          bookmarks={bookmarks}
          mapStyle={mapStyle}
          isNavigating={isNavigating}
          searchResults={searchResults}
          onLocationSelect={setSelectedLocation}
        />
        
        {/* Fullscreen Toggle Button */}
        {isFullscreen && (
          <Button 
            className="absolute top-4 left-4 z-10"
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MapApp;