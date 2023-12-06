import React from "react";
import CardMedia from "@mui/material/CardMedia";
import {
  IconGrid,
  RightGrid,
  ContentGrid,
  HeadTypo,
  ColorText,
  Paragraph,
  IconButton,
  VideoCard,
} from "./IconSectionStyle";

export default function IconSection() {
  return (
    <IconGrid>
      <VideoCard component="iframe" image={"/Images/squareVideo.mp4"} />
      <RightGrid>
        <ContentGrid>
          <HeadTypo>
            Are you <ColorText>an Icon?</ColorText>
          </HeadTypo>
          <Paragraph>
            Turn your knowledge and experience into impact and income. Boost the
            next great creative by connecting with them through video feedback
            or 1:1 live video calls.{" "}
          </Paragraph>
        </ContentGrid>
        <IconButton>Become an Icon</IconButton>
      </RightGrid>
    </IconGrid>
  );
}
