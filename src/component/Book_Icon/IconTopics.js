"use client";
import React from "react";
import { Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Slider from "react-slick";
import { BenefitsData } from "../IconProfile_Page/const";
import {
  MainGrid,
  H4,
  H5,
  ListTypo,
  SliderGrid,
  TimeTypo,
  Span,
  TopGrid,
} from "./IconTopicStyle";
import {
  BottomGrid,
  LanguageGrid,
  ChipItem,
} from "../../component/IconProfile_Page/IconPhotoStyle";

export default function IconTopics() {
  var settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1234,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2.7,
          infinite: true,
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
          slidesToShow: 3,
          slidesToScroll: 2.2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainGrid>
      <img src="Images/FransLanting.svg"></img>
      <SliderGrid>
        <TopGrid>
          <TimeTypo>
            <AccessTimeIcon
              style={{ color: "red", width: "15px", height: "15px" }}
            />
            &nbsp; Usually responds within
            <Span>72 hours</Span>
          </TimeTypo>
          <H4 variant="h4">What can your Icon help you with?</H4>
          <Slider {...settings}>
            {BenefitsData.map((item) => (
              <Grid style={{ display: "grid", gap: "8px", padding: "24px" }}>
                <H5 variant="h5">{item.heading}</H5>
                {item.paragraph.map((listitem) => (
                  <ListTypo>
                    <KeyboardArrowRightIcon style={{ color: "#E32320" }} />
                    {listitem.list}
                  </ListTypo>
                ))}
              </Grid>
            ))}
          </Slider>
        </TopGrid>
        <BottomGrid>
          <LanguageGrid>
            Languages
            <ChipItem label="Spanish" />
            <ChipItem label="English" />
            <ChipItem label="French" />
          </LanguageGrid>
          <LanguageGrid>
            Country
            <ChipItem label="Span" />
            <ChipItem label="Time Zone" />
            <ChipItem label="GMT" />
          </LanguageGrid>
        </BottomGrid>
      </SliderGrid>
    </MainGrid>
  );
}
