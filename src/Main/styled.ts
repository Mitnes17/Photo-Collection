import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const Search = styled.input`
  font-size: 16px;
  width: 250px;
  height: 50px;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  transition: all 0.15s ease-in-out;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  row-gap: 10px;
`;

export const TagsItem = styled.li`
  display: inline-block;
  padding: 12px 18px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    border-color: #000;
  }

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export const H1 = styled.h1``;
