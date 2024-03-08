import Container from "@/components/UI/Container";
import { Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import CarCard from "./CarsList/CarCard";
import CarsPaginator from "./CarsPaginator";

export default function CarsTable() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const cars = useMemo(() => {
    return array.map((item) => <CarCard car="" key={item} />);
  }, [array]);
  return (
    <Container>
      <Stack
        direction="row"
        gap="20px"
        flexWrap="wrap"
        px="20px"
        justifyContent="center"
      >
        {cars}
      </Stack>
      <CarsPaginator
        onPagination={() => {}}
        pageSize={1}
        totalCount={10}
        scrollTarget=""
      />
    </Container>
  );
}
