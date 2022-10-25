import { createSlice } from "@reduxjs/toolkit";
import { userLogin, refreshToken } from "./../../services/authService";

const initialState = {
  currentUser: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return {
        currentUser: null,
        accessToken: null,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      return {
        ...state,
        currentUser: payload.user,
        accessToken: payload.token,
      };
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      return {
        ...state,
        currentUser: null,
        accessToken: null,
      };
    });

    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
      return {
        ...state,
        accessToken: payload,
      };
    });
    builder.addCase(refreshToken.rejected, () => {});
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
