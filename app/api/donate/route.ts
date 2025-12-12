import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export async function POST(request: NextRequest) {
  console.log("API route dipanggil");

  try {
    const data = await request.json();
    console.log("Data donation diterima:", data);

    // Validasi minimal
    if (!data.jumlah_pohon || !data.campaign_id) {
      return NextResponse.json(
        { error: "Jumlah pohon dan campaign ID diperlukan" },
        { status: 400 }
      );
    }

    const transactionId = `TRX${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const tanggal = new Date().toISOString();

    // Data transaksi lengkap
    const transaction = {
      id: transactionId,
      jumlah_pohon: data.jumlah_pohon,
      total_donasi: data.total_donasi,
      status: "verified",
      user_email: data.user_email || "anonim@example.com",
      user_name: data.user_name || "Donatur Anonim",
      user_photo: data.user_photo || "",
      campaign_id: data.campaign_id,
      campaign_title: data.campaign_title || "",
      campaign_yayasan: data.campaign_yayasan || "",
      lokasi: data.lokasi || "",
      jenis_pohon: data.jenis_pohon || "",
      tanggal_donasi: tanggal,
      bukti_pembayaran: "demo_verifikasi.jpg",
      is_anonim: data.is_anonim || false,
      verified_at: tanggal,
      verified_by: "system",
      verification_notes: "Auto verified via API",
      created_at: serverTimestamp(),
    };

    console.log("Menyimpan transaksi:", transaction);

    try {
      // 1. Simpan transaksi
      await addDoc(collection(db, "transactionsv2"), transaction);
      console.log("Transaksi berhasil disimpan");

      // 2. CARI CAMPAIGN BERDASARKAN FIELD id (bukan doc.id)
      try {
        console.log("Mencari campaign dengan field id:", data.campaign_id);

        // Query untuk mencari campaign berdasarkan field "id"
        const campaignsQuery = query(
          collection(db, "campaignsv2"),
          where("id", "==", data.campaign_id)
        );

        const querySnapshot = await getDocs(campaignsQuery);

        if (querySnapshot.empty) {
          console.warn(
            `Campaign dengan field id '${data.campaign_id}' tidak ditemukan`
          );
          // Lanjutkan meskipun campaign tidak ditemukan
        } else {
          const campaignDoc = querySnapshot.docs[0];
          const campaignData = campaignDoc.data();

          console.log("Campaign ditemukan:", {
            documentId: campaignDoc.id,
            fieldId: campaignData.id,
            judul: campaignData.judul,
          });

          // Hitung nilai baru untuk campaign
          const currentTotalDonasi = campaignData.total_donasi || 0;
          const currentTotalPohon = campaignData.total_pohon || 0;
          const currentTotalDonatur = campaignData.total_donatur || 0;
          const currentTargetDonasi = campaignData.target_donasi || 0;

          const newTotalDonasi = currentTotalDonasi + data.total_donasi;
          const newTotalPohon = currentTotalPohon + data.jumlah_pohon;
          const newTotalDonatur = currentTotalDonatur + 1;

          // Hitung progress percentage
          const targetValue = currentTargetDonasi * 15000;
          const newProgress =
            targetValue > 0
              ? Math.round((newTotalDonasi / targetValue) * 100)
              : 0;

          // Update campaign menggunakan document ID yang ditemukan
          await updateDoc(doc(db, "campaignsv2", campaignDoc.id), {
            total_donasi: newTotalDonasi,
            total_pohon: newTotalPohon,
            total_donatur: newTotalDonatur,
            progress_percentage: newProgress,
            updated_at: serverTimestamp(),
          });

          console.log("Campaign berhasil diupdate:", {
            total_donasi: newTotalDonasi,
            total_pohon: newTotalPohon,
            total_donatur: newTotalDonatur,
            progress_percentage: newProgress,
          });
        }
      } catch (campaignError: any) {
        console.error("Error update campaign:", campaignError.message);
        // Lanjutkan meskipun gagal update campaign, transaksi sudah tersimpan
      }

      // 3. Update usersv2 jika user terdaftar
      try {
        if (data.user_email && data.user_email !== "anonim@example.com") {
          console.log("Mencari user dengan email:", data.user_email);

          const usersQuery = query(
            collection(db, "usersv2"),
            where("email", "==", data.user_email)
          );
          const userSnapshot = await getDocs(usersQuery);

          if (!userSnapshot.empty) {
            const userDoc = userSnapshot.docs[0];
            const userData = userDoc.data();
            const currentTotal = userData.totalDonation || 0;
            const newTotalDonation = currentTotal + data.total_donasi;

            await updateDoc(doc(db, "usersv2", userDoc.id), {
              totalDonation: newTotalDonation,
              lastDonationTimestamp: tanggal,
              updatedAt: serverTimestamp(),
            });

            console.log("User berhasil diupdate:", {
              email: data.user_email,
              totalDonation: newTotalDonation,
            });
          } else {
            console.log("User tidak ditemukan dengan email:", data.user_email);
          }
        }
      } catch (userError: any) {
        console.error("Error update user:", userError.message);
        // Lanjutkan meskipun gagal update user
      }

      return NextResponse.json(
        {
          success: true,
          message: "Donasi berhasil disimpan",
          transactionId: transactionId,
          data: transaction,
          userUpdated:
            data.user_email && data.user_email !== "anonim@example.com",
        },
        { status: 200 }
      );
    } catch (firestoreError: any) {
      console.error("Firestore error:", firestoreError.message);
      return NextResponse.json(
        { error: "Gagal menyimpan ke database: " + firestoreError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Donation API endpoint",
    usage: "POST /api/donate dengan JSON body",
  });
}
