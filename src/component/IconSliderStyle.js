import styled from "@emotion/styled";
import { Grid, Button, Typography } from "@mui/material";

export const IconMainGrid = styled(Grid)`
  position: relative;
`;

export const ContentGrid = styled(Grid)`
  width: 180px;
  text-align: center;
  position: absolute;
  bottom: 32px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: 35px;
  z-index: 10;
`;

export const ViewButton = styled(Button)`
  display: none;
  background-color: #e32320 !important;
  color: white;
  width: 153px;
  height: 48px;
  border-radius: 6px;
  font-family: "nunito", sans-serif;
  font-weight: 700;
  text-transform: none;
  font-size: 16px;
`;
export const MainHeadingTypo = styled(Typography)`
  font-size: 28px;
  font-family: '__Manrope_150a5c';
  font-weight: 800;
`;
export const SubHeadingTypo = styled(Typography)`
  font-size: 14px;
  font-family: "nunito", sans-serif;
  font-weight: 400;
`;

export const ParagraphTypo = styled(Typography)`
  display: none;
  font-size: 14px;
  font-family: "nunito", sans-serif;
  font-weight: 700;
`;

export const SliderHeadingTypo = styled(Typography)`
  font-size: 28px;
  font-family: '__Manrope_150a5c';
  font-weight: 800;
  margin-top: 60px;
  margin-left: 40px;
`;
