import styles from './Scoring.module.scss';
import { ScoringForm, Message } from '@/components';
import { useApplication } from '@/hooks';
import { Navigate, useLoaderData, useParams } from 'react-router';

export const Scoring = () => {
  const { applicationId } = useParams();
  const { selectedOffer, status } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const data = useLoaderData();

  const messageData = {
    headingText: 'Wait for a decision on the application',
    descriptionText: 'The answer will come to your mail within 10 minutes',
  };

  if (
    String(selectedId) !== applicationId ||
    !data.status ||
    ['REQUEST_DENIED', 'PREAPPROVAL'].includes(data.status)
  ) {
    return <Navigate to="NotFound" replace />;
  }

  const showMessage = data.status === 'APPROVED' && status === 'APPROVED';

  return (
    <main className={styles.main + ' container'}>
      {showMessage && <ScoringForm />}
      {!showMessage && <Message data={messageData} />}
    </main>
  );
};
