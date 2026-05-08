import { useSelector } from 'react-redux';

import { selectOffers, selectSelectedOffer, selectStatus } from '@/store/selectors';

export function useApplication() {
  const status = useSelector(selectStatus);

  const offers = useSelector(selectOffers);

  const selectedOffer = useSelector(selectSelectedOffer);

  return {
    status,
    offers,
    selectedOffer,
  };
}
