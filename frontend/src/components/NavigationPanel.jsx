import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Navigation, 
  Square,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  MapPin,
  Clock,
  Gauge,
  Volume2,
  VolumeX,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const NavigationPanel = ({ 
  isNavigating, 
  instructions, 
  currentInstruction, 
  onStopNavigation, 
  audioEnabled,
  route 
}) => {
  const [progress, setProgress] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [estimatedArrival, setEstimatedArrival] = useState('');

  useEffect(() => {
    if (isNavigating) {
      // Simulate navigation progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 0.5;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
        
        // Simulate speed changes
        setCurrentSpeed(Math.floor(Math.random() * 20) + 40);
        
        // Update estimated arrival time
        const now = new Date();
        const arrivalTime = new Date(now.getTime() + (Math.random() * 30 + 10) * 60000);
        setEstimatedArrival(arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isNavigating]);

  const getDirectionIcon = (direction) => {
    switch (direction) {
      case 'left':
        return <ArrowLeft className="h-8 w-8" />;
      case 'right':
        return <ArrowRight className="h-8 w-8" />;
      case 'straight':
        return <ArrowUp className="h-8 w-8" />;
      case 'u-turn':
        return <RotateCcw className="h-8 w-8" />;
      case 'arrive':
        return <MapPin className="h-8 w-8" />;
      default:
        return <ArrowUp className="h-8 w-8" />;
    }
  };

  const getCurrentInstruction = () => {
    if (!instructions || instructions.length === 0) return null;
    return instructions[Math.min(currentInstruction, instructions.length - 1)];
  };

  const getNextInstruction = () => {
    if (!instructions || instructions.length === 0) return null;
    const nextIndex = Math.min(currentInstruction + 1, instructions.length - 1);
    return instructions[nextIndex];
  };

  if (!isNavigating) {
    return (
      <div className="p-4 text-center">
        <div className="mb-4">
          <Navigation className="h-12 w-12 mx-auto text-gray-400 mb-2" />
          <h3 className="text-lg font-semibold text-gray-700">Navigation Ready</h3>
          <p className="text-sm text-gray-500">Select a route to start navigation</p>
        </div>
      </div>
    );
  }

  const currentInst = getCurrentInstruction();
  const nextInst = getNextInstruction();

  return (
    <div className="p-4 space-y-4">
      {/* Route Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="bg-blue-600">
                Navigating
              </Badge>
              <span className="text-sm font-medium">{route?.distance}</span>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={onStopNavigation}
              className="flex items-center space-x-1"
            >
              <Square className="h-3 w-3" />
              <span>Stop</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-xs text-gray-600">ETA</p>
                <p className="font-medium">{estimatedArrival}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-xs text-gray-600">Speed</p>
                <p className="font-medium">{currentSpeed} km/h</p>
              </div>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
              <span>Progress</span>
              <span>{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Current Instruction */}
      {currentInst && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 text-green-600">
                {getDirectionIcon(currentInst.direction)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-green-800">
                  {currentInst.instruction}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-green-700">
                  <span className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>{currentInst.distance}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{currentInst.duration}</span>
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Instruction */}
      {nextInst && currentInst !== nextInst && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-3">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 text-yellow-600">
                {getDirectionIcon(nextInst.direction)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-800">
                  Then: {nextInst.instruction}
                </p>
                <p className="text-xs text-yellow-700 mt-1">
                  {nextInst.distance} • {nextInst.duration}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Route Instructions List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Route Instructions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-64 overflow-y-auto">
            {instructions.map((instruction, index) => (
              <div 
                key={instruction.id}
                className={`p-3 border-b border-gray-100 ${
                  index === currentInstruction 
                    ? 'bg-blue-50 border-blue-200' 
                    : index < currentInstruction 
                      ? 'bg-gray-50 opacity-60' 
                      : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {index < currentInstruction ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : index === currentInstruction ? (
                      <div className="h-4 w-4 bg-blue-600 rounded-full animate-pulse" />
                    ) : (
                      <div className="h-4 w-4 bg-gray-300 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{instruction.instruction}</p>
                    <p className="text-xs text-gray-600">
                      {instruction.distance} • {instruction.duration}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-gray-400">
                    {getDirectionIcon(instruction.direction)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audio Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {audioEnabled ? (
                <Volume2 className="h-5 w-5 text-blue-600" />
              ) : (
                <VolumeX className="h-5 w-5 text-gray-400" />
              )}
              <span className="text-sm font-medium">
                Voice Guidance
              </span>
            </div>
            <Badge variant={audioEnabled ? "default" : "secondary"}>
              {audioEnabled ? "On" : "Off"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <div>
              <p className="text-sm font-medium text-orange-800">Traffic Alert</p>
              <p className="text-xs text-orange-700">
                Moderate traffic ahead. Consider alternate route.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationPanel;