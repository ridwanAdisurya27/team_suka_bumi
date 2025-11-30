"use client";
import Image from "next/image";

interface JumbotronProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  height?: string;
  overlayOpacity?: number;
  padding?: string;
}

export default function Jumbotron({
  title,
  imageUrl,
  imageAlt = "Background image",
  height = "h-[60vh] md:h-[80vh]",
  overlayOpacity = 80,
  padding = "px-6 sm:px-12",
}: JumbotronProps) {
  return (
    <section
      className={`jumbo my-4 sm:my-8 w-full ${height} relative flex justify-center items-center ${padding}`}
    >
      <div
        className="background bg-leaf-700 inset-0 absolute w-full h-full rounded-xl z-40"
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={200}
        className="object-cover rounded-xl absolute z-10 w-full h-full"
        priority
      />
      <h1
        className="font-bold text-white text-4xl md:text-5xl w-3/4 sm:w-1/2 md:w-2/5 absolute z-50 transform m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {title}
      </h1>
    </section>
  );
}
