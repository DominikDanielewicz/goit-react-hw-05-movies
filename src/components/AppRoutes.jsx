import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieAdditionalInfoPage = lazy(() =>
  import('../pages/MovieAdditionalInfoPage')
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieAdditionalInfoPage />}></Route>
          <Route path="reviews" element={<MovieAdditionalInfoPage />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
