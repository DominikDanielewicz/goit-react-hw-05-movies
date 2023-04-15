import React from 'react';
import {
  StyledNavigation,
  NavigationList,
  NavigationLink,
  NavigationListElement,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationList>
        <NavigationListElement>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationListElement>
        <NavigationListElement>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationListElement>
      </NavigationList>
    </StyledNavigation>
  );
};

export default Navigation;
