import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
});
const primaryPalette = {
  main: '#09D3AD',
  light: '#3ADBBD',
  dark: "#069379",
  contrastText: '#FFFFFF',
};

const secondaryPalette = {
  main: '#F50057',
  light: '#F73378',
  dark: '#AB003C',
  contrastText: '#FFFFFF',
};

const errorPalette = {
  main: '#F44336',
  light: '#E57373',
  dark: '#D32F2F',
  contrastText: '#FFFFFF',
};

const warningPalette = {
  main: '#FF9800',
  light: '#FFB74D',
  dark: '#F57C00',
  contrastText: '#000000',
};

const infoPalette = {
  main: '#2196f3',
  light: '#64b5f6',
  dark: '#1976d2',
  contrastText: '#FFFFFF',
};

const successPalette = {
  main: '#4caf50',
  light: '#81c784',
  dark: '#388e3c',
  contrastText: '#000000',
};
// Create a theme instance.
export const theme = createTheme({


  palette: {
    
    background: {
      default: '#FFFFFF',
      paper: '#EBEDF0',
    },
    text: {
      primary: '#1C1E21',
      secondary: '#606770',
      disabled: '#6A737D',
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});