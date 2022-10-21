import axios from "axios";
import { toggleLoading } from "../store/features/LoadingSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    config.baseURL = "http://www.omdbapi.com";
    store.dispatch(toggleLoading());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    store.dispatch(toggleLoading());
    return response;
  },
  async (error) => {
    store.dispatch(toggleLoading());
    return instance(error.config);
  }
);

export default instance;
