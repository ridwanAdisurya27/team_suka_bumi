// app/about/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";

export default function About() {
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
    <div className="!overflow-x-hidden bg-leaf-50">
      <Navbar />
      <Jumbotron
        imageUrl="/assets/img/background/about_background.jpeg"
        title="Tentang Program Resapling"
      />

      <section className="idea flex flex-col-reverse md:flex-row-reverse w-full px-6 sm:px-12 mx-auto my-8">
        <div className="left xs:w-4/5 md:w-1/2 xs:mx-auto sm:mx-0 relative flex flex-col items-end">
          <div>
            <div
              className="!w-full sm:w-4/5 xs:h-64 sm:h-64 relative mt-7 xs:mx-auto sm:mx-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="sm:w-full w-full h-full bg-leaf-950 bg-opacity-50 absolute flex z-20 rounded-xl xs:mxto"></div>
              <Image
                className="sm:w-full w-full h-full object-cover rounded-xl shadow-xl"
                src="/assets/img/item/hutan_ikn.jpeg"
                alt="electric bus mechanism"
                width={500}
                height={256}
              />
            </div>
          </div>
          <div
            className="min-w-max w-2/5 sm:w-1/3 bg-leaf-950 font-medium rounded-xl my-4 text-white p-4 flex gap-3 items-center shadow-xl"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <i className="bx bx-camera text-xl"></i> Kondisi Hutan IKN
          </div>
        </div>
        <div
          className="right xs:w-4/5 md:w-1/2 xs:mx-auto sm:mx-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
            Latar belakang
          </div>
          <h2 className="capitalize font-semibold text-4xl sm:w-4/5 xs:w-full">
            Deforestasi yang semakin meluas menjadi alasan utama
          </h2>
          <p className="mt-5 sm:mt-5 font-light text-gray-800 text-xs sm:text-sm w-4/5 inline-block">
            Seiring meningkatnya kebutuhan lahan untuk sektor seperti
            pertambangan, perkebunan, hingga pembangunan Ibu Kota Negara (IKN)
            Nusantara, terjadi ekspansi industri dan infrastruktur yang
            mendorong pembukaan hutan secara masif. Deforestasi ini berdampak
            pada hilangnya keanekaragaman hayati
            <span className="visible md:invisible lg:visible font-light font">
              , meningkatnya emisi karbon, serta gangguan terhadap ekosistem dan
              kehidupan masyarakat lokal.
            </span>
          </p>
        </div>
      </section>

      <section className="vision my-8 px-6 sm:px-12 mx-auto">
        <h2
          className="capitalize font-semibold text-4xl text-center w-1/2 lg:w-1/4 mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          visi kami dalam setiap aksi
        </h2>
        <div className="containerr flex flex-col md:flex-row md:justify-between gap-4 mt-6 lg:mt-12 mb-12">
          <div
            className="feature-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="feature-header">
              <div className="feature-badge">Keberlanjutan</div>
              <div className="feature-icon">
                <i className="bx bxs-analyse"></i>
              </div>
            </div>
            <div className="feature-content">
              <h5 className="feature-title">
                Mengedepankan dampak jangka panjang bagi alam
              </h5>
              <p className="feature-text">
                Dengan menggunakan konsep dan metode organik yang ramah
                lingkungan, tidak menimbulkan limbah baru bagi alam serta
                membantu menjaga keseimbangan ekosistem
              </p>
            </div>
          </div>

          <div
            className="feature-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="feature-header">
              <div className="feature-badge">Teknologi</div>
              <div className="feature-icon">
                <i className="bx bx-chip"></i>
              </div>
            </div>
            <div className="feature-content">
              <h5 className="feature-title">
                Memanfaatkan kecanggihan Teknologi mutakhir
              </h5>
              <p className="feature-text">
                Mulai dari analisis lahan yang terdampak melalui GIS serta
                metode penanaman dengan teknologi pemantau suhu dan keadaan
              </p>
            </div>
          </div>

          <div
            className="feature-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="feature-header">
              <div className="feature-badge">Gotong Royong</div>
              <div className="feature-icon">
                <i className="bx bx-group"></i>
              </div>
            </div>
            <div className="feature-content">
              <h5 className="feature-title">
                Mengutamakan partisipasi masyarakat
              </h5>
              <p className="feature-text">
                Untuk menumbuhkan kesadaran didalam masyarakat dan juga agar
                bisa melakukan aksi lingkungan lain kedepannya
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="target flex flex-col md:flex-row md:justify-between gap-4 px-6 sm:px-12 my-8 lg:my-8">
        <div
          className="left w-full md:w-2/5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
            Program
          </div>
          <h2 className="capitalize font-semibold text-4xl">
            membumi memberi membakti
          </h2>
          <p className="font-light text-gray-800 text-xs sm:text-sm w-4/5 mt-3">
            Mengajak seluruh elemen masyarakat untuk turun bersama merasakan dan
            memperbaiki keadaan alam
          </p>
          <Image
            src="/assets/img/item/reboisasi_malang.jpg"
            alt="Kegiatan reboisasi"
            width={500}
            height={300}
            className="w-full md:w-11/12 rounded-xl object-cover aspect-video my-4"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="50"
          />
        </div>
        <div className="right w-full md:w-3/5">
          <div className="flex flex-col gap-4 w-full lg:w-10/12 ml-auto">
            <div
              className="flex gap-4"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="40"
            >
              <div className="ml-auto bg-white p-4 w-full sm:w-11/12 rounded-xl shadow-xl border border-gray-300 flex flex-row items-start justify-between">
                <div className="icon transform scale-75 md:scale-100 md:w-1/3 h-full flex items-center justify-center pt-1">
                  <div className="border-8 p-4 rounded-full border-leaf-700">
                    <i className="bx bx-leaf text-leaf-700 text-7xl block m-auto"></i>
                  </div>
                </div>

                <div className="desc w-2/3 pl-4">
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Penanaman Bibit
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="mt-1">
                        <span className="w-2 h-2 bg-leaf-600 rounded-full block"></span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Pra Aksi</h5>
                        <p className="font-light text-xs text-gray-600 w-4/5 sm:w-3/4">
                          Survey, Penyiapan bibit dan kampaye masif (online dan
                          offline)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="mt-1">
                        <span className="w-2 h-2 bg-leaf-600 rounded-full block"></span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">
                          Pasca Aksi
                        </h5>
                        <p className="font-light text-xs text-gray-600 w-4/5 sm:w-3/4">
                          Penyiraman dan pemupukan serta pemantauan kondisi oleh
                          tim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <div
                className="flex-1 bg-leaf-700 text-white p-4 min-h-44 rounded-xl shadow-xl border border-gray-300 flex flex-col"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="60"
              >
                <div className="flex flex-row w-full gap-4 items-center">
                  <i className="bx bx-book-open text-white text-4xl block"></i>
                  <h2 className="text-base font-bold">Program Pelatihan</h2>
                </div>
                <ul className="list-disc font-normal text-xs m-4">
                  <li>Pemilihan pupuk dan pembuatan pupuk organik</li>
                  <li>Perawatan dan pemantauan kondisi</li>
                  <li>Produksi bibit unggul</li>
                  <li>Pemanenan dan pengelolaan hasil panen</li>
                </ul>
              </div>
              <div className="w-full sm:w-2/5 bg-leaf-950 text-white p-4 h-44 rounded-xl shadow-xl border border-gray-300 flex flex-col">
                <i className="bx bx-water text-white text-4xl"></i>
                <h2 className="text-base font-semibold mt-2">Pengairan</h2>
                <p className="text-xs mt-1">
                  Pembuatan sumur baru bagi warga, pemasangan sistem irigasi
                  sungai yang terintegrasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team mx-auto px-6 sm:px-12 mb-16 my-8">
        <div className="w-full flex flex-col gap-4 sm:flex-row-reverse sm:justify-between sm:items-center mb-4">
          <div
            className="w-full sm:w-2/5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="chips bg-leaf-500 mb-2 text-white px-4 py-1.5 rounded-full max-w-max">
              Tim Kami
            </div>
            <h2 className="font-semibold text-4xl">
              Jajaran Visioner Bidang Lingkungan
            </h2>
          </div>
          <p
            className="font-light text-xs sm:text-sm w-4/5 sm:w-2/5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Para pemrakasa pencetus dan pengelola Resapling. Kami bukan apa apa
            tanpa bantuan masyarakat, tidaklah mungkin 3 orang ini menanam
            ratusan bahkan ribuan bibit pohon sendirian
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-12 justify-between items-center gap-4">
          <div
            className="team-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="30"
          >
            <div className="team-image-wrapper">
              <Image
                src="/assets/img/person/photo1.jpg"
                alt="Raul"
                width={200}
                height={200}
                className="team-image"
              />
              <div className="team-social-icon">
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
            <h3 className="team-name">Raul Hernandez</h3>
            <p className="team-role">Project Manager</p>
          </div>
          <div className="separator"></div>
          <div
            className="team-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="30"
          >
            <div className="team-image-wrapper">
              <Image
                src="/assets/img/person/photo2.jpg"
                alt="Richard"
                width={200}
                height={200}
                className="team-image"
              />
              <div className="team-social-icon">
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
            <h3 className="team-name">Ricardo Kaka</h3>
            <p className="team-role">Software Developer</p>
          </div>
          <div className="separator"></div>
          <div
            className="team-card"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="30"
          >
            <div className="team-image-wrapper">
              <Image
                src="/assets/img/person/photo3.jpg"
                alt="Alvin Adinata"
                width={200}
                height={200}
                className="team-image"
              />
              <div className="team-social-icon">
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
            <h3 className="team-name">Sukma Adinata</h3>
            <p className="team-role">Creative Designer</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
