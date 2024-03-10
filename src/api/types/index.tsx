import { CarOnFront } from "@/types";

export type CarsFromBack = {
  data: CarOnFront[];
  totalCount: number;
};

export type InfiniteQueryResult<T> = {
  data: T;
  nextPage: number;
  limit: number;
};

export type ColorsCarsFromBack = {
  data: Array<{ color: string; readbleId: number }>;
};

export type ColorsModelsFromBack = {
  data: Array<{ brand: string; readbleId: number }>;
};
