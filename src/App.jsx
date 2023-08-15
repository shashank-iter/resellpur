import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";
import WhyChooseUs from "./components/WhyChooseUs"
import HowItWorks from "./components/HowItWorks";
import ProductShowcase from "./components/ProductShowcase";
import ProductSectionDescription from "./components/ProductSectionDescription";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <WhyChooseUs/>
      <HowItWorks/>
      <ProductSectionDescription/>
      <ProductShowcase/>
      <Footer/>
    </>
  );
}

export default App;
