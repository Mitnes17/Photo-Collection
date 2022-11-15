import styled from 'styled-components';

export const Collection = styled.div`
  max-width: 470px;
  background-color: #fff;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const ImageBig = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const ImageSmall = styled.img`
  width: 31%;
  height: 80px;
  border-radius: 20px;
  object-fit: cover;
`;

export const CollectionSmall = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const H4 = styled.h4`
  margin: 0;
  margin-top: 15px;
  font-size: 20px;
  font-family: 'Merriweather', serif;
`;
