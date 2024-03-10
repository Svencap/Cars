import React from "react";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dark: true;
    dark_small: true;
    transparent_small: true;
    transparent: true;
    grey: true;
    green: true;
    green_small: true;
    red: true;
    red_small: true;
    brown: true;
    brown_small: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsVariantOverrides {
    big: true;
    small: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    brand: Palette["primary"];
    dark: Palette["primary"];
    subcolors: Palette["primary"];
  }
  interface PaletteOptions {
    brand: PaletteOptions["primary"];
  }
  interface PaletteColor {
    green_bg?: string;
    green?: string;
    yellow_lite?: string;
    green_hover?: string;
    green_lite?: string;
    red_bg?: string;
    red?: string;
    red_hover?: string;
    yellow?: string;
    orange?: string;
    blue?: string;
    light_blue?: string;
    purple?: string;
    error?: string;
    verify?: string;
    online?: string;
    offline?: string;
    new_message?: string;
    dark: string;
    light: string;
    border?: string;
    grey50?: string;
    bg?: string;
    brand99?: string;
    brand98?: string;
    brand92?: string;
    brand90?: string;
    brand85?: string;
    brand80?: string;
    brand50?: string;
    brand25?: string;
    brand20?: string;
    brand0?: string;
    grey100?: string;
    grey61?: string;
    grey60?: string;
    grey55?: string;
    grey40?: string;
    grey25?: string;
    grey20?: string;
    grey0?: string;
  }
  interface SimplePaletteColorOptions {
    green_bg?: string;
    green?: string;
    green_hover?: string;
    green_lite?: string;
    red_bg?: string;
    red?: string;
    yellow_lite?: string;
    red_hover?: string;
    yellow?: string;
    orange?: string;
    blue?: string;
    light_blue?: string;
    purple?: string;
    error?: string;
    dark?: string;
    light?: string;
    border?: string;
    grey50?: string;
    bg?: string;
    brand99?: string;
    brand92?: string;
    brand90?: string;
    brand85?: string;
    brand80?: string;
    brand50?: string;
    brand25?: string;
    brand20?: string;
    brand0?: string;
    grey100?: string;
    grey61?: string;
    grey60?: string;
    grey55?: string;
    grey40?: string;
    grey25?: string;
    grey20?: string;
    grey0?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4_bold: true;
    subhead_1: true;
    subhead_2: true;
    body_large: true;
    body_large_sb: true;
    body_small: true;
    body_small_md: true;
    body_small_bd: true;
    body_micro: true;
    body_micro_sb: true;
  }
}

export {};
