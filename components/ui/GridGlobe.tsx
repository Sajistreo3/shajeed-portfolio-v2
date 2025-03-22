"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const LoadingPlaceholder = () => (
  <div
    style={{
      width: "100%",
      aspectRatio: "1/1",
      maxWidth: "600px",
      margin: "0 auto",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="animate-pulse">Loading Globe...</div>
  </div>
);

// Dynamically import the World component with no SSR
const World = dynamic(() => import("./Globe").then((mod) => mod.World), {
  ssr: false,
  loading: LoadingPlaceholder,
});

const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[2],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        maxWidth: "600px",
        margin: "0 auto",
        position: "relative",
        background: "transparent",
      }}
    >
      <Suspense fallback={<LoadingPlaceholder />}>
        <World globeConfig={globeConfig} data={sampleArcs} />
      </Suspense>
    </div>
  );
};

export default GridGlobe;
