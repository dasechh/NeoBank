import type { RootState } from '@/store/storeConfig';

export const selectStatus = (state: RootState) => state.application.status;

export const selectOffers = (state: RootState) => state.application.offers;

export const selectSelectedOffer = (state: RootState) => state.application.selectedOffer;
