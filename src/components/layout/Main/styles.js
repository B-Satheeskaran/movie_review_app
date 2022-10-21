import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
  overflow: "auto",
}));
export const Content = styled(Box)(({ theme }) => ({
  margin: "20px 40px",
  [theme.breakpoints.down("800")]: {
    margin: "20px 20px",
  },
}));
