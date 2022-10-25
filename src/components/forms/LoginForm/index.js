import React from "react";
import { Grid, Button, Stack } from "@mui/material";
import { Container, Heading, ForgotPassword } from "./styles";
import TextField from "../../core/TextField";
import PasswordField from "./../../core/PasswordField";
import BackendError from "../../core/BackendError";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ handleLoginFormSubmit, errorMsg }) => {
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required !").email("Invalid email"),
    password: Yup.string().required("Password is required !"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLoginFormSubmit}
    >
      {({ errors, touched, values, isValid, handleChange, handleBlur, handleSubmit }) => (
        <Container>
          <form onSubmit={handleSubmit}>
            <Grid item mb={30}>
              <Heading>Sign In</Heading>
            </Grid>
            <Grid item mb={30}>
              <TextField
                name='email'
                label='Email'
                placeholder='Enter your email'
                autoFocus
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item mb={30}>
              <PasswordField
                name='password'
                label='Password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>

            <Grid item mb={10}>
              <BackendError text={errorMsg} />
            </Grid>

            <Stack direction={"row-reverse"}>
              <Button type='submit' variant='contained'>
                SIGN IN
              </Button>
            </Stack>
          </form>
        </Container>
      )}
    </Formik>
  );
};

export default LoginForm;
