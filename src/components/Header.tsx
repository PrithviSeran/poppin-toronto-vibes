
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/26c38a7a-40e1-484b-a591-2ae4ee6ef625.png" 
            alt="Whats Poppin Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-gray-900">Whats Poppin</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-brand-red to-brand-purple hover:from-red-500 hover:to-purple-500 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
