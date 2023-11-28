import React from "react";
import { TextField } from "@mui/material";
import {
  MainGrid,
  InputGrid,
  SubscribeButton,
  ContentGrid,
  HeadingTypo,
  ParagraphTypo,
  CircleImage,
} from "./StaySectionStyle";

export default function StayUpdateSection() {
  return (
    <MainGrid>
      <ContentGrid>
        <HeadingTypo variant="h2" color="white">
          <CircleImage src="/Images/img-vector-meet.png" alt="circle" />
          Stay updated
        </HeadingTypo>
        <ParagraphTypo variant="p" color="white">
          Get occasional updates about the latest news, events, and special
          offers from Icon.
        </ParagraphTypo>
        <InputGrid>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ color: "#A8A8A8", width: "484px" }}
          />
          <SubscribeButton>Subscribe</SubscribeButton>
        </InputGrid>
      </ContentGrid>
    </MainGrid>
  );
}
