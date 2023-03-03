import {ApiErrorKeys} from 'api';
import {SummaryApi} from 'api/SummaryApi/SummaryApi';
import {PartsList, CloseButton, Button} from 'components';
import {Routes} from 'navigation';
import React, {useCallback, useEffect} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useSelector} from 'react-redux';
import {
  getFigureById,
  useAppDispatch,
  fetchPartsByFigureId,
  addNewErrorToStack,
} from 'store';
import {ErrorResponse, MainStackParams} from 'types';
import {createCommonError, shortName} from 'utils';
import {
  StyledContainer,
  StyledWrapper,
  CloseButtonWrapper,
  StyledHeader,
  StyledImage,
  StyledFigureWrapper,
  StyledName,
  StyledPartsWrapper,
  StyledSubmitButtonWrapper,
} from './styles';

export type SummaryScreenProp = NativeStackScreenProps<
  MainStackParams,
  Routes.SummaryScreen
>;

export const SummaryScreen = ({
  navigation,
  route: {
    params: {figureId, shippingForm},
  },
}: SummaryScreenProp) => {
  const dispatch = useAppDispatch();
  const {set_img_url, name} = useSelector(getFigureById(figureId));

  useEffect(
    function onInit() {
      dispatch(fetchPartsByFigureId(figureId));
    },
    [figureId],
  );

  const onCloseButtonPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const onSubmitButtonPress = useCallback(async () => {
    try {
      await SummaryApi.postSummary({
        figureId,
        shippingForm,
      });

      navigation.reset({
        routes: [{name: Routes.FigureCarousel}],
      });
    } catch (error) {
      dispatch(
        addNewErrorToStack(
          createCommonError(
            error as ErrorResponse,
            ApiErrorKeys.FetchPartsByFigureId,
          ),
        ),
      );
    }
  }, [figureId, shippingForm]);

  return (
    <StyledContainer>
      <StyledWrapper>
        <CloseButtonWrapper>
          <CloseButton onPress={onCloseButtonPress} />
        </CloseButtonWrapper>
        <StyledHeader>SUMMARY</StyledHeader>
        <StyledFigureWrapper>
          <StyledImage uri={set_img_url} resizeMode="contain" />
          <StyledName>{shortName(name)}</StyledName>
        </StyledFigureWrapper>
        <StyledPartsWrapper>
          <PartsList />
        </StyledPartsWrapper>
        <StyledSubmitButtonWrapper>
          <Button
            label="SUBMIT"
            onPress={onSubmitButtonPress}
            isDisabled={false}
          />
        </StyledSubmitButtonWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};
