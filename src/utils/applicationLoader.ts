import { redirect, type LoaderFunctionArgs } from 'react-router';
import { getData } from '@/services';
import { store } from '@/store/storeConfig';

export const applicationLoader = async ({ params }: LoaderFunctionArgs) => {
  const selectedOfferId = store.getState().application.selectedOffer?.applicationId;
  const paramId = params.applicationId;
  const applicationId = paramId || selectedOfferId;

  if (!applicationId) {
    return null;
  }

  if (paramId && selectedOfferId && Number(paramId) !== selectedOfferId) {
    throw redirect('/404');
  }
  try {
    const response = await getData(`/admin/application/${applicationId}`);
    return response.data;
  } catch (e) {
    return null;
  }
};
