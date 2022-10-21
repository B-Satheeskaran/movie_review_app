import * as React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MuiCard, TitleText } from "./styles";

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <MuiCard>
      <Link to={`/movie/${imdbID}`}>
        <CardMedia component='img' height='300' image={Poster} alt={Title} />
        <CardContent>
          <TitleText>{Title}</TitleText>
          <Typography variant='subtitle1' color='text.secondary'>
            {Year}
          </Typography>
        </CardContent>
      </Link>
    </MuiCard>
  );
};

export default MovieCard;
