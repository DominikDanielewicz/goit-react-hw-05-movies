import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMovieDetails = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MovieDetailsImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const MovieDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MovieDetailsMenu = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const MovieDetailsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 5px;

  &.active {
    text-decoration: none;
    color: #ffa500;
    position: relative;
  }
`;
