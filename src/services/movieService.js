import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";
import { ApiKey } from "./apiKey";

export const fetchMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/?apiKey=${ApiKey}&s=${value}&type=movie`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchSeries = createAsyncThunk(
  "movies/fetchSeries",
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/?apiKey=${ApiKey}&s=${value}&type=series`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMovieOrSeriesDetails = createAsyncThunk("Details/fetchSeries", async (imdbID) => {
  console.log(imdbID);
  const response = await axios.get(`/?apiKey=${ApiKey}&i=${imdbID}&Plot=full`).catch((error) => {
    console.log("Movie details ", error);
  });
  console.log("response ", response.data);
  return response.data;
});
