import React from 'react';
import Placeholder from 'images/placeholder.jpg';
import PropTypes from 'prop-types';
import {
  StyledMovieDetails,
  MovieDetailsInfo,
  MovieDetailsImage,
  MovieDetailsDescription,
  MovieDetailsMenu,
  MovieDetailsLink,
} from './MovieDetails.styled';

const MovieDetails = ({ data, location }) => {
  const { poster_path, title, original_title, vote_average, overview, genres } =
    data;
  const userScore = `User Score: ${(vote_average * 10).toFixed(0)}%`;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : Placeholder;
  const genresList = genres?.map(genre => genre.name).join(' ');

  return (
    <StyledMovieDetails>
      <MovieDetailsInfo>
        <MovieDetailsImage src={poster} alt={original_title} />
        <MovieDetailsDescription>
          <div>
            <h2>{title}</h2>
            <p>{userScore}</p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{genresList}</p>
          </div>
        </MovieDetailsDescription>
      </MovieDetailsInfo>
      <div>
        <h3>Additional Information</h3>
        <MovieDetailsMenu>
          <li>
            <MovieDetailsLink to="cast" state={{ from: location }}>
              Cast
            </MovieDetailsLink>
          </li>
          <li>
            <MovieDetailsLink to="reviews" state={{ from: location }}>
              Reviews
            </MovieDetailsLink>
          </li>
        </MovieDetailsMenu>
      </div>
    </StyledMovieDetails>
  );
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default MovieDetails;
