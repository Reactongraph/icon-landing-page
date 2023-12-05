import React from "react";
import {
  HeaderGrid,
  MenuText,
  H3Typo,
  BoldText,
} from "../IconProfile_Page/HeadingStyle";
import { SubHeading } from "./IconTopicStyle";

export default function HeadingSection() {
  return (
    <HeaderGrid>
      <MenuText>
        Home / Categories / Photography / Frans Lanting /{" "}
        <BoldText>Book</BoldText>
      </MenuText>
      <H3Typo variant="h3">Frans Lanting</H3Typo>
      <SubHeading>Landscape Photographer</SubHeading>
    </HeaderGrid>
  );
}
