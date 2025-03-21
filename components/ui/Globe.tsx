"use client";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree, Object3DNode } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
import { hexToRgb } from "@/lib/utils";

// Extend THREE components
extend({ ThreeGlobe });

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

function Scene({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const { size } = useThree();

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;

      // Set globe properties
      globe
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.1)
        .hexPolygonColor(() => "rgba(255,255,255,0.7)");

      // Set globe material
      const globeMaterial = globe.globeMaterial() as any;
      globeMaterial.color = new Color(globeConfig.globeColor || "#1d072e");
      globeMaterial.emissive = new Color(globeConfig.emissive || "#000000");
      globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
      globeMaterial.shininess = globeConfig.shininess || 0.9;

      // Add arcs
      globe
        .arcsData(data)
        .arcColor("color")
        .arcAltitude("arcAlt")
        .arcStroke(0.5)
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000);
    }
  }, [globeRef.current]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} position={[0, 0, 1]} />
      <threeGlobe ref={globeRef} />
      <OrbitControls
        enableZoom={false}
        autoRotate={globeConfig.autoRotate}
        autoRotateSpeed={globeConfig.autoRotateSpeed || 0.5}
      />
    </>
  );
}

export function World(props: WorldProps) {
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("globe-container");
      if (container) {
        const width = container.offsetWidth;
        // Keep it square by using the same value for both width and height
        setSize({ width, height: width });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      id="globe-container"
      style={{
        width: "100%",
        height: size.height,
        position: "relative",
        maxWidth: "600px", // Add a max-width to prevent the globe from getting too large
        margin: "0 auto", // Center the globe
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, cameraZ],
          fov: 45,
          near: 1,
          far: 1000,
          aspect: 1, // Force 1:1 aspect ratio
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <Scene {...props} />
      </Canvas>
    </div>
  );
}

export function Globe(props: WorldProps) {
  return <World {...props} />;
}
