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
    <main>
      <h2>Trending today</h2>
      <div>
        {isLoading ? <Loader /> : <MoviesList data={movies} />}
        {error && <p>Something went wrong. Try again later</p>}
      </div>
    </main>
  );
};

export default HomePage;
