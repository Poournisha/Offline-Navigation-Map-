import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { 
  Download, 
  Search, 
  MapPin, 
  Trash2, 
  CheckCircle,
  AlertCircle,
  Clock,
  HardDrive,
  Wifi,
  WifiOff,
  RefreshCw,
  Plus,
  Calendar,
  Package
} from 'lucide-react';

const OfflinePanel = ({ offlineAreas, onDownloadArea, onDeleteArea }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const [isOnline, setIsOnline] = useState(true);

  const filteredAreas = offlineAreas.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadedAreas = offlineAreas.filter(area => area.status === 'downloaded');
  const availableAreas = offlineAreas.filter(area => area.status === 'available');
  const downloadingAreas = offlineAreas.filter(area => area.status === 'downloading');

  const getTotalSize = () => {
    return downloadedAreas.reduce((total, area) => {
      const size = parseFloat(area.size);
      return total + size;
    }, 0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'downloaded':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'downloading':
        return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      case 'available':
        return <Download className="h-4 w-4 text-gray-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'downloaded':
        return 'bg-green-100 text-green-800';
      case 'downloading':
        return 'bg-blue-100 text-blue-800';
      case 'available':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Offline Maps</h2>
        <div className="flex items-center space-x-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 text-green-600" />
          ) : (
            <WifiOff className="h-4 w-4 text-red-600" />
          )}
          <Badge variant={isOnline ? "default" : "destructive"} className="text-xs">
            {isOnline ? "Online" : "Offline"}
          </Badge>
        </div>
      </div>

      {/* Storage Overview */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <HardDrive className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-800">Storage Used</p>
                <p className="text-xs text-blue-700">{getTotalSize().toFixed(1)} MB</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-800">Downloaded</p>
                <p className="text-xs text-blue-700">{downloadedAreas.length} areas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search offline areas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
          disabled={!isOnline}
        >
          <Plus className="h-4 w-4" />
          <span>Add Area</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
          disabled={!isOnline}
        >
          <RefreshCw className="h-4 w-4" />
          <span>Update All</span>
        </Button>
      </div>

      {/* Currently Downloading */}
      {downloadingAreas.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-sm flex items-center space-x-2">
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Currently Downloading</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {downloadingAreas.map((area) => (
              <div key={area.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-800">{area.name}</span>
                  <span className="text-xs text-blue-700">{area.progress || 0}%</span>
                </div>
                <Progress value={area.progress || 0} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Offline Areas List */}
      <div className="space-y-2">
        {filteredAreas.length === 0 ? (
          <div className="text-center py-8">
            <Download className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">No offline areas found</p>
            <p className="text-xs text-gray-400">Try adjusting your search</p>
          </div>
        ) : (
          filteredAreas.map((area) => (
            <Card key={area.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(area.status)}
                      <h3 className="font-medium text-sm">{area.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getStatusColor(area.status)}`}
                      >
                        {area.status}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2">{area.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <HardDrive className="h-3 w-3" />
                        <span>{area.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(area.lastUpdated)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1 ml-2">
                    {area.status === 'available' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onDownloadArea(area)}
                        className="p-2 h-auto"
                        title="Download area"
                        disabled={!isOnline}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    )}
                    {area.status === 'downloaded' && (
                      <>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedArea(area)}
                          className="p-2 h-auto"
                          title="View area"
                        >
                          <MapPin className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onDeleteArea(area.id)}
                          className="p-2 h-auto text-red-500 hover:text-red-700"
                          title="Delete area"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                
                {area.status === 'downloading' && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Downloading...</span>
                      <span>{area.progress || 0}%</span>
                    </div>
                    <Progress value={area.progress || 0} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Statistics */}
      <Card className="bg-gray-50">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-green-600">{downloadedAreas.length}</p>
              <p className="text-xs text-gray-600">Downloaded</p>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-600">{downloadingAreas.length}</p>
              <p className="text-xs text-gray-600">Downloading</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-600">{availableAreas.length}</p>
              <p className="text-xs text-gray-600">Available</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Offline Notice */}
      {!isOnline && (
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <WifiOff className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-orange-800">Offline Mode</p>
                <p className="text-xs text-orange-700">
                  You can only use downloaded areas. Connect to internet to download new areas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OfflinePanel;