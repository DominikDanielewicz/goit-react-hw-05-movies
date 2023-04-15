import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
import { Container, Header, Title } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Title>MoviesWiki</Title>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
