import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollAnimation, StaggeredAnimation } from "@/components/animations";

const EventHostCTA = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const navigateToHostEvent = () => {
    navigate('/host-event');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const featureVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      x: prefersReducedMotion ? 0 : 10,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: prefersReducedMotion ? 0 : -10,
      scale: prefersReducedMotion ? 1 : 1.02,
      transition: { duration: 0.3 }
    }
  };

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Instant Exposure",
      description: "Get your event in front of thousands of Toronto activity seekers immediately after approval."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Perfect Audience",
      description: "Reach people who are actively looking for parties, events, and new experiences in Toronto."
    },
    {
      icon: <span className="text-white font-bold">🎉</span>,
      title: "All Event Types Welcome",
      description: "House parties, frat events, cultural shows, workshops - if it's happening in Toronto, we want to feature it."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl" />
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
              Got an Event to Share?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From epic house parties to cultural events, share your amazing experiences with Toronto's most active community. 
              Get featured and connect with people who are actually looking for their next adventure.
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, threshold: 0.1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.3 : 0.6,
                  delay: index * (prefersReducedMotion ? 0 : 0.2),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ 
                    scale: prefersReducedMotion ? 1 : 1.1,
                    rotate: prefersReducedMotion ? 0 : 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - CTA Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, threshold: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{
                    scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
                    rotate: prefersReducedMotion ? 0 : [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  🚀
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Post?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join hundreds of Toronto event organizers and party posters who trust Whats Poppin to connect them with their ideal audience.
                </p>
                <motion.div
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={navigateToHostEvent}
                    size="lg"
                    className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
                  >
                    Post Your Event <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div 
                  className="mt-6 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  ✨ Free to submit • Quick approval process
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventHostCTA; 