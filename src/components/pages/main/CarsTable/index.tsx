import Container from "@/components/UI/Container";
import { Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CarCard from "./CarsList/CarCard";
import CarsPaginator from "./CarsPaginator";
import CarsFilter from "./CarsFilter";
import useGetCars from "../../../../api/hooks/query/cars/useGetCars";
import { CarOnFront, Filter } from "@/types";
import { CarsFromBack } from "@/api/types";
import CarsList from "./CarsList";

export default function CarsTable() {
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState<Filter>({
    limit: 9,
    offset: 0,
    color: "Любой",
    brand: "Любой",
  });
  const { data, isLoading } = useGetCars(filters, {
    onSuccess: (data: CarsFromBack) => {
      const totalCount = data.totalCount ?? 0;
      setTotalCount(totalCount);
    },
  });

  function paginatorHandler(page: number, pageSize: number) {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    setFilters((prev) => ({ ...prev, offset, limit }));
  }

  function onChangeFilter(filters: Filter) {
    setFilters((prev) => ({ ...prev, ...filters }));
  }

  return (
    <Container>
      <CarsFilter onChangeFilter={onChangeFilter} />
      <CarsList cars={data?.data || []} isLoading={isLoading} />
      <CarsPaginator
        onPagination={paginatorHandler}
        pageSize={filters.limit || 9}
        totalCount={totalCount}
        scrollTarget=""
      />
    </Container>
  );
}
