import { CarsFromBack, InfiniteQueryResult } from "@/api/types";
import { getCars } from "../../../query";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { Filter } from "@/types";

export const CARS_KEY = "cars_key";

export default function useGetCars(
  filters: Filter,
  queryOptions = {}
): UseQueryResult<CarsFromBack, unknown> {
  return useQuery(
    [CARS_KEY, filters],
    () => getCars(filters),
    queryOptions
  );
}
