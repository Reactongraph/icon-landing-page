"use client";
import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import { ImageSlider } from "./data";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import responsiveValue from "./responsive";
import {
  IconMainGrid,
  ContentGrid,
  ViewButton,
  MainHeadingTypo,
  SubHeadingTypo,
  ParagraphTypo,
  SliderHeadingTypo,
} from "./IconSliderStyle";

const customFn = function (i) {
  return (
    <div
      style={{
        width: "17px",
        height: "17px",
        backgroundColor: i === 0 ? "black" : "grey",
        borderRadius: "10px",
      }}
    />
  );
};

export default function IconSlider() {
  var settings = {
    className: "iconclass",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: customFn,
    responsive: responsiveValue,
  };
  return (
    <IconMainGrid>
      <SliderHeadingTypo>Featured Icons</SliderHeadingTypo>
      <Slider {...settings}>
        {ImageSlider.map((item, index) => (
          <Grid
            key={index}
            className="grid-main"
            style={{ position: "relative", height: "400px" }}
          >
            <Grid className="gradient"></Grid>
            <Image
              className="icon-img"
              src={item.imgurl}
              alt="sliderIcon"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <ContentGrid>
              <MainHeadingTypo variant="h4">{item.heading}</MainHeadingTypo>
              <SubHeadingTypo>{item.subHeading}</SubHeadingTypo>
              <Typography
                borderBottom="1px solid #E32320"
                width="50%"
                className="red-border"
              ></Typography>
              <ParagraphTypo className="view-content">
                Business / Creative
              </ParagraphTypo>
              <Link href="/icon-profile" style={{ textDecoration: "none" }}>
                <ViewButton className="view-button">View Icon</ViewButton>
              </Link>
              <SubHeadingTypo>{item.paragraph}</SubHeadingTypo>
            </ContentGrid>
          </Grid>
        ))}
      </Slider>
    </IconMainGrid>
  );
}
