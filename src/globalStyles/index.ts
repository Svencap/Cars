import { createTheme } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0,
    xs1: 360,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
};

const palette = {
  primary: {
    main: "#FFFFFF",
    bg: "#F4F1E8",
    dark: "#000000",
    light: "#E3E3E3",
    border: "#E6E6E6",
    grey20: "#333333",
    grey50: "#808080",
  },
  secondary: {
    main: "#FAFAFA",
    dark: "#A3A3A3",
    border: "#E7E7E7",
  },
  brand: {
    main: "#FCFBF8",
    brand99: "#FCFBF8",
    brand98: "#F9F7F1",
    brand92: "#F2EEE3",
    brand90: "#EFEADD",
    brand87: "#EEE4D4",
    brand85: "#E7E0CB",
    brand80: "#DDD3B6",
    brand50: "#AF9650",
    brand25: "#A5A092",
    brand20: "#8E8775",
    brand0: "#806F6B",
  },
  dark: {
    main: "#000000",
    grey100: "#FFFFFF",
    grey61: "#ECEBE9",
    grey60: "#BFBFBF",
    grey55: "#9C9C9C",
    grey40: "#666666",
    grey25: "#2B2615",
    grey20: "#333333",
    grey0: "#000000",
  },
  subcolors: {
    main: "#FFFFFF",
    green_bg: "#85D877",
    green: "#189F33",
    green_hover: "#15892C",
    green_lite: "#E7EFDD",
    red_bg: "#FF3D00",
    red: "#FE6476",
    red_hover: "#E53700",
    yellow: "#F5B000",
    yellow_lite: "#FFF5DB",
    orange: "#F59C00",
    blue: "#2771FF",
    purple: "#8C28F0",
    error: "#FE6476",
    light_blue: "#38A4E3",
  },
};

const typography = {
  fontFamily: [
    "IBM Plex Sans",
    "PT Sans",
    "PT Serif",
    "Roboto",
    "Arial",
    "sans-serif",
  ].join(","),
  h1: {
    fontSize: "38px",
    fontWeight: 700,
    fontFamily: "PT Serif",
  },
  h2: {
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "PT Serif",
  },
  h3: {
    fontSize: "22px",
    fontWeight: 700,
    fontFamily: "IBM Plex Sans",
  },
  h4: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "IBM Plex Sans",
  },
  h4_bold: {
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "IBM Plex Sans",
  },
  subhead_1: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontSize: "20px",
  },
  subhead_2: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontSize: "18px",
  },
  body_large: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontSize: "16px",
  },
  body_large_sb: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 600,
    fontSize: "16px",
  },
  body_small: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontSize: "14px",
  },
  body_small_md: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 500,
    fontSize: "14px",
  },
  body_small_bd: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 700,
    fontSize: "14px",
  },
  body_micro: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 400,
    fontSize: "12px",
  },
  body_micro_sb: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 600,
    fontSize: "12px",
  },
};

export let theme = createTheme({
  breakpoints,
  palette,
  typography,
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IBM Plex Sans",
          fontWeight: 500,
          textTransform: "none",
          fontSize: "18px",
        },
      },
      variants: [
        {
          props: { variant: "dark" },
          style: {
            minHeight: "56px",
            backgroundColor: theme.palette.dark.grey0,
            color: theme.palette.primary.main,
            "&.Mui-disabled": {
              backgroundColor: theme.palette.dark.grey61,
            },
            "&:hover": {
              backgroundColor: theme.palette.dark.grey0,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "dark_small" },
          style: {
            maxHeight: "32px",
            fontSize: "14px",
            backgroundColor: theme.palette.dark.grey0,
            color: theme.palette.primary.main,
            "&.Mui-disabled": {
              backgroundColor: theme.palette.dark.grey61,
            },
            "&:hover": {
              backgroundColor: theme.palette.dark.grey0,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "transparent" },
          style: {
            minHeight: "56px",
            backgroundColor: "transparent",
            color: theme.palette.dark.grey0,
            border: "1px solid ",
            borderColor: theme.palette.dark.grey40,
          },
        },
        {
          props: { variant: "transparent_small" },
          style: {
            maxHeight: "32px",
            fontSize: "14px",
            backgroundColor: "transparent",
            color: theme.palette.dark.grey0,
            border: "1px solid",
            borderColor: theme.palette.dark.grey40,
          },
        },
        {
          props: { variant: "grey" },
          style: {
            backgroundColor: "#EBEBEB",
            color: "#333333",
            "&:hover": {
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "green" },
          style: {
            backgroundColor: theme.palette.subcolors.green,
            color: theme.palette.primary.main,
            minHeight: "56px",
            "&:hover": {
              backgroundColor: theme.palette.subcolors.green,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "green_small" },
          style: {
            maxHeight: "32px",
            fontSize: "14px",
            backgroundColor: theme.palette.subcolors.green,
            color: theme.palette.primary.main,
            "&.Mui-disabled": {
              backgroundColor: theme.palette.dark.grey61,
            },
            "&:hover": {
              backgroundColor: theme.palette.subcolors.green,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "red" },
          style: {
            backgroundColor: theme.palette.subcolors.red,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.subcolors.red,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "red_small" },
          style: {
            maxHeight: "32px",
            fontSize: "14px",
            backgroundColor: theme.palette.subcolors.red,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.subcolors.red,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "brown" },
          style: {
            backgroundColor: theme.palette.brand.brand80,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.dark.grey0,
              opacity: "0.6",
            },
          },
        },
        {
          props: { variant: "brown_small" },
          style: {
            maxHeight: "32px",
            fontSize: "14px",
            backgroundColor: theme.palette.brand.brand80,
            color: theme.palette.dark.grey0,
            "&:hover": {
              backgroundColor: theme.palette.brand.brand80,
              opacity: "0.6",
            },
          },
        },
      ],
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          "& .MuiBadge-badge": {
            minWidth: "0px",
            padding: "0px",
            right: "17%",
            bottom: "17%",
          },
        },
      },
      variants: [
        {
          props: { variant: "small" },
          style: {
            "& .MuiBadge-badge": {
              width: "10px",
              height: "10px",
            },
          },
        },
        {
          props: { variant: "big" },
          style: {
            "& .MuiBadge-badge": {
              width: "14px",
              height: "14px",
            },
          },
        },
      ],
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderBottom: "1px solid",
          borderColor: theme.palette.secondary.border,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0px",
          maxHeight: "400px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: theme.palette.subcolors.red,
          },
        },
      },
    },
  },
});
