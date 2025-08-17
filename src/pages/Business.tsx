import Header from "@/components/Header";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessSteps from "@/components/business/BusinessSteps";
import BusinessTestimonials from "@/components/business/BusinessTestimonials";
import BusinessCTA from "@/components/business/BusinessCTA";
import Footer from "@/components/Footer";

const Business = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      <BusinessHero />
      <BusinessSteps />
      <BusinessTestimonials />
      <BusinessCTA />
      <Footer />
    </div>
  );
};

export default Business; 