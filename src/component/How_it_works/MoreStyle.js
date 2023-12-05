"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@mui/material";

export const MainGrid = styled(Grid)`
  padding: 89px 185px 89px 185px;
  gap: 10px;
  background-color: #030212;
`;

export const ContentGrid = styled(Grid)`
  display: flex;
  gap: 56px;
`;

export const ImageGrid = styled(Grid)`
  width: 60%;
  display: flex;
  position: relative;
`;

export const TextGrid = styled(Grid)`
  width: 40%;
  display: grid;
  gap: 16px;
`;

export const H3 = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 38px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
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
  color: #ffffff;
`;

export const MeetButton = styled(Button)`
  width: 184px;
  height: 48px;
  padding: 12px, 25px, 12px, 25px;
  border-radius: 6px;
  gap: 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  background-color: #ffffff !important;
  color: #030212;
  text-transform: none;
  margin-top: 32px;
`;
