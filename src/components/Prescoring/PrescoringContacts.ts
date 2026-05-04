import { FormInput, FormSelect } from '@/components';

import type { TFormField } from '@/types';
import type { TPrescoringSchemaInput } from './Prescoring.schema';

export const contactFields = [
  {
    component: FormInput,
    id: 1,
    props: {
      name: 'firstName',
      label: 'Your first name',
      placeholder: 'For example John',
      type: 'text',
      required: true,
    },
  },
  {
    component: FormInput,
    id: 0,
    props: {
      name: 'lastName',
      label: 'Your last name',
      placeholder: 'For example Doe',
      type: 'text',
      required: true,
    },
  },

  {
    component: FormInput,
    id: 2,
    props: {
      name: 'middleName',
      label: 'Your patronymic',
      placeholder: 'For example Victorovich',
      type: 'text',
      required: false,
    },
  },
  {
    component: FormSelect,
    id: 7,
    props: {
      name: 'term',
      label: 'Select term',
      required: true,
      options: [
        { value: 6, label: '6 month', id: 6 },
        { value: 12, label: '12 month', id: 12 },
        { value: 18, label: '18 month', id: 18 },
        { value: 24, label: '24 month', id: 24 },
      ],
    },
  },
  {
    component: FormInput,
    id: 3,
    props: {
      name: 'email',
      label: 'Your email',
      placeholder: 'test@gmail.com',
      type: 'email',
      required: true,
    },
  },
  {
    component: FormInput,
    id: 4,
    props: {
      name: 'birthdate',
      label: 'Your date of birth',
      placeholder: 'Select date',
      type: 'date',
      required: true,
    },
  },
  {
    component: FormInput,
    id: 5,
    props: {
      name: 'passportSeries',
      label: 'Your passport series',
      placeholder: '0000',
      type: 'number',
      inputMode: 'numeric',
      required: true,
    },
  },
  {
    component: FormInput,
    id: 6,
    props: {
      name: 'passportNumber',
      label: 'Your passport number',
      placeholder: '000000',
      type: 'number',
      inputMode: 'numeric',
      required: true,
    },
  },
] satisfies TFormField<TPrescoringSchemaInput>[];
