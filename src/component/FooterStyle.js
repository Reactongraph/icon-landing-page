"use client";

import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export const MainGrid = styled(Grid)`
  padding: 0px 64px;
  display: flex;
  justify-content: space-between;
  align-item: center;

  @media only screen and (max-width: 900px) {
  padding: 0px 16px;
  }
`;

export const FooterGrid = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin-bottom: 99px;

  @media only screen and (max-width: 900px) {
    display: grid;
    justify-content: center;
    gap: 20px;
    margin-bottom: 49px;
  }
`;

export const LeftGrid = styled(Grid)`
  width: 50%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 100%;
    gap: 40px;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    gap: 20px;
  }
`;

export const LogoGrid = styled(Grid)``;

export const Logo = styled.img`
  width: 106px;
  height: 48px;
  margin-bottom: 34px;

  @media only screen and (max-width: 900px) {
    margin-bottom: 14px;
  }
`;

export const OtherGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (max-width: 900px) {
    gap: 5px;
  }
`;

export const RightGrid = styled(Grid)`
  width: 192px;
  height: 97px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (max-width: 900px) {
    width: 100%;
    gap: 5px;
  }
`;

export const SocialGrid = styled(Grid)`
  display: flex;
  gap: 24px;
`;

export const HeadingTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ListTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;

export const IconTypo = styled(Typography)`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #75748e;
`;

export const SocialIconGrid = styled(Grid)`
  border: 1px solid red;
  border-radius: 18px;
  padding: 5px 6px;
  color: red;

  @media only screen and (max-width: 600px) {
    border: none;
  }
`;
