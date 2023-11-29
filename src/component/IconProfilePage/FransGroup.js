import React from "react";
import { Grid } from "@mui/material";
import {
  FransGroupHead,
  FransGroupImg,
  FransGroupLogo,
} from "./IconPhotoStyle";
import { FransGroupData } from "./const";

export default function FransGroup() {
  return (
    <Grid style={{ margin: "72px 64px", display: "grid", gap: "24px" }}>
      <FransGroupHead variant="h4">Frans’ Groups</FransGroupHead>
      <Grid style={{ display: "flex", gap: "32px" }}>
        {FransGroupData.map((image) => (
          <Grid
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
    </Grid>
  );
}
