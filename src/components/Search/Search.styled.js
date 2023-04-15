import styled from 'styled-components';

export const StyledSearch = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 4px;
  color: #000000;
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 1.25;
  padding: 12px;

  &::placeholder {
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  background-color: #ffa500;
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff8a00;
  }

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
