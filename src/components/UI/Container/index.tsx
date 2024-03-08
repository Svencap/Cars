import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  [key: string]: any;
}

const CustomContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "20px 0",
  margin: "0 auto",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1240px",
  },
}));

export default function Container({ children, ...rest }: ContainerProps) {
  return <CustomContainer {...rest}>{children}</CustomContainer>;
}
