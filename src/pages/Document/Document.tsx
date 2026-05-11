import styles from './Document.module.scss';
import { useApplication } from '@/hooks';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { Message, PaymentForm } from '@/components';

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

  const showForm = data.status === 'CC_APPROVED' && status !== 'PREPARE_DOCUMENTS';
  console.log(showForm);
  return (
    <main className={styles.main + ' container'}>
      {showForm && <PaymentForm data={data.credit.paymentSchedule} />}
      {!showForm && <Message data={messData} />}
    </main>
  );
};
