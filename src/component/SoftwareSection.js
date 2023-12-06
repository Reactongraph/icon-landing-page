"use client";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, AvatarGroup, Avatar } from "@mui/material";
import Slider from "react-slick";
import Image from 'next/image';
import { SoftwareSlider } from "./data";
import responsiveValue from "./responsive";
import { LeftButton } from "./GroupsSliderStyle";
import {
  HeadingGrid,
  SliderMainGrid,
  HeadingTypo,
  ParagraphTypo,
  EquipViewButton,
} from "./SoftwareStyle";
import { SliderHeadingTypo } from "./IconSliderStyle";

export default function SoftwareSection() {
  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    responsive: responsiveValue,
  };
  return (
    <>
      <HeadingGrid>
        <SliderHeadingTypo>Software Knowledge</SliderHeadingTypo>
        <LeftButton>
          See all &nbsp;{" "}
          <ArrowForwardIosIcon style={{ width: "15px", height: "15px" }} />
        </LeftButton>
      </HeadingGrid>

      <Slider {...settings}>
        {SoftwareSlider.map((item, index) => (
          <SliderMainGrid key={index}>
            <Grid className="gradient"></Grid>
            <Image
              src={item.logourl}
              alt="sliderIcon"
              width={64}
              height={64}
              style={{ marginLeft: "-20px" }}
            />
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <HeadingTypo variant="h5">{item.heading}</HeadingTypo>
              <ParagraphTypo variant="p">{item.paragraph}</ParagraphTypo>
              <AvatarGroup total={19} className="software-avatar">
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              </AvatarGroup>
              <EquipViewButton className="equip-view-button">
                View Icon
              </EquipViewButton>
            </Grid>
          </SliderMainGrid>
        ))}
      </Slider>
    </>
  );
}
