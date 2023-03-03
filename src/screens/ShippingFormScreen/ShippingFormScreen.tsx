import {ShippingForm} from 'components';
import {Routes} from 'navigation';
import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {MainStackParams} from 'types';
import {StyledContainer, StyledHeader, StyledScrollView} from './styles';

export type ShippingFormScreenNavigationProp = NativeStackScreenProps<
  MainStackParams,
  Routes.ShippingForm
>;

export const ShippingFormScreen = ({
  route: {
    params: {figureId},
  },
}: ShippingFormScreenNavigationProp) => {
  return (
    <StyledContainer>
      <StyledScrollView>
        <StyledHeader>PERSONAL DETAILS</StyledHeader>
        <ShippingForm onHandleSubmit={values => console.log(values)} />
      </StyledScrollView>
    </StyledContainer>
  );
};
