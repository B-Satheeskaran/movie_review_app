import React, { useEffect } from "react";
import MainLayout from "../../components/layout/Main";
import {
  Container,
  LeftSection,
  RightSection,
  MovieTitle,
  RatingsContainer,
  TextSecondary,
  TextPrimary,
  Wrapper1,
  Wrapper2,
} from "./styles";
import { useParams } from "react-router-dom";
import { fetchMovieOrSeriesDetails } from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, removeSelectedMovieOrSeries } from "../../store/features/MovieSlice";

const View = () => {
  const params = useParams();
  const { id } = params;
  const movieDetails = useSelector(getDetails);

  const {
    Year,
    Runtime,
    imdbRating,
    Plot,
    imdbVotes,
    Poster,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Title,
  } = movieDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetails(id));
    return () => {
      dispatch(removeSelectedMovieOrSeries());
    };
  }, [dispatch, id]);

  return (
    <MainLayout>
      <Container>
        <LeftSection>
          <MovieTitle>{Title}</MovieTitle>
          <RatingsContainer>
            <Wrapper1>
              <TextSecondary>Imdb Ratings</TextSecondary>
              <TextPrimary>{imdbRating}</TextPrimary>
            </Wrapper1>
            <Wrapper1>
              <TextSecondary>Imdb Votes</TextSecondary>
              <TextPrimary>{imdbVotes}</TextPrimary>
            </Wrapper1>
            <Wrapper1>
              <TextSecondary>Runtime</TextSecondary>
              <TextPrimary>{Runtime}</TextPrimary>
            </Wrapper1>
            <Wrapper1>
              <TextSecondary>Year</TextSecondary>
              <TextPrimary>{Year}</TextPrimary>
            </Wrapper1>
          </RatingsContainer>
          <TextPrimary>{Plot}</TextPrimary>
          <Wrapper2>
            <TextSecondary>Director</TextSecondary>
            <TextPrimary>{Director}</TextPrimary>
          </Wrapper2>
          <Wrapper2>
            <TextSecondary>Actors</TextSecondary>
            <TextPrimary>{Actors}</TextPrimary>
          </Wrapper2>
          <Wrapper2>
            <TextSecondary>Genre</TextSecondary>
            <TextPrimary>{Genre}</TextPrimary>
          </Wrapper2>
          <Wrapper2>
            <TextSecondary>Language</TextSecondary>
            <TextPrimary>{Language}</TextPrimary>
          </Wrapper2>
          <Wrapper2>
            <TextSecondary>Awards</TextSecondary>
            <TextPrimary>{Awards}</TextPrimary>
          </Wrapper2>
        </LeftSection>
        <RightSection>
          <img src={Poster} alt={Title} />
        </RightSection>
      </Container>
    </MainLayout>
  );
};

export default View;
