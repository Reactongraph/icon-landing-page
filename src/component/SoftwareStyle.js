"use client";

import styled from '@emotion/styled';
import {Grid, Typography, Button} from '@mui/material';

export const HeadingGrid = styled(Grid)`
display: flex;
justify-content: space-between;
align-item: center;
`;



export const SliderMainGrid = styled(Grid)`
  display: grid !important;
  justify-content: center;
  align-items: center;
`;
export const HeadingTypo = styled(Typography)`
  font-size: 20px;
  font-family: '__Manrope_150a5c';
  font-weight: 800;
`;
export const ParagraphTypo = styled(Typography)`
  font-size: 18px;
  font-family: '__Manrope_150a5c';
  font-weight: 600;
  color: #75748e;
`;
export const EquipViewButton = styled(Button)`
  display: none;
  background-color: #ffffff !important;
  color: #e32320;
  width: 229px;
  height: 48px;
  border-radius: 6px;
  font-family: "nunito", sans-serif;
  font-weight: 700;
  text-transform: none;
  font-size: 16px;
  padding: 12px, 25px, 12px, 25px;
  border-radius: 6px;
  border: 1px solid #e32320;
  gap: 10px;

  :hover {
    border-radius: 6px;
    background: linear-gradient(--red-10, rgba(218, 11, 9, 0.1));
    color: #e32320;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
