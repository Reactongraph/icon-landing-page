"use client";
import styled from "@emotion/styled";
import { Grid, Typography, Button } from "@mui/material";

export const MainGrid = styled(Grid)`
display: flex;
gap: 60px;
justify-content: space-between;
padding: 64px;
`;


export const ContentGrid = styled(Grid)`
width: 45%;
padding-left: 64px;
`;


export const H1 = styled(Typography)`
font-family: "Manrope", sans-serif;
font-size: 64px;
font-weight: 800;
line-height: 78px;
letter-spacing: 0em;
text-align: left;
width: 552px;
`;

export const Span = styled.span`
color: white;
text-shadow: 2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black,
  -2px 2px 0px black;
`;

export const TextTypo = styled(Typography)`
font-family: "Nunito Sans", sans-serif;
font-size: 22px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;

`;

export const BookButton = styled(Button)`
width: 194px;
height: 48px;
padding: 12px, 25px, 12px, 25px;
border-radius: 6px;
gap: 10px;
background-color: #E32320 !important;
text-transform: none;
color: white;
font-family: "Nunito Sans", sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
margin-top: 40px;

`;
