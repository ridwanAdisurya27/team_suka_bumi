"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./leafletMap"), {
  ssr: false,
});

export default function SimpleMapPicker() {
  const [coords, setCoords] = useState<[number, number] | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pilih Lokasi di Peta</h1>

      <div className="h-[400px] mb-4 border rounded-lg overflow-hidden">
        <LeafletMap coords={coords} setCoords={setCoords} />
      </div>

      {coords ? (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">Koordinat:</p>
          <p className="text-lg font-mono mt-2">
            {coords[0].toFixed(6)}, {coords[1].toFixed(6)}
          </p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}`
              );
              alert("Koordinat disalin!");
            }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Salin Koordinat
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">
          Klik di peta untuk memilih lokasi
        </p>
      )}
    </div>
  );
}
