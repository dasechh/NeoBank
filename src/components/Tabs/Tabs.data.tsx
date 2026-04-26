import moneyIconSrc from '@icons/money_duotone.svg';
import calendarIconSrc from '@icons/calendar_duotone.svg';
import clockIconSrc from '@icons/clock_duotone.svg';
import bagIconSrc from '@icons/bag_duotone.svg';
import cardIconSrc from '@icons/credit-card_duotone.svg';

export const ratesData = [
  {
    label: 'Card currency',
    value: ['Rubles, dollars, euro'],
    id: 0,
  },
  {
    label: 'Interest free period',
    value: ['0% up to 160 days'],
    id: 1,
  },
  {
    label: 'Payment system',
    value: ['Mastercard, Visa'],
    id: 2,
  },
  {
    label: 'Maximum credit limit on the card',
    value: ['600 000 ₽'],
    id: 3,
  },
  {
    label: 'Replenishment and withdrawal',
    value: ['At any ATM. Top up your credit card for free with cash or transfer from other cards'],
    id: 4,
  },
  {
    label: 'Max cashback per month',
    value: ['15 000 ₽'],
    id: 5,
  },
  {
    label: 'Transaction Alert',
    value: [
      '60 ₽ — SMS or push notifications',
      '0 ₽ — card statement, information about transactions in the online bank',
    ],
    id: 6,
  },
];

export const benefitsData = [
  {
    iconSrc: moneyIconSrc,
    title: 'Up to 50 000 ₽',
    description: 'Cash and transfers without comission and percent',
    id: 0,
  },
  {
    iconSrc: calendarIconSrc,
    title: 'Up to 160 days',
    description: 'Without percent on the loan',
    id: 1,
  },
  {
    iconSrc: clockIconSrc,
    title: 'Free delivery',
    description: 'We will deliver your card by courier at a convenient place and time for you',
    id: 2,
  },
  {
    iconSrc: bagIconSrc,
    title: 'Up to 12 months',
    description: 'No percent. For equipment, clothes and other purchases in installments',
    id: 3,
  },
  {
    iconSrc: cardIconSrc,
    title: 'Convenient deposit and withdrawal',
    description:
      'At ant ATM. Top up your credit card for free with cash or transfer from other cards',
    id: 4,
  },
];

export const FAQchildren = [
  {
    title: 'Issuing and receiving a card',
    accordionsData: [
      {
        title: 'How to get a card?',
        description: `We will deliver your card by courier free of charge. 
        Delivery in Moscow and St. Petersburg - 1-2 working days. 
        For other regions of the Russian Federation - 2-5 working days.`,
        id: 0,
      },
      {
        title: 'What documents are needed and how old should one be to get a card?',
        description: `Need a passport. You must be between 20 and 70 years old.`,
        id: 1,
      },
      {
        title: 'In what currency can I issue a card?',
        description: `In rubles, dollars or euro`,
        id: 2,
      },
      {
        title: 'How much income do I need to get a credit card?',
        description: `To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.`,
        id: 3,
      },
      {
        title: "How do I find out about the bank's decision on my application?",
        description: `After registration, you will receive an e-mail with a decision on your application.`,
        id: 4,
      },
    ],
    id: 0,
  },
  {
    title: 'Using a credit card',
    accordionsData: [
      {
        title: 'What is an interest free credit card?',
        description: `A credit card with a grace period is a bank card with an established credit limit,
         designed for payment, reservation of goods and services, as well as for receiving cash, 
         which allows you to use credit funds free of charge for a certain period.`,
        id: 0,
      },
      {
        title: 'How to activate a credit card',
        description: `You can activate your credit card and generate a PIN code immediately after receiving 
        the card at a bank branch using a PIN pad.`,
        id: 1,
      },
      {
        title: 'What is a settlement date?',
        description: `The settlement date is the date from which you can pay off the debt for the reporting period. 
        The settlement date falls on the first calendar day following the last day of the reporting period. 
        The first settlement date is reported by the bank when transferring the issued credit card to the client, 
        and then in the monthly account statement.`,
        id: 2,
      },
      {
        title: 'What do I need to know about interest rates?',
        description: `For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, 
        a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, 
        as well as the total amount of debt as of the date of issue.`,
        id: 3,
      },
    ],
    id: 2,
  },
];

export const cashbackData = [
  {
    title: '5%',
    description: 'For food delivery, cafes and restaurants',
    id: 0,
  },
  {
    title: '5%',
    description: 'In supermarkets with our subscription',
    id: 1,
  },
  {
    title: '2%',
    description: 'In clothing stores and children’s goods',
    id: 2,
  },
  {
    title: '1%',
    description: 'Other purchases and payment of services and fines',
    id: 3,
  },
  {
    title: 'up to 3%',
    description: 'Shopping in online stores',
    id: 4,
  },
  {
    title: '30%',
    description: 'Purchases from our partners',
    id: 5,
  },
];
