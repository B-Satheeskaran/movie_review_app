import { styled, Toolbar, Typography, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../../theme";

export const MuiToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: "72px",
  padding: "0px 40px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px",
  },
}));

export const Logo = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "600",
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
}));
export const MuiAvatar = styled(Avatar)(({ theme }) => ({
  width: "38px",
  height: "38px",
}));
export const Form = styled("form")(({ theme }) => ({
  maxWidth: "500px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  margin: "0px 30px",
  [theme.breakpoints.down("sm")]: {
    margin: "unset",
    marginLeft: "10px",
  },
}));

export const Button = styled(({ ...props }) => (
  <button {...props}>
    <SearchIcon fontSize='small' style={{ fill: theme.palette.primary.main }} />
  </button>
))({
  border: "none",
  outline: "none",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  height: "38px",
});
