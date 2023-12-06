"use client";
import * as React from "react";
import { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Tabs,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MainGrid,
  HeadToolbar,
  TabItem,
  LoginButton,
  AccountButton,
  Logo,
  RightIcon,
} from "../HeaderStyle";
import Image from 'next/image';

export default function ProfileHeader() {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["How it works", "About us", "Categories", "FAQs"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainGrid>
        <HeadToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo src="/Images/icon.svg" alt="logo"></Logo>
          </IconButton>
          <Grid>
            <Tabs aria-label="basic tabs example">
              <Image
                src="/Images/categoriesVector.svg"
                alt="circle"
                width={78}
                height={9}
                style={{ position: "absolute", right: "24%", bottom: "15px" }}
              />
              <TabItem label="How it works" />
              <TabItem label="About us" />
              <TabItem label="Categories" style={{ fontWeight: "700" }} />
              <TabItem label="FAQs" />
            </Tabs>
          </Grid>
          <Grid>
            <LoginButton>Login</LoginButton>
            <AccountButton>Create an account</AccountButton>
          </Grid>

          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <RightIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </HeadToolbar>
      </MainGrid>
    </Box>
  );
}
