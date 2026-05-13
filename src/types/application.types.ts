export type TApplicationStep = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IApplicationOffer {
  applicationId: number;
  isInsuraceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
  offerId: number;
}

export interface IApplicationState {
  step: TApplicationStep;
  offers: IApplicationOffer[] | null;
  selectedOffer: IApplicationOffer | null;
}
