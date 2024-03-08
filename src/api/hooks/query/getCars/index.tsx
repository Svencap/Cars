import { CarsFromBack, InfiniteQueryResult } from "@/api/types";
import { getCars } from "../../../query";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { Filter } from "@/types";

export const AUTH_OFFERS_QUERY_KEY = "auth_offers";

export default function useGetCars(
  filters: Filter,
  queryOptions = {}
): UseQueryResult<CarsFromBack, unknown> {
  return useQuery(
    [AUTH_OFFERS_QUERY_KEY, filters],
    () => getCars(filters),
    queryOptions
  );
}
