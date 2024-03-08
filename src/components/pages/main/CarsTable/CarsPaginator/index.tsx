import Paginator from "@/components/UI/Paginator";
import { Stack, Typography } from "@mui/material";

interface CarsPaginatorProps {
  pageSize: number;
  totalCount: number;
  onPagination: (page: number, pageSize: number) => void;
  scrollTarget: string;
}

export default function CarsPaginator({
  pageSize,
  totalCount,
  onPagination,
  scrollTarget,
}: CarsPaginatorProps) {
  return (
    <>
      {totalCount > pageSize && (
        <Stack alignItems="center" mt="24px">
          <Paginator
            scrollTarget={scrollTarget}
            pageSize={pageSize}
            itemCount={totalCount}
            onChange={onPagination}
          />
        </Stack>
      )}
    </>
  );
}
