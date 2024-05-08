import { TextAreaProps, Textarea } from '@nextui-org/react';
import { useController, useFormContext } from 'react-hook-form';

type Props = Omit<
  TextAreaProps,
  'value' | 'onChange' | 'onBlur' | 'helperText'
> & {
  name: string;
};

export const FormTextArea: React.FC<Props> = ({ name, ...rest }) => {
  const { control, formState } = useFormContext();
  const { field } = useController({
    name,
    control,
  });
  const helperText = formState.errors[name]?.message?.toString();

  return (
    <Textarea
      value={field.value as string}
      onChange={field.onChange}
      onBlur={field.onBlur}
      errorMessage={helperText}
      isInvalid={!!helperText}
      {...rest}
    />
  );
};
