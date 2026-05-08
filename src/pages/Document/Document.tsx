import styles from './Document.module.scss';

import { useApplication } from '@/hooks/useApplication';

import { Navigate, useLoaderData, useParams } from 'react-router';
import { Message } from '@/components/Message';
import { PaymentForm } from '@/components/PaymentForm/PaymentForm';

export const Document = () => {
  const { applicationId } = useParams();
  const { selectedOffer, status } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const data = useLoaderData();

  const messData = {
    headingText: 'Documents are formed',
    descriptionText: 'Documents for signing will be sent to your email',
  };

  if (
    String(selectedId) !== applicationId ||
    !data.status ||
    ['PREAPPROVAL', 'REQUEST_DENIED', 'CC_DENIED', 'APPROVED'].includes(data.status)
  ) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main>
      <div className={styles.main + ' container'}>
        {data.status === 'CC_APPROVED' && status !== 'PREPARE_DOCUMENTS' ? (
          <PaymentForm data={data.credit.paymentSchedule} />
        ) : (
          <Message data={messData} />
        )}
      </div>
    </main>
  );
};
