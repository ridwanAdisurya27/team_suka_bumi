"use client";

import React, { useState } from "react";

interface CampaignData {
  id: string;
  judul: string;
  lokasi: string;
  jenis_pohon: string;
  medan: string;
  poster_url: string;
  tanggal_mulai: string;
  tanggal_berakhir: string;
  created_by_yayasan: string;
}

interface TabSectionProps {
  campaignData: CampaignData;
  deskripsiHtml: string;
}

export default function TabSection({
  campaignData,
  deskripsiHtml,
}: TabSectionProps) {
  const [activeTab, setActiveTab] = useState<"desc" | "update">("desc");

  // Format tanggal
  const formatDate = (dateString: string) => {
    if (!dateString) return "Tanggal tidak ditentukan";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Generate tag berdasarkan jenis pohon dan medan
  const getTags = () => {
    const tags = [];

    if (campaignData.lokasi) {
      tags.push(`📍 ${campaignData.lokasi}`);
    }

    if (campaignData.jenis_pohon) {
      tags.push(
        `🌱 ${
          campaignData.jenis_pohon.charAt(0).toUpperCase() +
          campaignData.jenis_pohon.slice(1)
        }`
      );
    }

    if (campaignData.medan) {
      const medanMap: Record<string, string> = {
        hutan: "🏞️ Hutan",
        pesisir: "🏝️ Pesisir",
        perkotaan: "🏙️ Perkotaan",
        lahan_kritis: "⚠️ Lahan Kritis",
      };
      tags.push(medanMap[campaignData.medan] || `📌 ${campaignData.medan}`);
    }

    return tags;
  };

  // Generate sample updates based on campaign data
  const generateUpdates = () => {
    const updates = [];
    const tags = getTags();

    if (campaignData.tanggal_mulai) {
      updates.push({
        date: formatDate(campaignData.tanggal_mulai),
        title: "Kampanye Resmi Dimulai",
        description: `Program "${campaignData.judul}" secara resmi diluncurkan.`,
        image: campaignData.poster_url,
        progress: 0,
        type: "launch",
      });
    }

    updates.push({
      date: formatDate(campaignData.tanggal_berakhir),
      title: "Target Penanaman",
      description: `Target penanaman ${campaignData.judul} di ${campaignData.lokasi}.`,
      image:
        "https://i.pinimg.com/736x/4c/df/85/4cdf85a2453a742b76bbd808e9d97b67.jpg",
      progress: 50,
      type: "target",
    });

    return updates;
  };

  const updates = generateUpdates();

  return (
    <div className="px-6 sm:px-12">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 w-4/5">
        {campaignData.judul}
      </h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("desc")}
          className={`pb-2 text-lg font-medium transition ${
            activeTab === "desc"
              ? "border-b-2 border-green-600 text-green-700"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          Deskripsi
        </button>

        <button
          onClick={() => setActiveTab("update")}
          className={`pb-2 text-lg font-medium transition ${
            activeTab === "update"
              ? "border-b-2 border-green-600 text-green-700"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          Update
        </button>
      </div>

      {/* Content */}
      {activeTab === "desc" ? (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 my-4">
            Tentang Program
          </h3>

          <div className="bg-[#f7fcf7] rounded-xl shadow-lg shadow-green-100/30 border border-green-50 p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {getTags().map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Deskripsi dari file .txt */}
            {deskripsiHtml ? (
              <div dangerouslySetInnerHTML={{ __html: deskripsiHtml }} />
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Program{" "}
                  <span className="font-semibold text-green-600">
                    {campaignData.judul}
                  </span>{" "}
                  merupakan inisiatif komprehensif yang bertujuan untuk
                  mempercepat proses penanaman pohon di wilayah{" "}
                  {campaignData.lokasi}. Melalui kolaborasi strategis dengan
                  masyarakat lokal, pemerintah daerah, dan organisasi
                  lingkungan, kami menciptakan ekosistem berkelanjutan yang
                  tidak hanya menanam pohon tetapi juga memberdayakan komunitas.
                </p>

                <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <img
                    src={
                      campaignData.poster_url ||
                      "https://i.pinimg.com/736x/4c/df/85/4cdf85a2453a742b76bbd808e9d97b67.jpg"
                    }
                    alt={`Program ${campaignData.judul}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600 text-center">
                      Program penanaman {campaignData.jenis_pohon} di{" "}
                      {campaignData.lokasi}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Setiap donasi yang terkumpul akan dialokasikan secara
                  transparan untuk tiga pilar utama:{" "}
                  <span className="font-medium text-green-600">
                    penyediaan bibit berkualitas tinggi
                  </span>
                  ,{" "}
                  <span className="font-medium text-green-600">
                    program perawatan intensif
                  </span>
                  , dan{" "}
                  <span className="font-medium text-green-600">
                    sistem monitoring digital
                  </span>{" "}
                  yang memantau perkembangan pohon melalui teknologi satellite
                  imaging dan laporan lapangan rutin.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium border border-green-200">
                      🌿 Reboisasi Berkelanjutan
                    </span>
                    <span className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium border border-blue-200">
                      🤝 Pemberdayaan Masyarakat
                    </span>
                    <span className="bg-purple-50 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium border border-purple-200">
                      📊 Monitoring Digital
                    </span>
                    <span className="bg-orange-50 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium border border-orange-200">
                      🌍 Dampak Jangka Panjang
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4 w-full max-w-2xl">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg shadow-green-100/50 border border-green-50 p-4 hover:shadow-green-200/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">
                    {update.type === "launch" ? "🚀" : "💰"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-emerald-600 font-medium">
                    📅 {update.date}
                  </p>
                  <p className="text-gray-800 mt-1 leading-relaxed font-semibold">
                    {update.title}
                  </p>
                  <p className="text-gray-600 mt-1 text-sm">
                    {update.description}
                  </p>

                  {update.image && (
                    <div className="mt-3 rounded-lg overflow-hidden border border-gray-100">
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {update.progress > 0 && (
                    <div className="mt-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Progress Donasi
                        </span>
                        <span className="text-sm font-bold text-emerald-600">
                          {update.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${update.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
