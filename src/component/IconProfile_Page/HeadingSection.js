import React from "react";
import { HeadingGrid, HeadTypo, Span, CircleImage, HeaderGrid, MenuText, H3Typo, BoldText } from "./HeadingStyle";

export default function HeadingSection() {
  return (
    <>
      <HeadingGrid>
        <HeadTypo variant="h4">
        <CircleImage src="/Images/img-vector-meet.png" alt="circle" />
            <Span>Icon delivers a once-in-a-lifetime opportunity</Span><br/>
             to directly connect you
          with artists you admire.
        </HeadTypo>
      </HeadingGrid>
      <HeaderGrid>
        <MenuText>
        Home / Categories / Photography / <BoldText>Frans Lanting</BoldText>
        </MenuText>
        <H3Typo variant="h3">Frans Lanting</H3Typo>
      </HeaderGrid>
    </>
  );
}
