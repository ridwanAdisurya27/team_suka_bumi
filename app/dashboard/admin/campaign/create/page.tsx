"use client";
import styles from "./create.module.css";
import Root from "@/app/dashboard/components/Root";
import { useEffect, useRef, useState } from "react";

export default function Campaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    target_donation: "",
    poster_image: null as File | null,
  });

  const quillRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        if ((window as any).Quill && document.querySelector("#editor")) {
          quillRef.current = new (window as any).Quill("#editor", {
            theme: "snow",
          });

          // Set initial content to formData
          quillRef.current.on("text-change", () => {
            const content = quillRef.current.root.innerHTML;
            setFormData((prev) => ({
              ...prev,
              description: content,
            }));
          });

          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fieldName = e.target.name;

    console.log(`🔄 File change for ${fieldName}:`, file);

    if (file) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: file,
      }));
      console.log(
        `✅ File set in formData: ${fieldName}`,
        file.name,
        file.size
      );
    } else {
      console.log(`❌ No file selected for ${fieldName}`);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("=== DEBUG CAMPAIGN FORM DATA BEFORE SUBMIT ===");

      const submitFormData = new FormData();
      let fileCount = 0;
      let textCount = 0;

      // Tambahkan data teks dan file
      Object.entries(formData).forEach(([key, value]) => {
        if (
          value &&
          typeof value === "object" &&
          "name" in value &&
          "size" in value &&
          "type" in value
        ) {
          // Type assertion untuk File
          const file = value as File;
          console.log(`📁 Adding FILE: ${key}`, file.name, file.size);
          submitFormData.append(key, file);
          fileCount++;
        } else if (value !== null && value !== undefined && value !== "") {
          console.log(`📝 Adding TEXT: ${key}`, value);
          submitFormData.append(key, value.toString());
          textCount++;
        }
      });

      console.log(
        `=== SUMMARY: ${textCount} text fields, ${fileCount} files ===`
      );

      // Debug FormData contents
      console.log("=== FORM DATA CONTENTS ===");
      for (let [key, value] of submitFormData.entries()) {
        console.log(
          `${key}:`,
          value instanceof File
            ? `File: ${value.name} (${value.size} bytes)`
            : value
        );
      }

      const response = await fetch("/api/campaign", {
        method: "POST",
        body: submitFormData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Campaign berhasil dibuat!");

        // Reset form setelah sukses
        setFormData({
          title: "",
          description: "",
          start_date: "",
          end_date: "",
          target_donation: "",
          poster_image: null,
        });

        // Reset Quill editor
        if (quillRef.current) {
          quillRef.current.root.innerHTML = `
            <p>Hello World!</p>
            <p>Some initial <strong>bold</strong> text</p>
            <p><br></p>
          `;
        }
      } else {
        const errorText = await response.text();
        console.error("Server error:", response.status, errorText);
        throw new Error(
          `Failed to create campaign: ${response.status} ${errorText}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Terjadi kesalahan saat membuat campaign: " + (error as Error).message
      );
    }
  };

  return (
    <Root show={true}>
      <div className="flex justify-between items-center border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Buat Campaign</h2>
      </div>

      <div className="w-full h-screen bg-leaf-50 flex flex-col gap-4">
        <div className="bg-gray-100 max-w-7xl rounded-lg shadow-lg flex">
          {/* Main Content Form */}
          <form
            className="flex-1 p-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Basic Info Fields */}
            <div className="grid grid-cols-1 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Judul Campaign</legend>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Masukkan judul campaign"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </fieldset>
            </div>

            {/* Deskripsi Campaign dengan Quill */}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Deskripsi Campaign</legend>
                <div id="editor">
                  <p>Hello World!</p>
                  <p>
                    Some initial <strong>bold</strong> text
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </fieldset>
            </div>

            {/* Yayasan Info */}
            <div className="grid grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Tanggal Mulai</legend>
                <input
                  type="date"
                  name="start_date"
                  className="input w-full"
                  placeholder="Pilih tanggal mulai"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Tanggal Selesai</legend>
                <input
                  type="date"
                  name="end_date"
                  className="input w-full"
                  placeholder="Pilih tanggal selesai"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Target Donasi</legend>
                <input
                  type="number"
                  name="target_donation"
                  className="input w-full"
                  placeholder="Masukkan target donasi"
                  value={formData.target_donation}
                  onChange={handleInputChange}
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gambar Poster</legend>
                <input
                  type="file"
                  name="poster_image"
                  className="file-input w-full"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </fieldset>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full btn btn-success !text-white"
              onClick={handleSubmit}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 1V2.5L2 6V5H0V11H2V10L4.11255 10.6162C4.0391 10.8985 4 11.1947 4 11.5C4 13.433 5.567 15 7.5 15C9.05764 15 10.3776 13.9825 10.8315 12.5759L14 13.5V15H16V1H14ZM6.0349 11.1768L8.90919 12.0152C8.69905 12.5898 8.14742 13 7.5 13C6.67157 13 6 12.3284 6 11.5C6 11.3891 6.01204 11.2809 6.0349 11.1768Z"
                  fill="#ffffff"
                />
              </svg>
              Sebarkan!
            </button>
          </form>
        </div>
      </div>
    </Root>
  );
}
