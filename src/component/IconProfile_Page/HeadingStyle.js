"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const HeadingGrid = styled(Grid)`
  padding: 25px 64px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

export const CircleImage = styled.img`
  width: 168px;
  height: 45px;
  right: 11%;
  top: -2px;
  border: 0.3px;
  position: absolute;
  z-index: -1;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeadTypo = styled(Typography)`
  width: 65%;
  font-family: "Nunito Sans", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Span = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  z-index: 10;
`;

export const HeaderGrid = styled(Grid)`
  padding: 21px 64px;

  @media only screen and (max-width: 900px) {
    padding: 16px;
  }
`;

export const MenuText = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #75748e;
`;
export const BoldText = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #e32320;
`;

export const H3Typo = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
`;
