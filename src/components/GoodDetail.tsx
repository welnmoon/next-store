import Image from "next/image";
import { GoodType } from "../../types";

const GoodDetail = ({ good }: { good: GoodType }) => {
  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <Image
        src={good.image || "/notFoundImg.webp"}
        alt={good.title || "Not found"}
        width={300}
        height={300}
        className="rounded-xl object-contain mx-auto"
        priority
      />
      <h1 className="text-xl font-semibold mt-4">{good.title}</h1>
    </div>
  );
};

export default GoodDetail;
