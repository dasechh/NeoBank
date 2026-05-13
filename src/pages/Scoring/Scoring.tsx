import styles from './Scoring.module.scss';
import { ScoringForm, Message } from '@/components';
import { useApplication } from '@/hooks';
import { Navigate, useParams } from 'react-router';

export const Scoring = () => {
  const { applicationId } = useParams();
  const { selectedOffer, step } = useApplication();
  const selectedId = selectedOffer?.applicationId;

  const messageData = {
    headingText: 'Wait for a decision on the application',
    descriptionText: 'The answer will come to your mail within 10 minutes',
  };

  if (String(selectedId) !== applicationId || step < 2) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main className={styles.main + ' container'}>
      {step === 2 && <ScoringForm />}
      {step !== 2 && <Message data={messageData} />}
    </main>
  );
};
