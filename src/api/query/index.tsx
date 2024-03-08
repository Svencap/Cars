import { getPagination } from "@/helpers";
import { instance } from "..";
import { CarsFromBack, InfiniteQueryResult } from "../types";
import { Filter } from "@/types";

export const getCars = async (filter: Filter): Promise<CarsFromBack> => {
  try {
    const { data } = await instance.post<CarsFromBack>("/cars", filter);
    return data;
  } catch (error) {
    throw error;
  }
};
