import React from "react";
import { styled, Box, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "&>*:nth-of-type(1)": {
    fontSize: "90px",
    fontWeight: "700",
    color: theme.palette.text.secondary,
  },
  "&>*:nth-of-type(2)": {
    fontSize: "25px",
    fontWeight: "500",
    color: theme.palette.text.primary,
  },
}));

const NotFound = () => {
  return (
    <Container>
      <Typography>404</Typography>
      <Typography>Page not found !</Typography>
    </Container>
  );
};

export default NotFound;
