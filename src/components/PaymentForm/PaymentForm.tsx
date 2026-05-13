import { useState } from 'react';
import { Button, Checkbox, FormLabel, Table, Spinner, PaymentFormModal } from '@/components';
import styles from './PaymentForm.module.scss';
import { useDispatch } from 'react-redux';
import { setStep } from '@/store';
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
      dispatch(setStep(4));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async () => {
    try {
      await denyApplication.serverResponse(applicationId);
      dispatch(setStep(0));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PaymentFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDeny={handleDeny}
        loading={denyApplication.responseLoading}
        success={!!denyApplication.responseData}
        title={denyModalText.title}
        confirmText={denyModalText.confirmText}
        successText={denyModalText.successText}
        denyButtonText={denyModalText.denyButton}
        cancelButtonText={denyModalText.cancelButton}
        goHomeButtonText={denyModalText.goHomeButton}
      />

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
