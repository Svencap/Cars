import Selector from "@/components/UI/Selector";
import { Stack } from "@mui/material";

export default function CarsFilter() {
  return (
    <Stack direction="row" gap="20px">
      <Selector variants={[]} label="Год выпуска"/>
      <Selector variants={[]} label="Цена"/>
      <Selector variants={[]} label="Марка авто"/>
      <Selector variants={[]} label="Цвет"/>
    </Stack>
  );
}
