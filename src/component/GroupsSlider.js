"use client";
import React from "react";
import { GroupSlider } from "./data";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import responsiveValue from "./responsive";
import { IconMainGrid, ViewButton, SliderHeadingTypo } from "./IconSliderStyle";
import {
  LeftButton,
  HeadingGrid,
  GroupContentGrid,
  HeadingTypo,
} from "./GroupsSliderStyle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Image from 'next/image';

export default function GroupsSlider() {
  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: responsiveValue,
  };

  return (
    <IconMainGrid>
      <HeadingGrid>
        <SliderHeadingTypo>Groups</SliderHeadingTypo>
        <LeftButton>
          See all &nbsp;{" "}
          <ArrowForwardIosIcon style={{ width: "15px", height: "15px" }} />
        </LeftButton>
      </HeadingGrid>
      <Slider {...settings}>
        {GroupSlider.map((item, index) => (
          <Grid key = {index} className="grid-main">
            <Grid className="gradient"></Grid>
            <Image
              className="group-img"
              src={item.imgurl}
              alt="sliderIcon"
              width={264}
              height={384}
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                objectFit: "cover",
              }}
            />
            <GroupContentGrid>
              <Image
                src={item.iconimg}
                alt="imageIcon"
                  width = {170}
                  height = {118}
              />
              <HeadingTypo variant="h4" className="group-heading">
                {item.heading}
              </HeadingTypo>
              <ViewButton className="view-button">View Icon</ViewButton>
              <AvatarGroup total={19} className="group-slider-avatar">
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
                <Avatar alt="Remy Sharp" src="/Images/Avatar.svg" />
              </AvatarGroup>
            </GroupContentGrid>
          </Grid>
        ))}
      </Slider>
    </IconMainGrid>
  );
}
