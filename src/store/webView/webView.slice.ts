import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: {url: string | null} = {
  url: null,
};

const slice = createSlice({
  name: 'webview',
  initialState,
  reducers: {
    setUrl(state, {payload}: PayloadAction<string | null>) {
      state.url = payload;
    },
  },
});

export const {
  reducer: webviewReducer,
  actions: {setUrl: setUrlAction},
} = slice;
