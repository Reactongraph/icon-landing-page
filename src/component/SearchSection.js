import React from "react";
import { MenuItem } from "@mui/material";
import {
  MainGrid,
  HeadingGrid,
  SearchbarGrid,
  MainHeadingTypo,
  CircleImage,
  IconSpan,
  ParagraphTypo,
  SearchTextField,
  InputLabels,
  RightSearchGrid,
  LeftSearchIcon,
  SearchSelect,
  SearchFormControl,
} from "./SearchSectionStyle";

export default function SearchSection() {
  return (
    <MainGrid>
      <HeadingGrid>
        <MainHeadingTypo variant="h1" component="h1">
          <CircleImage src="/Images/img-vector-meet.png" alt="circle" />
          Meet your
          <IconSpan> Icon</IconSpan>
        </MainHeadingTypo>
        <ParagraphTypo variant="p" component="p">
          Icon delivers a once-in-a-lifetime opportunity to directly connect you
          with artists you admire.
        </ParagraphTypo>
      </HeadingGrid>
      <SearchbarGrid>
        <SearchTextField
          id="search"
          type="search"
          label="Porfolio review, Photoshop, Canon..."
        ></SearchTextField>
        <RightSearchGrid>
          <SearchFormControl fullWidth>
            <InputLabels id="demo-simple-select-label">Speciality</InputLabels>
            <SearchSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Speciality"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SearchSelect>
          </SearchFormControl>
          <SearchFormControl fullWidth>
            <InputLabels id="demo-simple-select-label">Topic</InputLabels>
            <SearchSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Topic"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SearchSelect>
          </SearchFormControl>
          <LeftSearchIcon />
        </RightSearchGrid>
      </SearchbarGrid>
    </MainGrid>
  );
}
