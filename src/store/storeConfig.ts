import { configureStore } from '@reduxjs/toolkit';
import { applicationSlice } from './applicationSlice';

export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
