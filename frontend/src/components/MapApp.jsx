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
import { mockData } from '../utils/mockData';

const MapApp = () => {
  const [activePanel, setActivePanel] = useState('search');
  const [searchResults, setSearchResults] = useState([]);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [bookmarks, setBookmarks] = useState(mockData.bookmarks);
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(mockData.currentLocation);
  const [mapStyle, setMapStyle] = useState('street');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [routeInstructions, setRouteInstructions] = useState([]);
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const [offlineAreas, setOfflineAreas] = useState(mockData.offlineAreas);

  const handleSearch = (query) => {
    // Mock search with delay
    setTimeout(() => {
      const results = mockData.searchResults.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.address.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }, 300);
  };

  const handleRouteCalculation = (from, to) => {
    // Mock route calculation
    const route = {
      from,
      to,
      distance: '12.5 km',
      duration: '18 minutes',
      coordinates: mockData.routeCoordinates,
      instructions: mockData.routeInstructions
    };
    setCurrentRoute(route);
    setRouteInstructions(route.instructions);
    setActivePanel('route');
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

  const addBookmark = (location) => {
    const newBookmark = {
      id: Date.now(),
      name: location.name,
      address: location.address,
      coordinates: location.coordinates,
      category: 'custom',
      dateAdded: new Date().toISOString()
    };
    setBookmarks([...bookmarks, newBookmark]);
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const downloadOfflineArea = (area) => {
    // Mock offline download
    const updatedAreas = offlineAreas.map(item => 
      item.id === area.id 
        ? { ...item, status: 'downloading', progress: 0 }
        : item
    );
    setOfflineAreas(updatedAreas);

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      const updatedAreas = offlineAreas.map(item => 
        item.id === area.id 
          ? { ...item, progress }
          : item
      );
      setOfflineAreas(updatedAreas);

      if (progress >= 100) {
        clearInterval(interval);
        const finalAreas = offlineAreas.map(item => 
          item.id === area.id 
            ? { ...item, status: 'downloaded', progress: 100 }
            : item
        );
        setOfflineAreas(finalAreas);
      }
    }, 500);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
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
              />
            </TabsContent>
            <TabsContent value="offline" className="mt-0">
              <OfflinePanel 
                offlineAreas={offlineAreas}
                onDownloadArea={downloadOfflineArea}
                onDeleteArea={(id) => setOfflineAreas(offlineAreas.filter(area => area.id !== id))}
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