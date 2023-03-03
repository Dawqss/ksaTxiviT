import {TextInput} from 'components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {ControlledComponent} from 'types';

export const ControlledTextInput: ControlledComponent = ({
  control,
  label,
  name,
  errorMessage,
  ...restProps
}) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          label={label}
          errorMessage={errorMessage}
          {...restProps}
        />
      )}
      name={name}
    />
  );
};
