import React from "react";
import { Container, Content } from "./styles";
import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";

const Main = ({ children, withSearch }) => {
  return (
    <Container>
      <Header withSearch={withSearch} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
