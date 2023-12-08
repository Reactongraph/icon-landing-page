"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button, Chip } from "@mui/material";

export const MainGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  padding: 0px 64px;

  @media only screen and (max-width: 900px) {
    display: grid;
    gap: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

export const ProfileGrid = styled(Grid)`
  position: relative;
  display: flex;

  @media only screen and (max-width: 900px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    gap: 20px;
  }
`;

export const Img = styled.img`
  width: 54%;
  height: 443px;
  border-radius: 10px;

  @media only screen and (max-width: 900px) {
    width: 44%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const InformationGrid = styled(Grid)`
  width: 50%;
  height: 447px;
  display: grid;
  gap: 36px;

  @media only screen and (max-width: 900px) {
    width: 100%;
    gap: 30px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    gap: 10px;
  }
`;

export const TopGrid = styled(Grid)`
  display: grid;
  gap: 24px;
`;

export const LabelIconGrid = styled(Grid)`
  display: flex;
  font-family: "nunito", sans-serif;
  gap: 24px;
`;

export const BookIconGrid = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const ContentTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
`;

export const IconTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
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
  font-family: "nunito", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LabelTypo = styled(Typography)`
  width: 70%;
  font-family: "nunito", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookSpan = styled.span`
  font-family: '__Manrope_150a5c';
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookButton = styled(Button)`
  width: 168px;
  height: 48px;
  padding: 12px, 25px, 12px, 25px;
  border-radius: 6px;
  gap: 10px;
  font-family: "nunito", sans-serif;
  text-transform: none;
  background-color: #e32320 !important;
  color: #ffffff;
`;

export const RatingGrid = styled(Grid)`
  width: 44%;
  display: flex;
`;

export const ReviewTypo = styled(Typography)`
  width: 40%;
  font-family: "nunito", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const FransMainGrid = styled(Grid)`
  padding: 72px 64px;
  display: grid;
  gap: 24px;

  @media only screen and (max-width: 600px) {
    padding: 0px 16px;
  }
`;

export const FransGroupHead = styled(Typography)`
  font-family: '__Manrope_150a5c';
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
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

export const LanguageGrid = styled(Grid)`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`;

export const ChipItem = styled(Chip)`
  font-family: "nunito", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: none;
  color: #030212;
`;
