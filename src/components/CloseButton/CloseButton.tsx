import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyledTouchableOpacity} from './styles';

export interface CloseButtonProps {
  onPress: () => void;
}

export const CloseButton = ({onPress}: CloseButtonProps) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path d="M20.03 5.03l-1.061-1.061-6.97 6.97-6.97-6.97L3.968 5.03l6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061L13.06 12l6.97-6.97z" />
      </Svg>
    </StyledTouchableOpacity>
  );
};

export default CloseButton;
