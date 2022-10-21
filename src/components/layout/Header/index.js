import React, { useState } from "react";
import { AppBar, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MuiToolbar, Logo, MuiAvatar, Form, Button } from "./styles";
import TextField from "../../core/TextField";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchSeries } from "../../../services/movieService";

const Header = ({ withSearch }) => {
  const [value, setValue] = useState("");

  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  const dispatch = useDispatch();

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(fetchMovies(value));
      dispatch(fetchSeries(value));
      setValue("");
    }
  };
  return (
    <AppBar position='static'>
      <MuiToolbar disableGutters>
        <Logo>
          <Link to='/'>Movie App</Link>
        </Logo>

        {withSearch && (
          <Form onSubmit={handleSearchFormSubmit}>
            <TextField
              fullWidth
              placeholder='Search movie or series'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type='submit' />
          </Form>
        )}

        {!isMobile && <MuiAvatar />}
      </MuiToolbar>
    </AppBar>
  );
};

export default Header;
