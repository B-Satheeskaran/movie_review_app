import { styled, Box } from "@mui/material";

export const ListContainer = styled(Box)(({ theme }) => ({
  margin: "20px 0",
  "&>*:nth-of-type(1)": {
    color: theme.palette.text.secondary,
    marginBottom: "10px",
    fontWeight: "400",
  },
}));
