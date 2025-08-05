import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from '@/lib/supabase';
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ScrollAnimation } from "@/components/animations";

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist_users')
        .insert([
          { email: email }
        ]);

      if (error) throw error;

      toast.success('Thanks for joining! We\'ll notify you when we launch.');
      setEmail('');
    } catch (error) {
      console.log(error);
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: prefersReducedMotion ? 1 : 1.02,
      boxShadow: "0 0 0 3px rgba(255, 0, 5, 0.1)"
    }
  };

  const buttonVariants = {
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const stats = [
    { value: "500,000+", label: "Activities" },
    { value: "Q2 2025", label: "Beta Launch" }
  ];

  return (
    <section id="waitlist" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"
          animate={{
            scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
            rotate: prefersReducedMotion ? 0 : [0, 180, 360]
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
          animate={{
            scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
            rotate: prefersReducedMotion ? 0 : [360, 180, 0]
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Discover Toronto?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our exclusive waitlist and be among the first to experience the future of activity discovery. 
              Beta launching soon!
            </motion.p>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Card className="max-w-md mx-auto shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  variants={inputVariants}
                  whileFocus="focus"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center text-lg py-6 rounded-full border-2 focus:border-brand-red transition-all duration-300"
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg py-6 rounded-full shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                  </Button>
                </motion.div>
              </form>
              
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-500">
                  🎉 <strong>Early Access Perks:</strong>
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    • Exclusive Toronto event previews
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    • Direct feedback to our team
                  </motion.li>
                </ul>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto text-center"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-2xl font-bold text-brand-red"
                animate={{
                  scale: prefersReducedMotion ? 1 : [1, 1.05, 1]
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
