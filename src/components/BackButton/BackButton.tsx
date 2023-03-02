import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyledTouchableOpacity} from './styles';

export interface BackButtonProps {
  onPress: () => void;
}

export const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Svg x="0px" y="0px" viewBox="0 0 48 48">
        <Path
          fill="#2196F3"
          d="M30.9 43L34 39.9 18.1 24 34 8.1 30.9 5 12 24z"
        />
      </Svg>
    </StyledTouchableOpacity>
  );
};
