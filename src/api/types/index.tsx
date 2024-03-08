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
