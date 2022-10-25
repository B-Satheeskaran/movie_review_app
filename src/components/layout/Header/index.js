import React, { useState } from "react";
import { AppBar, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import {
  MuiToolbar,
  Logo,
  MuiAvatar,
  Form,
  SearchButton,
  SearchField,
  LogoutButton,
} from "./styles";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchSeries } from "../../../services/movieService";

const Header = ({ withSearch, handleLogoutButtonClick }) => {
  const [value, setValue] = useState("");

  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  const dispatch = useDispatch();

  const handleSearchFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      if (value !== "") {
        dispatch(fetchMovies(value));
        dispatch(fetchSeries(value));
        setValue("");
      }
    },
    [dispatch, value]
  );

  return (
    <AppBar position='static'>
      <MuiToolbar disableGutters>
        <Logo>
          <Link to='/'>Movie App</Link>
        </Logo>

        {withSearch && (
          <Form onSubmit={handleSearchFormSubmit}>
            <SearchField
              fullWidth
              placeholder='Search movie or series'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <SearchButton type='submit' />
          </Form>
        )}

        <LogoutButton onClick={handleLogoutButtonClick} />
      </MuiToolbar>
    </AppBar>
  );
};

export default React.memo(Header);
