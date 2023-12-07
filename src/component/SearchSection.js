"use client";
import React, { useState, forwardRef } from "react";
import { DialogContent, Slide, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  MainGrid,
  HeadingGrid,
  SearchbarGrid,
  MainHeadingTypo,
  CircleImage,
  IconSpan,
  ParagraphTypo,
  SearchTextField,
  RightSearchGrid,
  LeftSearchIcon,
  HeadingTypo,
  Sections,
  DialogContentsection,
  ListTypo,
  SelectGid,
  SelectTypo,
  Dialogsection,
} from "./SearchSectionStyle";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function SearchSection() {
  const [open, setOpen] = useState(false);

  const [topic, setTopic] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTopicOpen = () => {
    setTopic(true);
  };

  const handleTopicClose = () => {
    setTopic(false);
  };

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
          placeholder="Porfolio review, Photoshop, Canon..."
        ></SearchTextField>

        <RightSearchGrid>
          <Grid>
            <SelectGid onClick={handleClickOpen}>
              <SelectTypo open={open}>
                Speciality <KeyboardArrowDownIcon />
              </SelectTypo>
            </SelectGid>
            <Dialogsection
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              // aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentsection id="alert-dialog-slide-description">
                  <Sections>
                    <HeadingTypo>Creative</HeadingTypo>
                    <ListTypo>Edit my photo</ListTypo>
                    <ListTypo>Portfolio review</ListTypo>
                    <ListTypo>Website review</ListTypo>
                    <ListTypo>Post processing techniques</ListTypo>
                  </Sections>
                  <Sections>
                    <HeadingTypo>Softwares</HeadingTypo>
                    <ListTypo>Photoshop</ListTypo>
                    <ListTypo>Lightroom Classic</ListTypo>
                    <ListTypo>Lightroom CC</ListTypo>
                    <ListTypo>Illustrator</ListTypo>
                  </Sections>
                  <Sections>
                    <HeadingTypo>Business</HeadingTypo>
                    <ListTypo>Handling talent and models</ListTypo>
                    <ListTypo>Communicating with clients</ListTypo>
                    <ListTypo>Commercial questions</ListTypo>
                    <ListTypo>Agent-related questions</ListTypo>
                  </Sections>
                </DialogContentsection>
              </DialogContent>
            </Dialogsection>
          </Grid>
          <Grid>
            <SelectGid onClick={handleTopicOpen}>
              <SelectTypo open={topic}>
                Topic <KeyboardArrowDownIcon />
              </SelectTypo>
            </SelectGid>
            <Dialogsection
              open={topic}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleTopicClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <DialogContentsection id="alert-dialog-slide-description">
                  <Sections>
                    <HeadingTypo>Creative</HeadingTypo>
                    <ListTypo>Edit my photo</ListTypo>
                    <ListTypo>Portfolio review</ListTypo>
                    <ListTypo>Website review</ListTypo>
                    <ListTypo>Post processing techniques</ListTypo>
                  </Sections>
                  <Sections>
                    <HeadingTypo>Softwares</HeadingTypo>
                    <ListTypo>Photoshop</ListTypo>
                    <ListTypo>Lightroom Classic</ListTypo>
                    <ListTypo>Lightroom CC</ListTypo>
                    <ListTypo>Illustrator</ListTypo>
                  </Sections>
                  <Sections>
                    <HeadingTypo>Business</HeadingTypo>
                    <ListTypo>Handling talent and models</ListTypo>
                    <ListTypo>Communicating with clients</ListTypo>
                    <ListTypo>Commercial questions</ListTypo>
                    <ListTypo>Agent-related questions</ListTypo>
                  </Sections>
                </DialogContentsection>
              </DialogContent>
            </Dialogsection>
          </Grid>
          <LeftSearchIcon />
        </RightSearchGrid>
      </SearchbarGrid>
    </MainGrid>
  );
}
