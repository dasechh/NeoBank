import { cardPromoFeatures, getCardSteps, tabs } from '@/data';
import styles from './Loan.module.scss';
import { CardPromo, Tabs, HowToGetCard, Prescoring, Offers, Message } from '@/components';
import { useApplication } from '@/hooks';
import { useLoaderData } from 'react-router';

export const Loan = () => {
  const data = useLoaderData() ?? {};
  const { offers, status, selectedOffer } = useApplication();

  const hasOffers = Boolean(offers);
  const isDenied = data?.status === 'CC_DENIED' || status === 'CLIENT_DENIED';

  const showPrescoring = !hasOffers || isDenied || status === 'CREDIT_ISSUED';

  const showOffers = hasOffers && status === 'PREAPPROVAL';
  const showMessage =
    Boolean(status) &&
    status !== 'CC_DENIED' &&
    status !== 'CLIENT_DENIED' &&
    !showOffers &&
    !showPrescoring;

  let cardPromoButton;

  if (data?.status === 'DOCUMENT_SIGNED' || status === 'DOCUMENT_SIGNED') {
    cardPromoButton = {
      text: 'Continue registration',
      target: `${selectedOffer?.applicationId}/code`,
      type: 'navigate' as const,
    };
  } else if (data.status === 'DOCUMENT_CREATED') {
    cardPromoButton = {
      text: 'Continue registration',
      target: `${selectedOffer?.applicationId}/document/sign`,
      type: 'navigate' as const,
    };
  } else if (data.status === 'CC_APPROVED' || data.status === 'PREPARE_DOCUMENTS') {
    cardPromoButton = {
      text: 'Continue registration',
      target: `${selectedOffer?.applicationId}/document`,
      type: 'navigate' as const,
    };
  } else if (data?.status === 'APPROVED' || status === 'APPROVED') {
    cardPromoButton = {
      text: 'Continue registration',
      target: `${selectedOffer?.applicationId}`,
      type: 'navigate' as const,
    };
  } else if (data?.status === 'PREAPPROVAL' || status === 'PREAPPROVAL') {
    cardPromoButton = {
      text: 'Choose an offer',
      target: 'offers',
      type: 'scroll' as const,
    };
  } else {
    cardPromoButton = {
      text: 'Apply for card',
      target: 'prescoring',
      type: 'scroll' as const,
    };
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
        {showPrescoring && <Prescoring />}
        {showOffers && offers && <Offers data={offers} />}
        {showMessage && (
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
