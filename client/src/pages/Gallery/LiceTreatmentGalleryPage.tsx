import React from "react";
import { liceTreatmentImages } from "../../data/galleries";
import { ImageGrid } from "../../components/ImageGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LiceTreatmentGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
        <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Lice Treatment – Gallery</h1>
        <ImageGrid images={liceTreatmentImages} />
      </main>
      <Footer />
    </div>
  );
};

export default LiceTreatmentGalleryPage;
