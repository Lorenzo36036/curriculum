/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { FormFieldProps } from "@/app/interfaces/types";
import { useEffect, useState } from "react";


const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
   const [errorData, setErrorData] = useState("");

  useEffect(() => {
    if (error?.message) {
      setErrorData(error.message);
    }
  }, [error?.message]);
  
  return (
    <div>
    <input
      id={id}
      className=" bg-gray-50 border border-gray-300 focus:outline-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      />
    <span
      className={`ease-in-out absolute duration-300 transition-all  text-red-600
        
        ${error 
        ? "opacity-100 translate-y-0 visible" 
        : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }
        
        `}
        >
      {errorData}
    </span>
  </div>
    )
    ;
  }
export default FormField;
