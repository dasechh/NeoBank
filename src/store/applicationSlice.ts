import type { IApplicationOffer, IApplicationState, TApplicationStep } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initSelectedOffer = localStorage.getItem('selectedOffer');
const initOffers = localStorage.getItem('offers');
const initStep = Number(localStorage.getItem('step')) as TApplicationStep;

const initialState: IApplicationState = {
  step: initStep || 0,
  offers: initOffers ? JSON.parse(initOffers) : null,
  selectedOffer: initSelectedOffer ? JSON.parse(initSelectedOffer) : null,
};

export const applicationSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {
    setStep(state, action: PayloadAction<TApplicationStep>) {
      state.step = action.payload;
      localStorage.setItem('step', String(action.payload));
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

export const { setStep, setOffers, selectOffer, } = applicationSlice.actions;