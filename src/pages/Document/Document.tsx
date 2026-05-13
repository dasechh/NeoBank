import styles from './Document.module.scss';
import { useApplication } from '@/hooks';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { Message, PaymentForm } from '@/components';

export const Document = () => {
  const { applicationId } = useParams();
  const { selectedOffer, step } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const data = useLoaderData();

  const messData = {
    headingText: 'Documents are formed',
    descriptionText: 'Documents for signing will be sent to your email',
  };

  if (String(selectedId) !== applicationId || (step < 3 && step !== 4)) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main className={styles.main + ' container'}>
      {step === 3 && <PaymentForm data={data.credit.paymentSchedule} />}
      {step !== 3 && <Message data={messData} />}
    </main>
  );
};
