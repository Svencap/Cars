import useGetColorsCars from "@/api/hooks/query/colors/useGetColorsCars";
import useGetModels from "@/api/hooks/query/models/useGetModels";
import Selector from "@/components/UI/Selector";
import useRemoveDuplicates from "@/hooks/useRemoveDuplicates";
import { useSelectorOptions } from "@/hooks/useSelectorOptions";
import { sortByField } from "@/lib";
import { Filter } from "@/types";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

interface CarsFilterProps {
  onChangeFilter: (arg: Filter) => void;
}

export default function CarsFilter({ onChangeFilter }: CarsFilterProps) {
  const [filters, setFilters] = useState<Filter>({
    sort: {
      field: "",
    },
  });
  const { data: colors } = useGetColorsCars();
  const { data: models } = useGetModels();

  const getUniqColors = useRemoveDuplicates(colors?.data || [], "color");
  const getUniqModels = useRemoveDuplicates(models?.data || [], "brand");
  const colorsSelectorOptions = useSelectorOptions(
    getUniqColors,
    "color",
    "color"
  );
  const modelsSelectorOptions = useSelectorOptions(
    getUniqModels,
    "brand",
    "brand"
  );

  function sortBy() {
    return sortByField.map((variant) => ({
      value: variant.text,
      text: variant.id,
      props: {
        onClick: () => {
          setFilters((prev) => ({
            ...prev,
            sort: {
              field: variant.field,
              sort: variant.text,
            },
          }));
        },
      },
    }));
  }

  const sortByYearSelectorOptions = sortBy();

  function filterChangeHandler(key: string, newValue: string) {
    setFilters((prev) => ({
      ...prev,
      [key]: newValue,
      offset: 0,
    }));
  }

  useEffect(() => {
    onChangeFilter(filters);
  }, [filters]);

  return (
    <Stack direction="row" gap="20px">
      <Selector
        variants={sortByYearSelectorOptions}
        label="Сортировка"
      />
      <Selector
        variants={[{ text: "Любой", value: "Любой" }, ...modelsSelectorOptions]}
        label="Марка авто"
        onChange={(val) => filterChangeHandler("brand", val)}
      />
      <Selector
        variants={[{ text: "Любой", value: "Любой" }, ...colorsSelectorOptions]}
        label="Цвет"
        onChange={(val) => filterChangeHandler("color", val)}
      />
    </Stack>
  );
}
