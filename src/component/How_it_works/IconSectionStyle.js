"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button, CardMedia } from "@mui/material";

export const IconGrid = styled(Grid)`
  display: flex;
  gap: 56px;
  background: linear-gradient(180deg, #eff0f1 0%, rgba(239, 240, 241, 0) 100%);
  padding: 89px 185px 89px 185px;

  @media only screen and (max-width: 900px) {
    display: grid;
    padding: 69px 105px;
    gap: 16px;
  }

  @media only screen and (max-width: 900px) {
    padding: 16px;
  }
`;

export const VideoCard = styled(CardMedia)`
  width: 60%;
  height: 380px;
  borderradius: 30px;
  margin: 0px;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const RightGrid = styled(Grid)`
  width: 40%;
  display: grid;
  gap: 48px;
  padding: 55px 0px;

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 0px;
    gap: 16px;
  }
`;

export const ContentGrid = styled(Grid)`
  display: grid;
  gap: 16px;
`;

export const HeadTypo = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ColorText = styled.span`
  color: #e32320;
`;

export const Paragraph = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
export const IconButton = styled(Button)`
  width: 184px;
  height: 48px;
  padding: 12px 25px 12px 25px;
  border-radius: 6px;
  background-color: #030212 !important;
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: none;
`;
