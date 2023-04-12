import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
