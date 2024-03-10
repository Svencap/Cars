import { ChangeEvent, useEffect, useState } from "react";
import { Pagination, styled } from "@mui/material";

const CustomPaginator = styled(Pagination)(({ theme }) => ({
  "& .MuiButtonBase-root": {
    "&.Mui-selected ": {
      backgroundColor: "inherit",
      textDecoration: "underline",
    },
    "&:hover": {
      color: theme.palette.dark.grey100,
      backgroundColor: theme.palette.subcolors.green_hover,
    },
  },
}));

export interface PaginatorProps {
  pageSize: number;
  itemCount: number;
  onChange: (page: number, pageSize: number) => void;
}

function Paginator({ pageSize, itemCount, onChange }: PaginatorProps) {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const count = Math.ceil(itemCount / pageSize);

  useEffect(() => {
    onChange(page, pageSize);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [itemCount]);

  return (
    <CustomPaginator
      count={count}
      page={page}
      onChange={handleChange}
      siblingCount={0}
      sx={{
        display: itemCount > 0 ? "block" : "none",
      }}
    />
  );
}

export default Paginator;
