import type { FormInput, FormSelect } from '@/components';
import type { Path } from 'react-hook-form';

export type TFormField<T> =
  | {
      id: number;
      component: typeof FormInput;
      props: React.ComponentProps<typeof FormInput> & {
        name: Path<T>;
      };
    }
  | {
      id: number;
      component: typeof FormSelect;
      props: React.ComponentProps<typeof FormSelect> & {
        name: Path<T>;
      };
    };
