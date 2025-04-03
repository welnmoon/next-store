import Image from "next/image";
import NotFoundImg from "../../public/notFoundImg.webp";
import Link from "next/link";
import { GoodType } from "../../types";

const GoodCard = ({ id, title, image }: GoodType) => {
  const src = image || NotFoundImg;

  return (
    <li className="w-44 bg-red-50 rounded-2xl p-4 shadow-md hover:scale-105 transition-transform">
      <div className="relative w-full aspect-square">
        <Image
          src={src}
          alt={title || "Not found"}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <Link href={`/goods/${id}`}>
        <p className="mt-3 text-center text-sm font-light">{title}</p>
      </Link>
    </li>
  );
};

export default GoodCard;
