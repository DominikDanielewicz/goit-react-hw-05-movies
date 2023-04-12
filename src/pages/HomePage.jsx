import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api';
import Loader from './../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const fetchedMovies = await getTrendingMovies.fetchTrendingMovies();
        setMovies([...fetchedMovies]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <div>
        {isLoading ? <Loader /> : <MoviesList data={movies} />}
        {error && <p>Something went wrong. Try again later</p>}
      </div>
    </>
  );
};

export default HomePage;
