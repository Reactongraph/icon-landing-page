"use client";
import styled from "@emotion/styled";
import { Grid, Tab, Typography } from "@mui/material";

export const CardMainGrid = styled(Grid)`
  display: grid;
  padding: 0px 64px;

  @media only screen and (max-width: 600px) {
    padding: 0px 16px;
  }
`;

export const CardPortTab = styled(Tab)`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #030212;
  text-transform: none;
`;

export const CardSessionTab = styled(Tab)`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #75748e;
  text-transform: none;
  border-left: 1px solid #75748e;
`;

export const CardGrid = styled(Grid)`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
  gap: 32px;
  grid-auto-flow: row dense;
`;

// export const ImageWrapper = styled.div`
//   position: relative;
//   padding-top: 25px;
//   border-radius: 20px;
//   grid-row: span 3;
//   grid-column: auto;

//   &:nth-of-type(6n + 5) {
//     grid-column: 0;
//   }

//   &:nth-of-type(even) {
//     grid-row: span 2;
//   }
// `;
export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 25px;
  border-radius: 20px;
  grid-row: ${({ index }) =>
    (index + 1) % 2 === 0 ? 'span 3' : 'span 2'};
  grid-column: ${({ index }) =>
    (index + 2) % 6 === 0 ? '2' : 'auto'};
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Heading = styled(Typography)`
  display: grid;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #030212;
`;

export const Paragraph = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #75748e;
`;
