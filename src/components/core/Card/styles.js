import { styled, Card, Typography } from "@mui/material";

export const MuiCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,

  cursor: "pointer",
  transition: "all 0.3s",
  "&: hover": {
    transform: "scale(1.1)",
    transition: "all 0.3s",
  },
  margin: "20px 10px",
}));

export const TitleText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  whiteSpace: "nowrap",
  width: "225px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: "20px",
});
