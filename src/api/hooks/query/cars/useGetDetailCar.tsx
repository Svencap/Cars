import { CarFromBack } from "@/api/types";
import { getDetailCar } from "../../../query";
import { QueryClient, useQuery, UseQueryResult } from "@tanstack/react-query";

export const DETAIL_CAR_KEY = "detail_car_key";

export default function useGetDetailCar(
  id: string,
  queryOptions = {}
): UseQueryResult<CarFromBack, unknown> {
  return useQuery([DETAIL_CAR_KEY, id], () => getDetailCar(id), queryOptions);
}

export async function prefetchDetailCar(queryClient: QueryClient, id: string) {
  const queryKeys = [DETAIL_CAR_KEY, id];
  return queryClient.fetchQuery(queryKeys, () => getDetailCar(id));
}
