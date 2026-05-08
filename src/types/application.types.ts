export type TApplicationStatus =
  | 'REQUEST_DENIED'
  | 'PREAPPROVAL'
  | 'APPROVED'
  | 'CC_DENIED'
  | 'CC_APPROVED'
  | 'PREPARE_DOCUMENTS'
  | 'DOCUMENT_CREATED'
  | 'CLIENT_DENIED'
  | 'DOCUMENT_SIGNED'
  | 'CREDIT_ISSUED';

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
  status: TApplicationStatus;
  offers: IApplicationOffer[] | null;
  selectedOffer: IApplicationOffer | null;
}
