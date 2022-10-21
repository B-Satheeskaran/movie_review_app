import { styled, Box } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "72px",
}));
