import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
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

export default StyledTextField;
