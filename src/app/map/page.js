"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), { ssr: false });

export default function MapPage() {
  return (
    <main className="h-screen w-full bg-black">
      <MapClient />
    </main>
  );
}
