import {ShippingForm} from 'components';
import {Routes} from 'navigation';
import React, {useCallback} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ShippingForm as ShippingFormType, MainStackParams} from 'types';
import {StyledContainer, StyledHeader, StyledScrollView} from './styles';

export type ShippingFormScreenNavigationProp = NativeStackScreenProps<
  MainStackParams,
  Routes.ShippingForm
>;

export const ShippingFormScreen = ({
  navigation: {navigate},
  route: {
    params: {figureId},
  },
}: ShippingFormScreenNavigationProp) => {
  const handleSubmit = useCallback(
    (shippingForm: ShippingFormType) => {
      navigate(Routes.SummaryScreen, {shippingForm, figureId});
    },
    [figureId],
  );

  return (
    <StyledContainer>
      <StyledScrollView>
        <StyledHeader>PERSONAL DETAILS</StyledHeader>
        <ShippingForm onHandleSubmit={handleSubmit} />
      </StyledScrollView>
    </StyledContainer>
  );
};
