import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '866c584b953aab9d6c2151363c4952f3';

const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getTrendingMovies = {
  fetchTrendingMovies,
};

const fetchMovieById = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieById = {
  fetchMovieById,
};

const fetchMovieByPathname = async pathname => {
  const response = await axios.get(pathname, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieByPathname = {
  fetchMovieByPathname,
};

const fetchMovieByQuery = async query => {
  const response = await axios.get(`search/movie?query=${query}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const getMovieByQuery = {
  fetchMovieByQuery,
};
