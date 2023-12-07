"use client";
import React from "react";
import { Grid, Avatar, AvatarGroup } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import { EquipmentSlider } from "./data";
import responsiveValue from "./responsive";
import { LeftButton, HeadingGrid } from "./GroupsSliderStyle";
import { SliderHeadingTypo } from "./IconSliderStyle";
import {
  SliderMainGrid,
  HeadingTypo,
  ParagraphTypo,
  EquipViewButton,
} from "./EquipmentStyle";
import Image from 'next/image';

export default function Equipment() {
  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    responsive: responsiveValue,
  };
  return (
    <>
      <HeadingGrid>
        <SliderHeadingTypo>Equipment Expertise</SliderHeadingTypo>
        <LeftButton>
          See all &nbsp;{" "}
          <ArrowForwardIosIcon style={{ width: "15px", height: "15px" }} />
        </LeftButton>
      </HeadingGrid>

      <Slider {...settings}>
        {EquipmentSlider.map((item, index) => (
          <SliderMainGrid key = {index}> 
            <Image
              className="group-img"
              src={item.logourl}
              alt="sliderIcon"
              width={64}
              height={64}
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                objectFit: "cover",
              }}
            />
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <HeadingTypo variant="h5" className="equip-heading">
                {item.heading}
              </HeadingTypo>
              <ParagraphTypo variant="p">{item.paragraph}</ParagraphTypo>
              <AvatarGroup total={19} className="equipment-avatar">
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
