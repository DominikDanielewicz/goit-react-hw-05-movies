import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 50px;
`;

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

export const MoviesListCard = styled.li`
  cursor: pointer;
  flex-basis: calc((100% - 30px) / 2);
  max-width: calc((100% - 30px) / 2);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 3);
    max-width: calc((100% - 60px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 90px) / 4);
    max-width: calc((100% - 90px) / 4);
  }
`;

export const MoviesListImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const MoviesListTitle = styled.h2`
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: #ffa500;
  margin-top: 10px;
`;
