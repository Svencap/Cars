import { CarOnFront } from "@/types";

export type CarsFromBack = {
  data: CarOnFront[];
  totalCount: number;
};

export type CarFromBack = {
  data: CarOnFront;
};

export type ColorsCarsFromBack = {
  data: Array<{ color: string; readbleId: number }>;
};

export type ColorsModelsFromBack = {
  data: Array<{ brand: string; readbleId: number }>;
};
