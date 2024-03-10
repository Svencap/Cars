import Paginator from "@/components/UI/Paginator";
import { Stack, Typography } from "@mui/material";

interface CarsPaginatorProps {
  pageSize: number;
  totalCount: number;
  onPagination: (page: number, pageSize: number) => void;
}

export default function CarsPaginator({
  pageSize,
  totalCount,
  onPagination,
}: CarsPaginatorProps) {
  return (
    <>
      {totalCount > pageSize && (
        <Stack alignItems="center" mt="24px">
          <Paginator
            pageSize={pageSize}
            itemCount={totalCount}
            onChange={onPagination}
          />
        </Stack>
      )}
    </>
  );
}
