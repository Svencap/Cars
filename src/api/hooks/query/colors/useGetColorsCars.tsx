import { CarsFromBack, ColorsCarsFromBack, InfiniteQueryResult } from "@/api/types";
import { getCars, getColorCars } from "../../../query";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { Filter } from "@/types";

export const COLORS_QUERY_KEY = "colors_cars";

export default function useGetColorsCars(
  queryOptions = {}
): UseQueryResult<ColorsCarsFromBack, unknown> {
  return useQuery([COLORS_QUERY_KEY], () => getColorCars(), queryOptions);
}
