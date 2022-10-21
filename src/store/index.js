import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import movieReducer from "./features/MovieSlice";
import loadingReducer from "./features/LoadingSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    loading: loadingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
