import styles from './Code.module.scss';

import { useApplication } from '@/hooks/useApplication';

import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router';
import { Message } from '@/components/Message';
import { CodeInput } from '@/components/CodeInput';
import doneImgSrc from '@images/surprise.png';
import { Button } from '@/components';

export const Code = () => {
  const { applicationId } = useParams();
  const { selectedOffer, status } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const data = useLoaderData();
  const navigate = useNavigate();

  const messData = {
    headingText: 'Congratulations! You have completed your new credit card.',
    descriptionText: 'Your credit card will arrive soon. Thank you for choosing us!',
    image: <img src={doneImgSrc} alt="Complete" aria-hidden="true" />,
    button: (
      <Button variant="primary" size="md" onClick={() => navigate('/')}>
        View other offers of our bank
      </Button>
    ),
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
      'PREPARE_DOCUMENTS',
    ].includes(data.status)
  ) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main>
      <div className={styles.main + ' container'}>
        {data.status === 'DOCUMENT_CREATED' &&
        status !== 'CREDIT_ISSUED' &&
        status === 'DOCUMENT_SIGNED' ? (
          <CodeInput length={4} submitURL={`/document/${selectedId}/sign/code`} />
        ) : (
          <Message data={messData} />
        )}
      </div>
    </main>
  );
};
