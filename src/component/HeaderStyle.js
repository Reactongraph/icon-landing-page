"use client";
import styled from '@emotion/styled';
import { Grid, Toolbar, Tab, Button } from '@mui/material';

export const MainGrid = styled(Grid)`
background-color: white;
box-shadow: none;
`;

export const HeadToolbar = styled(Toolbar)`
display: flex;
 justify-content: space-between;
`;

export const TabItem = styled(Tab)`
text-transform: none;
 color: black;
 font-size: 16px;
 font-weight: 400;

 @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
color: black;
text-transform: none;
font-weight: 700;

@media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const AccountButton = styled(Button)`
color: white;
text-transform: none;
background-color: black;

@media only screen and (max-width: 900px) {
    display: none;
  }
`;