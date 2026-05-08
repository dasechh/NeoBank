import { useState } from 'react';
import { Button, Checkbox, FormLabel, Table, Spinner } from '@/components';
import styles from './PaymentForm.module.scss';
import { postData } from '@/services';
import { useNavigate } from 'react-router';
import CloseIcon from '@icons/close_square.svg?react';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import clsx from 'clsx';
import { denyScheduleURL, submitScheduleURL } from '@/constants';
import { paymentColumns, denyModalText, labelProps } from './PaymentForm.config';
import { useApplication } from '@/hooks';

interface IPaymentFormProps {
  data: Record<string, string | number>[];
}

export const PaymentForm = ({ data }: IPaymentFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [denied, setDenied] = useState<boolean>(false);
  const [signed, setSigned] = useState<boolean>(false);
  const { selectedOffer } = useApplication();
  const applicationId = selectedOffer?.applicationId;
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!applicationId) {
    throw new Error('No application id');
  }

  const submitSchedule = async () => {
    setLoading(true);
    try {
      await postData(submitScheduleURL(applicationId), applicationId);
      dispatch(setStatus('PREPARE_DOCUMENTS'));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeny = async () => {
    setModalLoading(true);
    try {
      await postData(denyScheduleURL(applicationId), applicationId);
      setDenied(true);
      dispatch(setStatus('CLIENT_DENIED'));
    } catch (error) {
      console.error(error);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            {modalLoading ? (
              <Spinner />
            ) : (
              <>
                <div className={styles.modal__top}>
                  <h4 className={styles.modal__heading}>{denyModalText.title}</h4>
                  <Button
                    onClick={() => {
                      !denied ? setIsModalOpen(false) : navigate('/');
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </div>
                <p className={styles.modal__description}>
                  {!denied ? denyModalText.confirmText : denyModalText.successText}
                </p>
                <div
                  className={clsx(styles.modal__buttons, denied && styles.modal__buttons_denied)}
                >
                  {!denied && (
                    <Button onClick={handleDeny} variant="deny">
                      {denyModalText.denyButton}
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      !denied ? setIsModalOpen(false) : navigate('/');
                    }}
                    variant="primary"
                  >
                    {!denied ? denyModalText.cancelButton : denyModalText.goHomeButton}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className={styles.payment}>
        {loading ? (
          <Spinner />
        ) : (
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
                  onChange={(value) => {
                    setSigned(value);
                  }}
                />
                <Button
                  variant="primary"
                  className={styles.payment__button}
                  type="submit"
                  disabled={!signed}
                  onClick={submitSchedule}
                >
                  Send
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
