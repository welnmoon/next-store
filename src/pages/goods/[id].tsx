import GoodDetail from "@/components/GoodDetail";
import Head from "next/head";

//Types
import { GoodType } from "../../../types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps<{
  good: GoodType;
}> = async (context: GetServerSidePropsContext) => {
  if (!context.params?.id) return { notFound: true };

  const { id } = context.params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  if (!data) return { notFound: true };

  return { props: { good: data } };
};

const Good = ({ good }: { good: GoodType }) => {
  return (
    <>
      <Head>
        <title>{good.title}</title>
      </Head>
      <GoodDetail good={good} />
    </>
  );
};

export default Good;
