import styles from './Code.module.scss';
import { useApplication } from '@/hooks';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Message, CodeInput, Button } from '@/components';
import doneImgSrc from '@images/surprise.png';

export const Code = () => {
  const { applicationId } = useParams();
  const { selectedOffer, step } = useApplication();
  const selectedId = selectedOffer?.applicationId;
  const navigate = useNavigate();

  const messData = {
    headingText: 'Congratulations! You have completed your new credit card.',
    descriptionText: 'Your credit card will arrive soon. Thank you for choosing us!',
    image: <img src={doneImgSrc} alt="Complete" aria-hidden="true" />,
    button: (
      <Button
        variant="primary"
        size="md"
        onClick={() => {
          navigate('/');
        }}
      >
        View other offers of our bank
      </Button>
    ),
  };

  if (String(selectedId) !== applicationId || (step < 5 && step !== 0)) {
    return <Navigate to="NotFound" replace />;
  }

  return (
    <main className={styles.main + ' container'}>
      {step === 5 && <CodeInput length={4} submitURL={`/document/${selectedId}/sign/code`} />}
      {step === 0 && <Message data={messData} />}
    </main>
  );
};
