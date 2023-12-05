"use client";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import HeadingSection from "./HeadingSection";
import IconPhoto from "./IconPhoto";
import Footer from "../Footer";
import StayUpdateSection from "../StayUpdateSection";
import FransGroup from "./FransGroup";
import PortfolioSection from "./PortfolioSection";
import BenefitSlider from "./BenefitSlider";

export default function IconProfile() {
  return (
    <>
      <ProfileHeader />
      <HeadingSection />
      <IconPhoto />
      <BenefitSlider />
      <PortfolioSection />
      <FransGroup />
      <StayUpdateSection />
      <Footer />
    </>
  );
}
