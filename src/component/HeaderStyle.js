"use client";
import styled from "@emotion/styled";
import { Grid, Toolbar, Tab, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MainGrid = styled(Grid)`
  background-color: white;
  box-shadow: none;
`;

export const HeadToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0px 64px !important;

  @media only screen and (max-width: 900px) {
    padding: 0px 16px !important;
  }

`;

export const Logo = styled.img`
  width: 70px;
  height: 32px;

  @media only screen and (max-width: 900px) {
    width: 60px;
    height: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 20px;
  }
`;

export const TabItem = styled(Tab)`
  text-transform: none;
  color: black;
  font-size: 16px;
  font-weight: 400;
  font-family: "nunito", sans-serif;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  color: black;
  text-transform: none;
  font-weight: 700;
  font-family: "nunito", sans-serif;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const AccountButton = styled(Button)`
  padding: 12px 25px 12px 25px;
  border-radius: 6px;
  color: white;
  text-transform: none;
  background-color: black !important;
  font-family: "nunito", sans-serif;
  font-weight: 700;
  margin-left: 32px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const RightIcon = styled(MenuIcon)`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
