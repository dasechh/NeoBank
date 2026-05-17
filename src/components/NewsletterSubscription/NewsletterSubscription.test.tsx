import { render, screen } from '@testing-library/react';
import { NewsletterSubscription } from './NewsletterSubscription';
import { useNewsletterSubscribe } from '@/hooks';
import userEvent from '@testing-library/user-event';

vi.mock('@/hooks', () => ({
  useNewsletterSubscribe: vi.fn(),
}));

describe('Newsletter subscription form', () => {
  test('Renders on initial state', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: false,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: null,
    });
    render(<NewsletterSubscription />);
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Passes subscription name', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: false,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: null,
    });
    render(<NewsletterSubscription subscriptionName="meow" />);
    expect(screen.getByText(/meow/i));
  });

  test('Shows success message when subscribed', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: true,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: 'success',
    });
    render(<NewsletterSubscription />);
    expect(screen.queryByPlaceholderText('Your email')).not.toBeInTheDocument();
    expect(screen.getByText(/already subscribed/i)).toBeInTheDocument();
  });

  test('Blocks input elements when loading', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: false,
      newsletterSubscribeLoading: true,
      submitSubscription: vi.fn(),
      subscriptionStatus: null,
    });
    render(<NewsletterSubscription />);
    expect(screen.getByPlaceholderText('Your email')).toBeDisabled();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Shows error message when fails', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: false,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: 'error',
    });
    render(<NewsletterSubscription />);
    expect(screen.getByText(/failed to subscribe/i)).toBeInTheDocument();
  });

  test('Calls submission on submit', async () => {
    const submitFn = vi.fn((e) => e.preventDefault());
    const user = userEvent.setup();
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: false,
      newsletterSubscribeLoading: false,
      submitSubscription: submitFn,
      subscriptionStatus: null,
    });
    render(<NewsletterSubscription />);
    await user.type(screen.getByPlaceholderText('Your email'), 'test@gmail.com');
    await user.click(screen.getByRole('button'));
    expect(submitFn).toHaveBeenCalledTimes(1);
  });

  test('Doesnt show form when subscribed', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: true,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: 'success',
    });
    render(<NewsletterSubscription />);
    expect(screen.queryByPlaceholderText('Your email')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('Shows success text when subscribed', () => {
    (useNewsletterSubscribe as any).mockReturnValue({
      isSubscribed: true,
      newsletterSubscribeLoading: false,
      submitSubscription: vi.fn(),
      subscriptionStatus: 'success',
    });
    render(<NewsletterSubscription />);
    expect(screen.getByText(/already subscribed/i));
  });
});
