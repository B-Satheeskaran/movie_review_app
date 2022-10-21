import { styled, Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "50px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "30px",
  },
}));
export const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  fontSize: "15px",
}));
export const RightSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "30px",
}));

export const MovieSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  color: theme.palette.primary.main,
  fontWeight: "400",
  padding: "40px 0",
}));
export const RatingsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  flexWrap: "wrap",
}));
export const TextSecondary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingRight: "5px",
}));
export const TextPrimary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
export const Wrapper1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "7px",
}));
export const Wrapper2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "7px",
  "&>*:nth-of-type(1)": {
    width: "100px",
  },
}));
