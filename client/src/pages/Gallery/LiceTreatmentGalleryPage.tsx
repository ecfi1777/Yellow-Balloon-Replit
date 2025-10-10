import React from "react";
import { liceTreatmentImages } from "../../data/galleries";
import { ImageGrid } from "../../components/ImageGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SEO } from "../../components/SEO";

const LiceTreatmentGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lice Treatment Photos | The Yellow Balloon Kids Salon"
        description="View photos of our private, professional lice screening and treatment services with school-accepted documentation at The Yellow Balloon in Gaithersburg, MD."
        keywords="lice treatment photos, professional lice removal, lice screening Gaithersburg"
        ogUrl="https://www.theyellowballoonmaryland.com/gallery/lice-treatment"
        canonicalUrl="https://www.theyellowballoonmaryland.com/gallery/lice-treatment"
      />
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
