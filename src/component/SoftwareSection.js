"use client";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { SoftwareSlider } from "./data";
import responsiveValue from "./responsive";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import { LeftButton, HeadingGrid } from "./GroupsSliderStyle";
import {SliderMainGrid, HeadingTypo, ParagraphTypo, EquipViewButton} from './EquipmentStyle';
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
        {SoftwareSlider.map((item) => (
          <SliderMainGrid>
            <Grid className="gradient"></Grid>
            <img
              className="group-img"
              src={item.logourl}
              alt="sliderIcon"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                objectFit: "cover",
              }}
            />
            <Grid style={{display:"flex", flexDirection:"column"}}>
            <HeadingTypo variant="h5" className="equip-heading">{item.heading}</HeadingTypo>
            <ParagraphTypo variant="p">{item.paragraph}</ParagraphTypo>
            <AvatarGroup total={19} className="equipment-avatar">
              <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
            </AvatarGroup>
            <EquipViewButton className="view-button">View Icon</EquipViewButton>
            </Grid>
          </SliderMainGrid>
        ))}
      </Slider>
    </>
  );
}
