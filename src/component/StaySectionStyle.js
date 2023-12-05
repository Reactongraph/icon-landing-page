"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const MainGrid = styled(Grid)`
  left: 64px;
  padding: 65px, 152px, 90px, 152px;
  border-radius: 20px;
  gap: 10px;
  margin: 89px 64px;
  background: linear-gradient(168.9deg, #030212 29.54%, #353441 90.54%);

  @media only screen and (max-width: 900px) {
    margin: 16px;
  }
`;

export const InputGrid = styled(Grid)`
  width: 80%;
  height: 48px;
  padding: 0px, 0px, 0px, 22px;
  border-radius: 4px;
  display: flex;
  background-color: #ffffff1a;
  justify-content: space-between;
  margin-top: 19px;
  font-family: "Nunito Sans", sans-serif;
`;

export const SubscribeButton = styled(Grid)`
  width: 194px;
  border-radius: 6px;
  background-color: #e32320;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
`;

export const ContentGrid = styled(Grid)`
  padding: 65px 151px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;

  @media only screen and (max-width: 600px) {
    padding: 10px 15px;
`;

export const HeadingTypo = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  position: relative;
  z-index: 0;
`;

export const ParagraphTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const CircleImage = styled.img`
  width: 205px;
  height: 53px;
  right: -5px;
  bottom: -4px;
  border: 0.3px;
  position: absolute;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    right: 5%;
  }
`;
