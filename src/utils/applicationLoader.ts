import { type LoaderFunctionArgs } from 'react-router';
import { getData } from '@/services';
import { store } from '@/store/storeConfig';
import { getApplicationData } from '@/constants';

export const applicationLoader = async ({ params }: LoaderFunctionArgs) => {
  const selectedOfferId = store.getState().application.selectedOffer?.applicationId;
  const paramId = params.applicationId;
  const applicationId = paramId || selectedOfferId;

  if (!applicationId || (paramId && selectedOfferId && Number(paramId) !== selectedOfferId)) {
    return null;
  }

  try {
    const response = await getData(getApplicationData(applicationId));
    return response.data;
  } catch (e) {
    return null;
  }
};
