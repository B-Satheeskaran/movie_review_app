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
  const { id } = useParams();

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
  } = useSelector(getDetails);

  const ratings = { Imdb_Rating: imdbRating, Imdb_Votes: imdbVotes, Runtime: Runtime, Year: Year };
  const info = { Director, Actors, Genre, Language, Awards };

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
            {Object.keys(ratings).map((item, index) => (
              <Wrapper1 key={index}>
                <TextSecondary>{item.replace("_", " ")}</TextSecondary>
                <TextPrimary>{ratings[item]}</TextPrimary>
              </Wrapper1>
            ))}
          </RatingsContainer>
          <TextPrimary>{Plot}</TextPrimary>
          {Object.keys(info).map((item, index) => (
            <Wrapper2 key={index}>
              <TextSecondary>{item}</TextSecondary>
              <TextPrimary>{info[item]}</TextPrimary>
            </Wrapper2>
          ))}
        </LeftSection>
        <RightSection>
          <img src={Poster} alt={Title} />
        </RightSection>
      </Container>
    </MainLayout>
  );
};

export default View;
