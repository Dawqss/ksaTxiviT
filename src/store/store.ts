import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {figuresReducer} from 'store/figures/figures.slice';

const rootReducer = combineReducers({
  figures: figuresReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: __DEV__,
});
