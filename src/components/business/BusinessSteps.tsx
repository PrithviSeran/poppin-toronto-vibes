import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Calendar, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

const BusinessSteps = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to home page and scroll to waitlist section
    navigate('/');
    setTimeout(() => {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const phases = [
    {
      phase: 1,
      status: "Current Phase",
      title: "Post Events Easily",
      subtitle: "Launch your events to Toronto's most engaged audience",
      description: "Upload event details, photos, and set your target audience in just a few clicks. Our intuitive interface makes event creation effortless and gets your events in front of the right people.",
      features: [
        "Simple event creation form",
        "Photo upload and gallery",
        "Target audience selection",
        "Real-time engagement tracking",
        "City-wide exposure"
      ],
      icon: Upload,
      color: "from-[#FF0005] to-[#FF4D9D]",
      gradient: "from-[#FF0005]/20] to-[#FF4D9D]/20]"
    },
    {
      phase: 2,
      status: "Coming December 2025",
      title: "Sell Tickets & Bookings",
      subtitle: "Monetize your events with integrated ticketing",
      description: "Take your events to the next level with our integrated ticketing and reservation system. Accept payments, manage capacity, and track sales all in one place.",
      features: [
        "Integrated payment processing",
        "Ticket sales and management",
        "Reservation booking system",
        "Capacity management",
        "Sales analytics dashboard"
      ],
      icon: Calendar,
      color: "from-[#FF4D9D] to-[#FF69E2]",
      gradient: "from-[#FF4D9D]/20] to-[#FF69E2]/20]"
    },
    {
      phase: 3,
      status: "Coming April 2026",
      title: "Messaging & Announcements",
      subtitle: "Direct communication with your audience",
      description: "Build lasting relationships with your audience through direct messaging and announcement features. Keep attendees informed and engaged before, during, and after your events.",
      features: [
        "Direct messaging with users",
        "Event announcements",
        "Push notifications",
        "Attendee communication",
        "Community building tools"
      ],
      icon: MessageSquare,
      color: "from-[#B97AFF] to-[#9E95BD]",
      gradient: "from-[#B97AFF]/20] to-[#9E95BD]/20]"
    }
  ];

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev + 1) % phases.length);
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length);
  };

  const currentPhaseData = phases[currentPhase];

  // Features-style cards for Phase 1 (mirror src/components/Features.tsx)
  const phase1Features = [
    { icon: "📝", title: "Simple Event Creation", description: "Create events in minutes with a clean, guided form." },
    { icon: "🖼️", title: "Photo Uploads", description: "Showcase your event with images and galleries." },
    { icon: "🎯", title: "Audience Targeting", description: "Choose who sees your events based on interests." },
    { icon: "📈", title: "Engagement Tracking", description: "Monitor likes, RSVPs, and comments in real-time." },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Platform Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-phase development plan to help businesses grow and succeed
          </p>
        </motion.div>

        {/* Phase Navigation Dots */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPhase 
                    ? 'bg-gradient-to-r from-[#FF0005] to-[#FF4D9D] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Phase Card */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className={`p-8 bg-gradient-to-r ${currentPhaseData.gradient}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentPhaseData.color} flex items-center justify-center text-white shadow-lg`}>
                        <currentPhaseData.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full inline-block">
                          {currentPhaseData.status}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">
                          Phase {currentPhaseData.phase}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {currentPhaseData.title}
                  </h2>
                  <p className="text-xl text-gray-700 mb-6">
                    {currentPhaseData.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentPhaseData.description}
                  </p>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {currentPhaseData.phase === 1 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Features-style grid on the left - takes up 2/3 of the space */}
                      <div className="lg:col-span-2">
                        {/* Features-style header */}
                        <div className="text-left mb-8">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Love Whats Poppin</h3>
                          <p className="text-lg text-gray-600">We make posting and promoting events effortless so you can focus on delivering great experiences.</p>
                        </div>

                        {/* Features-style grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {phase1Features.map((feature, index) => (
                            <Card 
                              key={index} 
                              className="text-left hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
                            >
                              <CardContent className="p-6">
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Video on the right - takes up 1/3 of the space and is vertically centered */}
                      <div className="lg:col-span-1 flex justify-center items-center">
                        <div className="rounded-lg overflow-hidden max-w-[14.4rem]">
                          <video
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src="/ScreenRecording_08-08-2025 15-42-09_1.MP4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPhaseData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentPhaseData.color}`} />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Arrows - Below the section */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPhase}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextPhase}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Phase Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Phase {currentPhase + 1} of {phases.length}
          </p>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-4">
            Ready to start your journey with us?
          </p>
          <motion.button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] to-[#9E95BD] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSteps; 