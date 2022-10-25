import { styled, Toolbar, Typography, Avatar, TextField, Button } from "@mui/material";
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

export const SearchButton = styled(({ ...props }) => (
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
export const LogoutButton = styled(({ ...props }) => (
  <Button variant='outlined' {...props}>
    Logout
  </Button>
))({
  borderColor: "white",
  color: "white",
  textTransform: "lowercase",
});

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiOutlinedInput-root": {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.common.white,

    fieldset: {
      border: `.75px solid #3F44511F`,
    },

    "&.Mui-focused fieldset": {
      border: ".75px solid #3F44511F",
    },
  },

  input: {
    fontSize: "14px",

    "&::placeholder": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#181D333E",
      opacity: "1",
    },
    height: "38px",
    padding: "0 16px",
  },
}));
