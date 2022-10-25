import React from "react";
import { Container, Content } from "./styles";
import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/authSlice";

const Main = ({ children, withSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutButtonClick = React.useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);

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
