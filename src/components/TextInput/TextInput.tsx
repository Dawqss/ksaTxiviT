import React from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import {
  StyledContainer,
  StyledErrorContainer,
  StyledLabel,
  StyledTextInput,
  StyledErrorLabel,
} from './styles';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export const TextInput = ({
  label,
  errorMessage = '',
  ...textInputProps
}: TextInputProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput {...textInputProps} />
      <StyledErrorContainer>
        <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
      </StyledErrorContainer>
    </StyledContainer>
  );
};
