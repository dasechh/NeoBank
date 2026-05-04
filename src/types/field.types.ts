import type { FormInput, FormSelect } from '@/components';

export type TFormField<T> =
  | {
      id: number;
      component: typeof FormInput;
      props: React.ComponentProps<typeof FormInput> & {
        name: keyof T;
      };
    }
  | {
      id: number;
      component: typeof FormSelect;
      props: React.ComponentProps<typeof FormSelect> & {
        name: keyof T;
      };
    };
