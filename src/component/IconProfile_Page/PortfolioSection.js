import React from "react";
import { Tabs } from "@mui/material";
import { PortfolioData } from "./const";
import { CardMainGrid, CardPortTab, CardSessionTab } from "./PortSectionStyle";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <CardMainGrid>
      <Tabs aria-label="basic tabs example">
        <CardPortTab label="Portfolio" />
        <CardSessionTab label="Session Examples" />
      </Tabs>
      <SlideshowLightbox className="container" showThumbnails={true}>
        {PortfolioData.map((item, index) => (
          <Image src={item.url} key = {index} alt={item.url} width = {item.width} height = {item.height}/>
        ))}
      </SlideshowLightbox>
    </CardMainGrid>
  );
}
