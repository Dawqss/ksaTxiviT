import React from 'react';
import {useSelector} from 'react-redux';
import {getWebViewUrl} from 'store';
import {StyledContainer, StyledWebView} from './styles';

export const ControlledWebView = () => {
  const uri = useSelector(getWebViewUrl);

  if (uri) {
    return (
      <StyledContainer>
        <StyledWebView source={{uri}} />
      </StyledContainer>
    );
  }

  return null;
};
