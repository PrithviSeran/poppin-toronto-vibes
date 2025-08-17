import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessHero = () => {
  const navigate = useNavigate();
  
  const handleJoinWaitlist = () => {
    // Navigate to home page and scroll to waitlist section
    navigate('/');
    setTimeout(() => {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0005]/10 via-[#FF4D9D]/10 to-[#9E95BD]/10 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Grow Your Event's
            <span className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] bg-clip-text text-transparent"> Reach</span> in Toronto
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Post events in seconds, connect with your audience instantly. 
            Join hundreds of businesses already reaching Toronto's most engaged event-goers.
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              onClick={handleJoinWaitlist}
              size="lg"
              className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 font-semibold"
            >
              Join the Waitlist
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Businesses Using Our Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Events Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Monthly Users</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#FF0005] to-[#FF4D9D] rounded-full opacity-20 blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#9E95BD] to-[#B97AFF] rounded-full opacity-20 blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default BusinessHero; 