import Benefits from "./Benefits";
import LandingPageService from "./LandingPageService";
import FeatureSection from "./FeatureSection";
import FinalCTA from "./FinalCTA";
import LandingFooter from "./LandingFooter";
import LandingHero from "./LandingHero";
import LandingPageFAQ from "./LandingPageFAQ";
import LandingService from "./LandingService";
import ServiceCategories from "./LandingService";
import OpportunitySection from "./OpportunitySection";
import RegistrationForm from "./RegForm";
import ServiceHighlights from "./ServiceHighlight";
import Testimonials from "./Testimonial";
import WhyOurService from "./WhyOurService";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <main className="container mx-auto px-4">

        <LandingHero />
        <WhyOurService/>
        <Benefits />
        <ServiceCategories />
        <OpportunitySection />
        {/* <ServiceHighlights /> */}
        {/* <LandingPageService /> */}
        {/* <FeatureSection /> */}
        {/* <LandingPageFAQ /> */}
        <Testimonials />
        <FinalCTA />
        {/* <LandingFooter /> */}
      </main>

    </div>
  )
}

