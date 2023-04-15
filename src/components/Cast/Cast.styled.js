import styled from 'styled-components';

export const StyledCast = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-bottom: 80px;
`;

export const CastCard = styled.li`
  flex-basis: calc((100% - 40px) / 3);
  max-width: calc((100% - 40px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 4);
    max-width: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 80px) / 5);
    max-width: calc((100% - 80px) / 5);
  }
`;

export const CastImage = styled.img`
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

export const CastName = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;

export const CastRole = styled.p`
  font-size: 14px;
`;
