import {PLACEHOLDER_URI} from 'constants/placeholder';
import {ImageProps} from 'react-native';
import {styled} from 'utils';

export interface ImageWithPlaceholderProps extends ImageProps {
  uri?: string;
}

export const ImageWithPlaceholder = styled.Image.attrs(
  (props: ImageWithPlaceholderProps) => ({
    ...props,
    source: {uri: props.uri ?? PLACEHOLDER_URI},
  }),
)``;
