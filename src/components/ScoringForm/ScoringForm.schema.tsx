import { z } from 'zod';

export const scoringSchema = z.object({
  gender: z.enum(['MALE', 'FEMALE'], 'Select one of the options'),

  maritalStatus: z.enum(
    ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
    'Select one of the options',
  ),

  dependentAmount: z
    .number({ message: 'Enter your number of dependents' })
    .min(0, 'Enter your number of dependents')
    .max(10, 'Enter your number of dependents'),

  passportIssueDate: z.string({ message: 'Incorrect date' }).refine(
    (dateString) => {
      if (!dateString) return false;
      const date = new Date(dateString);
      const now = new Date();
      return date <= now;
    },
    {
      message: 'Incorrect date of passport issue date',
    },
  ),

  passportIssueBranch: z
    .string({ message: 'The series must be 6 digits' })
    .regex(/^\d{3}-\d{3}$/, 'The series must be 6 digits'),

  employment: z.object({
    employmentStatus: z.enum(
      ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
      'Select one of the options',
    ),

    employerINN: z
      .number({ message: 'Department code must be 12 digits' })
      .refine((value) => /^\d{12}$/.test(String(value)), {
        message: 'Department code must be 12 digits',
      }),

    salary: z.number({
      message: 'Enter your salary',
    }),

    position: z.enum(
      ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
      'Select one of the options',
    ),

    workExperienceTotal: z.number({
      message: 'Enter your work experience total',
    }),

    workExperienceCurrent: z.number({
      message: 'Enter your work experience current',
    }),
  }),
});

export type TScoringSchemaInput = z.infer<typeof scoringSchema>;
