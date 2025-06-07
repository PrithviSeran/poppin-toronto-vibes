
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Toronto,
            <span className="bg-gradient-to-r from-brand-red to-brand-purple bg-clip-text text-transparent"> One Swipe</span> at a Time
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The dating app for activities. Swipe through curated events and experiences in downtown Toronto. 
            Our smart algorithm learns your preferences to match you with perfect activities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-gradient-to-r from-brand-red to-brand-purple hover:from-red-500 hover:to-purple-500 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join the Waitlist
            </Button>
            
            <Button 
              onClick={scrollToDemo}
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
            >
              See Demo <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
