import styles from "./NewsletterSubscription.module.scss";
import Button from "@shared/ui/button";

import letterIcon from "./assets/letter.svg";

interface iNewsletterSubscriptionProps {
  onAction?: string;
  subscriptionName?: string;
}

export default function NewsletterSubscription({
  onAction,
  subscriptionName,
}: iNewsletterSubscriptionProps) {
  return (
    <section className={styles.subscribe || ""}>
      <h3 className={styles.subscribe__heading || ""}>
        Subscribe Newsletter
        {subscriptionName && (
          <>
            {" "}
            & get{" "}
            <span className={styles.subscribe__name || ""}>
              {subscriptionName}
            </span>
          </>
        )}
      </h3>
      <form action={onAction} className={styles.subscribe__form || ""}>
        <img src={letterIcon} alt="Your email" aria-hidden="true" />
        <input
          type="email"
          placeholder="Your email"
          className={styles.subscribe__input || ""}
        />
        <Button variant="newsletter">Subscribe</Button>
      </form>
    </section>
  );
}
