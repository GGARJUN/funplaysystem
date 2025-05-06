
import FinalCTA from './_components/FinalCTA';
import HeroSection from './_components/HeroSection';
import Highlight from './_components/Highlight';

import HowItWorks from './_components/HowItWorks';
import LeadForm from './_components/LeadForm';
import LogoSlide from './_components/LogoSlide';
import ProductHighlights from './_components/ProductHighlights';
import Testimonials from './_components/Testimonials';
import WhoWeServe from './_components/WhoWeServe';
import WhyFunPlayTrust from './_components/WhyFunPlayTrust';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <LogoSlide />
      <WhyFunPlayTrust />
      {/* <Highlight /> */}
      <ProductHighlights />
      <WhoWeServe />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.87423770914756!2d80.1941464!3d13.099959100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265821eda188b%3A0x80e65cd6ee68c39a!2sSenate%20Space%2002!5e0!3m2!1sen!2sin!4v1742927429056!5m2!1sen!2sin" width="800" height="400" loading="lazy" className="w-full"></iframe>
      <FinalCTA />
      {/* <StickyActionBar /> */}
    </div>
  );
}