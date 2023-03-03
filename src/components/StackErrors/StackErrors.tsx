import React from 'react';
import {useSelector} from 'react-redux';
import {getErrorsStack} from 'store';
import {SingleStackError} from './SingleStackError/SingleStackError';
import {StyledStackErrorContainer} from './styles';

export const StackErrors = () => {
  const errors = useSelector(getErrorsStack);

  if (!errors.length) {
    return null;
  }

  return (
    <StyledStackErrorContainer>
      {errors.map(error => (
        <SingleStackError key={error.id} {...error} />
      ))}
    </StyledStackErrorContainer>
  );
};
