import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { labels } from "./const";
import {
  MainGrid,
  ProfileGrid,
  VideoGrid,
  InformationGrid,
  Img,
  TopGrid,
  BottomGrid,
  LabelIconGrid,
  BookIconGrid,
  ContentTypo,
  IconTypo,
  BoldSpan,
  LabelTypo,
  BookSpan,
  BookButton,
  LanguageGrid,
  CountryGrid,
  RatingGrid,
  ReviewTypo,
  SocialGrid,
  SocialIconGrid,
} from "./IconPhotoStyle";

export default function IconPhoto() {
  const value = 4;

  return (
    <MainGrid>
      <ProfileGrid>
        <Img src="/Images/FransLanting.svg"></Img>
        <SocialGrid>
          <SocialIconGrid>
            <YouTubeIcon style={{ color: "white" }} />
          </SocialIconGrid>
          <SocialIconGrid>
            <FacebookOutlinedIcon style={{ color: "white" }} />
          </SocialIconGrid>
        </SocialGrid>
      </ProfileGrid>
      <VideoGrid></VideoGrid>
      <InformationGrid>
        <TopGrid>
          <LabelIconGrid>
            <IconTypo>
              <DoneAllIcon
                style={{ width: "16px", height: "16px", color: "red" }}
              />
              On assignment until<BoldSpan> May 5, 2022</BoldSpan>
            </IconTypo>
            <IconTypo>
              <VolunteerActivismOutlinedIcon
                style={{ width: "16px", height: "16px", color: "red" }}
              />
              Sea Legacy <BoldSpan>10% Donation</BoldSpan>
            </IconTypo>
          </LabelIconGrid>

          <BookIconGrid>
            <LabelTypo>
              Landscape Photographer
              <br />
              <BookSpan>From $100 USD</BookSpan>
            </LabelTypo>
            <BookButton>Book Icon</BookButton>
          </BookIconGrid>

          <ContentTypo>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text.
          </ContentTypo>
          <RatingGrid>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 1.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2, display: "flex" }}>{labels[value]}</Box>
            </Box>
            <ReviewTypo>/ 12 Reviews</ReviewTypo>
          </RatingGrid>
        </TopGrid>

        <BottomGrid>
          <LanguageGrid>Languages</LanguageGrid>
          <CountryGrid>Country</CountryGrid>
        </BottomGrid>
      </InformationGrid>
    </MainGrid>
  );
}
