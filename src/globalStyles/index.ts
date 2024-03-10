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
    grey0: "#000000",
  },
  subcolors: {
    green_hover: "#15892C",
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
  h3: {
    fontSize: "22px",
    fontWeight: 700,
    fontFamily: "IBM Plex Sans",
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
      ],
    },
  },
});
