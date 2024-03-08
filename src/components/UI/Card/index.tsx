import { Card, styled } from "@mui/material";
import { ReactNode } from "react";

const CustomizeCard = styled(Card)(({}) => ({}));

interface CustomCardProps {
  children: ReactNode;
  [key: string]: any
}

export default function CustomCard({ children, ...rest }: CustomCardProps) {
  return <CustomizeCard {...rest}>{children}</CustomizeCard>;
}
