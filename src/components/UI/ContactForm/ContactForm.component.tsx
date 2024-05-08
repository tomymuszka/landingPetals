/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedMessage, useIntl } from 'react-intl';
import { z } from 'zod';
import { enqueueSnackbar } from 'notistack';
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { FormInput } from '../../FormControl/FormInput.component';
import { FormTextArea } from '../../FormControl/FormTextArea.component';
import { FormProvider } from '../../FormControl/FormProvider.components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  fullname: z.string().min(2),
  email: z.string().min(2).email(),
  country: z.string().min(2),
  text: z.string().optional(),
});

type FormType = {
  fullname: string;
  email: string;
  country: string;
  text?: string;
};

const defaultValues = {
  fullname: '',
  email: '',
  country: '',
  text: '',
};

export const ContactForm: React.FC = () => {
  const intl = useIntl();
  const [isLoading, setIsLoading] = useState(false);

  const showAlert = () => {
    const successMessage = intl.formatMessage({ id: 'form_succes' });

    enqueueSnackbar(successMessage, {
      variant: 'success',
    });
  };

  const showErrorAlert = () => {
    const errorMessage = intl.formatMessage({ id: 'form_fail' });

    enqueueSnackbar(errorMessage, {
      variant: 'error',
    });
  };

  const methods = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(contactSchema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onSubmit',
  });

  const handleSubmit = async (data: FormType) => {
    try {
      setIsLoading(true);
      const response: EmailJSResponseStatus = await emailjs.send(
        'service_xxoons6',
        'contact_form',
        data,
        'L8VrOoQFx8BcM634Q'
      );

      if (response.status === 200) {
        showAlert();
      } else {
        showErrorAlert();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      methods.reset();
    }
  };

  return (
    <Card className="w-[95%] lg:w-[360px]">
      <FormProvider
        submitHandler={(data: FormType) => {
          handleSubmit(data);
        }}
        methods={methods}
      >
        <CardHeader>
          <p className="text-xl pointer-events-none">
            <FormattedMessage id="form_title" />
          </p>
        </CardHeader>
        <CardBody className="flex flex-col gap-3">
          <FormInput
            name="fullname"
            size="sm"
            label={<FormattedMessage id="form_fullname" />}
          />
          <FormInput
            name="email"
            size="sm"
            label={<FormattedMessage id="form_email" />}
          />
          <FormInput
            name="country"
            size="sm"
            label={<FormattedMessage id="form_country" />}
          />
          <FormTextArea
            name="text"
            label={<FormattedMessage id="form_information" />}
          />
        </CardBody>
        <CardFooter>
          <Button
            isLoading={isLoading}
            color="primary"
            className="w-full"
            type="submit"
          >
            <FormattedMessage id="form_button" />
          </Button>
        </CardFooter>
      </FormProvider>
    </Card>
  );
};
