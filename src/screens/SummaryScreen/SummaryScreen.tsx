import CloseButton from 'components/CloseButton/CloseButton';
import {Routes} from 'navigation';
import React, {useCallback, useEffect} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useAppDispatch} from 'store';
import {fetchPartsByFigureId} from 'store/figureParts/figureParts.thunks';
import {MainStackParams} from 'types';
import {StyledContainer, StyledWrapper, CloseButtonWrapper} from './styles';

export type SummaryScreenProp = NativeStackScreenProps<
  MainStackParams,
  Routes.SummaryScreen
>;

export const SummaryScreen = ({
  navigation,
  route: {params},
}: SummaryScreenProp) => {
  const dispatch = useAppDispatch();

  useEffect(
    function onInit() {
      dispatch(fetchPartsByFigureId(params.figureId));
    },
    [params.figureId],
  );

  const onCloseButtonPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <StyledContainer>
      <StyledWrapper>
        <CloseButtonWrapper>
          <CloseButton onPress={onCloseButtonPress} />
        </CloseButtonWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};
