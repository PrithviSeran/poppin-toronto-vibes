
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Demo = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const activities = [
    {
      title: "Rooftop Jazz Night",
      location: "Thompson Hotel",
      time: "8:00 PM",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
      category: "Music"
    },
    {
      title: "Food Truck Festival",
      location: "Nathan Phillips Square",
      time: "12:00 PM",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop",
      category: "Food"
    },
    {
      title: "Art Gallery Opening",
      location: "Distillery District",
      time: "7:00 PM",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=600&fit=crop",
      category: "Art"
    }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % activities.length);
      setSwipeDirection(null);
    }, 500);
  };

  const activity = activities[currentCard];

  return (
    <section id="demo" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how easy it is to discover your next favorite activity in Toronto
          </p>
        </div>

        <div className="relative max-w-sm mx-auto mb-12">
          {/* Phone Frame */}
          <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="bg-gray-900 text-white text-xs py-2 px-4 flex justify-between">
                <span>9:41 AM</span>
                <span>100%</span>
              </div>
              
              {/* App Header */}
              <div className="p-4 bg-white border-b">
                <div className="flex items-center justify-center space-x-2">
                  <img 
                    src="/lovable-uploads/26c38a7a-40e1-484b-a591-2ae4ee6ef625.png" 
                    alt="Whats Poppin" 
                    className="h-6 w-auto"
                  />
                  <span className="font-bold text-lg">Whats Poppin</span>
                </div>
              </div>

              {/* Activity Card */}
              <div className="relative h-96 bg-gray-100">
                <Card 
                  className={`absolute inset-4 overflow-hidden shadow-lg transition-all duration-500 ${
                    swipeDirection === 'left' ? 'transform -translate-x-full rotate-12 opacity-0' :
                    swipeDirection === 'right' ? 'transform translate-x-full rotate-12 opacity-0' :
                    'transform translate-x-0 rotate-0 opacity-100'
                  }`}
                >
                  <div className="relative h-full">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium">
                      {activity.category}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{activity.location}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="p-6 flex justify-center space-x-8">
                <Button
                  onClick={() => handleSwipe('left')}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-14 h-14 p-0 border-2 border-red-200 hover:border-red-400 hover:bg-red-50"
                  disabled={swipeDirection !== null}
                >
                  <ChevronLeft className="h-6 w-6 text-red-500" />
                </Button>
                <Button
                  onClick={() => handleSwipe('right')}
                  size="lg"
                  className="rounded-full w-14 h-14 p-0 bg-gradient-to-r from-brand-red to-brand-purple hover:from-red-500 hover:to-purple-500"
                  disabled={swipeDirection !== null}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Swipe left to pass, swipe right to save to your list!
          </p>
          <div className="flex justify-center space-x-2">
            {activities.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCard ? 'bg-brand-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
