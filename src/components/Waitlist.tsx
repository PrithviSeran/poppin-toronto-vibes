import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from '@/lib/supabase';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <section id="waitlist" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Discover Toronto?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our exclusive waitlist and be among the first to experience the future of activity discovery. 
            Beta launching soon!
          </p>

          <Card className="max-w-md mx-auto shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-center text-lg py-6 rounded-full border-2 focus:border-brand-red"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  🎉 <strong>Early Access Perks:</strong>
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Exclusive Toronto event previews</li>
                  <li>• Direct feedback to our team</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-brand-red">500+</div>
              <div className="text-sm text-gray-600">Activities</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-gray-900">Q2 2025</div>
              <div className="text-sm text-gray-600">Beta Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
