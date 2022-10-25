import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import movieReducer from "./features/movieSlice";
import authReducer from "./features/authSlice";
import loadingReducer from "./features/loadingSlice";

const persistConfig = {
  key: "movie_review_app",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    movies: movieReducer,
    loading: loadingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
