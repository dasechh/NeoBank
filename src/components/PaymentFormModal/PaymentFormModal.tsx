import { useNavigate } from 'react-router';
import clsx from 'clsx';
import { Button, Spinner } from '@/components';
import CloseIcon from '@icons/close_square.svg?react';
import styles from './PaymentFormModal.module.scss';

interface IPaymentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeny: () => void;
  loading: boolean;
  success: boolean;
  title: string;
  confirmText: string;
  successText: string;
  denyButtonText: string;
  cancelButtonText: string;
  goHomeButtonText: string;
}

export const PaymentFormModal = ({
  isOpen,
  onClose,
  onDeny,
  loading,
  success,
  title,
  confirmText,
  successText,
  denyButtonText,
  cancelButtonText,
  goHomeButtonText,
}: IPaymentFormModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    if (!success) {
      onClose();
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        {loading && <Spinner />}

        {!loading && (
          <>
            <div className={styles.modal__top}>
              <h4 className={styles.modal__heading}>{title}</h4>

              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>

            <p className={styles.modal__description}>{!success ? confirmText : successText}</p>

            <div className={clsx(styles.modal__buttons, success && styles.modal__buttons_denied)}>
              {!success && (
                <Button onClick={onDeny} variant="deny">
                  {denyButtonText}
                </Button>
              )}

              <Button onClick={handleClose} variant="primary">
                {!success ? cancelButtonText : goHomeButtonText}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
