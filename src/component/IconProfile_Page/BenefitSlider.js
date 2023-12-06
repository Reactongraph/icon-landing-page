import React from "react";
import { Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { BenefitsData } from "./const";
import { MainGrid, H4, H5, ListTypo } from "./SliderStyle";
import Slider from "react-slick";

export default function BenefitSlider() {
  var settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1234,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2.7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2.3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2.2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainGrid>
      <H4 variant="h4">What can your Icon help you with?</H4>
      <Slider {...settings}>
        {BenefitsData.map((item, index) => (
          <Grid key = {index} style={{ display: "grid", gap: "8px" }}>
            <H5 variant="h5">{item.heading}</H5>
            {item.paragraph.map((listitem, index) => (
              <ListTypo key = {index}>
                <KeyboardArrowRightIcon style={{ color: "#E32320" }} />
                {listitem.list}
              </ListTypo>
            ))}
          </Grid>
        ))}
      </Slider>
    </MainGrid>
  );
}
