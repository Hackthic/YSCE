import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoCarousel from './components/InfoCarousel'
import StatsSection from './components/StatsSection'
import WhyYSCE from './components/WhyYSCE'
import TestimonialsSection from './components/TestimonialsSection'
import EventsSection from './components/EventsSection'
import InquirySection from './components/InquirySection'
import Footer from './components/Footer'
import PartnerLogoCarousel from './components/PartnerLogoCarousel'
import AboutUs from './components/AboutUs'
import OurManagement from './components/OurManagement'
import Coaches from './components/Coaches'
import Programs from './components/Programs'
import OurCenter from './components/OurCenter'

const HomePage = () => (
  <>
    <HeroSection />
    <InfoCarousel />
    <StatsSection />
    <WhyYSCE />
    <TestimonialsSection />
    <EventsSection />
    <PartnerLogoCarousel />
    <InquirySection />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-ysce" element={<AboutUs />} />
          <Route path="/our-management" element={<OurManagement />} />
          <Route path="/our-coaches" element={<Coaches />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/our-center" element={<OurCenter />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
