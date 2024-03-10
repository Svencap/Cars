import { CarsFromBack, ColorsCarsFromBack, ColorsModelsFromBack, InfiniteQueryResult } from "@/api/types";
import { getCars, getColorCars, getModelsCars } from "../../../query";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { Filter } from "@/types";

export const CARS_MODELS_KEY = "model_cars";

export default function useGetModels(
  queryOptions = {}
): UseQueryResult<ColorsModelsFromBack, unknown> {
  return useQuery([CARS_MODELS_KEY], () => getModelsCars(), queryOptions);
}