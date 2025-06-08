import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Demo = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reset video playing state when feature changes
    setVideoPlaying(false);
    
    // For non-mobile devices, try to auto-play the new video
    if (!isMobile) {
      setTimeout(() => {
        const video = document.querySelector(`video[data-feature="${activeFeature}"]`) as HTMLVideoElement;
        if (video) {
          video.play().catch(() => {
            // Autoplay failed, which is fine
          });
        }
      }, 100);
    }
  }, [activeFeature, isMobile]);

  useEffect(() => {
    // Mobile scroll-based feature detection
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-feature-index') || '0');
          setActiveFeature(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all mobile feature elements
    const featureElements = document.querySelectorAll('[data-feature-index]');
    featureElements.forEach((element) => observer.observe(element));

    return () => {
      featureElements.forEach((element) => observer.unobserve(element));
    };
  }, [isMobile]);

  const handleVideoPlay = () => {
    const video = document.querySelector(`video[data-feature="${activeFeature}"]`) as HTMLVideoElement;
    if (video) {
      video.play().then(() => {
        setVideoPlaying(true);
      }).catch((error) => {
        console.log('Video play failed:', error);
      });
    }
  };

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

        <div className="max-w-7xl mx-auto">
          {/* Desktop Version - 2-column layout with iPhone */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Section */}
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
                      
                      {/* Video Container */}
                      <div className="h-full relative" style={{ height: 'calc(100% - 3rem)' }}>
                        <video
                          key={features[activeFeature].video}
                          autoPlay={!isMobile}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          webkit-playsinline="true"
                          className="w-full h-full object-cover object-bottom"
                          data-feature={activeFeature}
                          onPlay={() => setVideoPlaying(true)}
                          onPause={() => setVideoPlaying(false)}
                        >
                          <source src={features[activeFeature].video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Mobile Play Button Overlay */}
                        {isMobile && !videoPlaying && (
                          <div 
                            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                            onClick={handleVideoPlay}
                          >
                            <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300">
                              <Play className="w-8 h-8 text-gray-900 fill-current" />
                            </div>
                          </div>
                        )}
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

            {/* Content Section */}
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
              
              {/* Desktop Navigation Controls */}
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

          {/* Mobile Version - Scrollable features */}
          <div className="lg:hidden space-y-8 px-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="transition-all duration-500"
                data-feature-index={index}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border w-full max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Video for this feature - Outside the description card */}
                <div className="relative w-64 mx-auto mt-6">
                  {/* iPhone 12 Frame */}
                  <div className="bg-gray-900 rounded-[2.5rem] p-1 shadow-xl">
                    <div className="bg-black rounded-[2.2rem] p-1">
                      <div className="bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
                        {/* iPhone Status Bar */}
                        <div className="bg-black text-white text-xs py-1.5 px-3 flex justify-between items-center">
                          <span className="font-medium">9:41</span>
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-0.5">
                              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                            </div>
                            <div className="w-4 h-2 border border-white rounded-sm relative">
                              <div className="w-full h-full bg-white rounded-sm"></div>
                              <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-r"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Video Container */}
                        <div className="h-full relative" style={{ height: 'calc(100% - 2rem)' }}>
                          <video
                            id={`mobile-video-${index}`}
                            autoPlay={!isMobile}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            className="w-full h-full object-cover object-bottom"
                            onPlay={() => setVideoPlaying(true)}
                            onPause={() => setVideoPlaying(false)}
                          >
                            <source src={feature.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          
                          {/* Mobile Play Button Overlay */}
                          {isMobile && !videoPlaying && (
                            <div 
                              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                              onClick={() => {
                                const video = document.getElementById(`mobile-video-${index}`) as HTMLVideoElement;
                                if (video) {
                                  video.play().then(() => {
                                    setVideoPlaying(true);
                                  }).catch((error) => {
                                    console.log('Video play failed:', error);
                                  });
                                }
                              }}
                            >
                              <div className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all duration-300">
                                <Play className="w-6 h-6 text-gray-900 fill-current" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;