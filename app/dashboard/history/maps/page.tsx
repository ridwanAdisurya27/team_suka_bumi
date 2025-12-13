"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import dynamic from "next/dynamic";
import Image from "next/image";
import "leaflet/dist/leaflet.css";

function CampaignInfo({ campaign }: { campaign: any }) {
  const [descriptionHtml, setDescriptionHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDescription = async () => {
      setIsLoading(true);
      if (campaign.deskripsi_url) {
        try {
          const response = await fetch(campaign.deskripsi_url);
          if (response.ok) {
            const htmlContent = await response.text();
            setDescriptionHtml(htmlContent);
          }
        } catch (error) {
          console.error("Error fetching description:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchDescription();
  }, [campaign.deskripsi_url]);

  // Format currency helper
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount * 15000);
  };

  return (
    <div className="flex-1">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Hero Section with Image */}
        <div className="relative h-72 md:h-80 lg:h-96 w-full">
          <Image
            src={campaign.poster_url || "/assets/img/item/sinarmas.jpeg"}
            alt={campaign.judul}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Campaign Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">
                Kampanye Lingkungan
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                {campaign.judul}
              </h1>
              <p className="text-gray-200 text-sm md:text-base font-medium">
                {campaign.lokasi} • {campaign.jenis_pohon_asli || campaign.jenis_pohon || "Berbagai Jenis"}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Campaign Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Target Donasi</p>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(campaign.target_donasi || 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Lokasi</p>
                  <p className="text-xl font-bold text-gray-900">{campaign.lokasi || "-"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tanggal Planning</p>
                  <p className="text-xl font-bold text-gray-900">
                    {campaign.tanggal_planning
                      ? new Date(campaign.tanggal_planning).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Grid */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Informasi Detail Kampanye
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-700">Jenis Medan</h4>
                </div>
                <p className="text-lg font-medium text-gray-900 pl-14">{campaign.medan || "-"}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-200 rounded-lg">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-700">Jenis Pohon</h4>
                </div>
                <p className="text-lg font-medium text-gray-900 pl-14">
                  {campaign.jenis_pohon_asli || campaign.jenis_pohon || "-"}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-200 rounded-lg">
                    <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-700">Tanggal Mulai</h4>
                </div>
                <p className="text-lg font-medium text-gray-900 pl-14">
                  {campaign.tanggal_mulai
                    ? new Date(campaign.tanggal_mulai).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    : "-"}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-200 rounded-lg">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-700">Tanggal Berakhir</h4>
                </div>
                <p className="text-lg font-medium text-gray-900 pl-14">
                  {campaign.tanggal_berakhir
                    ? new Date(campaign.tanggal_berakhir).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    : "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Deskripsi Kampanye</h3>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8">
              {isLoading ? (
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                </div>
              ) : descriptionHtml ? (
                <div
                  className="prose prose-lg max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-p:text-gray-700 prose-p:leading-relaxed
                    prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900
                    prose-ul:text-gray-700 prose-ol:text-gray-700
                    prose-li:marker:text-emerald-500
                    prose-blockquote:border-emerald-300 prose-blockquote:bg-emerald-50
                    prose-img:rounded-xl prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              ) : (
                <div className="text-center py-10">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Deskripsi kampanye tidak tersedia</p>
                  <p className="text-gray-400 text-sm mt-2">Informasi detail akan segera diupdate</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  // == Fungsi Mengambil Data ===
  const [userDonations, setUserDonations] = useState<any[]>([]);
  const [campaignsData, setCampaignsData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDonationIndex, setSelectedDonationIndex] = useState<number | null>(null);

  // Ambil data user dari localStorage
  const [localData, setLocalData] = useState<any>(null);

  useEffect(() => {
    // Ambil data user dari localStorage
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        const parsedData = JSON.parse(stored);
        setLocalData(parsedData);
      }
    } catch (err) {
      console.warn("LocalStorage parse failed:", err);
    }
  }, []);

  // Ambil data donasi user dari Firebase
  useEffect(() => {
    const fetchUserDonations = async () => {
      if (!localData?.email) return;

      setIsLoading(true);
      try {
        const transactionsRef = collection(db, "transactionsv2");
        const q = query(
          transactionsRef,
          where("user_email", "==", localData.email),
          orderBy("created_at", "desc"),
          limit(6)
        );

        const querySnapshot = await getDocs(q);
        const donations: any[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          donations.push({
            id: doc.id,
            ...data,
            created_at: data.created_at?.toDate?.() || null,
          });
        });

        setUserDonations(donations);

        // Fetch campaign data for each donation
        const campaignPromises = donations.map(async (donation) => {
          if (donation.campaign_id) {
            try {
              const campaignsRef = collection(db, "campaignsv2");
              const q = query(campaignsRef, where("id", "==", donation.campaign_id)); // atau field name yang sesuai
              const querySnapshot = await getDocs(q);

              if (!querySnapshot.empty) {
                const campaignDoc = querySnapshot.docs[0];
                return {
                  campaignId: donation.campaign_id,
                  data: campaignDoc.data()
                };
              }
            } catch (error) {
              console.error(`Error fetching campaign ${donation.campaign_id}:`, error);
            }
          }
          return null;
        });

        const campaigns = await Promise.all(campaignPromises);
        const campaignMap: any = {};
        campaigns.forEach(campaign => {
          if (campaign) {
            campaignMap[campaign.campaignId] = campaign.data;
          }
        });

        setCampaignsData(campaignMap);

        // Select the first donation by default if available
        if (donations.length > 0) {
          setSelectedDonationIndex(0);
        }
      } catch (error) {
        console.error("Error fetching user donations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDonations();
  }, [localData?.email]);

  // Generate map points from campaigns data
  const mapPoints = userDonations.map((donation) => {
    const campaign = campaignsData[donation.campaign_id];
    console.log(campaignsData);
    return {
      lat: campaign?.lokasi_lat || donation.latitude || donation.coords?.[0] || -6.200000,
      lng: campaign?.lokasi_lng || donation.longitude || donation.coords?.[1] || 106.816666,
      id: donation.id,
      campaignId: donation.campaign_id
    };
  });

  console.log("User donations:", userDonations);
  console.log("Campaigns data:", campaignsData);
  console.log("Map points:", mapPoints);

  const handlePointClick = (index: number) => {
    setSelectedDonationIndex(index);
    const donation = userDonations[index];
    if (donation) {
      const campaign = campaignsData[donation.campaign_id];
      if (campaign?.lokasi_lat && campaign?.lokasi_lng) {
        setCoords([campaign.lokasi_lat, campaign.lokasi_lng]);
      } else if (donation.latitude && donation.longitude) {
        setCoords([donation.latitude, donation.longitude]);
      } else if (donation.coords) {
        setCoords(donation.coords);
      }
    }
  };

  const selectedDonation = selectedDonationIndex !== null ? userDonations[selectedDonationIndex] : null;
  const selectedCampaign = selectedDonation ? campaignsData[selectedDonation.campaign_id] : null;

  // == Fungsi Peta ==
  const [coords, setCoords] = useState<[number, number] | null>(null);

  const LeafletMap = dynamic(() => import("./LeafletMap"), {
    ssr: false,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row  md:items-center gap-4">
        <Link href="/dashboard/history">
          <button className="px-2 hover:bg-green-400 border-2 border-gray-300 py-2"><i className="bx bx-arrow-back"></i></button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Peta Sebaran Donasi</h1>
        </div>
      </div>
      {/* Map */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Lokasi Donasi
          {selectedCampaign && (
            <span className="text-sm text-green-600 ml-2">
              - {selectedCampaign.judul || selectedDonation?.campaign_title || "Donasi Terpilih"}
            </span>
          )}
        </label>
        <div className="h-[400px] mb-4 border rounded-lg overflow-hidden">
          <LeafletMap
            coords={coords}
            setCoords={setCoords}
            points={mapPoints}
            onPointClick={handlePointClick}
          />
        </div>
      </div>

      {/* Description */}
      {selectedCampaign ? (
        <div className="p-4 text-black flex md:flex-row flex-col gap-4">
          <CampaignInfo campaign={selectedCampaign} />
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500">
          Pilih lokasi pada peta untuk melihat detail donasi.
        </div>
      )}
    </>
  );
}