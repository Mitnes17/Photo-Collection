import { FC } from 'react';
import { Props } from './Collection';
import * as S from './styled';

export const Collection: FC<Props> = ({ collection: { name, photos } }) => {
  return (
    <S.Collection>
      <S.ImageBig
        src={photos[0]}
        alt='Item'
      />
      <S.CollectionSmall>
        <S.ImageSmall
          src={photos[1]}
          alt='Item'
        />
        <S.ImageSmall
          src={photos[2]}
          alt='Item'
        />
        <S.ImageSmall
          src={photos[3]}
          alt='Item'
        />
      </S.CollectionSmall>
      <S.H4>{name}</S.H4>
    </S.Collection>
  );
};
