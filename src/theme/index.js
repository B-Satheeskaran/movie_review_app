import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f171e",
    },
    secondary: {
      main: "#1a242f",
    },
    error: { main: "#FF7A7A" },
    info: { main: "#7A86A1" },
    success: { main: "#4DB6AC" },
    warning: { main: "#FEB558" },
    text: {
      primary: "#ffffff",
      secondary: "#79b8f3",
    },
  },
  typography: {
    fontFamily: " Poppins, sans-serif",
  },

  shape: {
    borderRadius: 5,
  },
  spacing: 1,
});
export default theme;
