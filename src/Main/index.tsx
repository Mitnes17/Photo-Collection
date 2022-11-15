import { useEffect, useState } from 'react';

import { Collection } from '../Collection';
import { DataType } from '../Collection/Collection';
import * as S from './styled';

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://637378a2348e9472990d5c2f.mockapi.io/Collections')
      .then((request) => request.json())
      .then((json) => setData(json));
  }, []);

  return (
    <S.Container>
      <S.H1>My Photo Collection</S.H1>
      <S.Top>
        <S.Tags>
          <S.TagsItem className='isActive'>Все</S.TagsItem>
          <S.TagsItem>Горы</S.TagsItem>
          <S.TagsItem>Море</S.TagsItem>
          <S.TagsItem>Архитектура</S.TagsItem>
          <S.TagsItem>Города</S.TagsItem>
        </S.Tags>
        <S.Search
          className='search-input'
          placeholder='Search by name'
        />
      </S.Top>
      <S.Wrap>
        {data.map((object: DataType) => (
          <Collection collection={object} />
        ))}
      </S.Wrap>
    </S.Container>
  );
};
