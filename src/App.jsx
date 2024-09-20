import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OurProjects from './Components/OurProjects';
import Blogs from './Components/Blogs';
import ContactUS from './Components/ContactUS';
// import Signup from './Components/Signup';
// import Login from './Components/Login';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
// import ChatBot from './Components/ChatBot';
import OneBlog from './Components/OneBlog';
import Gallery from './Components/Gallery';
import OneProject from './Components/OurProjects/SmartHousing';
import SmartHousing from './Components/OurProjects/SmartHousing';
import RoyalSwiss from './Components/OurProjects/RoyalSwiss';
import Adamshousing from './Components/OurProjects/Adamshousing';
import AnyRoute404 from './Components/AnyRoute404';
import ChatWithWhatsapp from './Components/ChatWithWhatsapp';
import CityHousing from './Components/OurProjects/CitiHousing';
import DHAMultan from './Components/OurProjects/DHAMultan';
import RoyalOrchad from './Components/OurProjects/RoyalOrchad';
import Carreer from './Components/Carreer';
import RealEstateChallanges_1 from './Components/Blogs/RealEstateChallanges_1.jsx';
import RelationShipManager from './Components/Jobs/RelationShipManager.jsx';
import BusinessDevelopmentExecutive from './Components/Jobs/BusinessDevelopmentExecutive.jsx';
import VideoHost from './Components/Jobs/VideoHost.jsx';
import SalesTeam from './Components/Jobs/SalesTeam.jsx';
import LeadsPoup from './Components/LeadsPoup.jsx';
import EmergingTrendsinPakistansRealEstate_2 from './Components/Blogs/EmergingTrendsinPakistansRealEstate_2.jsx';
import BestTimeToInvestInRealEstate_3 from './Components/Blogs/BestTimeToInvestInRealEstate_3.jsx';
import Top11SocietiesInMultanToInvestIn2024_4 from './Components/Blogs/Top11SocietiesInMultanToInvestIn2024_4.jsx';

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <LeadsPoup />
        <div className="mt-[86px]">
          <Routes>
            <Route path="/*" element={<AnyRoute404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/blogs" element={<Blogs heading="Our Popular Blogs"/>} />
            <Route path="/contact-us" element={<ContactUS />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            {/* Projects */}
            <Route path="/project/smart-housing" element={<SmartHousing />} />
            <Route path="/project/royal-swiss" element={<RoyalSwiss />} />
            <Route path="/project/adams-housing" element={<Adamshousing />} />
            <Route path="/project/citi-housing" element={<CityHousing />} />
            <Route path="/project/DHA-multan" element={<DHAMultan />} />
            <Route path="/project/royal-orchad" element={<RoyalOrchad />} />
            {/* jobs */}
            <Route path="/career" element={<Carreer />} />
            <Route path="/job/relationship-manager" element={<RelationShipManager />} />
            <Route path="/job/business-development-executive" element={<BusinessDevelopmentExecutive />} />
            <Route path="/job/video-host" element={<VideoHost />} />
            <Route path="/job/sales-team" element={<SalesTeam />} />
            {/* Blogs */}
            <Route path="/blog/real-estate-opportunities-1" element={<RealEstateChallanges_1 />} />
            <Route path="/blog/emerging-trends-in-pakistans-real-estate-2" element={<EmergingTrendsinPakistansRealEstate_2 />} />
            <Route path="/blog/best-time-to-invest-in-pakistan-real-estate" element={<BestTimeToInvestInRealEstate_3 />} />
            <Route path="/blog/top-11-societies-in-multan-to-invest-in-2024" element={<Top11SocietiesInMultanToInvestIn2024_4 />} />
          </Routes>
        </div>
        <ChatWithWhatsapp />
        {/* <ChatBot /> */}
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
};

export default App;







// #fa8b17    h #ff8200   Mustard
// #2f3130    h 000000 Black
// #f8f2e6    White

//  #fff1e1    light mustard


// https://chatgpt.com/c/c649bf31-0f5c-42fb-9c42-42e931dcb522



// https://via.placeholder.com/350x200





// https://chatgpt.com/c/51aae938-c226-493c-b217-115b575e0da


// remake whole