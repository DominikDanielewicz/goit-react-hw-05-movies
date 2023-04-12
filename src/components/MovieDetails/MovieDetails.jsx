import React from 'react';
import { NavLink } from 'react-router-dom';
import Placeholder from 'images/placeholder.jpg';

const MovieDetails = ({ data }) => {
  const { poster_path, title, original_title, vote_average, overview, genres } =
    data;

  const userScore = `User Score: ${(vote_average * 10).toFixed(0)}%`;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : Placeholder;
  const genresList = genres?.map(genre => genre.name).join(' ');

  return (
    <>
      <div>
        <div>
          <img src={poster} alt={original_title} />
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{userScore}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{genresList}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Additional Information</h3>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
    </>
  );
};

export default MovieDetails;
