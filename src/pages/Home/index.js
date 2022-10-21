import React, { useEffect } from "react";
import { NoResult } from "./styles";
import MainLayout from "../../components/layout/Main";
import { fetchMovies, fetchSeries } from "../../services/movieService";
import { getAllMovies, getAllSeries } from "../../store/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../../components/layout/MovieListing";

const movieName = "batman";
const seriesName = "elite";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(movieName));
    dispatch(fetchSeries(seriesName));
  }, [dispatch]);

  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  return (
    <MainLayout withSearch>
      {movies.Response === "True" || series.Response === "True" ? (
        <MovieListing />
      ) : (
        <NoResult>No results found !</NoResult>
      )}
    </MainLayout>
  );
};

export default Home;
