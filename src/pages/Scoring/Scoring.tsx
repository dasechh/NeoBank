import { getApplicationData } from '@/constants';
import styles from './Scoring.module.scss';
import { ScoringForm, Message } from '@/components';
import { useApplication } from '@/hooks';
import { getData } from '@/services';
import { Navigate, useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setStep } from '@/store';

export const Scoring = () => {
  const { applicationId } = useParams();
  const { selectedOffer, step } = useApplication();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedId = selectedOffer?.applicationId;

  const messageData = {
    headingText: 'Wait for a decision on the application',
    descriptionText: 'The answer will come to your mail within 10 minutes',
  };

  if (
    (String(selectedId) !== applicationId || step < 2 || !selectedOffer) &&
    !(step === 0 && selectedOffer)
  ) {
    return <Navigate to="NotFound" replace />;
  }

  if (step !== 2) {
    setTimeout(async () => {
      const res = await getData(getApplicationData(selectedOffer.applicationId));
      if (res.data.status === 'CC_DENIED') {
        dispatch(setStep(0));
        navigate('/');
      }
    }, 10000);
  }

  return (
    <main className={styles.main + ' container'}>
      {step === 2 && <ScoringForm />}
      {step !== 2 && <Message data={messageData} />}
    </main>
  );
};
