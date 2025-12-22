/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { FormFielTextareadProps } from "@/app/interfaces/types";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

const FormFieldTextarea = <T extends FieldValues>({
  id,
  name, 
  placeholder,
  register,
  error,
  valueAsNumber
}: FormFielTextareadProps<T>) => {
  const [errorData, setErrorData] = useState("");

  useEffect(() => {
    if (error?.message) {
      setErrorData(error.message);
    }
  }, [error?.message]);

  return (
    <div>
      <textarea
        id={id}
        rows={6}
        className="block w-full px-5 py-4 border-gray-400  rounded-lg shadow-sm placeholder-gray-300 focus:outline-blue-500 focus:border-blue-500 sm:text-base border resize-none"
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      <span
        className={`ease-in-out absolute duration-300 transition-all  text-red-600
        
        ${
          error
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }
        
        `}
      >
        {errorData}
      </span>
    </div>
  );
};
export default FormFieldTextarea;
