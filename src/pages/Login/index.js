import React, { useState } from "react";
import store from "../../store";
import { Container } from "./styles";
import LoginForm from "../../components/forms/LoginForm";
import { userLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { dispatch } = store;

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSubmit = (data, { resetForm }) => {
    dispatch(userLogin(data))
      .unwrap()
      .then(() => {
        setError(null);
        resetForm();
        navigate("/home");
      })
      .catch((error) => {
        setError(error?.response?.data?.message || null);
        resetForm();
      });
  };

  return (
    <Container>
      <LoginForm errorMsg={error} handleLoginFormSubmit={handleSubmit} />
    </Container>
  );
};

export default Login;
