
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
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
      title: "Social Discovery",
      description: "Connect with like-minded people through shared activity interests",
      icon: "👥"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Whats Poppin?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing how you discover and experience Toronto's vibrant activity scene
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
