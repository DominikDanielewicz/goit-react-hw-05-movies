import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieById } from 'api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  let backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovie = async () => {
      try {
        const fetchedMovie = await getMovieById.fetchMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading ? (
        <Loader />
      ) : (
        <MovieDetails data={movie} location={backLinkHref} />
      )}
      <Outlet />
      {error && <p>Something went wrong. Try again later</p>}
    </main>
  );
};

export default MovieDetailsPage;
