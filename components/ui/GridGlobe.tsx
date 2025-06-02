"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
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

  const sampleArcs = [
    {
      order: 1,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: "#06b6d4",
    },
    {
      order: 2,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: "#3b82f6",
    },
    {
      order: 3,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#6366f1",
    },
    {
      order: 4,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: "#06b6d4",
    },
    {
      order: 5,
      startLat: 19.0760,
      startLng: 72.8777,  // Mumbai
      endLat: 28.6139,
      endLng: 77.2090,  // Delhi
      arcAlt: 0.1,
      color: "#3b82f6",
    },
  ];

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full h-full relative overflow-hidden">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;