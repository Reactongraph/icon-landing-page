import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import MoreThanSection from "./MoreThanSection";
import WorkSection from "./WorkSection";
import IconSection from "./IconSection";
import Footer from "../Footer";
import StayUpdateSection from "../StayUpdateSection";

export default function HowItWorks() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MoreThanSection />
      <WorkSection />
      <IconSection />
      <StayUpdateSection />
      <Footer />
    </div>
  );
}
