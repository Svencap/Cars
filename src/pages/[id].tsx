import { prefetchDetailCar } from "@/api/hooks/query/cars/useGetDetailCar";
import DetailInfoPage from "@/components/pages/detail";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export default function DetailPage() {
  return <DetailInfoPage />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { id } = context.query;
  try {
    await prefetchDetailCar(queryClient, id as string);
  } catch (err) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
