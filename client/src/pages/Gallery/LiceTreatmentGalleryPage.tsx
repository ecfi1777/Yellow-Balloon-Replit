import React from "react";
import { liceTreatmentImages } from "../../data/galleries";
import { GalleryCarousel } from "../../components/GalleryCarousel";
import { ImageGrid } from "../../components/ImageGrid";

const LiceTreatmentGalleryPage: React.FC = () => {
  return (
    <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Lice Treatment – Gallery</h1>
      <GalleryCarousel images={liceTreatmentImages} />
      <div style={{ height: 16 }} />
      <ImageGrid images={liceTreatmentImages} />
    </main>
  );
};

export default LiceTreatmentGalleryPage;
