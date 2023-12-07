"use client";

import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";

export const LeftButton = styled(Button)`
  text-transform: none;
  width: 90px;
  height: 25px;
  color: #030212;
  font-weight: 700;
  align-item: center;
  margin-top: 60px;
`;
export const HeadingGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;
export const GroupContentGrid = styled(Grid)`
  width: 180px;
  height: 90%;
  text-align: center;
  position: absolute;
  bottom: 32px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  margin-left: 35px;
`;

export const HeadingTypo = styled(Typography)`
  font-size: 20px;
  font-family: '__Manrope_150a5c';
  font-weight: 800;
  position: absolute;
  bottom: 0;
`;

export const SliderAvatarGroup = styled(AvatarGroup)`
  width: 73%;
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
`;
