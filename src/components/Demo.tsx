import { useState } from 'react';

const Demo = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'suggestions',
      title: 'Personalized Suggestions',
      description: 'Get tailored activity suggestions based on your past interests, saved events, and behavioral patterns. The more you use the app, the better it gets.',
      highlights: [
        'Machine learning recommendations',
        'Behavior-based suggestions',
        'Interest tracking',
        'Continuous improvement'
      ],
      video: '/lovable-uploads/suggested_events.mov'
    },
    {
      id: 'saved',
      title: 'Save & Organize Activities',
      description: 'Keep track of activities you\'re interested in by saving them to your personal collection. Organize and plan your Toronto adventures effortlessly.',
      highlights: [
        'Personal activity collection',
        'Easy organization tools',
        'Quick access to saved events',
        'Planning made simple'
      ],
      video: '/lovable-uploads/saved_activities.mov'
    },
    {
      id: 'filters',
      title: 'Advanced Event Filtering',
      description: 'Filter activities by category, time, location, price range, and more. Find exactly what you\'re looking for with our comprehensive filtering system.',
      highlights: [
        'Multiple filter categories',
        'Price range selection',
        'Time and date filtering',
        'Category-based sorting'
      ],
      video: '/lovable-uploads/event_filters.mov'
    },
    {
      id: 'discovery',
      title: 'Smart Activity Discovery',
      description: 'Browse through hundreds of thousands of curated events and activities in downtown Toronto. Our intelligent algorithm learns your preferences and serves up personalized recommendations.',
      highlights: [
        'Swipe-based interface for easy browsing',
        'AI-powered personalization',
        'Real-time event updates',
        'Location-based recommendations'
      ],
      video: '/lovable-uploads/discovery_page.mov'
    }
  ];

  return (
    <section id="demo" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how easy it is to discover your next favorite activity in Toronto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sticky Video Section */}
          <div className="lg:sticky lg:top-32">
            <div className="relative w-80 mx-auto">
              {/* iPhone 12 Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-1 shadow-2xl">
                <div className="bg-black rounded-[2.8rem] p-1">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
                    {/* iPhone Status Bar */}
                    <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-white rounded-sm relative">
                          <div className="w-full h-full bg-white rounded-sm"></div>
                          <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-1 bg-white rounded-r"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Container - Below Status Bar */}
                    <div className="h-full" style={{ height: 'calc(100% - 3rem)' }}>
                      <video
                        key={features[activeFeature].video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={features[activeFeature].video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Indicators - Below Phone */}
              <div className="flex justify-center space-x-2 mt-6">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeFeature 
                        ? 'bg-gradient-to-r from-[#FF0005] to-[#9E95BD] scale-110' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section - Show only active feature */}
          <div className="flex flex-col justify-center min-h-[600px]">
            <div className="bg-white rounded-2xl p-8 shadow-lg border transition-all duration-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {features[activeFeature].highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setActiveFeature(Math.max(0, activeFeature - 1))}
                disabled={activeFeature === 0}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium transition-all duration-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveFeature(Math.min(features.length - 1, activeFeature + 1))}
                disabled={activeFeature === features.length - 1}
                className="px-6 py-3 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] text-white rounded-full font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;