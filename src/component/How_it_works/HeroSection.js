import React from "react";
import {
  MainGrid,
  ContentGrid,
  H1,
  Span,
  TextTypo,
  BookButton,
  VideoCard,
  CircleImg,
} from "./HeroSectionStyle";

export default function HeroSection() {
  return (
    <MainGrid>
      <ContentGrid>
        <H1 variant="h1">
          <CircleImg src="/Images/img-vector-meet.png"></CircleImg>
          Your talents
          <br />
          <Span>deserve the best</Span>
        </H1>
        <TextTypo>
          Transform your skills and thrive by connecting through video feedback
          or a live call with the most inspiring visual artists in the world.
          Ask questions, share your portfolio, and more.
        </TextTypo>
        <BookButton>Book a session</BookButton>
      </ContentGrid>
      <VideoCard component="iframe" image={"/Images/squareVideo.mp4"} />
    </MainGrid>
  );
}
