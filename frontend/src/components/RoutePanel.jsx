import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  Gauge, 
  Route,
  Car,
  Bike,
  Footprints,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Share,
  Download,
  X
} from 'lucide-react';

const RoutePanel = ({ route, onStartNavigation, onClearRoute }) => {
  const [selectedRouteOption, setSelectedRouteOption] = useState(0);
  
  // Mock route alternatives
  const routeOptions = [
    {
      id: 1,
      name: 'Fastest Route',
      distance: '12.5 km',
      duration: '18 minutes',
      description: 'via Main Street and Highway 101',
      trafficLevel: 'moderate',
      fuelCost: '$3.20',
      icon: Car,
      highlighted: true
    },
    {
      id: 2,
      name: 'Shortest Route',
      distance: '10.2 km',
      duration: '22 minutes',
      description: 'via local roads and side streets',
      trafficLevel: 'light',
      fuelCost: '$2.80',
      icon: Car,
      highlighted: false
    },
    {
      id: 3,
      name: 'Scenic Route',
      distance: '15.8 km',
      duration: '25 minutes',
      description: 'via park roads and waterfront',
      trafficLevel: 'light',
      fuelCost: '$4.10',
      icon: Car,
      highlighted: false
    }
  ];

  const transportModes = [
    { id: 'car', name: 'Car', icon: Car, active: true },
    { id: 'bike', name: 'Bike', icon: Bike, active: false },
    { id: 'walk', name: 'Walk', icon: Footprints, active: false }
  ];

  const getTrafficColor = (level) => {
    switch (level) {
      case 'heavy':
        return 'bg-red-100 text-red-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'light':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrafficIcon = (level) => {
    switch (level) {
      case 'heavy':
        return <TrendingUp className="h-3 w-3" />;
      case 'moderate':
        return <AlertTriangle className="h-3 w-3" />;
      case 'light':
        return <TrendingDown className="h-3 w-3" />;
      default:
        return <Gauge className="h-3 w-3" />;
    }
  };

  if (!route) {
    return (
      <div className="p-4 text-center">
        <div className="mb-4">
          <Route className="h-12 w-12 mx-auto text-gray-400 mb-2" />
          <h3 className="text-lg font-semibold text-gray-700">No Route Selected</h3>
          <p className="text-sm text-gray-500">Search for a destination to calculate route</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {/* Route Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-blue-800">Route Overview</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearRoute}
              className="text-blue-600 hover:text-blue-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">From:</span>
              <span className="text-sm text-gray-700">{route.from.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">To:</span>
              <span className="text-sm text-gray-700">{route.to.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transport Mode Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Transport Mode</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {transportModes.map((mode) => (
              <Button
                key={mode.id}
                variant={mode.active ? "default" : "outline"}
                size="sm"
                className="flex flex-col items-center space-y-1 h-auto py-3"
              >
                <mode.icon className="h-4 w-4" />
                <span className="text-xs">{mode.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Route Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Route Options</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {routeOptions.map((option, index) => (
              <div
                key={option.id}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedRouteOption === index 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedRouteOption(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <option.icon className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-sm">{option.name}</span>
                    {option.highlighted && (
                      <Badge variant="default" className="text-xs">
                        Recommended
                      </Badge>
                    )}
                  </div>
                  <input
                    type="radio"
                    checked={selectedRouteOption === index}
                    onChange={() => setSelectedRouteOption(index)}
                    className="text-blue-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3 text-gray-500" />
                    <span>{option.distance}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-600">{option.description}</p>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getTrafficColor(option.trafficLevel)}`}
                    >
                      {getTrafficIcon(option.trafficLevel)}
                      <span className="ml-1 capitalize">{option.trafficLevel}</span>
                    </Badge>
                    <span className="text-xs text-gray-500">{option.fuelCost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Route Actions */}
      <div className="space-y-2">
        <Button
          onClick={onStartNavigation}
          className="w-full flex items-center justify-center space-x-2"
          size="lg"
        >
          <Navigation className="h-5 w-5" />
          <span>Start Navigation</span>
        </Button>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <Share className="h-4 w-4" />
            <span>Share Route</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>Save Route</span>
          </Button>
        </div>
      </div>

      {/* Route Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Route Details</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Distance</span>
              <span className="text-sm font-medium">{route.distance}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estimated Time</span>
              <span className="text-sm font-medium">{route.duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Fuel Cost</span>
              <span className="text-sm font-medium">$3.20</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Route Type</span>
              <Badge variant="secondary" className="text-xs">
                Mixed Traffic
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Traffic Alerts */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-orange-800">Traffic Alert</p>
              <p className="text-xs text-orange-700 mt-1">
                Moderate traffic expected on Main Street. Consider leaving 5 minutes early.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoutePanel;