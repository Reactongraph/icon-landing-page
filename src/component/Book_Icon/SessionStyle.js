"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@mui/material";

export const MainGrid = styled(Grid)`
  display: grid;
  gap: 24px;
  padding: 80px 64px;

  @media only screen and (max-width: 900px) {
    padding: 24px 16px;
    gap: 16px;
  }
`;

export const MainHeading = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SessionGrid = styled(Grid)`
  display: flex;
  gap: 32px;

  @media only screen and (max-width: 900px) {
    display: grid;
    gap: 16px;
  }
`;

export const VideoGrid = styled(Grid)`
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentGrid = styled(Grid)`
  display: grid;
  gap: 32px;
  padding: 30px 35px;

  @media only screen and (max-width: 900px) {
    padding: 16px;
    gap: 20px;
  }
`;

export const TopGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export const HeadTypo = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;

  @media only screen and (max-width: 900px) {
    width: 50%;
  }
`;

export const Span = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin-left: 16px;
`;

export const SubTypo = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TimeSpan = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BookSession = styled(Button)`
  width: 182px;
  height: 48px;
  padding: 12px, 25px, 12px, 25px;
  border-radius: 6px;
  gap: 10px;
  color: white;
  text-transform: none;
  background-color: #e32320 !important;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ContentTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
