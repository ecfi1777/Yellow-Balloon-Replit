import React from "react";
import { GalleryCarousel } from "./GalleryCarousel";
import { ImageGrid } from "./ImageGrid";
import { ViewMoreButton } from "./ViewMoreButton";
import type { GalleryImage } from "../data/galleries";

type Props = {
  title?: string;
  images: GalleryImage[];
  viewMoreHref: string;
  gridCount?: number; // number of thumbnails to show below the carousel
};

export const GallerySection: React.FC<Props> = ({
  title,
  images,
  viewMoreHref,
  gridCount = 8
}) => {
  return (
    <section style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
      {title && <h2 style={{ fontSize: 28, margin: "8px 0 16px" }}>{title}</h2>}
      <GalleryCarousel images={images} />
      <div style={{ height: 16 }} />
      <ImageGrid images={images} maxItems={gridCount} />
      <ViewMoreButton to={viewMoreHref} />
    </section>
  );
};
