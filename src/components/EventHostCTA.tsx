import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventHostCTA = () => {
  const navigate = useNavigate();

  const navigateToHostEvent = () => {
    navigate('/host-event');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got an Event to Share?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From epic house parties to cultural events, share your amazing experiences with Toronto's most active community. 
            Get featured and connect with people who are actually looking for their next adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Exposure</h3>
                <p className="text-gray-600">Get your event in front of thousands of Toronto activity seekers immediately after approval.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Audience</h3>
                <p className="text-gray-600">Reach people who are actively looking for parties, events, and new experiences in Toronto.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">🎉</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">All Event Types Welcome</h3>
                <p className="text-gray-600">House parties, frat events, cultural shows, workshops - if it's happening in Toronto, we want to feature it.</p>
              </div>
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Post?</h3>
                                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Join hundreds of Toronto event organizers and party posters who trust Whats Poppin to connect them with their ideal audience.
                  </p>
                                  <Button
                    onClick={navigateToHostEvent}
                    size="lg"
                    className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Post Your Event <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                <div className="mt-6 text-sm text-gray-500">
                  ✨ Free to submit • Quick approval process
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHostCTA; 