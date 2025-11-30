import Image from "next/image";
import Link from "next/link";

interface DonationCardProps {
  image: string;
  title: string;
  description: string;
  current: string;
  target: string;
  progress: number;
  deadline: string;
}

export default function DonationCard({
  image,
  title,
  description,
  current,
  target,
  progress,
  deadline,
}: DonationCardProps) {
  return (
    <Link href={"/campaign/charity"}>
      <div
        className="card bg-white rounded-xl shadow-md overflow-hidden"
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="mt-4 p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="title text-gray-600 text-sm mt-2">{description}</p>

          <p className="target text-sm mt-3">
            {current} <span className="text-gray-500">Target {target}</span>
          </p>

          <div className="progress bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="full bg-leaf-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="deadline text-sm text-gray-500 mt-2">{deadline}</p>
        </div>
      </div>
    </Link>
  );
}
