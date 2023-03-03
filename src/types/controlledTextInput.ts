import {TextInputProps} from 'components';
import {ControllerProps, FieldValues} from 'react-hook-form/dist/types';

export type ControlledComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends import('react-hook-form/dist/types').Path<TFieldValues> = import('react-hook-form/dist/types').Path<TFieldValues>,
>(
  props: Omit<ControllerProps<TFieldValues, TName>, 'render'> & TextInputProps,
) => import('react').ReactElement<
  any,
  string | import('react').JSXElementConstructor<any>
>;
