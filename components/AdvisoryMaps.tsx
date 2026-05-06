"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

type WorldTopology = Topology<{ countries: GeometryCollection }>;

interface MapCardProps {
  title: string;
  projectionType: keyof typeof d3;
  scale: number;
  center?: [number, number];
  rotation?: [number, number, number];
}

function MapCard({ title, projectionType, scale, center, rotation }: MapCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [topology, setTopology] = useState<WorldTopology | null>(null);

  useEffect(() => {
    fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((data) => setTopology(data));
  }, []);

  useEffect(() => {
    if (!topology || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    context.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projFn = (d3 as any)[projectionType] as () => d3.GeoProjection;
    const projection = projFn()
      .scale(scale)
      .translate([width / 2, height / 2]);

    if (center) projection.center!(center);
    if (rotation) projection.rotate!(rotation);

    const path = d3.geoPath(projection, context);
    const world = topojson.feature(topology, topology.objects.countries);

    context.clearRect(0, 0, width, height);

    context.beginPath();
    path(world);
    context.fillStyle = "#222222";
    context.fill();
    context.strokeStyle = "rgba(255, 255, 255, 0.15)";
    context.lineWidth = 0.5;
    context.stroke();

    context.globalAlpha = 0.5;
    context.fillStyle = "#e2e3df";
    context.beginPath();
    path(world);
    context.fill();
    context.globalAlpha = 1.0;
  }, [topology, projectionType, scale, center, rotation]);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-container border border-white/5 hover:border-white/30 transition-all duration-500">
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 z-10">
        <p className="font-headline font-bold text-lg md:text-xl text-on-background group-hover:text-white transition-colors">
          {title}
        </p>
      </div>
    </div>
  );
}

const REGIONS: MapCardProps[] = [
  {
    title: "South East Asia",
    projectionType: "geoMercator",
    scale: 350,
    center: [115, 10],
    rotation: [0, 0, 0],
  },
  {
    title: "Australia",
    projectionType: "geoMercator",
    scale: 300,
    center: [133, -27],
    rotation: [0, 0, 0],
  },
  {
    title: "Gulf States",
    projectionType: "geoMercator",
    scale: 450,
    center: [45, 24],
    rotation: [0, 0, 0],
  },
  {
    title: "European Union",
    projectionType: "geoMercator",
    scale: 220,
    center: [10, 52],
    rotation: [0, 0, 0],
  },
];

export default function AdvisoryMaps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
      {REGIONS.map((region) => (
        <MapCard key={region.title} {...region} />
      ))}
    </div>
  );
}
