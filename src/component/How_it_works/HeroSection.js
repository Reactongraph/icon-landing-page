import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { MainGrid, ContentGrid, H1, Span, TextTypo, BookButton } from "./HeroSectionStyle";

export default function HeroSection() {
  return (
    <MainGrid>
      <ContentGrid>
        <H1 variant="h1">
          Your talents<br/>
          <Span>deserve the best</Span>
        </H1>
        <TextTypo>
          Transform your skills and thrive by connecting through video feedback
          or a live call with the most inspiring visual artists in the world.
          Ask questions, share your portfolio, and more.
        </TextTypo>
        <BookButton>Book a session</BookButton>
      </ContentGrid>
      <CardMedia
        component="iframe"
        image={"/Images/squareVideo.mp4"}
        sx={{
          width: "528px",
          height: "380px",
          borderRadius: "30px",
          margin: "0px",
        }}
      />
    </MainGrid>
  );
}
