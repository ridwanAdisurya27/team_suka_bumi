"use client";

import { Component, useState } from "react";
import Root from "../../components/Root";
import Nathan from "@/public/assets/img/person/nathan.jpg"

function MediaSosial(){
    let [socialMediaUrl, setSocialMediaUrl] = useState("https://");
    return(
        <>
            <fieldset className="fieldset">
                        <legend className="fieldset-legend">Media Sosial</legend>
                        <input className="input w-full" type="url" required placeholder="https://" value={socialMediaUrl}
                            onChange={(e)=> setSocialMediaUrl(e.target.value)}
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
            </fieldset>
        </>
    )
}

export default function Profile (){
    const [isLoading, setIsLoading] = useState(false);

    const [isPhoneNumber, setIsPhoneNumber] = useState(false);

    const handlePhoneNumberChange = (event: React.ChangeEvent < HTMLInputElement > ) => {
        const value = event.target.value;
        if (value.length < 10) {
            setIsPhoneNumber(true);
        } else {
            setIsPhoneNumber(false);
        }
    };

    async function handleSubmit(event: React.FormEvent < HTMLFormElement > ) {
        event.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        alert("Application submitted successfully! We will review your documents.");
    }
  return (
        <>
              <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profil</h1>
      </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bx bxs-user text-leaf-500"></i> Detail Pribadi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="e.g. Yayasan Hijau Indonesia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="+62 812 3456 7890"
                  onChange={handlePhoneNumberChange}
                />
                {isPhoneNumber && (
                  <p className="text-red-500 text-sm mt-1">Nomor telepon harus memiliki minimal 10 angka</p>
                )}
              </div>
              <div className="md:col-span-2">
            
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />
          {/* Organization Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bx bxs-building-house text-leaf-500"></i> Detail Yayasan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Yayasan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="e.g. Yayasan Hijau Indonesia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="+62 812 3456 7890"
                  onChange={handlePhoneNumberChange}
                />
                {isPhoneNumber && (
                  <p className="text-red-500 text-sm mt-1">Nomor telepon harus memiliki minimal 10 angka</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="contact@foundation.org"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NPWP <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="Nomor Pokok Wajib Pajak"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Media Sosial <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-leaf-500 outline-none transition-all"
                  placeholder="https://"
                />
              </div>
            </div>
          </div>
          <hr className="border-gray-100" />

          {/* Document Uploads */}
     

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-leaf-600 hover:bg-leaf-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <i className="bx bx-loader-alt bx-spin"></i> Submitting...
                </>
              ) : (
                <>
                  Submit Application <i className="bx bx-send"></i>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
        </>
    );
}
