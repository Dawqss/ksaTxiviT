import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {figuresReducer} from 'store/figures/figures.slice';
import {webviewReducer} from 'store/webView/webView.slice';

const rootReducer = combineReducers({
  figures: figuresReducer,
  webView: webviewReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: __DEV__,
});
