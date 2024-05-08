/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider as RHFormProvider, UseFormProps } from 'react-hook-form';

type Props = Omit<UseFormProps, 'defaultValues' | 'resolver' | 'values'> & {
  children: React.ReactNode;
  methods: any;
  submitHandler: any;
  className?: string;
  style?: any;
};

export const FormProvider: React.FC<Props> = ({
  children,
  submitHandler,
  methods,
  className,
  style,
}) => {
  return (
    <RHFormProvider {...methods}>
      <form
        className={className}
        style={style}
        onSubmit={methods.handleSubmit(submitHandler)}
      >
        {children}
      </form>
    </RHFormProvider>
  );
};
