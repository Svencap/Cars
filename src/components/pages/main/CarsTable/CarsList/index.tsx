import { CarOnFront } from "@/types";
import { useMemo } from "react";
import CarCard from "./CarCard";
import { Stack } from "@mui/material";
import SkeletonList from "../SkeletonList";

interface CarsListProps {
  cars: CarOnFront[];
  isLoading: boolean;
}

export default function CarsList({ cars, isLoading }: CarsListProps) {
  const memoCars = useMemo(() => {
    return cars.map((currentCar, idx) => (
      <CarCard key={idx} car={currentCar} />
    ));
  }, [cars]);

  return isLoading ? (
    <SkeletonList />
  ) : (
    <Stack direction="row" gap="20px" flexWrap="wrap" mt="20px">
      {memoCars}
    </Stack>
  );
}
