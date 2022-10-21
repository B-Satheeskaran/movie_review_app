import React from "react";
import { Typography } from "@mui/material";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Typography>Movie App</Typography>
      <Typography>© 1990-2022 by IMDb.com, Inc.</Typography>
    </FooterContainer>
  );
};

export default Footer;
