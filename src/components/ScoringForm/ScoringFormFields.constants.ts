import { FormInput, FormSelect } from '@/components';
import type { TFormField } from '@/types';
import type { TScoringSchemaInput } from './ScoringForm.schema';

export const scoringPerson = [
  {
    component: FormSelect,
    id: 0,
    props: {
      name: 'gender',
      label: "What's your gender",
      required: true,
      options: [
        { value: '', label: '', id: -1 },
        { value: 'MALE', label: 'Male', id: 0 },
        { value: 'FEMALE', label: 'Female', id: 1 },
      ],
    },
  },
  {
    component: FormSelect,
    id: 1,
    props: {
      name: 'maritalStatus',
      label: 'Your marital status',
      required: true,
      options: [
        { value: '', label: '', id: -1 },
        { value: 'MARRIED', label: 'Married', id: 0 },
        { value: 'DIVORCED', label: 'Divorced', id: 1 },
        { value: 'SINGLE', label: 'Single', id: 2 },
        { value: 'WIDOW_WIDOWER', label: 'Widow / Widower', id: 3 },
      ],
    },
  },
  {
    component: FormInput,
    id: 2,
    props: {
      name: 'dependentAmount',
      label: 'Your number of dependents',
      placeholder: '',
      inputMode: 'numeric',
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digit = e.target.value.replace(/\D/g, '').slice(0, 1);
        return digit ? Number(digit) : '';
      },
    },
  },
  {
    component: FormInput,
    id: 3,
    props: {
      name: 'passportIssueDate',
      label: 'Date of issue of the passport',
      placeholder: 'Select Date',
      type: 'date',
      required: true,
    },
  },
  {
    component: FormInput,
    id: 4,
    props: {
      name: 'passportIssueBranch',
      label: 'Division code',
      placeholder: '000000',
      type: 'text',
      required: true,
      inputMode: 'numeric',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/\D/g, '');
        const formatted =
          digits.length > 3 ? `${digits.slice(0, 3)}-${digits.slice(3, 6)}` : digits;
        return formatted;
      },
    },
  },
] satisfies TFormField<TScoringSchemaInput>[];

export const scoringEmployment = [
  {
    component: FormSelect,
    id: 5,
    props: {
      name: 'employment.employmentStatus',
      label: 'Your employment status',
      required: true,
      options: [
        { value: '', label: '', id: -1 },
        { value: 'UNEMPLOYED', label: 'Unemployed', id: 0 },
        { value: 'SELF_EMPLOYED', label: 'Self employed', id: 1 },
        { value: 'EMPLOYED', label: 'Employed', id: 2 },
        { value: 'BUSINESS_OWNER', label: 'Business owner', id: 3 },
      ],
    },
  },
  {
    component: FormInput,
    id: 6,
    props: {
      name: 'employment.employerINN',
      label: 'Your employer INN',
      placeholder: '000000000000',
      inputMode: 'numeric',
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digit = e.target.value.replace(/\D/g, '').slice(0, 12);
        return digit ? Number(digit) : '';
      },
    },
  },
  {
    component: FormInput,
    id: 7,
    props: {
      name: 'employment.salary',
      label: 'Your salary',
      placeholder: 'For example 100 000',
      inputMode: 'numeric',
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digit = e.target.value.replace(/\D/g, '');
        return digit ? Number(digit) : '';
      },
    },
  },
  {
    component: FormSelect,
    id: 8,
    props: {
      name: 'employment.position',
      label: 'Your position',
      required: true,
      options: [
        { value: '', label: '', id: -1 },
        { value: 'WORKER', label: 'Worker', id: 1 },
        { value: 'MID_MANAGER', label: 'Mid manager', id: 3 },
        { value: 'TOP_MANAGER', label: 'Top manager', id: 2 },
        { value: 'OWNER', label: 'Owner', id: 4 },
      ],
    },
  },
  {
    component: FormInput,
    id: 9,
    props: {
      name: 'employment.workExperienceTotal',
      label: 'Your work experience total',
      placeholder: 'For example 10',
      inputMode: 'numeric',
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digit = e.target.value.replace(/\D/g, '').slice(0, 2);
        return digit ? Number(digit) : '';
      },
    },
  },
  {
    component: FormInput,
    id: 10,
    props: {
      name: 'employment.workExperienceCurrent',
      label: 'Your work experience current',
      placeholder: 'For example 2',
      inputMode: 'numeric',
      required: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const digit = e.target.value.replace(/\D/g, '').slice(0, 2);
        return Number(digit);
      },
    },
  },
] satisfies TFormField<TScoringSchemaInput>[];
