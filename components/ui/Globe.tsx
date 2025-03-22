"use client";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree, Object3DNode } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
import dynamic from "next/dynamic";

// Extend THREE components
extend({ ThreeGlobe });

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

declare global {
  interface Window {
    __THREE__: any;
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized && globeRef.current) {
      try {
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

        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing globe:", error);
      }
    }
  }, [globeRef.current, isInitialized, globeConfig, data]);

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

// Create a dynamic Canvas component that only renders on client
const DynamicCanvas = dynamic(() => Promise.resolve(Canvas), {
  ssr: false,
});

export function World(props: WorldProps) {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      const container = document.getElementById("globe-container");
      if (container) {
        const width = container.offsetWidth;
        setSize({ width, height: width });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      id="globe-container"
      style={{
        width: "100%",
        aspectRatio: "1/1",
        position: "relative",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <DynamicCanvas
        camera={{
          position: [0, 0, cameraZ],
          fov: 45,
          near: 1,
          far: 1000,
          aspect: 1,
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
        dpr={[1, 2]}
      >
        <Scene {...props} />
      </DynamicCanvas>
    </div>
  );
}

export function Globe(props: WorldProps) {
  return <World {...props} />;
}
