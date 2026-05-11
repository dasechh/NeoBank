import type { IApplicationOffer } from '@/types';
import styles from './Offers.module.scss';
import { Button, Spinner } from '@/components';
import CheckIcon from '@icons/check.svg?react';
import CrossIcon from '@icons/close_fill.svg?react';
import surpriseIconSrc from '@images/surprise.png';
import { formatNumber } from '@/utils';
import { useDispatch } from 'react-redux';
import { selectOffer, setStatus } from '@/store';
import { selectOfferURL } from '@/constants';
import { useDataLoader } from '@/hooks';

export const Offers = ({ data }: { data: IApplicationOffer[] }) => {
  const dispatch = useDispatch();
  const { serverResponse, responseLoading } = useDataLoader<IApplicationOffer>({
    method: 'POST',
    endpoint: selectOfferURL,
  });

  const pickOffer = async (offer: IApplicationOffer) => {
    try {
      await serverResponse(offer);
      dispatch(selectOffer(offer));
      dispatch(setStatus('APPROVED'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {responseLoading && <Spinner />}

      {!responseLoading && (
        <div className={styles.offers} id="offers">
          {data.map((offer) => (
            <div key={offer.offerId} className={styles.offer}>
              <img
                src={surpriseIconSrc}
                alt="Offfer image"
                aria-hidden="true"
                className={styles.offer__image}
              />
              <div className={styles.offer__conditions}>
                <span>Requested amount: {formatNumber(offer.requestedAmount)} ₽</span>
                <span>Total amount: {formatNumber(offer.totalAmount)} ₽</span>
                <span>For {offer.term} months</span>
                <span>Monthly payment: {formatNumber(offer.monthlyPayment)} ₽</span>
                <span>Your rate: {offer.rate}%</span>
                <span>
                  Insurance included
                  {offer.isInsuraceEnabled ? <CheckIcon /> : <CrossIcon />}
                </span>
                <span>Salary client {offer.isSalaryClient ? <CheckIcon /> : <CrossIcon />}</span>
              </div>
              <Button
                variant="primary"
                className={styles.offer__button}
                onClick={() => pickOffer(offer)}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
