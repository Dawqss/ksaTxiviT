import React from 'react';
import {TouchableOpacityProps as RNTouchableOpacityProps} from 'react-native';
import {StyledLabel, StyledTouchableOpacity} from './styles';

export interface ButtonProps extends RNTouchableOpacityProps {
  label: string;
  onPress: () => void;
  isDisabled: boolean;
}

export const Button = ({label, onPress, ...props}: ButtonProps) => {
  return (
    <StyledTouchableOpacity {...props} onPress={onPress}>
      <StyledLabel>{label}</StyledLabel>
    </StyledTouchableOpacity>
  );
};
