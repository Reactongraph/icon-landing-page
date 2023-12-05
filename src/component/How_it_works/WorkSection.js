"use client";
import React from "react";
import {
  WorkGrid,
  TextGrid,
  H3Typo,
  Paragraph,
  ColorText,
  StepGrid,
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
          <div>
          {item.heading}
          </div>
        ))}
      </StepGrid>
    </WorkGrid>
  );
}
