import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
export interface variant<T> {
  value: T;
  text: ReactNode;
  props?: any;
}

export interface SelectorProps<T> {
  label?: string;
  labelVariant?: any;
  variants: variant<T>[];
  onChange?: (val: T | string) => void;
  defaultValue?: T;
  [x: string]: any;
}

const CustomSelector = styled(Select)(({ theme }) => ({
  "&.MuiOutlinedInput-root": {
    fontSize: "16px",
    height: "56px",
    // backgroundColor: 'red',
    "&:hover fieldset": {
        borderColor: "black",
    },
    "& fieldset": {
      borderColor: "black",
    },
    "&.Mui-hover fieldset": {
      border: "1px solid",
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid",
      borderColor: "black",
    },
    // "&.Mui-error fieldset": {
    //   border: "1px solid",
    //   borderColor: theme.palette.subcolors.red,
    // },
  },
}));

const CustomLabel = styled(InputLabel)(({}) => ({
  "&.MuiInputLabel-root": {
    color: "black",
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&.MuiMenuItem-root": {
    minHeight: "48px",
    "&.Mui-disabled": {
      height: "32px",
      minHeight: "0px",
    },
    // "&[aria-selected=true]": {
    //   backgroundColor: theme.palette.brand.brand99,
    // },
    // "&:hover": {
    //   backgroundColor: theme.palette.brand.brand92,
    // },
  },
}));

function Selector<T extends string>({
  label,
  labelVariant,
  variants,
  onChange,
  defaultValue,
  ...rest
}: SelectorProps<T>) {
  const [value, setValue] = useState(defaultValue || "");
  const labelIsInner = labelVariant === "inner";

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <FormControl fullWidth>
      <CustomLabel id="demo-simple-select-helper-label">{label}</CustomLabel>
      <CustomSelector
        label={label}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiSelect-select": {
            padding: labelIsInner ? "26.5px 14px 10px 14px" : "16.5px 14px",
          },
        }}
        {...rest}
      >
        {variants.length > 0 ? (
          variants.map((variant, idx) => (
            <CustomMenuItem key={idx} value={variant.value} {...variant.props}>
              {variant.text}
            </CustomMenuItem>
          ))
        ) : (
          <CustomMenuItem disabled>Нет опций</CustomMenuItem>
        )}
      </CustomSelector>
    </FormControl>
  );
}

export default Selector;
