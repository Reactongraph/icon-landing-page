"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const MainGrid = styled(Grid)`
  padding: 69px 64px;

  @media only screen and (max-width: 600px) {
    padding: 24px 16px;
  }
`;

export const H4 = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
`;

export const H5 = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #030212;
  margin-bottom: 14px;
`;

export const ListTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
