import { ChangeEvent, useEffect, useState } from "react";
import { Pagination, styled } from "@mui/material";
// import { scroller } from 'react-scroll'

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
  scrollTarget?: string;
}

function Paginator({
  pageSize,
  itemCount,
  onChange,
  scrollTarget,
}: PaginatorProps) {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (scrollTarget) {
      //   scroller.scrollTo(scrollTarget, {
      //     smooth: true,
      //     duration: 1000,
      //     offset: -80,
      //   })
    }
  };
  const count = Math.ceil(itemCount / pageSize);
  //   const isLargerThan576 = useResolutionWatcher(576)
  //   const siblingCount = isLargerThan576 ? 1 : 0

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
