import { useState } from 'react';
import { Button, Checkbox, FormLabel, Spinner } from '@/components';
import FileIcon from '@icons/file_dock_duotone.svg?react';
import { postData } from '@/services';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import styles from './SignForm.module.scss';
import { useApplication } from '@/hooks';

export const SignForm = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const { selectedOffer } = useApplication();
  const applicationId = selectedOffer?.applicationId;

  const signDocument = async () => {
    setLoading(true);
    try {
      await postData(`/document/${applicationId}/sign`, applicationId);
      dispatch(setStatus('DOCUMENT_SIGNED'));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className={styles.sign}>
      <FormLabel labelText="Signing of documents" labelInfo="Step 4 of 5" gapWith="md" />
      <p className={styles.sign__description}>
        Information on interest rates under banj deposit agreements with individuals. Center for
        Corporate Information Disclosure. Information of a professional participant in the
        securities market. Information about persons under whose control or significant influence
        the Partner Bank are. by leaving an application, you agree to the processing of personal
        data, obtaining information, obtaining access to a credit history, using an analogue of a
        handwritten signarure, an offer, a policy regarding the procesing of personal data, a form
        of consent to the processing of personal data.
      </p>
      <a
        href="/files/credit-card-offer.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.sign__document}
      >
        <FileIcon />
        <span>Information on your card</span>
      </a>
      <div className={styles.sign__actions}>
        <Checkbox
          label="I agree"
          required
          onChange={(value) => {
            setChecked(value);
          }}
        />
        <Button
          variant="primary"
          disabled={!checked}
          onClick={signDocument}
          className={styles.sign__button}
        >
          Send
        </Button>
      </div>
    </section>
  );
};
