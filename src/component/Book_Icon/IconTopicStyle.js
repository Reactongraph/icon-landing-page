"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const MainGrid = styled(Grid)`
  display: flex;
  gap: 64px;
  padding: 0px 64px;

  @media only screen and (max-width: 900px) {
    padding: 0px 16px;
    display: block;
  }
`;

export const TimeTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 24px;
`;

export const Span = styled.span`
  font-family: "nunito", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const H4 = styled(Typography)`
  font-family: '__Manrope_150a5c';
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 24px;
`;

export const H5 = styled(Typography)`
  font-family: '__Manrope_150a5c';
  font-size: 20px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 14px;
`;

export const ListTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 8px;
`;

export const SliderGrid = styled(Grid)`
  width: 70%;
`;

export const TopGrid = styled(Grid)`
  padding-bottom: 32px;
`;


export const SubHeading = styled(Typography)`
  font-family: "nunito", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;
