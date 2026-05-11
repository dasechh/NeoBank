import { useState } from 'react';
import { Button, Checkbox, FormLabel, Table, Spinner } from '@/components';
import styles from './PaymentForm.module.scss';
import { useNavigate } from 'react-router';
import CloseIcon from '@icons/close_square.svg?react';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import clsx from 'clsx';
import { denyScheduleURL, submitScheduleURL } from '@/constants';
import { paymentColumns, denyModalText, labelProps } from './PaymentForm.config';
import { useApplication, useDataLoader } from '@/hooks';

interface IPaymentFormProps {
  data: Record<string, string | number>[];
}

export const PaymentForm = ({ data }: IPaymentFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signed, setSigned] = useState(false);
  const { selectedOffer } = useApplication();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const applicationId = selectedOffer?.applicationId;
  if (!applicationId) {
    throw new Error('No application id');
  }

  const submitSchedule = useDataLoader<number>({
    method: 'POST',
    endpoint: submitScheduleURL(applicationId),
  });

  const denyApplication = useDataLoader<number>({
    method: 'POST',
    endpoint: denyScheduleURL(applicationId),
  });

  const handleSubmit = async () => {
    try {
      await submitSchedule.serverResponse(applicationId);
      dispatch(setStatus('PREPARE_DOCUMENTS'));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async () => {
    try {
      await denyApplication.serverResponse(applicationId);
      dispatch(setStatus('CLIENT_DENIED'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            {denyApplication.responseLoading && <Spinner />}
            {!denyApplication.responseLoading && (
              <>
                <div className={styles.modal__top}>
                  <h4 className={styles.modal__heading}>{denyModalText.title}</h4>
                  <Button
                    onClick={() => {
                      !denyApplication.responseData ? setIsModalOpen(false) : navigate('/');
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </div>

                <p className={styles.modal__description}>
                  {!denyApplication.responseData
                    ? denyModalText.confirmText
                    : denyModalText.successText}
                </p>

                <div
                  className={clsx(
                    styles.modal__buttons,
                    denyApplication.responseData && styles.modal__buttons_denied,
                  )}
                >
                  {!denyApplication.responseData && (
                    <Button onClick={handleDeny} variant="deny">
                      {denyModalText.denyButton}
                    </Button>
                  )}

                  <Button
                    onClick={() => {
                      !denyApplication.responseData ? setIsModalOpen(false) : navigate('/');
                    }}
                    variant="primary"
                  >
                    {!denyApplication.responseData
                      ? denyModalText.cancelButton
                      : denyModalText.goHomeButton}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <form
        className={styles.payment}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {submitSchedule.responseLoading && <Spinner />}
        {!submitSchedule.responseLoading && (
          <>
            <FormLabel
              labelText={labelProps.labelText}
              labelInfo={labelProps.labelInfo}
              gapWith="md"
            />
            <Table data={data} columns={paymentColumns} />
            <div className={styles.payment__bottom}>
              <Button
                variant="deny"
                type="button"
                className={styles.payment__button}
                onClick={() => setIsModalOpen(true)}
              >
                Deny
              </Button>
              <div className={styles.payment__submisson}>
                <Checkbox
                  label="I agree with the payment schedule"
                  required
                  onChange={(v) => setSigned(v)}
                />
                <Button
                  variant="primary"
                  className={styles.payment__button}
                  type="submit"
                  disabled={!signed}
                >
                  Send
                </Button>
              </div>
            </div>
          </>
        )}
      </form>
    </>
  );
};
