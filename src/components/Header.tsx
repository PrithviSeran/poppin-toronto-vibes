import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHome = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // We're on the home page, just scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // We're on a different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const scrollToHero = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    navigateToSection('waitlist');
  };

  const scrollToFeatures = () => {
    navigateToSection('features');
  };

  const scrollToDemo = () => {
    navigateToSection('demo');
  };

  const navigateToEventHosters = () => {
    navigate('/host-event');
    setMobileMenuOpen(false);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const openInstagram = () => {
    window.open('https://instagram.com/whatspoppin.info', '_blank');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={scrollToHero} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/6b3cb97c-171b-494a-af64-d5171f919f1d.png" 
              alt="Whats Poppin Logo" 
              className="h-12 sm:h-16 w-auto"
            />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={openInstagram}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="h-8 w-8" />
          </button>
          {location.pathname !== '/' && (
            <button onClick={navigateToHome} className="text-gray-600 hover:text-gray-900 transition-colors">Home</button>
          )}
          <button onClick={scrollToFeatures} className="text-gray-600 hover:text-gray-900 transition-colors">Features</button>
          <button onClick={scrollToDemo} className="text-gray-600 hover:text-gray-900 transition-colors">Demo</button>
          <Button 
            onClick={navigateToEventHosters}
            className={`bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] to-[#9E95BD] text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 px-6 py-2 rounded-full font-semibold ${
              location.pathname === '/host-event' ? 'ring-2 ring-white ring-opacity-50' : ''
            }`}
          >
            Host Event
          </Button>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-[#FF0005] to-[#9E95BD] hover:opacity-90 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={openInstagram}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button 
              onClick={openInstagram}
              className="flex items-center w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span>Instagram</span>
            </button>
            {location.pathname !== '/' && (
              <button 
                onClick={navigateToHome}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </button>
            )}
            <button 
              onClick={scrollToFeatures}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={scrollToDemo}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Demo
            </button>
            <Button 
              onClick={navigateToEventHosters}
              className={`w-full bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] to-[#9E95BD] text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold rounded-lg mb-2 ${
                location.pathname === '/host-event' ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
            >
              Host Event
            </Button>
            <Button 
              onClick={scrollToWaitlist}
              className="w-full bg-gradient-to-r from-[#FF0005] to-[#9E95BD] hover:opacity-90 transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
