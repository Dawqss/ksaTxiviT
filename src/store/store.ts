import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {errorsReducer} from 'store/errors/errors.slice';
import {figurePartsReducer} from './figureParts/figureParts.slice';
import {figuresReducer} from './figures/figures.slice';

const rootReducer = combineReducers({
  figures: figuresReducer,
  figureParts: figurePartsReducer,
  errors: errorsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: __DEV__,
});
