"use client";
import React from 'react'
import ProfileHeader from './ProfileHeader';
import HeadingSection from './HeadingSection';
import IconPhoto from './IconPhoto';
import Footer from '../Footer';
import StayUpdateSection from '../StayUpdateSection';
import FransGroup from './FransGroup';

export default function IconProfile() {
  return (
    <>
        <ProfileHeader/>
        <HeadingSection/>
        <IconPhoto/>
        <FransGroup/>
        <StayUpdateSection/>
        <Footer/>
    </>
  )
}
