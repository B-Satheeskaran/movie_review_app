import React from "react";
import { Container, Content } from "./styles";
import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";
import store from "../../../store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/authSlice";

const Main = ({ children, withSearch }) => {
  const navigate = useNavigate();

  const handleLogoutButtonClick = React.useCallback(() => {
    store.dispatch(logout());
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Header withSearch={withSearch} handleLogoutButtonClick={handleLogoutButtonClick} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
