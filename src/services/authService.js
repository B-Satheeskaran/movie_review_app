import { API } from "./axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(`/auth/userLogin`, async (data, { rejectWithValue }) => {
  try {
    const response = await API.post("/auth/login", data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/auth/refresh-token");
      return response.data.data.token;
    } catch (error) {
      if (error.response.status === 500) {
        console.log("refresh error");
      }

      return rejectWithValue(error);
    }
  }
);
