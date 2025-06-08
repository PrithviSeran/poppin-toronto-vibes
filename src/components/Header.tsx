import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6b3cb97c-171b-494a-af64-d5171f919f1d.png" 
            alt="Whats Poppin Logo" 
            className="h-12 sm:h-16 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={scrollToFeatures} className="text-gray-600 hover:text-gray-900 transition-colors">Features</button>
          <button onClick={scrollToDemo} className="text-gray-600 hover:text-gray-900 transition-colors">Demo</button>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-[#FF0005] to-[#9E95BD] hover:opacity-90 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 space-y-4">
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
