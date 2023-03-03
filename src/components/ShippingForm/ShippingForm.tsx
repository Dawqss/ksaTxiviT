import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ShippingForm as ShippingFormType} from 'types';
import {StyledButton, StyledContainer, StyledButtonWrapper} from './style';
import {shippingFormValidationSchema} from './validation';
import {ControlledTextInput} from '../ControlledTextInput/ControlledTextInput';

export interface ShippingFormProps {
  onHandleSubmit: (formValues: ShippingFormType) => void;
}

export const ShippingForm = ({onHandleSubmit}: ShippingFormProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<ShippingFormType>({
    resolver: yupResolver(shippingFormValidationSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      email: '',
      state: '',
      zipCode: '',
    },
  });

  console.log(isValid);

  return (
    <StyledContainer>
      <ControlledTextInput
        label="Full Name"
        control={control}
        name="fullName"
        errorMessage={errors.fullName?.message}
      />
      <ControlledTextInput
        label="Email"
        control={control}
        name="email"
        errorMessage={errors.email?.message}
      />
      <ControlledTextInput
        label="Address"
        control={control}
        name="address"
        errorMessage={errors.address?.message}
      />
      <ControlledTextInput
        label="City"
        control={control}
        name="city"
        errorMessage={errors.city?.message}
      />
      <ControlledTextInput
        label="State"
        control={control}
        name="state"
        errorMessage={errors.state?.message}
      />
      <ControlledTextInput
        label="Zip Code"
        control={control}
        name="zipCode"
        errorMessage={errors.zipCode?.message}
      />
      <StyledButtonWrapper>
        <StyledButton
          label="VIEW SUMMARY"
          onPress={handleSubmit(onHandleSubmit)}
          isDisabled={!isValid}
          disabled={!isValid}
        />
      </StyledButtonWrapper>
    </StyledContainer>
  );
};
