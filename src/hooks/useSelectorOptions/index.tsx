import { useMemo } from "react";

export function useSelectorOptions(
  array: any[],
  keyForValue: string,
  keyForText: string
) {
  return useMemo(() => {
    return array.map((item) => ({
      value: item[keyForValue],
      text: item[keyForText],
    }));
  }, [array]);
}
