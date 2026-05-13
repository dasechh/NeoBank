import styles from './Sign.module.scss';
import { useApplication } from '@/hooks';
import { Navigate, useParams } from 'react-router';
import { Message, SignForm } from '@/components';

export const Sign = () => {
  const { applicationId } = useParams();
  const { selectedOffer, step } = useApplication();
  const selectedId = selectedOffer?.applicationId;

  const messData = {
    headingText: 'Documents have been successfully signed and sent for approval',
    descriptionText: 'Within 10 minutes you will be sent a PIN code to your email for confirmation',
  };

  if (String(selectedId) !== applicationId || step < 4) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main className={styles.main + ' container'}>
      {step === 4 && <SignForm />}
      {step !== 4 && <Message data={messData} />}
    </main>
  );
};
