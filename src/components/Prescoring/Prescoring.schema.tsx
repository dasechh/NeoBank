import { getAge } from '@/utils';
import { z } from 'zod';

export const prescoringSchema = z.object({
  lastName: z
    .string()
    .min(3, 'Enter your last name')
    .regex(/^[A-Za-z-]+$/, 'Only Latin letters are allowed'),

  firstName: z
    .string()
    .min(3, 'Enter your first name')
    .regex(/^[A-Za-z-]+$/, 'Only Latin letters are allowed'),

  middleName: z
    .string()
    .nullable()
    .refine((val) => val === null || /^[A-Za-z-]+$/.test(val), {
      message: 'Only Latin letters are allowed',
    }),

  email: z
    .string()
    .min(7, 'Incorrect email address')
    .regex(/^[^\s@-]+@[^\s@-]+\.[^\s@-]+$/, 'Incorrect email address'),

  birthdate: z
    .string()
    .nonempty('Incorrect date of birth')
    .refine(
      (dateString) => {
        if (!dateString) return false;
        const age = getAge(dateString);
        if (!age || age <= 18 || age >= 100) return false;
        return true;
      },
      {
        message: 'Incorrect date of birth',
      },
    ),

  passportSeries: z
    .string()
    .length(4, 'The number must be 6 digits')
    .regex(/^\d+$/, 'Numbers only'),

  passportNumber: z
    .string()
    .length(6, 'The number must be 6 digits')
    .regex(/^\d+$/, 'The number must be 6 digits'),

  term: z.number(),
  amount: z.number(),
});

export type TPrescoringSchemaInput = z.input<typeof prescoringSchema>;
