// app/page.tsx
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationCard from "@/components/DonationCard";

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-leaf-50">
      <Navbar />
      <section className="hero flex flex-col px-6 sm:px-12">
        <div
          className="tagline mt-16 my-10 text-center mx-auto w-full"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="w-full lg:w-3/4 text-4xl sm:text-5xl font-bold mx-auto">
            Membangkitkan <span className="text-leaf-700">Alam</span> Kembali
            <br className="lg:block hidden" />
            dengan <span className="text-leaf-700">Tunas</span> dan Harapan
          </h1>
          <p className="my-4 font-light text-gray-700 text-sm w-4/5 sm:w-1/2 lg:w-2/5 mx-auto">
            Dari pucuk yang merkah, asa bersemi. Setiap tunas adalah janji
            kehidupan, setapak kecil menghijaukan kembali hamparan bumi.
          </p>
          <button className="primary">Pelajari</button>
        </div>
        <div className="info flex flex-col sm:flex-row sm:justify-around lg:justify-between sm:items-end gap-4 sm:mx-auto lg:mx-0">
          <div
            className="box rounded-xl w-full sm:w-1/2 lg:w-1/5 xl:w-1/4 bg-leaf-700 lg:h-64 text-white p-4 relative mb-4 shadow-xl hidden sm:block"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h5 className="font-bold text-xl">175,4 Ribu Ha</h5>
            <h6 className="font-medium text-sm">Deforestasi 2024</h6>
            <p className="font-light text-white text-xs my-4 mb-10">
              Alam tidak baik baik saja, beribu hektar hutan telah rata dengan
              tanah karena meningkatnya kebutuhan akan lahan maupun sumber daya,
              terkadang manusia lupa untuk menanami kembali hutan yang ia tebang
            </p>
            <div className="xl:block hidden w-2/5 object-cover absolute bottom-0 right-0">
              <Image
                src="/assets/img/item/semak.png"
                alt="Semak"
                width={200}
                height={150}
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="box rounded-xl w-full mx-auto md:mx-0 md:w-1/2 aspect-video lg:h-52 relative shadow-xl mb-4 sm:mb-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="w-full h-full rounded-xl bg-leaf-950 bg-opacity-20 absolute inset-0"></div>
            <Image
              src="/assets/img/item/tunas.jpg"
              alt="Tunas"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div
            className="box rounded-xl w-full mx-auto md:mx-0 md:w-1/5 lg:h-72 bg-leaf-950 p-4 mb-4 shadow-xl flex flex-row sm:flex-col gap-4 items-center lg:block block sm:hidden"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="drop border-4 border-white border-dashed p-4 w-32 h-32 !aspect-square mx-auto mt-4 mb-10 rounded-full flex">
              <i className="bx bxs-droplet text-white text-7xl block m-auto"></i>
            </div>
            <p className="font-normal text-white text-sm sm:text-xs">
              Hutan menyimpan cadangan air tanah, jika hutan musnah kekeringan
              akan merajalela.
            </p>
          </div>
        </div>
      </section>

      <section className="study flex flex-col md:flex-row w-full px-6 md:px-12 mx-auto mt-4 md:mt-16 md:gap-8">
        <div className="left w-full sm:w-11/12 md:w-1/2 mx-auto md:mx-0 relative">
          <a
            href="https://youtu.be/hvffd4ylG-o?si=QdRihWOzIBZ0-hjX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="!w-full lg:w-4/5 lg:h-64 relative mt-7 mx-auto md:mx-0 sm:flex sm:justify-center md:justify-normal"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="lg:w-4/5 sm:w-full w-full h-full bg-leaf-950 bg-opacity-20 absolute flex z-20 rounded-xl mx-auto">
                <div className="w-12 h-12 bg-leaf-500 text-white rounded-full m-auto flex justify-center items-center">
                  <i className="bx bx-play text-4xl"></i>
                </div>
              </div>
              <Image
                className="lg:w-4/5 sm:w-full w-full aspect-video object-cover rounded-xl shadow-xl"
                src="/assets/img/item/rekamnusa2.png"
                alt="Rekam Nusa Keadaan hutan"
                width={600}
                height={400}
              />
            </div>
          </a>
          <div
            className="min-w-max w-3/5 lg:w-1/3 bg-leaf-950 font-medium rounded-xl my-2 sm:my-4 text-white p-4 flex gap-3 items-center shadow-xl"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="40"
          >
            <i className="bx bxl-youtube text-xl"></i> Rekam Nusantara
          </div>
        </div>
        <div
          className="right w-full sm:w-11/12 md:w-1/2 mx-auto md:mx-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max mt-2 md:mt-10">
            Retorika
          </div>
          <h2 className="capitalize font-semibold text-4xl lg:w-4/5 sm:w-4/5 md:w-full w-full my-2">
            Masih bertanya kenapa reboisasi penting?
          </h2>
          <p className="my-2 sm:my-3 font-light text-gray-800 text-xs lg:text-sm w-4/5 lg:w-2/3">
            Di tengah gempuran pembangunan dan kebutuhan ekonomi, seringkali
            kita melupakan pentingnya menjaga hutan. Reboisasi, atau penanaman
            kembali hutan yang telah rusak, memiliki peran krusial dalam menjaga
            keseimbangan ekosistem
          </p>
          <Link href="#">
            <button type="button" className="primary my-3">
              Selengkapnya
            </button>
          </Link>
        </div>
      </section>

      <section className="donation px-6 sm:px-12 mt-8 md:mt-16">
        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div
            className="head w-full md:w-2/5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
              Donasi
            </div>
            <h2 className="text-4xl font-semibold my-2">
              Mari Lakukan Aksi Nyata
            </h2>
            <p className="mt-2 font-light text-gray-800 text-sm sm:text-sm w-4/5 md:w-full">
              Membantu menyembuhkan alam bisa dari rumah. Donasi bibit pohon
              dengan{" "}
              <span className="font-medium">Resapling mulai 10rb saja</span>
            </p>
          </div>
          <div
            className="control flex space-x-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-black">
              <i className="bx bx-chevron-left text-3xl"></i>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-black">
              <i className="bx bx-chevron-right text-3xl"></i>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 mt-10 mx-auto justify-between">
          {donationCards.map((card, index) => (
            <DonationCard key={index} {...card} />
          ))}
        </div>
      </section>

      <section className="faq w-full bg-leaf-100 mt-8 md:mt-16 pt-8 pb-16 sm:px-12">
        <div className="mx-auto px-4 md:px-6">
          <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="20">
            <h2 className="text-4xl font-semibold text-center mx-auto w-4/5 sm:w-1/2">
              Bingung untuk memulai langkah ini?
            </h2>
            <p className="mt-2 font-light text-gray-800 text-xs sm:text-sm mx-auto w-1/2 sm:w-2/5 text-center">
              jika masih ada pertanyaan, kami siap membantu, hubungi kami lewat
              kontak
            </p>
          </div>
          <div className="mt-8 sm:mt-6 w-11/12 sm:w-full md:w-4/5 lg:w-3/4 mx-auto">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="mt-4 py-2 px-4 bg-gray-50 shadow rounded-lg"
                data-aos="zoom-in-down"
                data-aos-duration="700"
                data-aos-delay={40 + index * 10}
              >
                <summary className="font-medium cursor-pointer">
                  {item.question}
                </summary>
                <p className="mt-2 font-normal py-4 text-sm w-4/5 border-white border-t">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ads px-6 sm:px-12 pt-12 flex flex-col md:flex-row gap-4 justify-between">
        <div
          className="headline order-1 md:order-1 w-full lg:w-1/3 mb-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
            Relawan
          </div>
          <h3 className="text-2xl font-semibold w-4/5 lg:w-3/4 capitalize">
            Bergabunglah menjadi relawan Resapling menghijaukan indonesia
          </h3>
          <p className="mt-2 font-light text-gray-800 text-xs sm:text-sm w-1/2 md:w-4/5">
            selain menjadi donatur anda juga bisa menjadi penyelenggara maupun
            panitia program Resapling di daerah
          </p>
          <span className="flex items-center gap-1 mt-3">
            <i className="bx bx-envelope"></i>
            <span>resaplinghead@gmail.com</span>
          </span>
          <span className="flex items-center gap-1 mt-1">
            <i className="bx bx-phone"></i> <span>829353830303</span>
          </span>
        </div>
        <div className="plant order-3 md:order-2 w-3/5 mx-auto lg:w-1/5 relative flex justify-center overflow-hidden">
          <Image
            src="/assets/img/item/plant.png"
            alt="Plant"
            width={200}
            height={300}
            className="w-full z-50 relative md:top-16 lg:mt-0 md:object-contain lg:object-fill"
          />
          <div className="circle w-56 h-56 border-leaf-700 border-8 absolute -bottom-32 m-auto z-10 border-dashed rounded-full animate-spin"></div>
        </div>
        <div className="need w-full order-2 md:order-3 lg:w-1/3 flex flex-col gap-4 items-end">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay={40 + index * 10}
            >
              <i className={`bx ${job.icon} job-icon`}></i>
              <h3 className="job-title">{job.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Data untuk komponen
const donationCards = [
  {
    image: "/assets/img/item/sinarmas.jpeg",
    title: "Sinarmas",
    description: "Menanam kembali kertas menjadi pohon bersama PT. Sinarmas",
    current: "240,210 Bibit",
    target: "500,000 Bibit",
    progress: 49,
    deadline: "6 hari lagi",
  },
  {
    image: "/assets/img/item/ikn.jpg",
    title: "Otorita IKA-EN",
    description: "Revitalisasi Hutan di Kalimantan akibat proyek strategis",
    current: "147,783 Bibit",
    target: "600,000 Bibit",
    progress: 23,
    deadline: "2 Minggu lagi",
  },
  {
    image: "/assets/img/item/gemarsorong.jpg",
    title: "Hulujaya",
    description: "Reboisasi Mangrove pencegah abrasi di Sorong Papua",
    current: "21,023 Bibit",
    target: "100,000 Bibit",
    progress: 21,
    deadline: "1 Bulan lagi",
  },
];

const faqItems = [
  {
    question: "Bagaimana cara berdonasi di Resapling?",
    answer:
      "Silakan buat akun terlebih dahulu, lalu pilih menu Donasi. Di sana, Anda dapat memilih campaign yang tersedia berdasarkan jenis bibit serta lokasi penanaman yang diinginkan. Setelah itu, lakukan pembayaran melalui transfer bank atau dompet digital (e-wallet).",
  },
  {
    question: "Dimana bibit pohon akan ditanam?",
    answer:
      "Kami akan melakukan survei terkait kerusakan hutan di beberapa daerah di Indonesia lalu berkoordinasi dengan pemerintah ataupun pihak swasta terkait kerja sama program penghijauan lahan bersama Resapling",
  },
  {
    question: "Apakah kami akan menerima bukti penanaman bibit?",
    answer:
      "Tentu saja, kami melakukan dokumentasi saat dan setelah aksi sebagai bukti tanggup jawab kami terhadap donatur. Rencananya kami juga akan melakukan monitoring dengan konsep IOT dan dikirimkan secara realtime ke donatur lewat dashboard",
  },
];

const jobs = [
  {
    icon: "bx-donate-heart",
    title: "Donatur",
  },
  {
    icon: "bx-calendar-event",
    title: "Penyelenggara",
  },
  {
    icon: "bxs-megaphone",
    title: "Influencer",
  },
];
