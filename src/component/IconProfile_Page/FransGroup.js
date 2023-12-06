import React from "react";
import { Grid } from "@mui/material";
import {
  FransGroupHead,
  FransGroupImg,
  FransGroupLogo,
  FransMainGrid
} from "./IconPhotoStyle";
import { FransGroupData } from "./const";

export default function FransGroup() {
  return (
    <FransMainGrid>
      <FransGroupHead variant="h4">Frans’ Groups</FransGroupHead>
      <Grid style={{ display: "flex", gap: "32px" }}>
        {FransGroupData.map((image, index) => (
          <Grid
          key={index}
            style={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FransGroupImg src={image.url}></FransGroupImg>
            <FransGroupLogo src={image.logo}></FransGroupLogo>
          </Grid>
        ))}
      </Grid>
    </FransMainGrid>
  );
}
