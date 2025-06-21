import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Megaphone, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventHosters = () => {
  const openHostForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScvAM3CgY5w4w86a1G7evtoLIVeLrjm1f7_h3WBY57mYxpXJg/viewform?usp=dialog', '_blank');
  };

  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Event Spotlight",
      description: "Get your event featured to thousands of Toronto activity seekers"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Targeted Audience",
      description: "Reach people actively looking for their next great experience"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Easy Promotion",
      description: "Simple form submission gets your event in front of our community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 font-inter">
      <Header />
      
      {/* Main Content */}
      <section className="pt-48 pb-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Post an Event on 
              <span className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] bg-clip-text text-transparent"> Whats Poppin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Got an amazing event, party, activity, or experience happening in Toronto? Share it with our community! 
              From frat parties to cultural events, fill out our simple form and get featured to thousands of people looking for their next adventure.
            </p>

            <Button
              onClick={openHostForm}
              size="lg"
              className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 mb-16"
            >
              Submit Your Event Now <ExternalLink className="ml-3 h-6 w-6" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-gradient-to-r from-[#FF0005] to-[#9E95BD]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Perfect For<span className="text-transparent bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] to-[#9E95BD] bg-clip-text">:</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Whether you're throwing the hottest party in town or organizing a cultural experience, we've got you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white animate-slide-in-left">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Social Events</h4>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">House parties & gatherings</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">Frat parties & college events</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">Birthday celebrations</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">Social mixers & meetups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Event Types</h4>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Pop-up markets & festivals</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Art exhibitions & gallery shows</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Live music & performances</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Food events & tastings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏃‍♀️</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Activities</h4>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Workshops & classes</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Outdoor adventures</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Networking events</span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF0005] to-[#9E95BD] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Cultural experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">⚡</span>
                  <p className="text-lg font-semibold text-gray-800">
                    All events are reviewed by our team to ensure they align with our community standards and provide value to Toronto activity seekers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of Toronto event organizers and party posters who trust Whats Poppin to connect them with their ideal audience.
            </p>
            <Button
              onClick={openHostForm}
              size="lg"
              className="bg-gradient-to-r from-[#FF0005] via-[#FF4D9D] via-[#FF69E2] via-[#B97AFF] to-[#9E95BD] hover:opacity-90 transition-all duration-300 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Submit Your Event <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EventHosters; 