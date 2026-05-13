import type { RootState } from '@/store';

export const selectStep = (state: RootState) => state.application.step;

export const selectOffers = (state: RootState) => state.application.offers;

export const selectSelectedOffer = (state: RootState) => state.application.selectedOffer;
