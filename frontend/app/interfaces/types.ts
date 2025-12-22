import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

export type FormData = {
  username: string;
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



export type FormFielTextareadProps<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};




export type ValidFieldNames =  | "email" | "password" | "confirmPassword" | "username";
