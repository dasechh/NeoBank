import { cardPromoFeatures, getCardSteps, tabs } from '@/data';
import styles from './Loan.module.scss';
import { CardPromo, Tabs, HowToGetCard, Prescoring, Offers, Message } from '@/components';
import { useApplication } from '@/hooks';
import { useDispatch } from 'react-redux';
import { selectOffer, setOffers } from '@/store';


export const Loan = () => {
  const { offers, selectedOffer, step } = useApplication();
  const dispatch = useDispatch();

  if (step === 0 && !offers) {
    dispatch(selectOffer(null));
    dispatch(setOffers(null));
  }

  let cardPromoButton;

  switch (step) {
    case 5:
      cardPromoButton = {
        text: 'Continue registration',
        target: `${selectedOffer?.applicationId}/code`,
        type: 'navigate' as const,
      };
      break;
    case 4:
      cardPromoButton = {
        text: 'Continue registration',
        target: `${selectedOffer?.applicationId}/document/sign`,
        type: 'navigate' as const,
      };
      break;
    case 3:
      cardPromoButton = {
        text: 'Continue registration',
        target: `${selectedOffer?.applicationId}/document`,
        type: 'navigate' as const,
      };
      break;
    case 2:
      cardPromoButton = {
        text: 'Continue registration',
        target: `${selectedOffer?.applicationId}`,
        type: 'navigate' as const,
      };
      break;
    case 1:
      cardPromoButton = {
        text: 'Choose an offer',
        target: 'offers',
        type: 'scroll' as const,
      };
      break;
    default:
      cardPromoButton = {
        text: 'Apply for card',
        target: 'prescoring',
        type: 'scroll' as const,
      };
      break;
  }

  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardPromo
          data={{
            items: cardPromoFeatures,
            button: cardPromoButton,
          }}
        />
        <Tabs data={tabs} />
        <HowToGetCard data={getCardSteps} />
        {step === 0 && <Prescoring />}
        {step === 1 && offers && <Offers data={offers} />}
        {step > 1 && (
          <Message
            data={{
              headingText: 'The preliminary decision has been sent to your email.',
              descriptionText:
                'In the letter you can get acquainted with the preliminary decision on the credit card.',
              border: true,
            }}
          />
        )}
      </div>
    </main>
  );
};
