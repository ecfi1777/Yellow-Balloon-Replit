import React from "react";
import { glamourPartyImages } from "../../data/galleries";
import { ImageGrid } from "../../components/ImageGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SEO } from "../../components/SEO";

const GlamourPartiesGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Glamour Party Photos | The Yellow Balloon Kids Salon"
        description="Browse photos of our confidence-boosting glamour styling parties with up-dos, nail polish, and glitter at The Yellow Balloon in Gaithersburg, MD."
        keywords="glamour party photos, kids styling party, children's beauty party, Gaithersburg glamour parties"
        ogUrl="https://www.theyellowballoonmaryland.com/gallery/glamour-parties"
        canonicalUrl="https://www.theyellowballoonmaryland.com/gallery/glamour-parties"
      />
      <Header />
      <main style={{ margin: "24px auto", maxWidth: 1200, padding: "0 16px" }}>
        <h1 style={{ fontSize: 32, margin: "8px 0 16px" }}>Glamour Parties – Gallery</h1>
        <ImageGrid images={glamourPartyImages} />
      </main>
      <Footer />
    </div>
  );
};

export default GlamourPartiesGalleryPage;
