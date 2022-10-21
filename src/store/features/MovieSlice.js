import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchSeries, fetchMovieOrSeriesDetails } from "../../services/movieService";

const initialState = {
  movies: {},
  series: {},
  details: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrSeries: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },

    [fetchSeries.fulfilled]: (state, { payload }) => {
      return { ...state, series: payload };
    },

    [fetchMovieOrSeriesDetails.fulfilled]: (state, { payload }) => {
      return { ...state, details: payload };
    },
  },
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;
