import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
`;

export const NavigationList = styled.ul`
  text-transform: uppercase;
  display: flex;
  gap: 30px;
`;

export const NavigationListElement = styled.li``;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #000000;
  padding: 15px 0px;

  &.active {
    text-decoration: none;
    color: #ffa500;
    position: relative;
    border-bottom: 5px solid #ffa500;
  }
`;
