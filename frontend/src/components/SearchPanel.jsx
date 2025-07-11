import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Search, 
  MapPin, 
  Navigation, 
  Star, 
  Clock,
  Fuel,
  Utensils,
  Hospital,
  Coffee,
  ShoppingCart,
  Building,
  TreePine,
  Train
} from 'lucide-react';

const SearchPanel = ({ 
  onSearch, 
  searchResults, 
  onLocationSelect, 
  onRouteRequest, 
  onBookmarkAdd,
  currentLocation,
  loading = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'Seoul Station',
    'Myeongdong',
    'Gangnam Station',
    'Hongdae'
  ]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    await onSearch(query);
    setIsSearching(false);
    
    // Add to recent searches
    if (!recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 3)]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Railway Station':
      case 'Subway Station':
        return <Train className="h-4 w-4" />;
      case 'Church':
        return <Building className="h-4 w-4" />;
      case 'Cultural Center':
        return <Building className="h-4 w-4" />;
      case 'Recreation':
        return <TreePine className="h-4 w-4" />;
      case 'Skyscraper':
        return <Building className="h-4 w-4" />;
      case 'Entertainment District':
        return <Coffee className="h-4 w-4" />;
      case 'Stream':
        return <TreePine className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Railway Station':
      case 'Subway Station':
        return 'bg-blue-100 text-blue-800';
      case 'Church':
        return 'bg-purple-100 text-purple-800';
      case 'Cultural Center':
        return 'bg-orange-100 text-orange-800';
      case 'Recreation':
        return 'bg-green-100 text-green-800';
      case 'Skyscraper':
        return 'bg-gray-100 text-gray-800';
      case 'Entertainment District':
        return 'bg-pink-100 text-pink-800';
      case 'Stream':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search places, addresses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-4"
        />
        {searchQuery && (
          <Button
            onClick={() => handleSearch(searchQuery)}
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onLocationSelect(currentLocation)}
          className="flex items-center space-x-2"
        >
          <MapPin className="h-4 w-4" />
          <span>My Location</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSearch('gas station')}
          className="flex items-center space-x-2"
        >
          <Fuel className="h-4 w-4" />
          <span>Gas Stations</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSearch('restaurant')}
          className="flex items-center space-x-2"
        >
          <Utensils className="h-4 w-4" />
          <span>Restaurants</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSearch('hospital')}
          className="flex items-center space-x-2"
        >
          <Hospital className="h-4 w-4" />
          <span>Hospitals</span>
        </Button>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Recent Searches
          </h3>
          <div className="space-y-1">
            {recentSearches.map((search, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery(search);
                  handleSearch(search);
                }}
                className="w-full justify-start text-left"
              >
                <Clock className="h-3 w-3 mr-2" />
                {search}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Search Results ({searchResults.length})
          </h3>
          <div className="space-y-2">
            {searchResults.map((result) => (
              <Card key={result.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getCategoryIcon(result.category)}
                        <h4 className="font-medium text-sm">{result.name}</h4>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{result.address}</p>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getCategoryColor(result.category)}`}
                      >
                        {result.category}
                      </Badge>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onLocationSelect(result)}
                        className="p-1 h-auto"
                      >
                        <MapPin className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRouteRequest(currentLocation, result)}
                        className="p-1 h-auto"
                      >
                        <Navigation className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onBookmarkAdd(result)}
                        className="p-1 h-auto"
                      >
                        <Star className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Restaurants', icon: Utensils, query: 'restaurant' },
            { name: 'Gas Stations', icon: Fuel, query: 'gas station' },
            { name: 'Hospitals', icon: Hospital, query: 'hospital' },
            { name: 'Coffee Shops', icon: Coffee, query: 'coffee' },
            { name: 'Shopping', icon: ShoppingCart, query: 'shopping' },
            { name: 'Hotels', icon: Building, query: 'hotel' }
          ].map((category) => (
            <Button
              key={category.name}
              variant="outline"
              size="sm"
              onClick={() => handleSearch(category.query)}
              className="flex items-center space-x-2 justify-start"
            >
              <category.icon className="h-3 w-3" />
              <span className="text-xs">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;