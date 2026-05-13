import { configureStore } from '@reduxjs/toolkit';
import { applicationSlice } from './applicationSlice';
import { loadState, saveState } from './storage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
  },
  preloadedState: {
    application: persistedState,
  },
});

store.subscribe(() => {
  const state = store.getState();

  saveState({
    step: state.application.step,
    offers: state.application.offers,
    selectedOffer: state.application.selectedOffer,
  });
});

export type RootState = ReturnType<typeof store.getState>;
