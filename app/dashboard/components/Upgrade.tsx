import React from "react";

export default function Upgrade() {
  return (
    <div className="w-full card card-xs bg-leaf-300 p-4">
      <span className="text-xl font-bold mb-2 text-leaf-950">
        Upgrade Akun Yayasan
      </span>
      <p className="mb-2">
        Buka akun yayasan dan dapatkan akses untuk membuat serta mengelola
        campaign donasi Anda sendiri.
      </p>
      <div className="w-full flex flex-col items-end">
        <button className="p-2 bg-leaf-700 w-42 text-leaf-100">
          Buat Campaign
        </button>
      </div>
    </div>
  );
}
