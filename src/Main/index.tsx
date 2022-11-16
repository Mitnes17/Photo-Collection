import { useEffect, useState } from 'react';

import { Collection } from '../Collection';
import { DataType } from '../Collection/Collection';
import * as S from './styled';

const categories = ['Moon', 'Cats', 'Architecture', 'Art', 'Christmas', 'Forest'];

export const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeValue = (e: any) => setSearchValue(e.target.value);

  const [category, setCategory] = useState('');
  const onClickCategory = (value: string) => setCategory(value);

  const [page, setPage] = useState('1');
  const onClickPage = (page: number) => setPage(page.toString());

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://637378a2348e9472990d5c2f.mockapi.io/Collections?page=${page}&limit=6&name=${category}`
    )
      .then((request) => request.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, [category, page]);

  return (
    <S.Container>
      <h1>My Photo Collection</h1>
      <S.Top>
        <S.Tags>
          <S.TagsItem
            onClick={() => onClickCategory('')}
            className={category === '' ? 'isActive' : ''}
          >
            All
          </S.TagsItem>
          {categories.map((item) => (
            <S.TagsItem
              onClick={() => onClickCategory(item)}
              className={category === item ? 'isActive' : ''}
            >
              {item}
            </S.TagsItem>
          ))}
        </S.Tags>
        <S.Search
          placeholder='Search by name'
          onChange={onChangeValue}
        />
      </S.Top>

      <S.Wrap>
        {isLoading ? (
          <h2>Loading, please, wait...</h2>
        ) : (
          data
            .filter((object: DataType) =>
              object.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((object: DataType) => <Collection collection={object} />)
        )}
      </S.Wrap>
      <S.Pagination>
        {[...Array(3)].map((_, i) => (
          <li
            onClick={() => onClickPage(i + 1)}
            className={page === (i + 1).toString() ? 'isActive' : ''}
          >
            {i + 1}
          </li>
        ))}
      </S.Pagination>
    </S.Container>
  );
};
