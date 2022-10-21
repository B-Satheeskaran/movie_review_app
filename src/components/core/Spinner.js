import React from "react";
import { styled, Box, CircularProgress, Fade } from "@mui/material";
import { useSelector } from "react-redux";

const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.secondary.main,
  display: "grid",
  placeContent: "center",
  zIndex: "1600",
}));

const Spinner = () => {
  const isLoading = useSelector((state) => state.loading);

  return (
    <Fade in={isLoading}>
      <Container>
        <CircularProgress size={60} thickness={4} color='warning' />
      </Container>
    </Fade>
  );
};

export default Spinner;
