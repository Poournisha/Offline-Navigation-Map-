import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Star, 
  Search, 
  MapPin, 
  Navigation, 
  Home,
  Briefcase,
  Utensils,
  Dumbbell,
  Heart,
  Trash2,
  Plus,
  Filter,
  Calendar,
  Clock
} from 'lucide-react';

const BookmarksPanel = ({ 
  bookmarks, 
  onLocationSelect, 
  onRemoveBookmark, 
  onRouteRequest,
  currentLocation,
  loading = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    home: Home,
    work: Briefcase,
    restaurant: Utensils,
    fitness: Dumbbell,
    custom: Star,
    favorite: Heart
  };

  const categoryColors = {
    home: 'bg-blue-100 text-blue-800',
    work: 'bg-green-100 text-green-800',
    restaurant: 'bg-orange-100 text-orange-800',
    fitness: 'bg-purple-100 text-purple-800',
    custom: 'bg-gray-100 text-gray-800',
    favorite: 'bg-pink-100 text-pink-800'
  };

  const categories = [
    { id: 'all', name: 'All', count: bookmarks.length },
    { id: 'home', name: 'Home', count: bookmarks.filter(b => b.category === 'home').length },
    { id: 'work', name: 'Work', count: bookmarks.filter(b => b.category === 'work').length },
    { id: 'restaurant', name: 'Food', count: bookmarks.filter(b => b.category === 'restaurant').length },
    { id: 'fitness', name: 'Fitness', count: bookmarks.filter(b => b.category === 'fitness').length },
    { id: 'custom', name: 'Custom', count: bookmarks.filter(b => b.category === 'custom').length }
  ];

  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesSearch = bookmark.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bookmark.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bookmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    const Icon = categoryIcons[category] || Star;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Bookmarks</h2>
        <Button size="sm" variant="outline" className="flex items-center space-x-1">
          <Plus className="h-3 w-3" />
          <span>Add</span>
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search bookmarks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center space-x-1 whitespace-nowrap"
          >
            <span>{category.name}</span>
            {category.count > 0 && (
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
          onClick={() => {
            const homeBookmark = bookmarks.find(b => b.category === 'home');
            if (homeBookmark) onRouteRequest(currentLocation, homeBookmark);
          }}
        >
          <Home className="h-4 w-4" />
          <span>Go Home</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
          onClick={() => {
            const workBookmark = bookmarks.find(b => b.category === 'work');
            if (workBookmark) onRouteRequest(currentLocation, workBookmark);
          }}
        >
          <Briefcase className="h-4 w-4" />
          <span>Go to Work</span>
        </Button>
      </div>

      {/* Bookmarks List */}
      <div className="space-y-2">
        {filteredBookmarks.length === 0 ? (
          <div className="text-center py-8">
            <Star className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">No bookmarks found</p>
            <p className="text-xs text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredBookmarks.map((bookmark) => (
            <Card key={bookmark.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(bookmark.category)}
                      <h3 className="font-medium text-sm">{bookmark.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${categoryColors[bookmark.category]}`}
                      >
                        {bookmark.category}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2">{bookmark.address}</p>
                    
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Added {formatDate(bookmark.dateAdded)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1 ml-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onLocationSelect(bookmark)}
                      className="p-2 h-auto"
                      title="Show on map"
                    >
                      <MapPin className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRouteRequest(currentLocation, bookmark)}
                      className="p-2 h-auto"
                      title="Get directions"
                    >
                      <Navigation className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemoveBookmark(bookmark.id)}
                      className="p-2 h-auto text-red-500 hover:text-red-700"
                      title="Remove bookmark"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Stats */}
      <Card className="bg-gray-50">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-800">{bookmarks.length}</p>
              <p className="text-xs text-gray-600">Total Bookmarks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(bookmarks.map(b => b.category)).size}
              </p>
              <p className="text-xs text-gray-600">Categories</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookmarksPanel;