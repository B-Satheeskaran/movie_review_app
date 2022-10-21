import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.get("", {
        params: { s: value, type: "movie" },
      });
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
      const response = await axios.get("", {
        params: { s: value, type: "series" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMovieOrSeriesDetails = createAsyncThunk(
  "Details/fetchSeries",
  async (imdbID, { rejectWithValue }) => {
    const response = await axios.get("", { params: { i: imdbID, plot: "full" } }).catch((error) => {
      rejectWithValue(error);
    });

    return response.data;
  }
);
