import type {
  IApplicationOffer,
  IApplicationState,
  TApplicationStatus,
} from '@/types/application.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initSelectedOffer = localStorage.getItem('selectedOffer');
const initOffers = localStorage.getItem('offers');
const initStatus = localStorage.getItem('status') as TApplicationStatus;

const initialState: IApplicationState = {
  status: initStatus || null,
  offers: initOffers ? JSON.parse(initOffers) : null,
  selectedOffer: initSelectedOffer ? JSON.parse(initSelectedOffer) : null,
};

export const applicationSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {
    setStatus(state, action: PayloadAction<TApplicationStatus>) {
      state.status = action.payload;
      localStorage.setItem('status', action.payload);
    },
    setOffers(state, action: PayloadAction<IApplicationOffer[] | null>) {
      state.offers = action.payload;
      localStorage.setItem('offers', JSON.stringify(action.payload));
    },
    selectOffer(state, action: PayloadAction<IApplicationOffer | null>) {
      state.selectedOffer = action.payload;
      localStorage.setItem('selectedOffer', JSON.stringify(action.payload));
    },
  },
});

export const { setStatus, setOffers, selectOffer } = applicationSlice.actions;
