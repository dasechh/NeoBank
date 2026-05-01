import { postData } from '@/services';
import React, { useState } from 'react';

type TSubscribeType = 'Newsletter';
type TSubscribeStatus = 'idle' | 'success' | 'error';

export function useNewsletterSubscribe(type: TSubscribeType) {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    localStorage.getItem(`${type}Subscribed`) === 'true',
  );
  const [newsletterSubscribeLoading, setNewsletterSubscribeLoading] = useState<boolean>(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<TSubscribeStatus>('idle');

  async function submitSubscription(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterSubscribeLoading(true);

    const formData = new FormData(e.currentTarget).get('email');
    const subscribeResult = await postData('/email', { formData });

    if (subscribeResult && subscribeResult.statusText === 'OK') {
      setIsSubscribed(true);
      setSubscriptionStatus('success');
      localStorage.setItem(`${type}Subscribed`, 'true');
    } else {
      setSubscriptionStatus('error');
      console.error('Failed to subscribe to newsletter');
    }

    setNewsletterSubscribeLoading(false);
  }

  return { isSubscribed, newsletterSubscribeLoading, submitSubscription, subscriptionStatus };
}
