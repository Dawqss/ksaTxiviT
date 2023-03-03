import {ShippingForm} from 'types';
import {object, string} from 'yup';

export const shippingFormValidationSchema = object<ShippingForm>({
  fullName: string()
    .matches(/^[a-z]{3,} [a-z]{3,}$/i, 'please enter your full name.')
    .required(),
  email: string().email().required(),
  address: string().min(2).required(),
  city: string().min(3).required(),
  state: string().min(3).required(),
  zipCode: string()
    .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'please enter zip code')
    .required(),
}).required();
