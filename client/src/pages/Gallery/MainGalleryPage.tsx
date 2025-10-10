import React from "react";
import { mainGalleryImages } from "../../data/galleries";
import { ImageGrid } from "../../components/ImageGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SEO } from "../../components/SEO";

const MainGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Photo Gallery | The Yellow Balloon Kids Hair Salon"
        description="View our photo gallery featuring happy kids getting haircuts, lice treatments, and glamour party experiences at The Yellow Balloon in Gaithersburg, MD."
        keywords="kids haircut photos, children salon gallery, Gaithersburg hair salon pictures"
        ogUrl="https://www.theyellowballoonmaryland.com/gallery"
        canonicalUrl="https://www.theyellowballoonmaryland.com/gallery"
      />
      <Header />
      <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
        <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Gallery</h1>
        <ImageGrid images={mainGalleryImages} />
      </main>
      <Footer />
    </div>
  );
};

export default MainGalleryPage;
