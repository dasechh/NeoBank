import { useSelector } from 'react-redux';

import { selectOffers, selectSelectedOffer, selectStep } from '@/store';

export function useApplication() {
  const step = useSelector(selectStep);

  const offers = useSelector(selectOffers);

  const selectedOffer = useSelector(selectSelectedOffer);

  return {
    step,
    offers,
    selectedOffer,
  };
}
