import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {getAllFigurePartsId, getIsFigurePartsLoading} from 'store';
import {PartItem} from './PartItem/PartItem';
import {StyledContainer, StyledLabel} from './styles';

export const PartsList = () => {
  const partsId = useSelector(getAllFigurePartsId);
  const isLoading = useSelector(getIsFigurePartsLoading);

  return (
    <StyledContainer>
      <StyledLabel>
        There are {partsId.length} parts in this minifig
      </StyledLabel>
      {partsId.map(id => (
        <PartItem id={id} key={id} />
      ))}
      {isLoading && <ActivityIndicator size="large" />}
    </StyledContainer>
  );
};
