import { instance } from "..";
import {
  CarsFromBack,
  ColorsCarsFromBack,
  ColorsModelsFromBack,
  InfiniteQueryResult,
} from "../types";
import { Filter } from "@/types";

export const getCars = async ({
  color,
  brand,
  sort,
  limit,
  offset,
}: Filter): Promise<CarsFromBack> => {
  const filters: { [key: string]: any } = {
    offset,
    limit,
  };
  if (color && color !== "Любой") {
    filters.color = color;
  }
  if (brand && brand !== "Любой") {
    filters.brand = brand;
  }
  if (sort && sort.field) {
    filters.sort = {
      sort: sort.sort,
      field: sort.field,
    }
  }
  // if (sortByYear && sortByYear !== "Любой") {
  //   filters.sortByYear = sortByYear;
  // }

  try {
    const { data } = await instance.post<CarsFromBack>("/cars", filters);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getColorCars = async (): Promise<ColorsCarsFromBack> => {
  try {
    const { data } = await instance.get<ColorsCarsFromBack>("/cars/colors");
    return data;
  } catch (error) {
    throw error;
  }
};

export const getModelsCars = async (): Promise<ColorsModelsFromBack> => {
  try {
    const { data } = await instance.get<ColorsModelsFromBack>("/cars/models");
    return data;
  } catch (error) {
    throw error;
  }
};
