import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Box, Grid, Link, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { labels } from "./const";
import {
  MainGrid,
  ProfileGrid,
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
  RatingGrid,
  ReviewTypo,
  SocialGrid,
  SocialIconGrid,
  ChipItem,
} from "./IconPhotoStyle";
import CardMedia from "@mui/material/CardMedia";

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
        <Grid>
          <CardMedia
            component="iframe"
            image={"/Images/video.mp4"}
            sx={{
              width: "100%",
              height: "100% ",
              borderRadius: "30px",
              padding: "0px 15px",
            }}
          />
        </Grid>
      </ProfileGrid>

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
            <Link href ="/book-icon">
            <BookButton>Book Icon</BookButton>
            </Link>
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
      </InformationGrid>
    </MainGrid>
  );
}
