import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { StaggeredAnimation, ScrollAnimation } from "@/components/animations";

const Features = () => {
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      title: "Smart Matching",
      description: "Our AI-powered algorithm learns from your swipes to recommend activities you'll love",
      icon: "🧠"
    },
    {
      title: "Downtown Toronto Focus",
      description: "Curated events and activities specifically in downtown Toronto's hottest spots",
      icon: "🏙️"
    },
    {
      title: "Real-time Updates",
      description: "Get instant notifications about new events and last-minute availability",
      icon: "⚡"
    },
    {
      title: "Event Curation",
      description: "Handpicked activities and events from Toronto's most exciting and niche venues and organizers",
      icon: "🎯"
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 50,
      scale: prefersReducedMotion ? 1 : 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: prefersReducedMotion ? 0 : -10,
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="features" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Whats Poppin?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're revolutionizing how you discover and experience Toronto's vibrant activity scene
            </motion.p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, threshold: 0.1 }}
              transition={{
                duration: prefersReducedMotion ? 0.3 : 0.6,
                delay: index * (prefersReducedMotion ? 0 : 0.1),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Card className="text-center border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{
                      scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
                      rotate: prefersReducedMotion ? 0 : [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
