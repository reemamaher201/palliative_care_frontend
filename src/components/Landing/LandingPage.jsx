import React from "react";
import Navbar from "./Navbar.jsx";
import AboutSection from "./AboutSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import ServicesSection from "./ServicesSection.jsx";
import BlogSection from "./BlogSection.jsx";
import Footer from "./Footer.jsx";
import '../../App.css'

function LandingPage() {
    return (
        <div className="font-sans">
            <Navbar   />   <AboutSection />    <FeaturesSection />
            <ServicesSection />
            <BlogSection     /> <Footer />  </div>
    );
}

export default LandingPage;