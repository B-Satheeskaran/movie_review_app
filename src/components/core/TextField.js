import React from "react";
import { TextField, styled, Box } from "@mui/material";
import PropTypes from "prop-types";

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "72px",
  gap: "5px",
  width: "100%",
  color: "#3F4451",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const StyledTextField = styled(TextField)(({ theme, max_width }) => ({
  ".MuiOutlinedInput-root": {
    boxSizing: "border-box",
    maxHeight: "44px",
    width: "100%",
    color: "#181D33",
    maxWidth: `${max_width}`,
    borderRadius: "4px",
    fieldset: {
      borderColor: "#3F44511F",
    },
  },

  "& .MuiInputBase-root.Mui-disabled": {
    fieldset: {
      borderColor: "#3F44511F",
    },
  },

  ".MuiOutlinedInput-root:hover": {
    fieldset: {
      borderColor: "#868DAA",
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
    height: "44px",
    padding: "0 16px",
  },

  "& .MuiFormHelperText-root": {
    color: "red",
    fontSize: "13px",
  },
}));

const MyTextField = ({ width, label, ...otherProps }) => {
  const TextFieldProps = {
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };
  return (
    <TextBox sx={{ width: `${width}` }}>
      {label}
      <StyledTextField {...TextFieldProps} />
    </TextBox>
  );
};

MyTextField.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
};

export default MyTextField;
