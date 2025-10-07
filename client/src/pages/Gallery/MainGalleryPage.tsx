import React from "react";
import { mainGalleryImages } from "../../data/galleries";
import { GalleryCarousel } from "../../components/GalleryCarousel";
import { ImageGrid } from "../../components/ImageGrid";

const MainGalleryPage: React.FC = () => {
  return (
    <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Gallery</h1>
      <GalleryCarousel images={mainGalleryImages} />
      <div style={{ height: 16 }} />
      <ImageGrid images={mainGalleryImages} />
    </main>
  );
};

export default MainGalleryPage;
