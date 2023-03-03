import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {deleteErrorFromStackById} from 'store';
import {CommonError} from 'types';
import {
  StyledSingleStackErrorContainer,
  StyledSingleStackLabel,
} from './styles';

export type SingleStackErrorProps = CommonError;
const MAX_STACK_ERROR_SHOW_TIME_IN_MS = 8 * 1000;

export const SingleStackError = ({
  id,
  type,
  message,
}: SingleStackErrorProps) => {
  const dispatch = useDispatch();

  useEffect(function onMount() {
    const t1 = setTimeout(() => {
      dispatch(deleteErrorFromStackById(id));
    }, MAX_STACK_ERROR_SHOW_TIME_IN_MS);

    return () => clearTimeout(t1);
  }, []);

  return (
    <StyledSingleStackErrorContainer type={type}>
      <StyledSingleStackLabel>{message}</StyledSingleStackLabel>
    </StyledSingleStackErrorContainer>
  );
};
