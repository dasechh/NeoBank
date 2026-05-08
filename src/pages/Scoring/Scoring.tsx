import styles from './Scoring.module.scss';
import { ScoringForm } from '@/components';
import { Message } from '@/components/Message';
import { useApplication } from '@/hooks/useApplication';

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

  return (
    <main>
      <div className={styles.main + ' container'}>
        {data.status === 'APPROVED' && status === 'APPROVED' ? (
          <ScoringForm />
        ) : (
          <Message data={messageData} />
        )}
      </div>
    </main>
  );
};
