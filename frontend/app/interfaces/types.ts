import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

type DataSimple = {
  email: string;
  password: string;
};

export type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps<T extends FieldValues> = {
  id: string;
  type: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "email" | "password" | "confirmPassword";
