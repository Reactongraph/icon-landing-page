"use client";
import React from "react";
import {
  WorkGrid,
  TextGrid,
  H3Typo,
  Paragraph,
  ColorText,
  StepGrid,
  CardGrid,
  CardHeadGrid,
  CardText,
  H5,
  Span,
} from "./WorkSectionStyle";
import { StepData } from "./const";

export default function WorkSection() {
  return (
    <WorkGrid>
      <TextGrid>
        <H3Typo>
          <ColorText>How</ColorText> it works
        </H3Typo>
        <Paragraph>Your Icons are only a few steps away</Paragraph>
      </TextGrid>
      <StepGrid>
        {StepData.map((item) => (
          <CardGrid>
            <CardHeadGrid>
              <H5>
                <Span>{item.colortext}</Span> &nbsp;
                {item.heading}
              </H5>
              <img src={item.icon} alt={item.icon}></img>
            </CardHeadGrid>
            <CardText>{item.subHeading}</CardText>
          </CardGrid>
        ))}
      </StepGrid>
    </WorkGrid>
  );
}
