import styles from './Sign.module.scss';
import { useApplication } from '@/hooks';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { Message, SignForm } from '@/components';

export const Sign = () => {
  const { applicationId } = useParams();
  const { selectedOffer, status } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const data = useLoaderData();

  const messData = {
    headingText: 'Documents have been successfully signed and sent for approval',
    descriptionText: 'Within 10 minutes you will be sent a PIN code to your email for confirmation',
  };

  if (
    String(selectedId) !== applicationId ||
    !data.status ||
    [
      'PREAPPROVAL',
      'REQUEST_DENIED',
      'CC_DENIED',
      'APPROVED',
      'CC_APPROVED',
      'PREPARE_DOCUMETS',
    ].includes(data.status)
  ) {
    return <Navigate to="NotFound" replace />;
  }

  const showForm = data.status === 'DOCUMENT_CREATED' && status !== 'DOCUMENT_SIGNED';

  return (
    <main className={styles.main + ' container'}>
      {showForm && <SignForm />}
      {!showForm && <Message data={messData} />}
    </main>
  );
};
