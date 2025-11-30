"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-leaf-975 rounded-t-xl">
      <div className="mx-auto w-full py-6 lg:py-8 sm:px-12 px-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 xs:w-full md:w-1/3">
            <Link href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white relogo">
                Resapling
              </span>
            </Link>
            <p className="text-gray-200 text-xs mt-5 xs:w-2/3 md:w-4/5">
              Resapling adalah sebuah lembaga swadaya yang berfokus pada riset
              dan aksi mengenai lingkungan, membawa mimpi besar untuk melihat
              alam kembali hijau
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm uppercase text-white">Studi</h2>
              <ul className="text-leaf-100">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Arsip
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm uppercase text-white">Follow</h2>
              <ul className="text-leaf-100">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm uppercase text-white">Legal</h2>
              <ul className="text-leaf-100">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Perizinan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Panduan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link href="#" className="hover:underline">
              Resapling
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
