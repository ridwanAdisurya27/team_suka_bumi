import type { Metadata } from "next";
import "./globals.css";
import "@/public/assets/css/style.css";

export const metadata: Metadata = {
  title: "Resapling",
  description: "Reviving the forest soul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="x-milan"
          content={`{
          "motta": "forza milan",
          "scudetto": "since 1800 total of 19",
        }`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Yesteryear&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.2/dist/aos.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
        <script src="https://unpkg.com/aos@2.3.2/dist/aos.js"></script>
      </head>
      <body className={` antialiased`}>
        {children}
        <script src="/assets/js/core.js"></script>
        <script
          id={"FLAG{f0rz4_lott4_v1nc3ra1_non_t1_lasc3r3m0_m44i}"}
        ></script>
      </body>
    </html>
  );
}
