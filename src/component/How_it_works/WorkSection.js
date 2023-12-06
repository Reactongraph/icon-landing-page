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
import Image from 'next/image';

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
        {StepData.map((item, index) => (
          <CardGrid key ={index}>
            <CardHeadGrid>
              <H5>
                <Span>{item.colortext}</Span> &nbsp;
                {item.heading}
              </H5>
              <Image src={item.icon} alt={item.icon} width={48} height={48}/>
            </CardHeadGrid>
            <CardText>{item.subHeading}</CardText>
          </CardGrid>
        ))}
      </StepGrid>
    </WorkGrid>
  );
}
