"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@mui/material";

export const WorkGrid = styled(Grid)`
  display: grid;
  gap: 48px;
  padding: 128px 144px;

  @media only screen and (max-width: 900px) {
    padding: 24px 0px;
  }
`;

export const TextGrid = styled(Grid)`
  display: grid;
  gap: 16px;
`;
export const H3Typo = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  color: #030212;
`;

export const ColorText = styled.span`
  color: #e32320;
`;

export const Paragraph = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #030212;
`;

export const StepGrid = styled(Grid)`
  display: flex;
  gap: 32px;

  @media only screen and (max-width: 900px) {
    display: grid;
    margin: auto;
  }
`;
export const CardGrid = styled(Grid)`
  display: grid;
  gap: 24px;

  @media only screen and (max-width: 900px) {
    gap: 10px;
  }
`;

export const CardHeadGrid = styled(Grid)`
  height: 96px;
  border-radius: 10px;
  background: linear-gradient(168.9deg, #030212 29.54%, #353441 90.54%);
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardText = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
`;

export const H5 = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Span = styled.span`
  color: #e32320;
`;
