import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {figurePartsReducer} from './figureParts/figureParts.slice';
import {figuresReducer} from './figures/figures.slice';

const rootReducer = combineReducers({
  figures: figuresReducer,
  figureParts: figurePartsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: __DEV__,
});
