import styles from './Prescoring.module.scss';
import { Controller, FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Divider, Spinner, FormInput, FormSelect } from '@/components';
import { postData } from '@/services';
import { zodResolver } from '@hookform/resolvers/zod';
import { prescoringSchema, type TPrescoringSchemaInput } from './Prescoring.schema';
import { normalizeNumber } from '@/utils';

export const Prescoring = () => {
  const form = useForm<TPrescoringSchemaInput>({
    resolver: zodResolver(prescoringSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      amount: 150000,
      term: 6,
      firstName: '',
      lastName: '',
      middleName: null,
      email: '',
      birthdate: '',
      passportSeries: '',
      passportNumber: '',
    },
  });

  const isSubmitted = form.formState.isSubmitted;
  const getError = (name: keyof TPrescoringSchemaInput) => {
    return form.formState.errors[name]?.message;
  };

  const onSubmit: SubmitHandler<TPrescoringSchemaInput> = async (data) => {
    try {
      const response = await postData('/application', data);

      if (!response) {
        console.error('Ошибка при отправке');
        return;
      }

      console.log('Успешно:', response);
    } catch (error) {
      form.setError('form', { message: 'An error occured. Try again later.' });
      return;
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className={styles.prescoring}
        id="prescoring"
      >
        {form.formState.isSubmitting ? (
          <Spinner />
        ) : form.formState.isSubmitSuccessful ? (
          <span>Submitted succesfully</span>
        ) : (
          <>
            <div className={styles.prescoring__top}>
              <div className={styles.prescoring__left}>
                <div className={styles.prescoring__head}>
                  <h3 className={styles.prescoring__heading}>Customize your card</h3>
                  <span className={styles.prescoring__step}>Step 1 of 5</span>
                </div>

                <Controller
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      type="range"
                      label="Select amount"
                      min={15000}
                      max={600000}
                      step={1}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.valueAsNumber);
                      }}
                    />
                  )}
                />
              </div>

              <Divider vertical dashed />

              <div className={styles.prescoring__right}>
                <h4>You have chosen the amount</h4>
                <Controller
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      type="number"
                      variant="empty"
                      inputMode="numeric"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.valueAsNumber);
                      }}
                      onBlur={(e) => {
                        const currentValue = e.target.value;
                        const next = normalizeNumber(currentValue, 15000, 600000);
                        field.onChange(next);
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className={styles.contact}>
              <h4 className={styles.contact__heading}>Contact information</h4>

              <div className={styles.contact__inputs}>
                <Controller
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value}
                      required
                      label="Your last name"
                      placeholder="For example Doe"
                      errorText={getError('lastName')}
                      valid={isSubmitted ? !getError('lastName') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value}
                      required
                      label="Your first name"
                      placeholder="For example John"
                      errorText={getError('firstName')}
                      valid={isSubmitted ? !getError('firstName') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="middleName"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value || ''}
                      label="Your patronymic"
                      placeholder="For example Victorovich"
                      errorText={getError('middleName')}
                      valid={isSubmitted ? !getError('middleName') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="term"
                  control={form.control}
                  render={({ field }) => (
                    <FormSelect
                      label="Select term"
                      value={field.value}
                      required
                      errorText={getError('term')}
                      valid={isSubmitted ? !getError('term') : undefined}
                      onChange={(e) => {
                        field.onChange(Number(e.target.value));
                      }}
                      options={[
                        { value: 6, label: '6 month' },
                        { value: 12, label: '12 month' },
                        { value: 18, label: '18 month' },
                        { value: 24, label: '24 month' },
                      ]}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value || ''}
                      type="email"
                      required
                      label="Your email"
                      placeholder="test@gmail.com"
                      errorText={getError('email')}
                      valid={isSubmitted ? !getError('email') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="birthdate"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value || ''}
                      type="date"
                      required
                      label="Your date of birth"
                      placeholder="Select date"
                      errorText={getError('birthdate')}
                      valid={isSubmitted ? !getError('birthdate') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="passportSeries"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value || ''}
                      inputMode="numeric"
                      required
                      type='number'
                      label="Your passport series"
                      placeholder="0000"
                      errorText={getError('passportSeries')}
                      valid={isSubmitted ? !getError('passportSeries') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  name="passportNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      value={field.value || ''}
                      inputMode="numeric"
                      required
                         type='number'
                      label="Your passport number"
                      placeholder="000000"
                      errorText={getError('passportNumber')}
                      valid={isSubmitted ? !getError('passportNumber') : undefined}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <span className={styles.prescoring__error}>{form.formState.errors.form?.message}</span>

            <Button type="submit" variant="primary" size="sm" className={styles.prescoring__button}>
              Continue
            </Button>
          </>
        )}
      </form>
    </FormProvider>
  );
};
