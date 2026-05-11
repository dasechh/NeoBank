import { useState } from 'react';
import { Button, Checkbox, FormLabel, Spinner } from '@/components';
import FileIcon from '@icons/file_dock_duotone.svg?react';

import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import styles from './SignForm.module.scss';
import { useApplication, useDataLoader } from '@/hooks';

export const SignForm = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { selectedOffer } = useApplication();
  const applicationId = selectedOffer?.applicationId;

  const { serverResponse, responseLoading } = useDataLoader({
    method: 'POST',
    endpoint: `/document/${applicationId}/sign`,
  });

  const signDocument = async () => {
    try {
      await serverResponse(applicationId);
      dispatch(setStatus('DOCUMENT_SIGNED'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {responseLoading && <Spinner />}

      {!responseLoading && (
        <form
          className={styles.sign}
          onSubmit={(e) => {
            e.preventDefault();
            signDocument();
          }}
        >
          <FormLabel labelText="Signing of documents" labelInfo="Step 4 of 5" gapWith="md" />
          <p className={styles.sign__description}>
            Information on interest rates under banj deposit agreements with individuals. Center for
            Corporate Information Disclosure. Information of a professional participant in the
            securities market. Information about persons under whose control or significant
            influence the Partner Bank are. by leaving an application, you agree to the processing
            of personal data, obtaining information, obtaining access to a credit history, using an
            analogue of a handwritten signarure, an offer, a policy regarding the procesing of
            personal data, a form of consent to the processing of personal data.
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
              type="submit"
              className={styles.sign__button}
            >
              Send
            </Button>
          </div>
        </form>
      )}
    </>
  );
};
