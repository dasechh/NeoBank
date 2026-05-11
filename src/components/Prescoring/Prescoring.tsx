import styles from './Prescoring.module.scss';
import { Controller, FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Divider, Spinner, FormInput, FormSlider, FormLabel } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { prescoringSchema, type TPrescoringSchemaInput } from './Prescoring.schema';
import { normalizeNumber } from '@/utils';
import { prescoringFields } from './prescoringFields.constants';
import { postData } from '@/services';
import type { IApplicationOffer } from '@/types';
import { useDispatch } from 'react-redux';
import { setOffers, setStatus } from '@/store';
import { getOffersURL } from '@/constants';

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
  const dispatch = useDispatch();
  const isSubmitted = form.formState.isSubmitted;
  const getError = (name: keyof TPrescoringSchemaInput) => {
    return form.formState.errors[name]?.message;
  };

  const onSubmit: SubmitHandler<TPrescoringSchemaInput> = async (data) => {
    try {
      const response = await postData(getOffersURL, data);
      const offers = response.data
        .slice()
        .sort((a: IApplicationOffer, b: IApplicationOffer) => b.monthlyPayment - a.monthlyPayment)
        .map((offer: IApplicationOffer, index: number) => ({
          ...offer,
          offerId: index,
        }));
      dispatch(setOffers(offers));
      dispatch(setStatus('PREAPPROVAL'));
    } catch (error) {
      form.setError('form', {
        message: 'An error occured. Try again later.',
      });
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
        {form.formState.isSubmitting && <Spinner />}
        {!form.formState.isSubmitting && (
          <>
            <div className={styles.prescoring__top}>
              <div className={styles.prescoring__left}>
                <FormLabel labelText="Customize your card" labelInfo="Step 1 of 5" gapWith="lg" />

                <Controller
                  name="amount"
                  control={form.control}
                  render={({ field }) => (
                    <FormSlider
                      {...field}
                      label="Select amount"
                      min={15000}
                      max={600000}
                      step={1}
                      value={field.value || 0}
                      onChange={(e) => {
                        const num = e.target.valueAsNumber;
                        if (Number.isNaN(num)) return;
                        field.onChange(num);
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
                        let val = e.target.value;
                        if (val === '' || val === ' ') return field.onChange('');
                        field.onChange(normalizeNumber(val, 15000, 600000));
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className={styles.contact}>
              <h4 className={styles.contact__heading}>Contact information</h4>
              <div className={styles.contact__inputs}>
                {prescoringFields.map(({ component, props, id }) => {
                  const DynamicComponent = component as React.ElementType;
                  return (
                    <Controller
                      key={id}
                      name={props.name}
                      control={form.control}
                      render={({ field }) => (
                        <DynamicComponent
                          {...props}
                          {...field}
                          errorText={getError(props.name)}
                          value={field.value ?? ''}
                          valid={isSubmitted ? !getError(props.name) : undefined}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
                          ) => {
                            const val = e.target.value;
                            if (props.name === 'term') {
                              field.onChange(Number(val));
                            } else {
                              field.onChange(val);
                            }
                          }}
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            if (props.type === 'text' || props.type === 'email') {
                              const val = e.currentTarget.value;
                              field.onChange(val.trim());
                            }
                            e.target.value = e.target.value.trim();
                          }}
                        />
                      )}
                    />
                  );
                })}
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
