import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const openInstagram = () => {
    window.open('https://instagram.com/whatspoppin.info', '_blank');
  };

  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discovering Toronto's best activities, one swipe at a time. 
              Join the community that's redefining how we explore our city.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="/host-event" className="hover:text-white transition-colors">Host Event</a></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors">Beta Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:help@whatspoppin.info" className="flex items-center hover:text-white transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>help@whatspoppin.info</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={openInstagram}
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span> whatspoppin.info</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
