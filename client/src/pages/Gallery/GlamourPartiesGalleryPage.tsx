import React from "react";
import { glamourPartyImages } from "../../data/galleries";
import { ImageGrid } from "../../components/ImageGrid";

const GlamourPartiesGalleryPage: React.FC = () => {
  return (
    <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Glamour Parties – Gallery</h1>
      <ImageGrid images={glamourPartyImages} />
    </main>
  );
};

export default GlamourPartiesGalleryPage;
