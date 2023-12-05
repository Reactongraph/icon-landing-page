import React from "react";
import { Tabs } from "@mui/material";
import { PortfolioData } from "./const";
import { CardMainGrid, CardPortTab, CardSessionTab } from "./PortSectionStyle";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

export default function PortfolioSection() {
  return (
    <CardMainGrid>
      <Tabs aria-label="basic tabs example">
        <CardPortTab label="Portfolio" />
        <CardSessionTab label="Session Examples" />
      </Tabs>
      <SlideshowLightbox className="container" showThumbnails={true}>
        {PortfolioData.map((item) => (
          <img src={item.url} alt={item.url} style={{width: {...item.width}, height:{...item.height}}}></img>
        ))}
      </SlideshowLightbox>
    </CardMainGrid>
  );
}
