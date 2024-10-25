import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import LatestJobs from "../components/JobComponents/LatestJobs.js";
import AboutUs from "../components/AboutUs";
import ContactUsForm from "../components/ContactUsForm";
import Tips from "../components/Tips/Tips.js";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <HeroSection />
        <LatestJobs />
        <AboutUs />
        <ContactUsForm />
        <Tips />
        <Footer />
      </div>
    </>
  );
}
export default Home;
