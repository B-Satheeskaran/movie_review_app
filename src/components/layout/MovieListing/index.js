import React from "react";
import { Box, Typography } from "@mui/material";
import { ListContainer } from "./styles";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../../store/features/MovieSlice";
import MovieCard from "../../core/Card";
import Slider from "react-slick";
import { settings } from "../../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  let renderMovies,
    renderSeries = "";

  renderMovies =
    movies.Response === "True" &&
    movies?.Search.map((movie, id) => {
      return <MovieCard key={id} {...movie} />;
    });

  renderSeries =
    series.Response === "True" &&
    series?.Search.map((series, id) => <MovieCard key={id} {...series} />);

  return (
    <React.Fragment>
      <ListContainer>
        <Typography>Movies</Typography>
        <Box sx={{ with: "100%" }}>
          <Slider {...settings}>{renderMovies}</Slider>
        </Box>
      </ListContainer>
      <ListContainer>
        <Typography>Series</Typography>

        <Box>
          <Slider {...settings}>{renderSeries}</Slider>
        </Box>
      </ListContainer>
    </React.Fragment>
  );
};

export default MovieListing;
