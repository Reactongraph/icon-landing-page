"use client";
import React from "react";
import { Typography, Grid } from "@mui/material";
import {
  MainGrid,
  FooterGrid,
  LeftGrid,
  LogoGrid,
  Logo,
  OtherGrid,
  RightGrid,
  SocialGrid,
  HeadingTypo,
  ListTypo,
  IconTypo,
  SocialIconGrid,
} from "./FooterStyle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <MainGrid>
      <FooterGrid>
        <LeftGrid>
          <LogoGrid>
            <Logo src="/Images/icon.svg" alt="logo"></Logo>
            <IconTypo>© 2022 Icon Live, Inc.</IconTypo>
          </LogoGrid>
          <OtherGrid>
            <HeadingTypo variant="p" component="p">
              Other Pages
            </HeadingTypo>
            <ListTypo variant="p" component="p">
              About us
            </ListTypo>
            <ListTypo variant="p" component="p">
              Contact us
            </ListTypo>
            <ListTypo variant="p" component="p">
              FAQs
            </ListTypo>
          </OtherGrid>
          <OtherGrid>
            <HeadingTypo variant="p" component="p">
              Legal
            </HeadingTypo>
            <ListTypo variant="p" component="p">
              Privacy
            </ListTypo>
            <ListTypo variant="p" component="p">
              Terms and conditions
            </ListTypo>
          </OtherGrid>
        </LeftGrid>
        <RightGrid>
          <HeadingTypo variant="p" component="p">
            Follow us
          </HeadingTypo>
          <SocialGrid>
            <SocialIconGrid>
              <YouTubeIcon />
            </SocialIconGrid>
            <SocialIconGrid>
              <FacebookOutlinedIcon />
            </SocialIconGrid>
            <SocialIconGrid>
              <InstagramIcon />
            </SocialIconGrid>
          </SocialGrid>
        </RightGrid>
      </FooterGrid>
    </MainGrid>
  );
}
