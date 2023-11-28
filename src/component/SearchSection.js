"use client";
import React, { useState } from "react";
import { MenuItem, Box, Divider, Grid } from "@mui/material";
import {
  MainGrid,
  HeadingGrid,
  SearchbarGrid,
  MainHeadingTypo,
  CircleImage,
  IconSpan,
  ParagraphTypo,
  SearchTextField,
  InputLabels,
  RightSearchGrid,
  LeftSearchIcon,
  SearchSelect,
  SearchFormControl,
} from "./SearchSectionStyle";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SearchSection() {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Specialitylist = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid style={{ display: "flex" }}>
        {["Creative", "Softwares", "Business"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </Grid>
      <Divider />
      <List>
        {["Login", "Create an account"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const Topiclist = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid style={{ display: "flex" }}>
        {["How it works", "About us", "Categories", "FAQs"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </Grid>
      <Grid>
        {["Login", "Create an account"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </Grid>
    </Box>
  );

  return (
    <MainGrid>
      <HeadingGrid>
        <MainHeadingTypo variant="h1" component="h1">
          <CircleImage src="/Images/img-vector-meet.png" alt="circle" />
          Meet your
          <IconSpan> Icon</IconSpan>
        </MainHeadingTypo>
        <ParagraphTypo variant="p" component="p">
          Icon delivers a once-in-a-lifetime opportunity to directly connect you
          with artists you admire.
        </ParagraphTypo>
      </HeadingGrid>
      <SearchbarGrid>
        <SearchTextField
          id="search"
          type="search"
          label="Porfolio review, Photoshop, Canon..."
        ></SearchTextField>
        <RightSearchGrid>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <div
                onClick={toggleDrawer(anchor, true)}
                style={{
                  width: "118px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Speciality
                <KeyboardArrowDownIcon />
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {Specialitylist(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <div
                onClick={toggleDrawer(anchor, true)}
                style={{
                  width: "118px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Topic
                <KeyboardArrowDownIcon />
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {Topiclist(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          <LeftSearchIcon />
        </RightSearchGrid>
      </SearchbarGrid>
    </MainGrid>
  );
}
