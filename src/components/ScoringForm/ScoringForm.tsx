import styles from './ScoringForm.module.scss';
import {
  Controller,
  FormProvider,
  get,
  useForm,
  type Path,
  type SubmitHandler,
} from 'react-hook-form';
import { Button, Spinner, FormLabel } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { scoringSchema, type TScoringSchemaInput } from './ScoringForm.schema';
import { scoringEmployment, scoringPerson } from './ScoringFormFields.constants';
import { useApplication } from '@/hooks';
import { putData } from '@/services';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import { submitScoringUrl } from '@/constants';

export const ScoringForm = () => {
  const { selectedOffer } = useApplication();

  if (!selectedOffer) {
    return;
  }

  const form = useForm<TScoringSchemaInput>({
    resolver: zodResolver(scoringSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      gender: undefined,
      maritalStatus: undefined,
      dependentAmount: undefined,
      passportIssueDate: undefined,
      passportIssueBranch: undefined,
      employment: {
        employmentStatus: undefined,
        employerINN: undefined,
        salary: undefined,
        position: undefined,
        workExperienceTotal: undefined,
        workExperienceCurrent: undefined,
      },
    },
  });

  const dispatch = useDispatch();
  const getError = (name: Path<TScoringSchemaInput>) => {
    return get(form.formState.errors, name)?.message;
  };

  const onSubmit: SubmitHandler<TScoringSchemaInput> = async (data) => {
    try {
      await putData(submitScoringUrl(selectedOffer?.applicationId), data);
      dispatch(setStatus('CC_APPROVED'));
    } catch (error) {
      form.setError('form', {
        message: 'An error occured. Try again later.',
      });
    }
  };

  return form.formState.isSubmitting ? (
    <Spinner />
  ) : (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className={styles.scoring}
        id="scoring"
      >
        {form.formState.isSubmitting ? (
          <Spinner />
        ) : (
          <>
            <FormLabel
              labelText="Continuation of the application"
              labelInfo="Step 2 of 5"
              gapWith="sm"
            />
            <div className={styles.scoring__sections}>
              <div className={styles.scoring__section}>
                {scoringPerson.map(({ component, props, id }) => {
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
                          valid={form.formState.isSubmitted ? !getError(props.name) : undefined}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            field.onChange(props.onChange?.(e) ?? e.currentTarget.value);
                          }}
                        />
                      )}
                    />
                  );
                })}
              </div>
              <h3 className={styles.scoring__subHeading}>Employment</h3>
              <div className={styles.scoring__section}>
                {scoringEmployment.map(({ component, props, id }) => {
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
                          valid={form.formState.isSubmitted ? !getError(props.name) : undefined}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            field.onChange(props.onChange?.(e) ?? e.currentTarget.value);
                          }}
                        />
                      )}
                    />
                  );
                })}
              </div>
            </div>

            <span className={styles.scoring__error}>{form.formState.errors.form?.message}</span>

            <Button type="submit" variant="primary" size="sm" className={styles.scoring__button}>
              Continue
            </Button>
          </>
        )}
      </form>
    </FormProvider>
  );
};
