import GoodCard from "@/components/GoodCard";
import Head from "next/head";
import { GoodType, GoodsType } from "../../../types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/goods`);
  const data = await response.json();

  if (!data) return { notFound: true };

  return {
    props: {
      goods: data,
    },
  };
};

const Goods = ({ goods }: GoodsType) => {
  return (
    <>
      <Head>
        <title>Goods</title>
      </Head>
      <h1 className="text-3xl text-center mt-6">Goods</h1>
      <ul className="flex flex-wrap justify-center gap-4 p-4">
        {goods.map((good) => (
          <GoodCard
            key={good.id}
            id={good.id}
            title={good.title}
            image={good.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Goods;
