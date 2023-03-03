import React from 'react';
import {useSelector} from 'react-redux';
import {getAllFigurePartsId} from 'store';
import {PartItem} from './PartItem/PartItem';
import {StyledContainer, StyledLabel} from './styles';

export const PartsList = () => {
  const partsId = useSelector(getAllFigurePartsId);

  return (
    <StyledContainer>
      <StyledLabel>
        There are {partsId.length} parts in this minifig
      </StyledLabel>
      {partsId.map(id => (
        <PartItem id={id} key={id} />
      ))}
    </StyledContainer>
  );
};
