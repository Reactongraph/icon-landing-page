"use client";
import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  DialogContentText,
  Dialog,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const MainGrid = styled(Grid)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 52px;
`;

export const HeadingGrid = styled(Grid)`
  width: 625px;

  @media only screen and (max-width: 900px) {
    width: 525px;
  }

  @media only screen and (max-width: 600px) {
    width: 325px;
  }
`;

export const MainHeadingTypo = styled(Typography)`
  font-size: 64px;
  font-weight: 800;
  position: relative;
  font-family: "__Manrope_150a5c";
  z-index: 10;

  @media only screen and (max-width: 900px) {
    font-size: 60px;
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    font-size: 44px;
    font-weight: 600;
  }
`;

export const CircleImage = styled.img`
  position: absolute;
  bottom: 6px;
  left: 80px;
  width: 164px;
  height: 47.61px;
  z-index: -1;

  @media only screen and (max-width: 900px) {
    width: 150px;
    height: 45px;
    left: 50px;
    bottom: 2px;
  }

  @media only screen and (max-width: 600px) {
    width: 110px;
    height: 38px;
    left: 5px;
    bottom: 2px;
  }
`;

export const IconSpan = styled.span`
  color: white;
  text-shadow: 2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black,
    -2px 2px 0px black;
`;

export const ParagraphTypo = styled(Typography)`
  font-size: 28px;
  font-family: "nunito", sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SearchbarGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 40px 0px #00000014;
  width: 65%;
  height: 74px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const RightSearchGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: relative;
`;

export const SearchTextField = styled(TextField)`
  width: 30%;
  height: 48px;
  margin: 0px;
  font-family: "nunito", sans-serif !important;
`;

export const InputLabels = styled(InputLabel)`
  color: black;
  font-family: "nunito", sans-serif;
  font-weight: 700;
`;

export const SelectGid = styled(Grid)`
  width: 118px;
  cursor: pointer;
  // position:relative;
`;

export const SelectTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.open ? "red" : "none")};
`;

export const LeftSearchIcon = styled(SearchIcon)`
  padding: 9px;
  background-color: #e32320;
  color: white;
  font-size: 10px;
  width: 64px;
  height: 48px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const Dialogsection = styled(Dialog)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  .MuiDialog-container {
    justify-content: right;
  }

  .MuiBackdrop-root {
    background-color: transparent;
  }

  .MuiDialog-root {
    .MuiModal-root {
      width: 50%;
      height: 50%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const DialogContentsection = styled(DialogContentText)`
  display: flex;
  gap: 40px;
  padding: 16px;
`;

export const HeadingTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
  color: red;
  font-weight: 600;
  font-size: 18px;
`;

export const ListTypo = styled(Typography)`
  font-family: "nunito", sans-serif;
`;

export const Sections = styled(Grid)`
  display: grid;
  gap: 5px;
`;
