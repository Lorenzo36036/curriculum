import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type FormFieldProps = {
  id: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "email" | "password" | "confirmPassword";

