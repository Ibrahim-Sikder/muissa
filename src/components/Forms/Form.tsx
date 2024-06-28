import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
  methods: any;  // Add methods prop to receive useForm methods
};

type TInputProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const MUIForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  methods,  // Destructure methods prop
}: TInputProps) => {
  const { handleSubmit, reset } = methods;

  const submit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    onSubmit(data);
    reset();  // Reset the form here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default MUIForm;
