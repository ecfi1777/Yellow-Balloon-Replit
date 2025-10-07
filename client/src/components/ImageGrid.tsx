import React from "react";
import type { GalleryImage } from "../data/galleries";

type Props = {
  images: GalleryImage[];
  maxItems?: number;      // e.g., show first 8 on the section
  columns?: number;       // default responsive
  gap?: number;           // px
  className?: string;
};

export const ImageGrid: React.FC<Props> = ({
  images, maxItems, columns, gap = 12, className
}) => {
  const toShow = typeof maxItems === "number" ? images.slice(0, maxItems) : images;

  // Responsive grid: 2 columns mobile, 3 tablet, 4 desktop max
  const gridTemplate = columns
    ? `repeat(${columns}, minmax(0, 1fr))`
    : "repeat(auto-fill, minmax(300px, 1fr))";

  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: gridTemplate, gap }}>
      {toShow.map((img) => (
        <div key={img.src} style={{ width: "100%", position: "relative" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "66%", overflow: "hidden", borderRadius: 10 }}>
            <img
              src={img.src}
              alt={img.alt ?? ""}
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%", objectFit: "cover"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
