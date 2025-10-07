import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryImage } from "../data/galleries";

type Props = {
  images: GalleryImage[];
  autoPlayMs?: number; // set to 0 to disable
  className?: string;
};

const clamp = (i: number, len: number) => (i + len) % len;

const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
};

export const GalleryCarousel: React.FC<Props> = ({ images, autoPlayMs = 4000, className }) => {
  const [idx, setIdx] = useState(0);
  const { ref, inView } = useInView();

  const go = useCallback((delta: number) => {
    setIdx((i) => clamp(i + delta, images.length));
  }, [images.length]);

  // Auto play only when in view
  useEffect(() => {
    if (!inView || autoPlayMs <= 0 || images.length <= 1) return;
    const id = setInterval(() => go(1), autoPlayMs);
    return () => clearInterval(id);
  }, [inView, autoPlayMs, go, images.length]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  const current = images[idx];
  const prev = images[clamp(idx - 1, images.length)];
  const next = images[clamp(idx + 1, images.length)];

  // Preload near slides only (keeps it lightweight)
  const toRender = useMemo(() => [prev, current, next], [prev, current, next]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
      <div
        aria-roledescription="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ position: "relative", width: "100%", height: "min(60vh, 520px)" }}
      >
        {toRender.map((img, i) => {
          // center render the current image; prev and next hidden (preloaded)
          const isCenter = img === current;
          return (
            <img
              key={`${img.src}-${i}`}
              src={img.src}
              alt={img.alt ?? ""}
              loading="lazy"
              style={{
                position: isCenter ? "absolute" : "absolute",
                inset: 0,
                objectFit: "cover",
                width: "100%",
                height: "100%",
                opacity: isCenter ? 1 : 0,
                transition: "opacity 300ms ease",
              }}
            />
          );
        })}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            style={navBtnStyle("left")}
          >‹</button>

          <button
            aria-label="Next"
            onClick={() => go(1)}
            style={navBtnStyle("right")}
          >›</button>

          <div style={dotsWrapStyle}>
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                style={{
                  width: 10, height: 10, borderRadius: 999,
                  border: "none", margin: 4, cursor: "pointer",
                  background: i === idx ? "white" : "rgba(255,255,255,0.5)"
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const navBtnStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [side]: 8,
  border: "none",
  width: 36,
  height: 36,
  borderRadius: 999,
  background: "rgba(0,0,0,0.45)",
  color: "#fff",
  fontSize: 22,
  cursor: "pointer",
});

const dotsWrapStyle: React.CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 6,
  background: "rgba(0,0,0,0.25)",
  borderRadius: 24,
};
