import styles from './NewsletterSubscription.module.scss';
import { Button } from '@/components';
import { useNewsletterSubscribe } from '@/hooks';
import letterIconSrc from '@icons/letter.svg';
import sendIconSrc from '@icons/send.svg';

export const NewsletterSubscription = ({ subscriptionName }: { subscriptionName?: string }) => {
  const { isSubscribed, newsletterSubscribeLoading, submitSubscription, subscriptionStatus } =
    useNewsletterSubscribe('Newsletter');

  return (
    <section className={styles.subscribe}>
      <h3 className={styles.subscribe__heading}>
        Subscribe Newsletter
        {subscriptionName && (
          <>
            {' '}
            & get <span className={styles.subscribe__name}>{subscriptionName}</span>
          </>
        )}
      </h3>
      {isSubscribed && (
        <p className={styles.subscribe__success}>
          You are already subscribed to the bank's newsletter
        </p>
      )}
      {!isSubscribed && (
        <form onSubmit={submitSubscription} className={styles.subscribe__form}>
          <img src={letterIconSrc} alt="Your email" aria-hidden="true" />
          <input
            type="email"
            placeholder="Your email"
            className={styles.subscribe__input}
            name="email"
            disabled={newsletterSubscribeLoading}
            required
          />
          <Button variant="newsletter" disabled={newsletterSubscribeLoading} type="submit">
            <img src={sendIconSrc} alt="Send" />
            {newsletterSubscribeLoading ? 'Submitting...' : 'Subscribe'}
          </Button>
          {subscriptionStatus === 'error' && (
            <p className={styles.subscribe__error}>Failed to subscribe to newsletter.</p>
          )}
        </form>
      )}
    </section>
  );
};
