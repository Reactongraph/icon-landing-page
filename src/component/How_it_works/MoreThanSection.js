"use client";
import React from "react";
import {
  MainGrid,
  ContentGrid,
  ImageGrid,
  TextGrid,
  H3,
  ColorText,
  Paragraph,
  MeetButton,
} from "./MoreStyle";
import { ImageData } from "./const";

export default function MoreThanSection() {
  return (
    <MainGrid>
      <ContentGrid>
        <ImageGrid>
          {ImageData.map((item) => (
            <>
              <img
                src={item.imgurl}
                style={{
                 height: item.height,
                  position: "absolute",
                  bottom: item.bottom,
                  right: item.right,
                  left: item.left,
                  zIndex: item.zindex
                }}
              ></img>
            </>
          ))}
        </ImageGrid>
        <TextGrid>
          <H3 variant="h3">
            <ColorText>More than</ColorText>
            <br /> just learning
          </H3>
          <Paragraph>
            Award winners. World-renowned artists. Acclaimed creative
            professionals. Icon delivers a once-in-a-lifetime opportunity to
            directly connect you with those you admire. So you get one step
            closer to becoming the master of your art.
          </Paragraph>
          <MeetButton>Meet your Icons</MeetButton>
        </TextGrid>
      </ContentGrid>
    </MainGrid>
  );
}
