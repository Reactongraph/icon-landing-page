"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@mui/material";

export const MainGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  margin: 0px 64px;
`;

export const ProfileGrid = styled(Grid)`
  position: relative;
`;

export const Img = styled.img`
  width: 304px;
  height: 443px;
  border-radius: 10px;
`;

export const VideoGrid = styled(Grid)``;

export const InformationGrid = styled(Grid)`
  width: 652px;
  height: 447px;
  display: grid;
  gap: 36px;
`;

export const TopGrid = styled(Grid)`
  display: grid;
  gap: 24px;
`;

export const LabelIconGrid = styled(Grid)`
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  gap: 24px;
`;

export const BookIconGrid = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const ContentTypo = styled(Typography)`
  width: 552px;
  font-family: "Nunito Sans", sans-serif;
`;

export const IconTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 3px;
`;

export const BoldSpan = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LabelTypo = styled(Typography)`
  width: 448px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookSpan = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookButton = styled(Button)`
  width: 184px;
  height: 48px;
  padding: 12px, 25px, 12px, 25px;
  border-radius: 6px;
  gap: 10px;
  font-family: "Nunito Sans", sans-serif;
  text-transform: none;
  background-color: #e32320 !important;
  color: #ffffff;
`;

export const RatingGrid = styled(Grid)`
  width: 276px;
  display: flex;
`;

export const ReviewTypo = styled(Typography)`
  width: 104px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const FransGroupHead = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const FransGroupImg = styled.img`
width: 264px;
height: 288px;
border-radius: 10px";
position: relative;
`;

export const FransGroupLogo = styled.img`
  position: absolute;
`;

export const SocialGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 24px;
  position: absolute;
  bottom: 20px;
  left: 80px;
`;
export const SocialIconGrid = styled(Grid)`
  border: 1px solid white;
  border-radius: 18px;
  padding: 5px 6px;
  // background-color: transparent;

  @media only screen and (max-width: 600px) {
    border: none;
  }
`;

export const BottomGrid = styled(Grid)`
  display: grid;
  gap: 16px;
`;

export const LanguageGrid = styled(Grid)``;

export const CountryGrid = styled(Grid)``;
