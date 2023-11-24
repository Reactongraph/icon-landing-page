"use client";
import styled from '@emotion/styled';
import {Grid} from '@mui/material';

export const SearchbarGrid = styled(Grid)`
display: flex;
justify-content: space-between;
align-items: "center;
box-shadow: 0px 8px 40px 0px #00000014;
width: 80%;
height: 72px;

@media only screen and (max-width: 900px) {
    display: none;
  }
`;