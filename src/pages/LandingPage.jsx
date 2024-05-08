import Faq from "../components/LandingPage/Faq";
import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import Navbar from "../components/LandingPage/Navbar";

function LandingPage() {
  return (
    <div className="mx-7 my-5">
      <Navbar />
      <HeroSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage;
