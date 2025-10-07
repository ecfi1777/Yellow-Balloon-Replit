import React from "react";
import { Link } from "wouter";

type Props = { to: string; label?: string; className?: string };

export const ViewMoreButton: React.FC<Props> = ({ to, label = "View More", className }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
      <Link
        to={to}
        className={className}
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: 8,
          background: "#111",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        {label}
      </Link>
    </div>
  );
};
