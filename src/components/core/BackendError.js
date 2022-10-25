import React from "react";
import { styled, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Container = styled(({ ...props }) => <Box {...props} />)(({ theme, is_error }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: "5px",
  padding: "7px",
  minHeight: "30px",
  backgroundColor: is_error ? "#CF03031A" : "unset",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "17.75px",
}));

const BackendError = ({ text, ...otherProps }) => {
  return (
    <Container {...otherProps} is={text}>
      <Text align='center' color='error'>
        {text}
      </Text>
    </Container>
  );
};

BackendError.propTypes = {
  text: PropTypes.string,
};

export default BackendError;
