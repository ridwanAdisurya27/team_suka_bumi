// app/update/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";

export default function Update() {
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
    <div className="bg-leaf-50">
      <Navbar />
      <Jumbotron
        imageUrl="/assets/img/background/update_background.jpeg"
        title="Update Perjalanan Resapling"
      />

      <section className="leader flex flex-col md:flex-row px-6 sm:px-12 mx-auto my-8 gap-8 justify-between">
        <div
          className="left w-full md:w-1/2 xs:mx-auto sm:mx-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
            Penghargaan
          </div>
          <p className="my-3 sm:mt-5 font-light text-gray-800 text-xs sm:text-sm w-4/5 md:w-3/4">
            Kami sangat menghargai para donatur yang ikhlas memberi, berlomba
            lomba dalam kebajikan, nama anda akan ditulis pada leaderboard
            disamping.
          </p>
          <div
            className="reward w-11/12 sm:w-4/5 md:w-11/12 lg:w-4/5 bg-white border border-leaf-700 flex flex-row rounded-xl p-3 md:min-h-32 lg:min-h-max gap-4 my-2"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="30"
          >
            <div className="icon bg-leaf-700 text-white p-2 rounded-lg w-16 h-16 flex">
              <i className="bx bxs-t-shirt block m-auto text-3xl"></i>
            </div>
            <div className="message w-4/5">
              <h6 className="font-semibold md:font-medium text-sm sm:text-base">
                Dapatakan Merchandise Eksklusif
              </h6>
              <p className="mt-2 font-light text-gray-800 text-xs">
                untuk 3 donatur terbanyak dalam periode satu semester dan
                kesempatan spesial menjadi bagian dari Resapling
              </p>
            </div>
          </div>
          <div className="stack mt-12">
            <div className="flex items-center">
              <div className="flex -space-x-4">
                <Image
                  className="w-14 h-14 object-cover rounded-full border-2 border-white"
                  src="/assets/img/person/bella.jpg"
                  alt="User 1"
                  width={56}
                  height={56}
                />
                <Image
                  className="w-14 h-14 object-cover rounded-full border-2 border-white"
                  src="/assets/img/person/peter.jpg"
                  alt="User 2"
                  width={56}
                  height={56}
                />
                <Image
                  className="w-14 h-14 object-cover rounded-full border-2 border-white"
                  src="/assets/img/person/anne.jpg"
                  alt="User 3"
                  width={56}
                  height={56}
                />
                <div className="w-14 h-14 object-cover rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                  +2K
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-full md:w-2/5">
          <div className="top">
            <div className="pod w-full mx-auto flex justify-between items-end gap-2">
              {/* 2nd Place */}
              <div
                className="flex flex-col items-center w-1/3"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  src="/assets/img/person/nathan.jpg"
                  className="w-14 h-14 rounded-full border-2 border-leaf-500 mb-2 object-cover"
                  alt="Nathan"
                  width={56}
                  height={56}
                />
                <span className="text-sm font-medium">Nathan</span>
                <div className="vbar h-24 w-full bg-leaf-300 rounded-xl mt-1"></div>
              </div>

              {/* 1st Place */}
              <div
                className="flex flex-col items-center w-1/3"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="40"
              >
                <Image
                  src="/assets/img/person/joey.jpg"
                  className="w-16 h-16 rounded-full border-2 border-leaf-500 mb-2 object-cover"
                  alt="Joey"
                  width={64}
                  height={64}
                />
                <span className="text-sm font-medium">Joey</span>
                <div className="vbar h-36 w-full bg-leaf-600 rounded-xl mt-1"></div>
              </div>

              {/* 3rd Place */}
              <div
                className="flex flex-col items-center w-1/3"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Image
                  src="/assets/img/person/max.jpg"
                  className="w-14 h-14 rounded-full border-2 border-leaf-500 mb-2 object-cover"
                  alt="Max"
                  width={56}
                  height={56}
                />
                <span className="text-sm font-medium">Max</span>
                <div className="vbar h-16 w-full bg-leaf-300 rounded-xl mt-1"></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="table mx-auto w-full md:w- mt-4">
              <div
                className="col p-2 bg-leaf-100 border border-leaf-700 my-2 rounded-xl flex flex-row items-center gap-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="w-8 h-8 font-medium text-lg bg-leaf-700 text-white flex rounded-full">
                  <span className="block m-auto">4</span>
                </div>
                <div className="name text-lg">Andriy Shevchenko</div>
              </div>
              <div
                className="col p-2 bg-leaf-100 border border-leaf-700 my-2 rounded-xl flex flex-row items-center gap-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                <div className="w-8 h-8 font-medium text-lg bg-leaf-700 text-white flex rounded-full">
                  <span className="block m-auto">5</span>
                </div>
                <div className="name text-lg">Andrea Pirlo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="map px-6 sm:px-12 w-full mt-24 my-16"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        {/* SVG Map */}
        <svg
          fill="#187d2b"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="max-h-96 md:max-h-72 mx-auto"
          viewBox="0 0 260 82"
          enableBackground="new 0 0 260 82"
          xmlSpace="preserve"
        >
          <path
            d="M124.786,30.3l1.038-8.14l5.332-0.26l-0.519-2.383l-4.861-3.138l1.133-2.076l-5.12-6.914l-0.236-4.011l-8.376,1.463
	l-0.637,6.135l-4.695,8.801l-4.53,1.321L99.87,19.66l-4.507,0.707L93.57,22.82l-8.352,0.496l-5.215-4.766l-2.312,6.04l1.321,5.686
	l5.592,5.285l1.746,9.084l3.681-0.826l9.06,2.407l2.926-2.006l6.134,1.581l1.888,3.846l7.055-3.35l2.925-6.819l-1.51-3.445
	L124.786,30.3z M101.002,68.098l-1.014-3.303l-5.026-0.661l-5.403-0.944l-0.92,2.431l-8.471-0.213l-3.893-2.902l-6.535-0.401
	l-1.392-0.024l-3.705-0.707l-1.227,3.468l3.516,2.359l0.778,2.195l10.429,1.533l1.793-0.943l6.701,0.802l4.365,1.415l0.543,0.118
	l11.986-0.377l4.247,1.628l2.383-4.341l-6.229,0.094L101.002,68.098z M160.177,79.494l3.634,0.566l3.421-3.751l-0.802-2.855
	L160.177,79.494z M140.924,70.458l-1.463,3.186l10.051-0.236l5.427-1.628l0.873-2.548l-3.657,2.76L140.924,70.458z M164.306,19.163
	l-2.052-2.005l-3.776,3.114l-8.966-0.566l-7.101-1.369l-1.676,3.162l-2.737,0.377l-2.241,8.612l-0.944,6.159l-2.926,4.483
	l1.109,4.199l3.044-0.566l0.92,4.412l-1.25,5.663l2.524,1.722l2.761-1.109l0.448-4.766l-0.637-7.597l3.728-1.817l-0.897,3.445
	l3.634,3.586l5.804,0.661l-1.651-6.229l-4.672-6.158l4.389-3.28l2.265-3.209h-7.15l-2.17,3.162l-5.545-3.846l1.227-6.205
	l5.214-0.189l8.943-0.59l2.666,0.779l4.719-0.732L164.306,19.163z M185.282,14.658l-7.22,2.312l4.152,10.547l0.795-0.636
	l-1.62-5.947l3.94-3.492L185.282,14.658z M175.679,45.188l1.817-3.705l-6.088,0.496l-0.896,2.581L175.679,45.188z M184.463,40.77
	l-0.283,2.761l7.205-0.526l7.204,1.475l-1.628-4.129l-5.577-0.813L184.463,40.77z M122.945,72.298l1.038,3.161l9.249-1.981
	l1.133-2.69l-6.205,0.472L122.945,72.298z M257.74,35.421l-6.771-1.18l-12.6-4.837l-8.069,4.625l-5.238,6.818l-2.831-0.118
	l-1.911-2.784l-2.855-2.524l0.283-5.946l-1.935-3.516l-3.374,0.165l-4.011-1.887l-8.235,3.02l-1.439,3.586l5.356,0.661l5.073,6.654
	l0.118,4.978l3.138,2.029l1.746-2.831l7.527,3.775l6.417,1.392l10.264,3.988l6.63,9.367l1.557,4.506l-1.242,2.728l-0.457-3.86
	l-4.601,1.368l-2.359,4.554l4.742,0.023l2.582-1.879l-0.222,0.487l6.512-0.047l6.111,6.182L258,58.118L257.74,35.421z
	 M63.888,47.288l-2.69-4.46l-4.034-0.377l-3.115-6.607l-5.19-1.25l1.462-5.427l-7.196-2.524l-2.053-3.233l-3.846-1.557l-2.099-2.69
	l-4.224-1.652l-3.232-3.303l-8.14-4.624L14.859,3.26L7.238,3.285L2,1.939l1.392,3.988l5.757,5.403l2.572,0.708l5.073,7.573
	l2.005,0.425l3.775,3.445l2.525,6.913l3.374,1.392l7.786,12.953l14.888,12.293l3.964,3.681l8.069,0.472l-0.306-8.99L63.888,47.288z
	 M114.49,74.372l-4.333-2.917l6.083-0.667l1.417,2.167L114.49,74.372z"
          />
        </svg>
        <div className="data w-4/5 md:w-1/2 mx-auto">
          <h2 className="text-center font-semibold text-3xl lg:text-4xl w-4/5 md:w-4/5 lg:w-3/5 mx-auto mt-6">
            Target Penanaman Tahun 2025
          </h2>
          <p className="text-center font-normal text-lg lg:text-xl w-3/5 mx-auto mt-2">
            738.393 dari 1.000.000
          </p>
          <div className="w-full bg-leaf-300 rounded-full h-4 mt-4">
            <div
              className="bg-leaf-500 h-4 rounded-full"
              style={{ width: "73.788%" }}
            ></div>
          </div>
        </div>
      </section>

      <section className="prediction relative flex flex-col md:flex-row items-center justify-between my-8 mt-28 px-6 sm:px-12 gap-12 py-12 bg-leaf-100">
        {/* Chart */}
        <div className="relative w-full md:w-1/2 lg:w-2/5 h-full flex p-6">
          {/* Chart besar */}
          <div
            className="bg-white rounded-2xl shadow-xl p-4 w-11/12 h-full xl:aspect-video flex mt-3 !transform md:scale-125 xl:scale-100"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src="/assets/img/item/chart.png"
              alt="Chart Besar"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
          {/* Chart kecil */}
          <div
            className="absolute md:top-0 md:right-0 right-10 translate-x-1/4 -translate-y-1/4 !transform scale-75 !md:scale-75 xl:scale-100 bg-white shadow-xl rounded-xl p-4 w-1/2 aspect-video"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="note text-center">
              <h4 className="text-3xl xl:text-4xl font-semibold">65%</h4>
              <p className="text-sm md:text-base font-medium">Meningkat</p>
            </div>
            <div className="legend text-xs mt-2 flex flex-col space-y-1">
              <div className="flex flex-row items-center gap-2">
                <div className="color bg-leaf-200 w-4 h-4 rounded-lg"></div>
                <span>Laju Deforestasi (ha)</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="color bg-leaf-800 w-4 h-4 rounded-lg"></div>
                <span>Laju Reboisasi (ha)</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 md:text-left p-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="chips bg-leaf-500 my-2 text-white px-4 py-1.5 rounded-full max-w-max">
            Prediksi AI
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Laju Reboisasi Memberi Angin Segar bagi Masa Depan
          </h2>

          {/* Fitur */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 bg-leaf-900 text-white !aspect-square rounded-full flex items-center justify-center text-sm"></div>
              <div>
                <p className="font-semibold">Hutan Akan Kembali</p>
                <p className="text-sm text-gray-600">
                  Menyediakan pasokan oksigen dan kehidupan yang lebih bagi masa
                  depan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 bg-leaf-900 text-white rounded-full flex items-center justify-center text-sm"></div>
              <div>
                <p className="font-semibold">Mengurangi Global Warming</p>
                <p className="text-sm text-gray-600">
                  Bumi akan lebih teduh dan iklim akan stabil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 sm:px-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10 w-3/5 lg:w-1/5 mx-auto">
          Dokumentasi Aksi Terbaru
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-4">
          <Image
            src="/assets/img/item/reboisasi_jabar.jpg"
            alt="Event 1"
            width={400}
            height={300}
            className="w-full rounded-lg shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="50"
          />
          <Image
            src="/assets/img/item/reboisasi_unair.jpg"
            alt="Event 2"
            width={400}
            height={300}
            className="w-full rounded-lg shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="50"
          />
          <div
            className="break-inside-avoid bg-white rounded-xl shadow-xl overflow-hidden border"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="50"
          >
            <Image
              src="/assets/img/item/reboisasi_kaltim.jpg"
              alt="Artikel Event"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Perjalan Penanaman Hutan di Kehje Sewen
              </h3>
              <p className="text-sm text-gray-500 mb-2">9 April 2025</p>
              <p className="text-xs lg:text-sm text-gray-700 w-4/5 md:w-full">
                We gathered with volunteers to plant over 500 trees in the local
                park to restore the greenery
              </p>
            </div>
          </div>
          <Image
            src="/assets/img/item/reboisasi_bengkulu.jpg"
            alt="Event 3"
            width={400}
            height={300}
            className="w-full rounded-lg shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="50"
          />
          <Image
            src="/assets/img/item/reboisasi_lembang.jpg"
            alt="Event 4"
            width={400}
            height={300}
            className="w-full rounded-lg shadow-xl"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="50"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
